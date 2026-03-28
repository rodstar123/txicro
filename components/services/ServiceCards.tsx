import Link from 'next/link';
import { Container } from '@/components/ui';

interface ServiceCardsProps {
  locale: 'en' | 'es';
}

/* Inline SVG icons for each service card */
function BriefcaseIcon() {
  return (
    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

const icons = [BriefcaseIcon, ShieldIcon, NetworkIcon, BuildingIcon, DocumentIcon, GlobeIcon];

const content = {
  en: {
    cards: [
      {
        title: 'International Market Entry Advisory',
        description:
          'For organizations evaluating whether, when, and how to enter the Texas and United States market. We assess your readiness, map the regulatory landscape, and deliver a written recommendation you can act on.',
        slug: 'market-entry',
      },
      {
        title: 'Cross-Border Strategy & Risk Assessment',
        description:
          'For organizations that need a clear-eyed view of commercial, regulatory, and operational risks before committing capital. We identify what can go wrong, how likely it is, and what to do about it.',
        slug: 'cross-border-risk',
      },
      {
        title: 'Partner & Stakeholder Mapping',
        description:
          'For organizations that need to know who matters \u2014 across public institutions, private sector partners, chambers of commerce, and economic development organizations. We map the landscape and sequence your engagement.',
        slug: 'stakeholder-mapping',
      },
      {
        title: 'Trade & Institutional Relations Guidance',
        description:
          'For organizations navigating institutional frameworks \u2014 government agencies, trade bodies, chambers, and regulatory entities. We guide you through protocol, boundaries, and appropriate engagement strategy.',
        slug: 'trade-relations',
      },
      {
        title: 'Strategic Briefings & Advisory Reports',
        description:
          'For leadership teams and institutional partners who need independent, written analysis they can rely on. Decision memos, board-ready briefings, and executive summaries built on objective research.',
        slug: 'strategic-briefings',
      },
      {
        title: 'Delegation & Trade Mission Support',
        description:
          'For visiting delegations and trade missions that need professional coordination on the ground. Agenda structuring, pre-meeting briefings, logistics, cultural protocol, and post-visit follow-up.',
        slug: 'delegation-support',
      },
    ],
    learnMore: 'Learn more',
    serviceBase: '/services',
  },
  es: {
    cards: [
      {
        title: 'Asesor\u00eda para Entrada al Mercado Internacional',
        description:
          'Para organizaciones que eval\u00faan si, cu\u00e1ndo y c\u00f3mo ingresar al mercado de Texas y Estados Unidos. Evaluamos su preparaci\u00f3n, mapeamos el panorama regulatorio y entregamos una recomendaci\u00f3n escrita sobre la cual puede actuar.',
        slug: 'market-entry',
      },
      {
        title: 'Estrategia Transfronteriza y Evaluaci\u00f3n de Riesgos',
        description:
          'Para organizaciones que necesitan una visi\u00f3n clara de los riesgos comerciales, regulatorios y operacionales antes de comprometer capital. Identificamos qu\u00e9 puede salir mal, qu\u00e9 tan probable es y qu\u00e9 hacer al respecto.',
        slug: 'cross-border-risk',
      },
      {
        title: 'Mapeo de Socios y Actores Clave',
        description:
          'Para organizaciones que necesitan saber qui\u00e9n importa \u2014 en instituciones p\u00fablicas, socios del sector privado, c\u00e1maras de comercio y organizaciones de desarrollo econ\u00f3mico. Mapeamos el panorama y secuenciamos su vinculaci\u00f3n.',
        slug: 'stakeholder-mapping',
      },
      {
        title: 'Relaciones Comerciales e Institucionales',
        description:
          'Para organizaciones que navegan marcos institucionales \u2014 agencias gubernamentales, organismos comerciales, c\u00e1maras y entidades reguladoras. Lo guiamos a trav\u00e9s del protocolo, los l\u00edmites y la estrategia de vinculaci\u00f3n apropiada.',
        slug: 'trade-relations',
      },
      {
        title: 'Informes Estrat\u00e9gicos y Reportes de Asesor\u00eda',
        description:
          'Para equipos de liderazgo y socios institucionales que necesitan an\u00e1lisis independiente y escrito en el que puedan confiar. Memor\u00e1ndums de decisi\u00f3n, informes para juntas directivas y res\u00famenes ejecutivos construidos sobre investigaci\u00f3n objetiva.',
        slug: 'strategic-briefings',
      },
      {
        title: 'Apoyo a Delegaciones y Misiones Comerciales',
        description:
          'Para delegaciones visitantes y misiones comerciales que necesitan coordinaci\u00f3n profesional en terreno. Estructuraci\u00f3n de agendas, preparaci\u00f3n previa a reuniones, log\u00edstica, protocolo cultural y seguimiento posterior.',
        slug: 'delegation-support',
      },
    ],
    learnMore: 'M\u00e1s informaci\u00f3n',
    serviceBase: '/es/services',
  },
};

export default function ServiceCards({ locale }: ServiceCardsProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-lightgray">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={card.slug}
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
                  className="inline-flex items-center text-gold text-sm font-semibold mt-4 hover:text-gold-dark transition-colors font-body"
                >
                  {t.learnMore}
                  <span className="ml-1" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
