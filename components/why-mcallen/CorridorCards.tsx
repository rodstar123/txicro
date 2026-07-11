import Link from "next/link";
import { Container, GoldDivider } from "@/components/ui";

interface CorridorCardsProps {
  locale: "en" | "es";
}

interface CorridorCard {
  title: string;
  description: string;
  linkText: string;
  slug: string;
}

const content: Record<
  "en" | "es",
  { title: string; subtitle: string; cards: CorridorCard[] }
> = {
  en: {
    title: "Explore the Trade Corridors",
    subtitle:
      "McAllen connects to the most important commercial centers in Texas and Mexico. Explore each corridor to understand the opportunities.",
    cards: [
      {
        title: "McAllen \u2194 Monterrey",
        description:
          "The industrial heartbeat. 2.5 hours to Latin America\u2019s manufacturing capital, connected through the Reynosa gateway.",
        linkText: "Explore the Monterrey corridor",
        slug: "monterrey",
      },
      {
        title: "McAllen vs Laredo",
        description:
          "Two border gateways, different strengths. An honest comparison of what each city offers international businesses.",
        linkText: "Read the comparison",
        slug: "vs-laredo",
      },
      {
        title: "McAllen \u2194 Austin / San Antonio",
        description:
          "The Texas Triangle connection. Tech, defense, and the I-35 corridor linking McAllen to Central Texas.",
        linkText: "Explore the Austin corridor",
        slug: "austin-corridor",
      },
      {
        title: "McAllen \u2194 Houston",
        description:
          "Port access and energy. Five hours to the largest import-export port in the United States.",
        linkText: "Explore the Houston corridor",
        slug: "houston",
      },
      {
        title: "The RGV Cities",
        description:
          "McAllen, Edinburg, Pharr, Mission, Hidalgo \u2014 an economic region with distinct strengths.",
        linkText: "Explore the RGV cities",
        slug: "rgv-cities",
      },
      {
        title: "McAllen \u2194 Mexico City",
        description:
          "Where the decisions are made. Connecting McAllen to Latin America\u2019s corporate headquarters.",
        linkText: "Explore the Mexico City corridor",
        slug: "mexico-city",
      },
    ],
  },
  es: {
    title: "Explore los Corredores Comerciales",
    subtitle:
      "McAllen se conecta con los centros comerciales m\u00e1s importantes de Texas y M\u00e9xico. Explore cada corredor para comprender las oportunidades.",
    cards: [
      {
        title: "McAllen \u2194 Monterrey",
        description:
          "El latido industrial. A 2.5 horas de la capital manufacturera de Am\u00e9rica Latina, conectada a trav\u00e9s del corredor de Reynosa.",
        linkText: "Explorar el corredor de Monterrey",
        slug: "monterrey",
      },
      {
        title: "McAllen vs Laredo",
        description:
          "Dos portales fronterizos, diferentes fortalezas. Una comparaci\u00f3n honesta de lo que cada ciudad ofrece a empresas internacionales.",
        linkText: "Leer la comparaci\u00f3n",
        slug: "vs-laredo",
      },
      {
        title: "McAllen \u2194 Austin / San Antonio",
        description:
          "La conexi\u00f3n del Tri\u00e1ngulo de Texas. Tecnolog\u00eda, defensa y el corredor I-35 que conecta McAllen con el centro de Texas.",
        linkText: "Explorar el corredor de Austin",
        slug: "austin-corridor",
      },
      {
        title: "McAllen \u2194 Houston",
        description:
          "Acceso portuario y energ\u00eda. Cinco horas hasta el puerto de importaci\u00f3n-exportaci\u00f3n m\u00e1s grande de los Estados Unidos.",
        linkText: "Explorar el corredor de Houston",
        slug: "houston",
      },
      {
        title: "Las Ciudades del VRG",
        description:
          "McAllen, Edinburg, Pharr, Mission, Hidalgo \u2014 una regi\u00f3n econ\u00f3mica con fortalezas distintas.",
        linkText: "Explorar las ciudades del VRG",
        slug: "rgv-cities",
      },
      {
        title: "McAllen \u2194 Ciudad de M\u00e9xico",
        description:
          "Donde se toman las decisiones. Conectando McAllen con las sedes corporativas de Am\u00e9rica Latina.",
        linkText: "Explorar el corredor de Ciudad de M\u00e9xico",
        slug: "mexico-city",
      },
    ],
  },
};

export default function CorridorCards({ locale }: CorridorCardsProps) {
  const t = content[locale];
  const basePath = locale === "es" ? "/es/why-mcallen" : "/why-mcallen";

  return (
    <section className="bg-white py-section-mobile sm:py-section">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy text-center mb-4">
          {t.title}
        </h2>
        <GoldDivider width="md" className="mb-4" />
        <p className="font-body text-slate text-base sm:text-lg max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {t.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card) => (
            <Link
              key={card.slug}
              href={`${basePath}/${card.slug}`}
              className="group block rounded-card border border-gray-200 p-6 transition-all duration-200 hover:border-gold hover:shadow-md"
            >
              <h3 className="font-heading text-lg text-navy font-bold mb-2 group-hover:text-gold transition-colors duration-200">
                {card.title}
              </h3>
              <p className="font-body text-slate text-sm leading-relaxed mb-4">
                {card.description}
              </p>
              <span className="inline-flex items-center text-gold text-sm font-semibold font-body group-hover:translate-x-1 transition-transform duration-200">
                {card.linkText}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
