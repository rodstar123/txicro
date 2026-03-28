import { generatePageMetadata } from '@/lib/metadata';
import CorridorDetailPage from '@/components/why-mcallen/CorridorDetailPage';

export const metadata = generatePageMetadata({
  title: 'Corredor McAllen–Ciudad de México | TXICRO',
  description: 'La Ciudad de M\u00e9xico es donde se toman las decisiones de expansi\u00f3n. McAllen es donde se ejecutan. Conectando las sedes corporativas de CDMX con el portal fronterizo de Texas.',
  path: '/es/why-mcallen/mexico-city',
  locale: 'es',
});

export default function MexicoCityPageES() {
  return (
    <CorridorDetailPage
      locale="es"
      corridor={{
        title: 'McAllen \u2194 Ciudad de M\u00e9xico',
        subtitle: 'Las decisiones se toman en Polanco y Santa Fe. La ejecuci\u00f3n sucede en la frontera. McAllen conecta las sedes corporativas de Am\u00e9rica Latina con los Estados Unidos.',
        overview: `La Ciudad de M\u00e9xico \u2014 CDMX \u2014 es la capital pol\u00edtica, financiera y corporativa de Am\u00e9rica Latina. Con una poblaci\u00f3n metropolitana que supera los veinti\u00fan millones, es la ciudad m\u00e1s grande del hemisferio occidental y hogar de las sedes de pr\u00e1cticamente todas las grandes corporaciones mexicanas, as\u00ed como las oficinas latinoamericanas de la mayor\u00eda de las empresas multinacionales.\n\nMcAllen se conecta con la Ciudad de M\u00e9xico a trav\u00e9s de Monterrey, con un tiempo total de viaje de aproximadamente ocho a diez horas por carretera o dos a tres horas por avi\u00f3n con conexiones. La distancia es significativa, pero la relaci\u00f3n comercial es directa: los ejecutivos en CDMX toman las decisiones de expansi\u00f3n, y la frontera EE.UU.-M\u00e9xico es donde esas decisiones se convierten en realidad operacional.`,
        tradeRelationship: `La relaci\u00f3n McAllen-Ciudad de M\u00e9xico es estrat\u00e9gica m\u00e1s que log\u00edstica. Se trata de toma de decisiones, flujos de capital y estrategia corporativa. Las dimensiones clave incluyen toma de decisiones corporativas donde el CEO, CFO y miembros del consejo de empresas mexicanas que consideran expansi\u00f3n a EE.UU. t\u00edpicamente est\u00e1n basados en la Ciudad de M\u00e9xico. Su primera pregunta es d\u00f3nde en EE.UU. ingresar, y la proximidad de McAllen a Monterrey la convierte en una recomendaci\u00f3n natural. Flujos de capital donde grupos de inversi\u00f3n y family offices basados en CDMX despliegan capital a trav\u00e9s de la frontera. Redes profesionales donde las firmas legales, bancos y consultoras de la Ciudad de M\u00e9xico asesoran clientes en asuntos transfronterizos. Relaciones gubernamentales donde las agencias del gobierno federal de M\u00e9xico relevantes al comercio e inversi\u00f3n tienen su sede en CDMX.`,
        businessImplications: `Si usted es una empresa basada en la Ciudad de M\u00e9xico evaluando la entrada al mercado estadounidense, McAllen ofrece el punto de entrada m\u00e1s culturalmente familiar y econ\u00f3mico en Texas. La infraestructura biling\u00fce, la proximidad a Monterrey y la estructura de costos m\u00e1s baja comparada con Houston o Dallas hacen de McAllen la elecci\u00f3n pragm\u00e1tica. Si usted es un inversionista basado en CDMX, el VRG ofrece oportunidades inmobiliarias, comerciales e industriales a valuaciones que el capital de la Ciudad de M\u00e9xico encuentra atractivas.`,
        keyFacts: [
          { label: 'Poblaci\u00f3n metro CDMX', value: '21+ millones' },
          { label: 'CDMX: capital corporativa', value: 'Am\u00e9rica Latina #1' },
          { label: 'Tiempo de viaje v\u00eda Monterrey', value: '2\u20133 hrs por avi\u00f3n' },
          { label: 'Ventaja de costos McAllen vs Houston/Dallas', value: '30\u201350% menor' },
          { label: 'Fuerza laboral biling\u00fce McAllen', value: '86%' },
          { label: 'Sedes clave CDMX', value: 'Grupo Carso, Bimbo, FEMSA' },
        ],
        stakeholders: [
          'Secretar\u00eda de Econom\u00eda de M\u00e9xico',
          'Agencias sucesoras de ProM\u00e9xico',
          'COMCE (Consejo Mexicano de Comercio Exterior)',
          'AmCham M\u00e9xico',
          'C\u00e1maras binacionales con cap\u00edtulos en CDMX y el VRG',
        ],
        howTxicroHelps: `TXICRO cierra la brecha entre los centros de toma de decisiones corporativas de Ciudad de M\u00e9xico y las ventajas operativas de McAllen. Nuestro equipo de asesor\u00eda entiende ambos mundos \u2014 las din\u00e1micas institucionales de la expansi\u00f3n corporativa mexicana y las realidades pr\u00e1cticas de establecer operaciones estadounidenses en el Valle del R\u00edo Grande.\n\nPara empresas con sede en Ciudad de M\u00e9xico que eval\u00faan entrada al mercado estadounidense, proporcionamos evaluaciones estructuradas que comparan McAllen con ubicaciones alternativas en las m\u00e9tricas que importan: costos operativos, disponibilidad de fuerza laboral, entorno regulatorio, conectividad log\u00edstica y calidad de vida. Para ejecutivos de CDMX que realizan su primera visita al VRG, coordinamos programas de delegaci\u00f3n que muestran las capacidades de la regi\u00f3n.`,
        relatedCorridors: [
          { title: 'McAllen \u2194 Monterrey', href: '/es/why-mcallen/monterrey' },
          { title: 'McAllen \u2194 Houston', href: '/es/why-mcallen/houston' },
          { title: 'Ciudades del Valle del R\u00edo Grande', href: '/es/why-mcallen/rgv-cities' },
        ],
      }}
    />
  );
}
