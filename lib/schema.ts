export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  baseUrl: string = "https://txicro.com",
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Texas International Commerce & Relations Office",
    alternateName: "TXICRO",
    url: "https://txicro.com",
    logo: "https://txicro.com/images/txicro-logo.png",
    description:
      "Fee-based cross-border advisory for international companies, investors, and institutions entering Texas through the Rio Grande Valley.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "315 W Nolana Ave, Suite G-6",
      addressLocality: "McAllen",
      addressRegion: "TX",
      postalCode: "78504",
      addressCountry: "US",
    },
    email: "info@txicro.com",
    openingHours: "Mo-Fr 09:00-17:00",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Mexico" },
    ],
    founder: {
      "@type": "Person",
      name: "Noe Rodriguez",
      jobTitle: "Founder & Principal Advisor",
    },
  };
}

// LocalBusiness schema for home + contact pages
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://txicro.com/#localbusiness",
    name: "Texas International Commerce & Relations Office",
    alternateName: "TXICRO",
    url: "https://txicro.com",
    logo: "https://txicro.com/images/txicro-logo.png",
    image: "https://txicro.com/images/txicro-logo.png",
    description:
      "Fee-based cross-border advisory for international companies, investors, and institutions entering Texas through the Rio Grande Valley.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "315 W Nolana Ave, Suite G-6",
      addressLocality: "McAllen",
      addressRegion: "TX",
      postalCode: "78504",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.2034,
      longitude: -98.2402,
    },
    email: "info@txicro.com",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    founder: {
      "@type": "Person",
      name: "Noe Rodriguez",
    },
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Mexico" },
    ],
  };
}

// Service schema for service pages
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "ProfessionalService",
      name: "TXICRO",
      url: "https://txicro.com",
    },
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "Country", name: "Mexico" },
    ],
  };
}

// Event schema (for future events)
export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "McAllen",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "TXICRO",
      url: "https://txicro.com",
    },
  };
}

// WebSite schema with search metadata
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TXICRO",
    alternateName: "Texas International Commerce & Relations Office",
    url: "https://txicro.com",
    inLanguage: ["en", "es"],
  };
}
