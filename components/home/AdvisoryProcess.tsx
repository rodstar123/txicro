import { Container } from "@/components/ui";

interface AdvisoryProcessProps {
  locale: "en" | "es";
}

const content = {
  en: {
    sectionTitle: "Our Process",
    sectionSubtitle:
      "A structured advisory approach designed for clarity before commitments are made.",
    steps: [
      {
        number: 1,
        title: "Private Consultation",
        description:
          "A confidential discussion to confirm fit, understand your objectives, and define the scope of engagement. This is not a sales conversation — it is a thoughtful evaluation of whether and how TXICRO can help.",
      },
      {
        number: 2,
        title: "Assessment & Decision Brief",
        description:
          "A structured analysis delivered as a written report with clear findings, risk factors, and recommended next steps. You receive a document you can act on — not a conversation you have to remember.",
      },
      {
        number: 3,
        title: "Oversight & Coordination",
        description:
          "For organizations that proceed, TXICRO provides ongoing advisory support — coordinating introductions, monitoring progress, and ensuring that execution matches strategy.",
      },
    ],
  },
  es: {
    sectionTitle: "Nuestro Proceso",
    sectionSubtitle:
      "Un enfoque de asesoría estructurado, diseñado para brindar claridad antes de asumir compromisos.",
    steps: [
      {
        number: 1,
        title: "Consulta Privada",
        description:
          "Una conversación confidencial para confirmar la compatibilidad, entender sus objetivos y definir el alcance del compromiso. Esta no es una conversación de ventas — es una evaluación reflexiva sobre si TXICRO puede ayudarle y cómo.",
      },
      {
        number: 2,
        title: "Evaluación e Informe de Decisión",
        description:
          "Un análisis estructurado entregado como informe escrito con hallazgos claros, factores de riesgo y pasos recomendados. Usted recibe un documento sobre el cual puede actuar — no una conversación que tiene que recordar.",
      },
      {
        number: 3,
        title: "Supervisión y Coordinación",
        description:
          "Para organizaciones que avanzan, TXICRO proporciona apoyo continuo de asesoría — coordinando presentaciones, monitoreando el progreso y asegurando que la ejecución corresponda con la estrategia.",
      },
    ],
  },
};

export default function AdvisoryProcess({ locale }: AdvisoryProcessProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold">
            {t.sectionTitle}
          </h2>
          <p className="font-body text-slate text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Horizontal connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-6 left-[16.67%] right-[16.67%] h-0.5 bg-gold/30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {t.steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="relative z-10 bg-gold text-navy w-12 h-12 rounded-full flex items-center justify-center font-heading text-xl font-bold shrink-0">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy mt-4">
                  {step.title}
                </h3>
                <p className="text-slate text-sm mt-2 max-w-sm leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
