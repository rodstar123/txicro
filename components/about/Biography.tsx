import { Container, GoldDivider } from '@/components/ui';

interface BiographyProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    sections: [
      {
        heading: 'Born in McAllen. Built for the Border.',
        paragraphs: [
          'Noe Rodriguez was born and raised in McAllen, Texas \u2014 a city that sits at the intersection of two nations, two cultures, and two economies. For his entire life, he has called the Rio Grande Valley home. Not as a visitor or a transplant, but as a native son who has watched this region evolve from a quiet agricultural corridor into one of the most strategically important cross-border commerce zones in the Western Hemisphere.',
          'That evolution did not happen by accident, and Noe was not a spectator. He has spent his career building businesses that operate across borders \u2014 navigating the regulatory frameworks, cultural nuances, and operational realities that define US-Latin America commerce. He understands the landscape not from a textbook, but from decades of doing business in it.',
        ],
      },
      {
        heading: 'The Entrepreneur\u2019s Path',
        paragraphs: [
          'Noe is the General Manager and IT Architect of Pioneer Zeal Enterprises LLC, a holding company he built to house a portfolio of businesses spanning professional services, digital media, commerce, and publishing. Through Pioneer Zeal and its subsidiaries, he has developed expertise in bookkeeping and financial operations for small businesses across the Rio Grande Valley, digital agency services and web development, retail commerce and supply chain management, and cross-border business advisory.',
          'This breadth of experience is not incidental \u2014 it is the foundation of TXICRO\u2019s advisory practice. When Noe advises an international organization on entering the Texas market, he speaks from the perspective of someone who has incorporated entities, managed payroll, built digital infrastructure, negotiated with vendors, and served clients on both sides of the border. His counsel is grounded in practice, not theory.',
        ],
      },
      {
        heading: 'Why TXICRO Exists',
        paragraphs: [
          'In early 2026, Noe made a decision that had been forming for years: to formalize his cross-border expertise into a dedicated advisory office. The result is TXICRO \u2014 the Texas International Commerce & Relations Office.',
          'The motivation was straightforward. International organizations considering Texas \u2014 particularly the Rio Grande Valley \u2014 often lack access to independent, conflict-free advisory support. The existing landscape is dominated by brokers, agents, and intermediaries whose compensation depends on closing transactions. This creates a fundamental misalignment: the advisor benefits when the deal closes, regardless of whether the deal is right for the client.',
          'TXICRO operates differently. As a fee-based advisory office, TXICRO has no financial incentive tied to any transaction, referral, or outcome. The only incentive is to provide the clearest, most honest assessment possible \u2014 because that is what the client is paying for. This independence is not a marketing distinction. It is the structural foundation of every engagement.',
        ],
      },
      {
        heading: 'A Vision for McAllen',
        paragraphs: [
          'Noe\u2019s ambition extends beyond individual advisory engagements. He believes that McAllen and the Rio Grande Valley are underrecognized on the international stage \u2014 that the region\u2019s strategic advantages, bilingual workforce, infrastructure, and proximity to Monterrey and Latin America represent an extraordinary opportunity that has not yet been fully communicated to the world.',
          'TXICRO is, in part, an answer to that gap. Through advisory work, published research, trade event participation, and institutional relationship building, Noe is actively working to position McAllen as a premier gateway for international commerce in the United States. Every assessment conducted, every delegation hosted, and every article published contributes to a larger goal: making the Rio Grande Valley visible to the global business community in a way that matches its actual potential.',
        ],
      },
      {
        heading: 'Deep Roots, Long View',
        paragraphs: [
          'What distinguishes Noe from consultants who parachute into border markets is permanence. He is not passing through. His family, his businesses, his community, and his reputation are all here \u2014 in McAllen, in the Valley, on the border.',
          'When he advises a foreign investor on where to locate a warehouse, he knows the neighborhoods. When he maps stakeholders for a trade delegation, he knows the people. When he evaluates a market entry strategy, he knows which assumptions hold and which ones collapse under local reality.',
          'This is not expertise that can be acquired from a distance. It is the product of a lifetime of living, working, and building in a place that most outside advisors only visit.',
        ],
      },
    ],
  },
  es: {
    sections: [
      {
        heading: 'Nacido en McAllen. Forjado en la Frontera.',
        paragraphs: [
          'Noe Rodriguez naci\u00f3 y creci\u00f3 en McAllen, Texas \u2014 una ciudad que se encuentra en la intersecci\u00f3n de dos naciones, dos culturas y dos econom\u00edas. Durante toda su vida, ha llamado hogar al Valle del R\u00edo Grande. No como visitante ni como reci\u00e9n llegado, sino como un hijo nativo que ha visto a esta regi\u00f3n evolucionar de un tranquilo corredor agr\u00edcola a una de las zonas de comercio transfronterizo m\u00e1s estrat\u00e9gicamente importantes del hemisferio occidental.',
          'Esa evoluci\u00f3n no sucedi\u00f3 por casualidad, y Noe no fue un espectador. Ha dedicado su carrera a construir negocios que operan a trav\u00e9s de fronteras \u2014 navegando los marcos regulatorios, los matices culturales y las realidades operacionales que definen el comercio entre Estados Unidos y Am\u00e9rica Latina. Entiende el panorama no desde un libro de texto, sino desde d\u00e9cadas de hacer negocios en \u00e9l.',
        ],
      },
      {
        heading: 'El Camino del Empresario',
        paragraphs: [
          'Noe es el Director General y Arquitecto de TI de Pioneer Zeal Enterprises LLC, una empresa holding que construy\u00f3 para albergar un portafolio de negocios que abarca servicios profesionales, medios digitales, comercio y publicaciones. A trav\u00e9s de Pioneer Zeal y sus subsidiarias, ha desarrollado experiencia en contabilidad y operaciones financieras para peque\u00f1as empresas en todo el Valle del R\u00edo Grande, servicios de agencia digital y desarrollo web, comercio minorista y gesti\u00f3n de cadena de suministro, y asesor\u00eda empresarial transfronteriza.',
          'Esta amplitud de experiencia no es incidental \u2014 es el fundamento de la pr\u00e1ctica de asesor\u00eda de TXICRO. Cuando Noe asesora a una organizaci\u00f3n internacional sobre c\u00f3mo ingresar al mercado texano, habla desde la perspectiva de alguien que ha constituido entidades, administrado n\u00f3minas, construido infraestructura digital, negociado con proveedores y atendido clientes en ambos lados de la frontera. Su consejo est\u00e1 fundamentado en la pr\u00e1ctica, no en la teor\u00eda.',
        ],
      },
      {
        heading: 'Por Qu\u00e9 Existe TXICRO',
        paragraphs: [
          'A principios de 2026, Noe tom\u00f3 una decisi\u00f3n que se ven\u00eda formando desde hace a\u00f1os: formalizar su experiencia transfronteriza en una oficina de asesor\u00eda dedicada. El resultado es TXICRO \u2014 Texas International Commerce & Relations Office.',
          'La motivaci\u00f3n fue directa. Las organizaciones internacionales que consideran Texas \u2014 particularmente el Valle del R\u00edo Grande \u2014 a menudo carecen de acceso a asesor\u00eda independiente y libre de conflictos. El panorama existente est\u00e1 dominado por corredores, agentes e intermediarios cuya compensaci\u00f3n depende de cerrar transacciones. Esto crea una desalineaci\u00f3n fundamental: el asesor se beneficia cuando el trato se cierra, independientemente de si el trato es correcto para el cliente.',
          'TXICRO opera de manera diferente. Como oficina de asesor\u00eda basada en honorarios, TXICRO no tiene ning\u00fan incentivo financiero vinculado a ninguna transacci\u00f3n, referencia o resultado. El \u00fanico incentivo es proporcionar la evaluaci\u00f3n m\u00e1s clara y honesta posible \u2014 porque eso es exactamente lo que el cliente est\u00e1 pagando. Esta independencia no es una distinci\u00f3n de marketing. Es el fundamento estructural de cada compromiso.',
        ],
      },
      {
        heading: 'Una Visi\u00f3n para McAllen',
        paragraphs: [
          'La ambici\u00f3n de Noe va m\u00e1s all\u00e1 de los compromisos individuales de asesor\u00eda. Cree que McAllen y el Valle del R\u00edo Grande est\u00e1n subvalorados en el escenario internacional \u2014 que las ventajas estrat\u00e9gicas de la regi\u00f3n, su fuerza laboral biling\u00fce, su infraestructura y su proximidad a Monterrey y Am\u00e9rica Latina representan una oportunidad extraordinaria que a\u00fan no ha sido completamente comunicada al mundo.',
          'TXICRO es, en parte, una respuesta a esa brecha. A trav\u00e9s del trabajo de asesor\u00eda, investigaci\u00f3n publicada, participaci\u00f3n en eventos comerciales y construcci\u00f3n de relaciones institucionales, Noe trabaja activamente para posicionar a McAllen como un portal de primer nivel para el comercio internacional en los Estados Unidos. Cada evaluaci\u00f3n realizada, cada delegaci\u00f3n recibida y cada art\u00edculo publicado contribuye a un objetivo mayor: hacer visible al Valle del R\u00edo Grande ante la comunidad empresarial global de una manera que corresponda con su potencial real.',
        ],
      },
      {
        heading: 'Ra\u00edces Profundas, Visi\u00f3n a Largo Plazo',
        paragraphs: [
          'Lo que distingue a Noe de los consultores que aterrizan en los mercados fronterizos es la permanencia. No est\u00e1 de paso. Su familia, sus negocios, su comunidad y su reputaci\u00f3n est\u00e1n todos aqu\u00ed \u2014 en McAllen, en el Valle, en la frontera.',
          'Cuando asesora a un inversionista extranjero sobre d\u00f3nde ubicar un almac\u00e9n, conoce los vecindarios. Cuando mapea actores clave para una delegaci\u00f3n comercial, conoce a las personas. Cuando eval\u00faa una estrategia de entrada al mercado, sabe cu\u00e1les supuestos se sostienen y cu\u00e1les se desmoronan ante la realidad local.',
          'Esta no es una experiencia que pueda adquirirse a distancia. Es el producto de toda una vida de vivir, trabajar y construir en un lugar que la mayor\u00eda de los asesores externos solo visitan.',
        ],
      },
    ],
  },
};

export default function Biography({ locale }: BiographyProps) {
  const { sections } = content[locale];

  return (
    <section className="bg-white py-section-mobile sm:py-section">
      <Container className="max-w-3xl">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {sectionIndex > 0 && <GoldDivider width="sm" className="my-8" />}
            <h2
              className={`font-heading text-2xl sm:text-3xl text-navy font-semibold mb-4 ${
                sectionIndex === 0 ? 'mt-0' : 'mt-12'
              }`}
            >
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="text-slate text-base sm:text-lg leading-relaxed font-body mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </Container>
    </section>
  );
}
