import { generatePageMetadata } from "@/lib/metadata";
import CorridorDetailPage from "@/components/why-mcallen/CorridorDetailPage";

export const metadata = generatePageMetadata({
  title: "Corredor McAllen–Austin–San Antonio | TXICRO",
  description:
    "El corredor I-35/I-37 conectando McAllen con San Antonio y Austin \u2014 tecnolog\u00eda, defensa, nearshoring y la zona econ\u00f3mica del Tri\u00e1ngulo de Texas.",
  path: "/es/why-mcallen/austin-corridor",
  locale: "es",
});

export default function AustinCorridorPageES() {
  return (
    <CorridorDetailPage
      locale="es"
      corridor={{
        title: "McAllen \u2194 Austin / San Antonio",
        subtitle:
          "El Tri\u00e1ngulo de Texas \u2014 conectando el portal fronterizo de McAllen con la capital tecnol\u00f3gica y el centro militar del centro de Texas.",
        overview: `McAllen se conecta con San Antonio v\u00eda US-281 e I-37 en aproximadamente tres horas y media, y con Austin v\u00eda I-35 en aproximadamente cuatro horas y media. Este corredor une la frontera EE.UU.-M\u00e9xico con dos de las econom\u00edas m\u00e1s din\u00e1micas de Texas.\n\nSan Antonio \u2014 hogar de cinco instalaciones militares, un sector creciente de ciberseguridad y una econom\u00eda de salud que sirve a toda la regi\u00f3n \u2014 se ubica en el punto medio. Austin \u2014 la metr\u00f3poli de mayor crecimiento en EE.UU., capital de la econom\u00eda tecnol\u00f3gica de Texas y sede de empresas como Tesla, Oracle, Samsung y Apple \u2014 se ubica en el extremo norte.`,
        tradeRelationship: `El corredor McAllen-Austin-San Antonio representa la columna vertebral del Tri\u00e1ngulo de Texas. Esta relaci\u00f3n se profundiza a medida que el nearshoring se acelera. Las empresas de tecnolog\u00eda y defensa de Austin y San Antonio necesitan acceso a la cadena de suministro de manufactura mexicana. McAllen proporciona ese acceso a trav\u00e9s del corredor Reynosa-Monterrey.\n\nLas din\u00e1micas clave incluyen cadenas de suministro de nearshoring, defensa y seguridad, un canal de talento desde UTRGV, y distribuci\u00f3n regional donde las mercanc\u00edas que ingresan por la ZCE de McAllen pueden ser preparadas para distribuci\u00f3n en todo el centro de Texas.`,
        businessImplications: `Si usted es una empresa del centro de Texas explorando nearshoring, McAllen es su portal al ecosistema manufacturero de Monterrey. Si usted es una empresa latinoamericana apuntando a la econom\u00eda tecnol\u00f3gica de Austin, McAllen ofrece un punto de partida culturalmente familiar con costos m\u00e1s bajos e infraestructura biling\u00fce.`,
        keyFacts: [
          { label: "McAllen a San Antonio", value: "3.5 horas" },
          { label: "McAllen a Austin", value: "4.5 horas" },
          { label: "Instalaciones militares San Antonio", value: "5 bases" },
          {
            label: "Sedes tech Austin",
            value: "Tesla, Oracle, Samsung, Apple",
          },
          { label: "Tri\u00e1ngulo de Texas: PIB estatal", value: "~75%" },
          {
            label: "Canal de talento UTRGV",
            value: "Ingenier\u00eda, Negocios, Salud",
          },
        ],
        stakeholders: [
          "Fundaci\u00f3n de Desarrollo Econ\u00f3mico de San Antonio",
          "C\u00e1mara de Comercio de Austin",
          "Departamento de Transporte de Texas",
          "Oficina de Desarrollo Econ\u00f3mico de UTRGV",
          "Proveedores log\u00edsticos regionales del corredor I-35/I-37",
        ],
        howTxicroHelps: `TXICRO entiende este corredor no como una l\u00ednea en un mapa sino como un sistema econ\u00f3mico integrado. Cuando empresas tecnol\u00f3gicas de Austin exploran nearshoring a Monterrey, cuando contratistas de defensa de San Antonio eval\u00faan cadenas de suministro en la regi\u00f3n fronteriza, o cuando manufactureros mexicanos buscan una base operativa del lado estadounidense con acceso a mercados de Texas central, necesitan inteligencia local y presentaciones que no pueden ensamblarse a partir de bases de datos p\u00fablicas.`,
        relatedCorridors: [
          {
            title: "McAllen \u2194 Monterrey",
            href: "/es/why-mcallen/monterrey",
          },
          { title: "McAllen \u2194 Houston", href: "/es/why-mcallen/houston" },
          { title: "McAllen vs Laredo", href: "/es/why-mcallen/vs-laredo" },
        ],
      }}
    />
  );
}
