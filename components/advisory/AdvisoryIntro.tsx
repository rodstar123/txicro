import { Container, GoldDivider } from '@/components/ui';

interface AdvisoryIntroProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    sectionTitle: 'How We Deliver Value',
    paragraphs: [
      'TXICRO\u2019s advisory practice is built on a simple principle: every engagement should leave the client in a stronger position than before \u2014 whether that means proceeding with confidence, adjusting course, or deciding not to proceed at all.',
      'The engagements described below are anonymized to protect client confidentiality, but they represent the types of challenges and outcomes that define our work. Each engagement followed our structured advisory process: consultation, assessment, written deliverables, and \u2014 where appropriate \u2014 ongoing coordination.',
      'What you will notice is that not every engagement ended with a \u201cgo\u201d decision. That is the point. A fee-based advisor\u2019s job is to tell you the truth, not to tell you what you want to hear. Sometimes the most valuable outcome is the deal you did not make.',
    ],
  },
  es: {
    sectionTitle: 'C\u00f3mo Generamos Valor',
    paragraphs: [
      'La pr\u00e1ctica de asesor\u00eda de TXICRO est\u00e1 construida sobre un principio simple: cada compromiso debe dejar al cliente en una posici\u00f3n m\u00e1s fuerte que antes \u2014 ya sea que eso signifique proceder con confianza, ajustar el rumbo o decidir no proceder en absoluto.',
      'Los compromisos descritos a continuaci\u00f3n est\u00e1n anonimizados para proteger la confidencialidad del cliente, pero representan los tipos de desaf\u00edos y resultados que definen nuestro trabajo. Cada compromiso sigui\u00f3 nuestro proceso estructurado de asesor\u00eda: consulta, evaluaci\u00f3n, entregables escritos y \u2014 donde fue apropiado \u2014 coordinaci\u00f3n continua.',
      'Lo que notar\u00e1 es que no todos los compromisos terminaron con una decisi\u00f3n de \u201cproceder.\u201d Ese es el punto. El trabajo de un asesor basado en honorarios es decirle la verdad, no decirle lo que quiere escuchar. A veces, el resultado m\u00e1s valioso es el negocio que no se realiz\u00f3.',
    ],
  },
};

export default function AdvisoryIntro({ locale }: AdvisoryIntroProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-white">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold text-center">
          {t.sectionTitle}
        </h2>
        <GoldDivider width="md" className="mt-4 mb-10" />
        <div className="max-w-3xl mx-auto space-y-6">
          {t.paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-body text-slate text-base sm:text-lg leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
