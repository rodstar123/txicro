import { Container, GoldDivider } from '@/components/ui';

interface IndustrySectorsProps {
  locale: 'en' | 'es';
}

interface Sector {
  title: string;
  description: string;
}

const content: Record<'en' | 'es', { title: string; sectors: Sector[] }> = {
  en: {
    title: 'Key Industries in the McAllen Region',
    sectors: [
      {
        title: 'Manufacturing & Maquiladoras',
        description:
          'The twin-plant model that pairs US-side operations with Mexican manufacturing facilities has defined the border economy for decades. McAllen\u2019s proximity to Reynosa and Monterrey makes it the natural US-side hub for companies operating maquiladora facilities.',
      },
      {
        title: 'Logistics & Warehousing',
        description:
          'With four international bridges and direct highway access to Houston and San Antonio, the McAllen area is a growing logistics hub. Warehouse and distribution facilities are expanding to serve cross-border supply chains.',
      },
      {
        title: 'Commerce & Retail',
        description:
          'McAllen is one of the largest retail markets on the US-Mexico border, attracting shoppers and business buyers from both sides. The city\u2019s commercial infrastructure supports both domestic and cross-border retail operations.',
      },
      {
        title: 'Healthcare & Medical Tourism',
        description:
          'The Rio Grande Valley has a growing healthcare sector serving both local and cross-border patients. Medical facilities, specialist clinics, and dental tourism draw visitors from across northern Mexico.',
      },
      {
        title: 'Agriculture & Food Processing',
        description:
          'The RGV\u2019s agricultural heritage remains a significant economic driver. Citrus, vegetables, and specialty crops are produced locally, and the Pharr International Bridge is the number one produce crossing point in the United States.',
      },
      {
        title: 'Professional Services',
        description:
          'Accounting, legal, consulting, and financial services firms in McAllen serve a client base that spans both sides of the border. Bilingual professional services are in high demand.',
      },
    ],
  },
  es: {
    title: 'Industrias Clave en la Regi\u00f3n de McAllen',
    sectors: [
      {
        title: 'Manufactura y Maquiladoras',
        description:
          'El modelo de planta gemela que asocia operaciones en el lado estadounidense con instalaciones manufactureras mexicanas ha definido la econom\u00eda fronteriza durante d\u00e9cadas. La proximidad de McAllen a Reynosa y Monterrey la convierte en el centro natural del lado estadounidense.',
      },
      {
        title: 'Log\u00edstica y Almacenamiento',
        description:
          'Con cuatro puentes internacionales y acceso directo por carretera a Houston y San Antonio, el \u00e1rea de McAllen es un centro log\u00edstico en crecimiento.',
      },
      {
        title: 'Comercio y Retail',
        description:
          'McAllen es uno de los mercados minoristas m\u00e1s grandes en la frontera EE.UU.-M\u00e9xico, atrayendo compradores de ambos lados.',
      },
      {
        title: 'Salud y Turismo M\u00e9dico',
        description:
          'El Valle del R\u00edo Grande tiene un sector de salud en crecimiento que atiende a pacientes locales y transfronterizos.',
      },
      {
        title: 'Agricultura y Procesamiento de Alimentos',
        description:
          'La herencia agr\u00edcola del VRG sigue siendo un motor econ\u00f3mico significativo. El Puente Internacional de Pharr es el punto de cruce de productos agr\u00edcolas n\u00famero uno en los Estados Unidos.',
      },
      {
        title: 'Servicios Profesionales',
        description:
          'Firmas de contabilidad, legales, consultor\u00eda y servicios financieros en McAllen atienden una base de clientes que abarca ambos lados de la frontera.',
      },
    ],
  },
};

export default function IndustrySectors({ locale }: IndustrySectorsProps) {
  const t = content[locale];

  return (
    <section className="bg-lightgray py-section-mobile sm:py-section">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy text-center mb-4">
          {t.title}
        </h2>
        <GoldDivider width="md" className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.sectors.map((sector) => (
            <div
              key={sector.title}
              className="bg-white rounded-card p-6 border border-gray-100"
            >
              <h3 className="font-heading text-lg text-navy font-bold mb-3">
                {sector.title}
              </h3>
              <p className="font-body text-slate text-sm leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
