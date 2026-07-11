import { Container, GoldDivider } from "@/components/ui";

interface ServiceProcessProps {
  locale: "en" | "es";
}

const content = {
  en: {
    sectionTitle: "Our Process",
    steps: [
      {
        number: 1,
        title: "Private Consultation",
        description:
          "Every engagement begins with a confidential conversation. We discuss your objectives, assess fit, and determine whether TXICRO is the right advisory partner for your needs. There is no obligation and no pressure.",
      },
      {
        number: 2,
        title: "Assessment & Decision Brief",
        description:
          "We conduct structured analysis and deliver our findings in writing. You receive a professional report with clear recommendations \u2014 a document you can share with your team, your board, or your investors.",
      },
      {
        number: 3,
        title: "Oversight & Coordination",
        description:
          "For organizations that proceed, we provide ongoing support \u2014 coordinating introductions, monitoring execution, and ensuring your strategy stays on track as conditions evolve.",
      },
    ],
  },
  es: {
    sectionTitle: "Nuestro Proceso",
    steps: [
      {
        number: 1,
        title: "Consulta Privada",
        description:
          "Cada compromiso comienza con una conversaci\u00f3n confidencial. Discutimos sus objetivos, evaluamos la compatibilidad y determinamos si TXICRO es el socio asesor adecuado para sus necesidades. No hay obligaci\u00f3n ni presi\u00f3n.",
      },
      {
        number: 2,
        title: "Evaluaci\u00f3n e Informe de Decisi\u00f3n",
        description:
          "Realizamos un an\u00e1lisis estructurado y entregamos nuestros hallazgos por escrito. Usted recibe un informe profesional con recomendaciones claras \u2014 un documento que puede compartir con su equipo, su junta directiva o sus inversionistas.",
      },
      {
        number: 3,
        title: "Supervisi\u00f3n y Coordinaci\u00f3n",
        description:
          "Para organizaciones que proceden, brindamos apoyo continuo \u2014 coordinando presentaciones, monitoreando la ejecuci\u00f3n y asegurando que su estrategia se mantenga en curso a medida que las condiciones evolucionan.",
      },
    ],
  },
};

export default function ServiceProcess({ locale }: ServiceProcessProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-lightgray">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold">
            {t.sectionTitle}
          </h2>
          <GoldDivider width="md" className="mt-4" />
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
