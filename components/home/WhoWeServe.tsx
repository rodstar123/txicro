import { Container, GoldDivider } from "@/components/ui";

interface WhoWeServeProps {
  locale: "en" | "es";
}

const content = {
  en: {
    sectionTitle: "Who We Serve",
    segments: [
      {
        title: "International Companies Entering Texas",
        description:
          "Organizations from Latin America, Europe, and Asia exploring the US market through Texas — whether establishing a first presence or expanding existing operations.",
      },
      {
        title: "Foreign Investors & Capital Groups",
        description:
          "Investment groups evaluating opportunities in real estate, manufacturing, logistics, or commercial ventures in the Rio Grande Valley and South Texas.",
      },
      {
        title: "Trade Missions & Delegations",
        description:
          "Government-sponsored and private trade delegations visiting the region for business development, site selection, or institutional relationship building.",
      },
      {
        title: "Institutions, Chambers & Organizations",
        description:
          "Chambers of commerce, economic development corporations, trade associations, and institutional partners seeking coordination and advisory support.",
      },
      {
        title: "Texas Entities Going Global",
        description:
          "Texas-based businesses looking to expand into Latin American markets, establish cross-border operations, or build international partnerships.",
      },
    ],
  },
  es: {
    sectionTitle: "A Quién Servimos",
    segments: [
      {
        title: "Empresas Internacionales que Ingresan a Texas",
        description:
          "Organizaciones de América Latina, Europa y Asia que exploran el mercado estadounidense a través de Texas — ya sea estableciendo una primera presencia o expandiendo operaciones existentes.",
      },
      {
        title: "Inversionistas Extranjeros y Grupos de Capital",
        description:
          "Grupos de inversión que evalúan oportunidades en bienes raíces, manufactura, logística o empresas comerciales en el Valle del Río Grande y el sur de Texas.",
      },
      {
        title: "Misiones Comerciales y Delegaciones",
        description:
          "Delegaciones comerciales gubernamentales y privadas que visitan la región para desarrollo de negocios, selección de sitios o construcción de relaciones institucionales.",
      },
      {
        title: "Instituciones, Cámaras y Organizaciones",
        description:
          "Cámaras de comercio, corporaciones de desarrollo económico, asociaciones comerciales y socios institucionales que buscan apoyo de coordinación y asesoría.",
      },
      {
        title: "Empresas Texanas con Proyección Global",
        description:
          "Empresas basadas en Texas que buscan expandirse hacia mercados latinoamericanos, establecer operaciones transfronterizas o construir alianzas internacionales.",
      },
    ],
  },
};

export default function WhoWeServe({ locale }: WhoWeServeProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-navy">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-white font-bold text-center">
          {t.sectionTitle}
        </h2>
        <GoldDivider width="md" className="mt-4 mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.segments.map((segment, i) => (
            <div
              key={i}
              className={`border-l-2 border-gold pl-4${
                /* Center the last two cards on lg when there are 5 items */
                i >= 3 ? " sm:col-span-1 lg:col-start-auto" : ""
              }`}
            >
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
