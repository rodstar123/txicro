import { Container, GoldDivider } from "@/components/ui";

interface AudienceSegmentsProps {
  locale: "en" | "es";
}

const content = {
  en: {
    sectionTitle: "Who We Serve",
    intro:
      "TXICRO serves a diverse range of international and domestic organizations. The common thread is a need for independent, conflict-free advisory support in navigating cross-border commerce in Texas.",
    segments: [
      {
        title: "International Companies",
        description:
          "From first-time market entrants to established operators expanding their Texas footprint. We work with manufacturers, logistics providers, retailers, professional service firms, and technology companies from across Latin America, Europe, and Asia.",
      },
      {
        title: "Foreign Investors",
        description:
          "Investment groups and family offices evaluating real estate, industrial, commercial, or mixed-use opportunities in the Rio Grande Valley and South Texas.",
      },
      {
        title: "Trade Missions & Delegations",
        description:
          "Government-organized and private delegations visiting the region for site selection, business development, or institutional relationship building. We provide end-to-end coordination.",
      },
      {
        title: "Institutions & Chambers",
        description:
          "Chambers of commerce, economic development corporations, trade associations, and academic institutions that need advisory support or coordination services for cross-border initiatives.",
      },
      {
        title: "Texas Entities Going Global",
        description:
          "Texas-based businesses expanding into Latin American markets. We help you understand the institutional landscape, identify partners, and navigate cultural and regulatory differences.",
      },
    ],
  },
  es: {
    sectionTitle: "A Qui\u00e9n Servimos",
    intro:
      "TXICRO sirve a una amplia gama de organizaciones internacionales y nacionales. El hilo com\u00fan es la necesidad de apoyo de asesor\u00eda independiente y libre de conflictos en la navegaci\u00f3n del comercio transfronterizo en Texas.",
    segments: [
      {
        title: "Empresas Internacionales",
        description:
          "Desde nuevos entrantes al mercado hasta operadores establecidos que expanden su presencia en Texas. Trabajamos con manufactureras, proveedores log\u00edsticos, minoristas, firmas de servicios profesionales y empresas de tecnolog\u00eda de Am\u00e9rica Latina, Europa y Asia.",
      },
      {
        title: "Inversionistas Extranjeros",
        description:
          "Grupos de inversi\u00f3n y oficinas familiares que eval\u00faan oportunidades inmobiliarias, industriales, comerciales o de uso mixto en el Valle del R\u00edo Grande y el sur de Texas.",
      },
      {
        title: "Misiones Comerciales y Delegaciones",
        description:
          "Delegaciones gubernamentales y privadas que visitan la regi\u00f3n para selecci\u00f3n de sitios, desarrollo de negocios o construcci\u00f3n de relaciones institucionales. Proporcionamos coordinaci\u00f3n integral.",
      },
      {
        title: "Instituciones y C\u00e1maras",
        description:
          "C\u00e1maras de comercio, corporaciones de desarrollo econ\u00f3mico, asociaciones comerciales e instituciones acad\u00e9micas que necesitan apoyo de asesor\u00eda o servicios de coordinaci\u00f3n para iniciativas transfronterizas.",
      },
      {
        title: "Empresas Texanas con Proyecci\u00f3n Global",
        description:
          "Empresas basadas en Texas que se expanden hacia mercados latinoamericanos. Le ayudamos a comprender el panorama institucional, identificar socios y navegar las diferencias culturales y regulatorias.",
      },
    ],
  },
};

export default function AudienceSegments({ locale }: AudienceSegmentsProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-navy">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-white font-bold text-center">
          {t.sectionTitle}
        </h2>
        <GoldDivider width="md" className="mt-4 mb-6" />
        <p className="font-body text-gray-300 text-base sm:text-lg max-w-3xl mx-auto text-center leading-relaxed mb-12">
          {t.intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.segments.map((segment, i) => (
            <div key={i} className="border-l-2 border-gold pl-4">
              <h3 className="text-white font-heading text-lg font-semibold">
                {segment.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed font-body">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
