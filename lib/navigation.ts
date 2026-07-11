export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NavData {
  main: NavItem[];
  services: NavItem[];
  whyMcallen: NavItem[];
}

export function getNavigation(locale: "en" | "es"): NavData {
  const prefix = locale === "es" ? "/es" : "";

  const services: NavItem[] = [
    {
      label: locale === "es" ? "Todos los Servicios" : "All Services",
      href: `${prefix}/services`,
    },
    {
      label: locale === "es" ? "Entrada al Mercado" : "Market Entry Advisory",
      href: `${prefix}/services/market-entry`,
    },
    {
      label: locale === "es" ? "Riesgo Transfronterizo" : "Cross-Border Risk",
      href: `${prefix}/services/cross-border-risk`,
    },
    {
      label: locale === "es" ? "Mapeo de Stakeholders" : "Stakeholder Mapping",
      href: `${prefix}/services/stakeholder-mapping`,
    },
    {
      label: locale === "es" ? "Relaciones Institucionales" : "Trade Relations",
      href: `${prefix}/services/trade-relations`,
    },
    {
      label: locale === "es" ? "Informes Estratégicos" : "Strategic Briefings",
      href: `${prefix}/services/strategic-briefings`,
    },
    {
      label: locale === "es" ? "Apoyo a Delegaciones" : "Delegation Support",
      href: `${prefix}/services/delegation-support`,
    },
  ];

  const whyMcallen: NavItem[] = [
    {
      label: locale === "es" ? "Por Qué McAllen" : "Why McAllen",
      href: `${prefix}/why-mcallen`,
    },
    {
      label: locale === "es" ? "Corredor Monterrey" : "Monterrey Corridor",
      href: `${prefix}/why-mcallen/monterrey`,
    },
    {
      label: locale === "es" ? "McAllen vs Laredo" : "McAllen vs Laredo",
      href: `${prefix}/why-mcallen/vs-laredo`,
    },
    {
      label: locale === "es" ? "Corredor Austin/SA" : "Austin/SA Corridor",
      href: `${prefix}/why-mcallen/austin-corridor`,
    },
    {
      label: locale === "es" ? "Corredor Houston" : "Houston Corridor",
      href: `${prefix}/why-mcallen/houston`,
    },
    {
      label: locale === "es" ? "Ciudades del RGV" : "RGV Cities",
      href: `${prefix}/why-mcallen/rgv-cities`,
    },
    {
      label: locale === "es" ? "Corredor CDMX" : "Mexico City Corridor",
      href: `${prefix}/why-mcallen/mexico-city`,
    },
  ];

  const main: NavItem[] = [
    { label: locale === "es" ? "Inicio" : "Home", href: `${prefix}/` },
    { label: locale === "es" ? "Nosotros" : "About", href: `${prefix}/about` },
    {
      label: locale === "es" ? "Servicios" : "Services",
      href: `${prefix}/services`,
      children: services,
    },
    {
      label: locale === "es" ? "Por Qué McAllen" : "Why McAllen",
      href: `${prefix}/why-mcallen`,
      children: whyMcallen,
    },
    {
      label: locale === "es" ? "Casos de Estudio" : "Advisory Work",
      href: `${prefix}/advisory-work`,
    },
    {
      label: locale === "es" ? "Artículos" : "Insights",
      href: `${prefix}/insights`,
    },
    { label: locale === "es" ? "Eventos" : "Events", href: `${prefix}/events` },
    {
      label: locale === "es" ? "Contacto" : "Contact",
      href: `${prefix}/contact`,
    },
  ];

  return { main, services, whyMcallen };
}
