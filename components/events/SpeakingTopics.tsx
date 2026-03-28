import { Container, GoldDivider } from '@/components/ui';

interface SpeakingTopicsProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    title: 'Invite TXICRO to Your Event',
    intro: 'Noe Rodriguez is available for speaking engagements, panel participation, and trade mission coordination. His presentations draw on decades of experience in the Rio Grande Valley and a practitioner\u2019s understanding of cross-border commerce.',
    topicsLabel: 'Topics Noe speaks on:',
    topics: [
      {
        title: 'McAllen as an International Commerce Gateway',
        description: 'Why the Rio Grande Valley is one of the most strategically important regions for US-Latin America trade, and what the future holds.',
      },
      {
        title: 'Navigating Cross-Border Market Entry',
        description: 'Practical insights for international organizations evaluating the Texas market \u2014 what to expect, what to avoid, and how to prepare.',
      },
      {
        title: 'The Fee-Based Advisory Model',
        description: 'Why independent, conflict-free advisory is essential in cross-border business, and how it protects international organizations from misaligned incentives.',
      },
      {
        title: 'Building Institutional Relationships in the US',
        description: 'How foreign organizations can engage US government agencies, chambers of commerce, and economic development organizations with professionalism and protocol awareness.',
      },
      {
        title: 'The Monterrey-McAllen-Houston Corridor',
        description: 'How the most important trade corridor in the Western Hemisphere works, and where the opportunities are for international companies.',
      },
    ],
  },
  es: {
    title: 'Invite a TXICRO a Su Evento',
    intro: 'Noe Rodriguez est\u00e1 disponible para conferencias, participaci\u00f3n en paneles y coordinaci\u00f3n de misiones comerciales. Sus presentaciones se basan en seis d\u00e9cadas de experiencia en el Valle del R\u00edo Grande y una comprensi\u00f3n pr\u00e1ctica del comercio transfronterizo.',
    topicsLabel: 'Temas en los que Noe presenta:',
    topics: [
      {
        title: 'McAllen como Portal de Comercio Internacional',
        description: 'Por qu\u00e9 el Valle del R\u00edo Grande es una de las regiones m\u00e1s estrat\u00e9gicamente importantes para el comercio entre EE.UU. y Am\u00e9rica Latina, y qu\u00e9 depara el futuro.',
      },
      {
        title: 'Navegando la Entrada al Mercado Transfronterizo',
        description: 'Perspectivas pr\u00e1cticas para organizaciones internacionales que eval\u00faan el mercado texano \u2014 qu\u00e9 esperar, qu\u00e9 evitar y c\u00f3mo prepararse.',
      },
      {
        title: 'El Modelo de Asesor\u00eda Basado en Honorarios',
        description: 'Por qu\u00e9 la asesor\u00eda independiente y libre de conflictos es esencial en los negocios transfronterizos.',
      },
      {
        title: 'Construyendo Relaciones Institucionales en EE.UU.',
        description: 'C\u00f3mo las organizaciones extranjeras pueden vincularse con agencias gubernamentales, c\u00e1maras de comercio y organizaciones de desarrollo econ\u00f3mico de EE.UU. con profesionalismo.',
      },
      {
        title: 'El Corredor Monterrey-McAllen-Houston',
        description: 'C\u00f3mo funciona el corredor comercial m\u00e1s importante del hemisferio occidental, y d\u00f3nde est\u00e1n las oportunidades.',
      },
    ],
  },
};

export default function SpeakingTopics({ locale }: SpeakingTopicsProps) {
  const t = content[locale];

  return (
    <section className="bg-lightgray py-section-mobile sm:py-section">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
          {t.title}
        </h2>
        <GoldDivider width="sm" className="mb-8 !mx-0" />

        <p className="font-body text-slate text-lg leading-relaxed mb-10 max-w-3xl">
          {t.intro}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.topics.map((topic, i) => (
            <div
              key={i}
              className="bg-white rounded-card p-6 border border-gray-100"
            >
              <h3 className="font-heading text-lg text-navy mb-3">
                {topic.title}
              </h3>
              <p className="font-body text-slate text-base leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
