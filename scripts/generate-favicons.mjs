import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'public', 'images', 'txicro-logo.png');
const appDir = join(root, 'app');
const publicDir = join(root, 'public');

async function generate() {
  // favicon.ico (32x32 PNG renamed — browsers accept PNG as .ico)
  await sharp(src).resize(32, 32).png().toFile(join(appDir, 'favicon.ico'));
  console.log('✓ favicon.ico (32x32)');

  // icon.png (32x32 for browsers)
  await sharp(src).resize(32, 32).png().toFile(join(appDir, 'icon.png'));
  console.log('✓ icon.png (32x32)');

  // apple-icon.png (180x180)
  await sharp(src).resize(180, 180).png().toFile(join(appDir, 'apple-icon.png'));
  console.log('✓ apple-icon.png (180x180)');

  // icon-192.png for web manifest
  await sharp(src).resize(192, 192).png().toFile(join(publicDir, 'icon-192.png'));
  console.log('✓ icon-192.png (192x192)');

  // icon-512.png for web manifest
  await sharp(src).resize(512, 512).png().toFile(join(publicDir, 'icon-512.png'));
  console.log('✓ icon-512.png (512x512)');

  console.log('\nAll favicons generated from txicro-logo.png');
}

generate().catch(console.error);
