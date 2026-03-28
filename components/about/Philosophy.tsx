import { Container, GoldDivider } from '@/components/ui';

interface PhilosophyProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    title: 'Professional Philosophy',
    principles: [
      {
        name: 'Independence above all.',
        description:
          'Fee-based engagement with no commissions, referral fees, or transaction-based compensation. The client\u2019s interests are the only interests that matter.',
      },
      {
        name: 'Preparation before commitment.',
        description:
          'Every engagement begins with assessment, analysis, and written deliverables \u2014 because the most expensive mistakes in cross-border business are the ones made before anyone realized a decision was being made.',
      },
      {
        name: 'Discretion and appropriate boundaries.',
        description:
          'TXICRO operates with the professionalism expected by institutional and government stakeholders. Confidentiality is not a policy \u2014 it is a practice embedded in every interaction.',
      },
    ],
  },
  es: {
    title: 'Filosof\u00eda Profesional',
    principles: [
      {
        name: 'Independencia ante todo.',
        description:
          'Compromisos basados en honorarios sin comisiones, tarifas por referencia ni compensaci\u00f3n basada en transacciones. Los intereses del cliente son los \u00fanicos intereses que importan.',
      },
      {
        name: 'Preparaci\u00f3n antes del compromiso.',
        description:
          'Cada compromiso comienza con evaluaci\u00f3n, an\u00e1lisis y entregables escritos \u2014 porque los errores m\u00e1s costosos en los negocios transfronterizos son los que se cometen antes de que alguien se d\u00e9 cuenta de que se estaba tomando una decisi\u00f3n.',
      },
      {
        name: 'Discreci\u00f3n y l\u00edmites apropiados.',
        description:
          'TXICRO opera con el profesionalismo esperado por los actores institucionales y gubernamentales. La confidencialidad no es una pol\u00edtica \u2014 es una pr\u00e1ctica integrada en cada interacci\u00f3n.',
      },
    ],
  },
};

export default function Philosophy({ locale }: PhilosophyProps) {
  const t = content[locale];

  return (
    <section className="bg-lightgray py-section-mobile sm:py-section">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy font-semibold text-center mb-4">
          {t.title}
        </h2>
        <GoldDivider width="md" className="mb-10" />

        <div className="max-w-3xl mx-auto space-y-6">
          {t.principles.map((principle, index) => (
            <div
              key={index}
              className="border-l-4 border-gold pl-6 bg-white rounded-card p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-navy">
                {principle.name}
              </h3>
              <p className="text-slate text-base mt-2 leading-relaxed font-body">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
