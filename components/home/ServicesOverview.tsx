import Link from "next/link";
import { Container, GoldDivider } from "@/components/ui";

interface ServicesOverviewProps {
  locale: "en" | "es";
}

/* Inline SVG icons for each service card */
function BriefcaseIcon() {
  return (
    <svg
      className="w-8 h-8 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="w-8 h-8 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      className="w-8 h-8 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      className="w-8 h-8 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      className="w-8 h-8 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      className="w-8 h-8 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

const icons = [
  BriefcaseIcon,
  ShieldIcon,
  NetworkIcon,
  BuildingIcon,
  DocumentIcon,
  GlobeIcon,
];

const content = {
  en: {
    sectionTitle: "What We Do",
    sectionSubtitle:
      "Fee-based advisory, assessment, and coordination services for international market entry, cross-border strategy, and stakeholder engagement in Texas.",
    cards: [
      {
        title: "International Market Entry Advisory",
        description:
          "Entry options, timeline considerations, regulatory landscape, and decision criteria for organizations considering Texas as their gateway to the United States.",
        slug: "market-entry",
      },
      {
        title: "Cross-Border Strategy & Risk Assessment",
        description:
          "Structured risk analysis across commercial, regulatory, and operational factors — so you understand the landscape before committing capital or resources.",
        slug: "cross-border-risk",
      },
      {
        title: "Partner & Stakeholder Mapping",
        description:
          "Identifying and sequencing relationships across public institutions, private sector partners, industry associations, and regional economic development organizations.",
        slug: "stakeholder-mapping",
      },
      {
        title: "Trade & Institutional Relations Guidance",
        description:
          "Navigating institutional frameworks with appropriate boundaries — protocol-aware strategy for government, trade body, and chamber of commerce engagement.",
        slug: "trade-relations",
      },
      {
        title: "Strategic Briefings & Advisory Reports",
        description:
          "Independent written briefings for leadership and institutional partners — decision memos, board-ready documents, and executive summaries built on objective analysis.",
        slug: "strategic-briefings",
      },
      {
        title: "Delegation & Trade Mission Support",
        description:
          "Agenda structuring, pre-meeting briefings, logistics coordination, and post-visit follow-up for visiting delegations and trade missions to the Rio Grande Valley.",
        slug: "delegation-support",
      },
    ],
    learnMore: "Learn more",
    viewAll: "View all services and engagement options",
    servicesHref: "/services",
    serviceBase: "/services",
  },
  es: {
    sectionTitle: "Lo Que Hacemos",
    sectionSubtitle:
      "Servicios de asesoría, evaluación y coordinación basados en honorarios para entrada al mercado internacional, estrategia transfronteriza y vinculación con actores clave en Texas.",
    cards: [
      {
        title: "Asesoría para Entrada al Mercado Internacional",
        description:
          "Opciones de entrada, consideraciones de cronograma, panorama regulatorio y criterios de decisión para organizaciones que consideran a Texas como su puerta de entrada a los Estados Unidos.",
        slug: "market-entry",
      },
      {
        title: "Estrategia Transfronteriza y Evaluación de Riesgos",
        description:
          "Análisis estructurado de riesgos comerciales, regulatorios y operacionales — para que comprenda el panorama antes de comprometer capital o recursos.",
        slug: "cross-border-risk",
      },
      {
        title: "Mapeo de Socios y Actores Clave",
        description:
          "Identificación y secuenciación de relaciones con instituciones públicas, socios del sector privado, asociaciones industriales y organizaciones de desarrollo económico regional.",
        slug: "stakeholder-mapping",
      },
      {
        title: "Relaciones Comerciales e Institucionales",
        description:
          "Navegación de marcos institucionales con límites apropiados — estrategia consciente del protocolo para la vinculación con gobierno, organismos comerciales y cámaras de comercio.",
        slug: "trade-relations",
      },
      {
        title: "Informes Estratégicos y Reportes de Asesoría",
        description:
          "Informes escritos independientes para liderazgo y socios institucionales — memorándums de decisión, documentos para juntas directivas y resúmenes ejecutivos basados en análisis objetivo.",
        slug: "strategic-briefings",
      },
      {
        title: "Apoyo a Delegaciones y Misiones Comerciales",
        description:
          "Estructuración de agendas, preparación previa a reuniones, coordinación logística y seguimiento posterior para delegaciones visitantes y misiones comerciales al Valle del Río Grande.",
        slug: "delegation-support",
      },
    ],
    learnMore: "Más información",
    viewAll: "Ver todos los servicios y opciones de contratación",
    servicesHref: "/es/services",
    serviceBase: "/es/services",
  },
};

export default function ServicesOverview({ locale }: ServicesOverviewProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold">
            {t.sectionTitle}
          </h2>
          <p className="font-body text-slate text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            {t.sectionSubtitle}
          </p>
          <GoldDivider width="md" className="mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-card p-6 hover:border-gold hover:shadow-md transition-all duration-200"
              >
                <Icon />
                <h3 className="font-heading text-lg font-semibold text-navy mt-3">
                  {card.title}
                </h3>
                <p className="text-slate text-sm mt-2 leading-relaxed font-body">
                  {card.description}
                </p>
                <Link
                  href={`${t.serviceBase}/${card.slug}`}
                  className="inline-flex items-center text-gold text-sm font-semibold mt-3 hover:text-gold-dark transition-colors font-body"
                >
                  {t.learnMore}
                  <span className="ml-1" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href={t.servicesHref}
            className="inline-flex items-center text-gold font-body font-semibold hover:text-gold-dark transition-colors"
          >
            {t.viewAll}
            <span className="ml-2" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
