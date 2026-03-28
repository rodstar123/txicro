import { Container, GoldDivider } from '@/components/ui';

interface WhyMcAllenSpecificProps {
  locale: 'en' | 'es';
}

interface Advantage {
  title: string;
  description: string;
}

const content: Record<'en' | 'es', { title: string; intro: string; advantages: Advantage[] }> = {
  en: {
    title: 'Why McAllen',
    intro:
      'Many Texas cities compete for international investment. Houston, Dallas, San Antonio, Austin, and El Paso all have legitimate claims to international business. So what makes McAllen different?',
    advantages: [
      {
        title: 'The Monterrey Connection',
        description:
          'No other Texas city has the same depth of economic integration with Monterrey. The McAllen-Reynosa-Monterrey corridor is not a theoretical trade route \u2014 it is a living, daily commercial artery with thousands of trucks, workers, and transactions crossing every day. Companies that need proximity to Mexican manufacturing operations find McAllen uniquely positioned.',
      },
      {
        title: 'Cost Advantage',
        description:
          'Office space, warehouse space, housing, and labor costs in McAllen are significantly lower than Houston, Dallas, or Austin \u2014 often by thirty to fifty percent. For companies expanding from Latin America, this cost structure allows faster scaling and lower breakeven points.',
      },
      {
        title: 'Bilingual Workforce',
        description:
          'McAllen\u2019s workforce is overwhelmingly bilingual in English and Spanish. This is not a niche advantage \u2014 it is a fundamental operational capability for any organization doing cross-border business. Bilingual customer service, bilingual documentation, bilingual management \u2014 it is the default here, not the exception.',
      },
      {
        title: 'Foreign Trade Zone #12',
        description:
          'McAllen\u2019s FTZ allows companies to defer, reduce, or eliminate customs duties on goods entering the zone. For manufacturers and distributors managing cross-border supply chains, this can translate to significant cost savings.',
      },
      {
        title: 'Quality of Life',
        description:
          'McAllen has been consistently ranked among the safest and most affordable cities in the United States. The warm climate, growing restaurant and cultural scene, and proximity to both US and Mexican metropolitan areas make it attractive for executives and their families \u2014 not just for business operations.',
      },
      {
        title: 'Growing Infrastructure',
        description:
          'McAllen-Miller International Airport continues to expand its route network. The McAllen Convention Center hosts major events and can support trade shows and delegation visits. The city\u2019s road infrastructure connects efficiently to the international bridges and to the highway system heading north.',
      },
    ],
  },
  es: {
    title: 'Por Qu\u00e9 McAllen',
    intro:
      'Muchas ciudades de Texas compiten por la inversi\u00f3n internacional. Houston, Dallas, San Antonio, Austin y El Paso tienen reclamos leg\u00edtimos al negocio internacional. Entonces, \u00bfqu\u00e9 hace diferente a McAllen?',
    advantages: [
      {
        title: 'La Conexi\u00f3n con Monterrey',
        description:
          'Ninguna otra ciudad de Texas tiene la misma profundidad de integraci\u00f3n econ\u00f3mica con Monterrey. El corredor McAllen-Reynosa-Monterrey no es una ruta comercial te\u00f3rica \u2014 es una arteria comercial viva y diaria con miles de camiones, trabajadores y transacciones cruzando cada d\u00eda.',
      },
      {
        title: 'Ventaja de Costos',
        description:
          'Los costos de espacio de oficina, almac\u00e9n, vivienda y mano de obra en McAllen son significativamente m\u00e1s bajos que Houston, Dallas o Austin \u2014 frecuentemente entre un treinta y cincuenta por ciento. Para empresas expandi\u00e9ndose desde Am\u00e9rica Latina, esta estructura de costos permite un escalamiento m\u00e1s r\u00e1pido y puntos de equilibrio m\u00e1s bajos.',
      },
      {
        title: 'Fuerza Laboral Biling\u00fce',
        description:
          'La fuerza laboral de McAllen es abrumadoramente biling\u00fce en ingl\u00e9s y espa\u00f1ol. Esta no es una ventaja de nicho \u2014 es una capacidad operacional fundamental para cualquier organizaci\u00f3n que hace negocios transfronterizos.',
      },
      {
        title: 'Zona de Comercio Exterior #12',
        description:
          'La ZCE de McAllen permite a las empresas diferir, reducir o eliminar aranceles aduaneros sobre mercanc\u00edas que ingresan a la zona. Para manufactureros y distribuidores que gestionan cadenas de suministro transfronterizas, esto puede traducirse en ahorros significativos de costos.',
      },
      {
        title: 'Calidad de Vida',
        description:
          'McAllen ha sido clasificada consistentemente entre las ciudades m\u00e1s seguras y accesibles de los Estados Unidos. El clima c\u00e1lido, la creciente escena gastron\u00f3mica y cultural, y la proximidad a \u00e1reas metropolitanas tanto estadounidenses como mexicanas la hacen atractiva para ejecutivos y sus familias.',
      },
      {
        title: 'Infraestructura en Crecimiento',
        description:
          'El Aeropuerto Internacional McAllen-Miller contin\u00faa expandiendo su red de rutas. El Centro de Convenciones de McAllen alberga eventos importantes. La infraestructura vial de la ciudad conecta eficientemente con los puentes internacionales y el sistema de carreteras hacia el norte.',
      },
    ],
  },
};

export default function WhyMcAllenSpecific({ locale }: WhyMcAllenSpecificProps) {
  const t = content[locale];

  return (
    <section className="bg-navy py-section-mobile sm:py-section">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-white text-center mb-4">
          {t.title}
        </h2>
        <GoldDivider width="md" className="mb-6" />
        <p className="font-body text-gray-300 text-base sm:text-lg max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {t.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.advantages.map((adv) => (
            <div key={adv.title}>
              <h3 className="font-heading text-xl text-gold font-bold mb-3">
                {adv.title}
              </h3>
              <p className="font-body text-gray-300 leading-relaxed text-base">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
