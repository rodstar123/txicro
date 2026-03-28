import { Container, GoldDivider } from '@/components/ui';

interface StrategicPositionProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    title: 'At the Center of the Americas',
    paragraphs: [
      'McAllen\u2019s geographic position is its most powerful asset. Situated on the US-Mexico border at the southern tip of Texas, the city sits at the convergence of multiple trade corridors that connect Latin America to the heart of the United States.',
      'To the south, the Reynosa-McAllen gateway provides direct access to Monterrey \u2014 Latin America\u2019s most important industrial city and home to major manufacturing operations for automotive, aerospace, appliance, and electronics companies. The drive takes two and a half hours, and the economic relationship between the two cities has been deepening for decades.',
      'To the north, McAllen connects to San Antonio, Austin, Houston, and Dallas via major highways \u2014 placing it within a day\u2019s drive of the largest concentration of economic activity in the southern United States. Goods that cross the border in McAllen can reach Port Houston, the largest import-export port in the country, within five hours.',
      'To the east and west, the Rio Grande Valley stretches along the Texas-Mexico border with a network of international bridges, free trade zones, and logistics infrastructure that handles billions of dollars in cross-border commerce annually.',
      'This is not a border town on the periphery. This is a gateway at the center of the hemisphere\u2019s most important trade relationship.',
    ],
  },
  es: {
    title: 'En el Centro de las Am\u00e9ricas',
    paragraphs: [
      'La posici\u00f3n geogr\u00e1fica de McAllen es su activo m\u00e1s poderoso. Situada en la frontera entre Estados Unidos y M\u00e9xico, en el extremo sur de Texas, la ciudad se encuentra en la convergencia de m\u00faltiples corredores comerciales que conectan a Am\u00e9rica Latina con el coraz\u00f3n de los Estados Unidos.',
      'Hacia el sur, el corredor Reynosa-McAllen proporciona acceso directo a Monterrey \u2014 la ciudad industrial m\u00e1s importante de Am\u00e9rica Latina y hogar de operaciones manufactureras importantes para empresas automotrices, aeroespaciales, de electrodom\u00e9sticos y electr\u00f3nica. El viaje toma dos horas y media, y la relaci\u00f3n econ\u00f3mica entre ambas ciudades se ha profundizado durante d\u00e9cadas.',
      'Hacia el norte, McAllen se conecta con San Antonio, Austin, Houston y Dallas a trav\u00e9s de carreteras principales \u2014 ubic\u00e1ndola a un d\u00eda de viaje de la mayor concentraci\u00f3n de actividad econ\u00f3mica del sur de los Estados Unidos. Las mercanc\u00edas que cruzan la frontera en McAllen pueden llegar al Puerto de Houston, el puerto de importaci\u00f3n-exportaci\u00f3n m\u00e1s grande del pa\u00eds, en cinco horas.',
      'Hacia el este y el oeste, el Valle del R\u00edo Grande se extiende a lo largo de la frontera Texas-M\u00e9xico con una red de puentes internacionales, zonas de libre comercio e infraestructura log\u00edstica que maneja miles de millones de d\u00f3lares en comercio transfronterizo anualmente.',
      'Esta no es una ciudad fronteriza en la periferia. Es un portal en el centro de la relaci\u00f3n comercial m\u00e1s importante del hemisferio.',
    ],
  },
};

export default function StrategicPosition({ locale }: StrategicPositionProps) {
  const t = content[locale];

  return (
    <section className="bg-lightgray py-section-mobile sm:py-section">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy text-center mb-4">
          {t.title}
        </h2>
        <GoldDivider width="md" className="mb-10" />
        <div className="max-w-3xl mx-auto space-y-6">
          {t.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`font-body text-slate leading-relaxed text-base sm:text-lg ${
                i === t.paragraphs.length - 1
                  ? 'font-semibold text-navy'
                  : ''
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
