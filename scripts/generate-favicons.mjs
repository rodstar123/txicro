import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "public", "images", "txicro-logo.png");
const appDir = join(root, "app");
const publicDir = join(root, "public");

// Brand navy — hsl(220 60% 18%). Matches theme_color / manifest background_color.
const NAVY = { r: 0x12, g: 0x25, b: 0x49, alpha: 1 };

// The compass artwork sits on a navy vignette with a ~9% dead margin. Crop to the
// artwork and re-seat it on flat navy with a 6% margin so it stays legible at 16px.
const PADDING = 0.06;
const LUMA_THRESHOLD = 90; // gold/silver compass vs. the dark navy field

async function compassBounds() {
  const { data, info } = await sharp(src)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const luma =
        0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      if (luma > LUMA_THRESHOLD) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return {
    left: minX,
    top: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
}

/** Square navy master with the compass filling all but a 6% margin. */
async function buildMaster() {
  const { width, height } = await sharp(src).metadata();
  const box = await compassBounds();

  const side = Math.round(
    Math.max(box.width, box.height) / (1 - PADDING * 2),
  );
  const cx = box.left + box.width / 2;
  const cy = box.top + box.height / 2;

  // Prefer a straight window out of the source so the navy vignette stays
  // continuous — compositing a crop onto flat navy leaves a visible seam.
  if (side <= width && side <= height) {
    const clamp = (v, max) => Math.max(0, Math.min(Math.round(v), max - side));
    return sharp(src)
      .extract({
        left: clamp(cx - side / 2, width),
        top: clamp(cy - side / 2, height),
        width: side,
        height: side,
      })
      .png()
      .toBuffer();
  }

  // Compass is too close to the edge to window out — seat it on flat navy.
  const art = await sharp(src).extract(box).png().toBuffer();
  return sharp({
    create: { width: side, height: side, channels: 4, background: NAVY },
  })
    .composite([{ input: art, gravity: "center" }])
    .png()
    .toBuffer();
}

const png = (master, size) =>
  sharp(master)
    .resize(size, size, { fit: "contain", background: NAVY })
    .png()
    .toBuffer();

/**
 * Multi-size .ico with 32-bit BGRA DIB entries (not PNG-in-ICO) — the classic
 * container format every crawler and legacy browser can parse.
 */
function encodeIco(images) {
  const HEADER = 6;
  const ENTRY = 16;

  const dibs = images.map(({ size, raw }) => {
    const rowXor = size * 4;
    const rowAnd = Math.ceil(size / 32) * 4; // 1bpp mask, rows padded to 4 bytes
    const xor = Buffer.alloc(rowXor * size);
    const and = Buffer.alloc(rowAnd * size); // all-zero = fully opaque

    // DIB scanlines are bottom-up and BGRA.
    for (let y = 0; y < size; y++) {
      const srcRow = (size - 1 - y) * size * 4;
      for (let x = 0; x < size; x++) {
        const s = srcRow + x * 4;
        const d = y * rowXor + x * 4;
        xor[d] = raw[s + 2];
        xor[d + 1] = raw[s + 1];
        xor[d + 2] = raw[s];
        xor[d + 3] = raw[s + 3];
      }
    }

    const info = Buffer.alloc(40);
    info.writeUInt32LE(40, 0); // biSize
    info.writeInt32LE(size, 4); // biWidth
    info.writeInt32LE(size * 2, 8); // biHeight — XOR + AND stacked
    info.writeUInt16LE(1, 12); // biPlanes
    info.writeUInt16LE(32, 14); // biBitCount
    info.writeUInt32LE(0, 16); // BI_RGB
    info.writeUInt32LE(xor.length + and.length, 20); // biSizeImage

    return { size, data: Buffer.concat([info, xor, and]) };
  });

  const dir = Buffer.alloc(HEADER);
  dir.writeUInt16LE(0, 0); // reserved
  dir.writeUInt16LE(1, 2); // type: icon
  dir.writeUInt16LE(dibs.length, 4);

  let offset = HEADER + ENTRY * dibs.length;
  const entries = dibs.map(({ size, data }) => {
    const e = Buffer.alloc(ENTRY);
    e.writeUInt8(size, 0);
    e.writeUInt8(size, 1);
    e.writeUInt8(0, 2); // palette entries
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });

  return Buffer.concat([dir, ...entries, ...dibs.map((d) => d.data)]);
}

async function generate() {
  const master = await buildMaster();
  const { width, height } = await sharp(master).metadata();
  console.log(`master ${width}x${height} on #122549`);

  // Next.js App Router file conventions — these auto-emit the <link rel="icon"> tags.
  writeFileSync(join(appDir, "icon.png"), await png(master, 512));
  console.log("✓ app/icon.png (512x512)");

  writeFileSync(join(appDir, "apple-icon.png"), await png(master, 180));
  console.log("✓ app/apple-icon.png (180x180)");

  // Classic /favicon.ico — crawlers still request it directly. 48px is Google's floor.
  const raws = await Promise.all(
    [16, 32, 48].map(async (size) => ({
      size,
      raw: await sharp(master)
        .resize(size, size, { fit: "contain", background: NAVY })
        .ensureAlpha()
        .raw()
        .toBuffer(),
    })),
  );
  writeFileSync(join(publicDir, "favicon.ico"), encodeIco(raws));
  console.log("✓ public/favicon.ico (16, 32, 48)");

  // PWA manifest icons.
  writeFileSync(join(publicDir, "icon-192.png"), await png(master, 192));
  console.log("✓ public/icon-192.png (192x192)");

  writeFileSync(join(publicDir, "icon-512.png"), await png(master, 512));
  console.log("✓ public/icon-512.png (512x512)");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
