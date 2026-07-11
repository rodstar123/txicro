import { Metadata } from "next";

const BASE_URL = "https://txicro.com";

interface PageMeta {
  title: string;
  description: string;
  path: string; // e.g., '/about' or '/es/about'
  locale: "en" | "es";
}

export function generatePageMetadata({
  title,
  description,
  path,
  locale,
}: PageMeta): Metadata {
  const enPath = path.replace(/^\/es/, "") || "/";
  const esPath = enPath === "/" ? "/es" : `/es${enPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}${path}`,
      languages: {
        en: `${BASE_URL}${enPath}`,
        es: `${BASE_URL}${esPath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      siteName: "TXICRO",
      locale: locale === "es" ? "es_MX" : "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/txicro-logo.png`,
          width: 512,
          height: 512,
          alt: "TXICRO",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
