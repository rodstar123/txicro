import { Container, GoldDivider } from "@/components/ui";

interface ValuePropsProps {
  locale: "en" | "es";
}

const content = {
  en: {
    pillars: [
      {
        title: "Fee-Based & Independent",
        description:
          "No commissions, no referral fees, no hidden incentives. Our advice is aligned with your interests — not third-party compensation. You pay for clarity, and that is exactly what you receive.",
      },
      {
        title: "Bilingual & Bicultural",
        description:
          "We operate fluently in English and Spanish, and we understand the business cultures on both sides of the border. Communication is never lost in translation — not the language, and not the context.",
      },
      {
        title: "McAllen-Based, Globally Connected",
        description:
          "Rooted in the Rio Grande Valley with decades of local knowledge. McAllen sits at the crossroads of US-Latin America commerce, and TXICRO sits at the center of McAllen.",
      },
    ],
  },
  es: {
    pillars: [
      {
        title: "Honorarios Fijos e Independencia",
        description:
          "Sin comisiones, sin tarifas por referencia, sin incentivos ocultos. Nuestra asesoría está alineada con sus intereses — no con compensaciones de terceros. Usted paga por claridad, y eso es exactamente lo que recibe.",
      },
      {
        title: "Bilingüe y Bicultural",
        description:
          "Operamos con fluidez en inglés y español, y comprendemos las culturas empresariales de ambos lados de la frontera. La comunicación nunca se pierde en la traducción — ni el idioma, ni el contexto.",
      },
      {
        title: "Basados en McAllen, Conectados Globalmente",
        description:
          "Enraizados en el Valle del Río Grande con décadas de conocimiento local. McAllen se ubica en la encrucijada del comercio entre Estados Unidos y América Latina, y TXICRO se encuentra en el centro de McAllen.",
      },
    ],
  },
};

export default function ValueProps({ locale }: ValuePropsProps) {
  const { pillars } = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <div key={i}>
              <GoldDivider width="sm" className="!mx-0 mb-4" />
              <h3 className="font-heading text-xl font-semibold text-navy">
                {pillar.title}
              </h3>
              <p className="text-slate text-base leading-relaxed mt-3 font-body">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
