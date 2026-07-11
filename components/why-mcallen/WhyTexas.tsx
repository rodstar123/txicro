import { Container, GoldDivider } from "@/components/ui";

interface WhyTexasProps {
  locale: "en" | "es";
}

interface TextPoint {
  title: string;
  body: string;
}

const content: Record<
  "en" | "es",
  { title: string; intro: string; points: TextPoint[] }
> = {
  en: {
    title: "Why Texas",
    intro:
      "Before understanding McAllen, it helps to understand why Texas itself attracts international investment at the scale it does.",
    points: [
      {
        title: "The largest exporting state in the United States.",
        body: "Texas has led the nation in exports for over two decades. The state\u2019s export economy is diversified across petroleum, technology, manufacturing, agriculture, and chemical products.",
      },
      {
        title: "Business-friendly regulatory environment.",
        body: "Texas consistently ranks among the top states for business formation and growth. Streamlined permitting, moderate regulation, and a legal framework that favors commercial activity make the state attractive to both domestic and international operators.",
      },
      {
        title: "No state income tax.",
        body: "Texas is one of only nine states with no personal income tax and imposes no corporate income tax. The franchise tax (margin tax) is among the lowest business taxes in the country.",
      },
      {
        title: "Infrastructure at scale.",
        body: "Texas has more freight railroad miles than any other state, two of the ten busiest ports in the nation, and a highway system that connects every major US market. The energy grid, while imperfect, supports one of the largest industrial bases in the Western Hemisphere.",
      },
      {
        title: "Workforce depth.",
        body: "Texas adds more jobs annually than most countries. The state\u2019s population growth \u2014 driven by both domestic migration and international immigration \u2014 provides a deep and diverse labor pool across skill levels.",
      },
    ],
  },
  es: {
    title: "Por Qu\u00e9 Texas",
    intro:
      "Antes de entender McAllen, es \u00fatil comprender por qu\u00e9 Texas mismo atrae inversi\u00f3n internacional a la escala que lo hace.",
    points: [
      {
        title: "El estado exportador m\u00e1s grande de los Estados Unidos.",
        body: "Texas ha liderado la naci\u00f3n en exportaciones durante m\u00e1s de dos d\u00e9cadas. La econom\u00eda exportadora del estado est\u00e1 diversificada entre petr\u00f3leo, tecnolog\u00eda, manufactura, agricultura y productos qu\u00edmicos.",
      },
      {
        title: "Entorno regulatorio favorable para los negocios.",
        body: "Texas se clasifica consistentemente entre los principales estados para formaci\u00f3n y crecimiento empresarial. Permisos simplificados, regulaci\u00f3n moderada y un marco legal que favorece la actividad comercial hacen al estado atractivo para operadores nacionales e internacionales.",
      },
      {
        title: "Sin impuesto estatal sobre la renta.",
        body: "Texas es uno de solo nueve estados sin impuesto sobre la renta personal y no impone impuesto corporativo sobre la renta. El impuesto de franquicia (impuesto al margen) se encuentra entre los impuestos empresariales m\u00e1s bajos del pa\u00eds.",
      },
      {
        title: "Infraestructura a escala.",
        body: "Texas tiene m\u00e1s millas de ferrocarril de carga que cualquier otro estado, dos de los diez puertos m\u00e1s activos de la naci\u00f3n y un sistema de carreteras que conecta todos los mercados principales de EE.UU.",
      },
      {
        title: "Profundidad de fuerza laboral.",
        body: "Texas agrega m\u00e1s empleos anualmente que la mayor\u00eda de los pa\u00edses. El crecimiento poblacional del estado proporciona una fuerza laboral profunda y diversa en todos los niveles de habilidad.",
      },
    ],
  },
};

export default function WhyTexas({ locale }: WhyTexasProps) {
  const t = content[locale];

  return (
    <section className="bg-white py-section-mobile sm:py-section">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy text-center mb-4">
          {t.title}
        </h2>
        <GoldDivider width="md" className="mb-10" />
        <p className="font-body text-slate text-base sm:text-lg max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {t.intro}
        </p>
        <div className="max-w-3xl mx-auto space-y-8">
          {t.points.map((point) => (
            <div key={point.title} className="border-l-4 border-gold pl-6">
              <h3 className="font-heading text-lg sm:text-xl text-navy font-bold mb-2">
                {point.title}
              </h3>
              <p className="font-body text-slate leading-relaxed text-base">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
