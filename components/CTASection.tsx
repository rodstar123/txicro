import { Container, GoldDivider, Button } from '@/components/ui';

interface CTASectionProps {
  locale: 'en' | 'es';
  heading?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'light' | 'dark';
}

const defaults = {
  en: {
    heading: 'Begin with Clarity',
    subtext:
      'An initial assessment provides a structured understanding of opportunities, risks, and next steps \u2014 before major decisions are made.',
    buttonText: 'Request Assessment',
  },
  es: {
    heading: 'Comience con Claridad',
    subtext:
      'Una evaluaci\u00f3n inicial proporciona un entendimiento estructurado de oportunidades, riesgos y pr\u00f3ximos pasos \u2014 antes de tomar decisiones importantes.',
    buttonText: 'Solicitar Evaluaci\u00f3n',
  },
};

export default function CTASection({
  locale,
  heading,
  subtext,
  buttonText,
  buttonHref,
  variant = 'dark',
}: CTASectionProps) {
  const text = defaults[locale];
  const resolvedHeading = heading || text.heading;
  const resolvedSubtext = subtext || text.subtext;
  const resolvedButtonText = buttonText || text.buttonText;
  const resolvedButtonHref =
    buttonHref || (locale === 'es' ? '/es/contact' : '/contact');

  const isDark = variant === 'dark';

  return (
    <section
      className={`py-section-mobile sm:py-section ${
        isDark ? 'bg-navy' : 'bg-lightgray'
      }`}
    >
      <Container className="text-center">
        <h2
          className={`font-heading text-3xl sm:text-4xl mb-4 ${
            isDark ? 'text-white' : 'text-navy'
          }`}
        >
          {resolvedHeading}
        </h2>
        <p
          className={`font-body text-lg max-w-2xl mx-auto mb-8 ${
            isDark ? 'text-gray-300' : 'text-slate'
          }`}
        >
          {resolvedSubtext}
        </p>
        <GoldDivider width="md" className="mb-8" />
        <Button href={resolvedButtonHref} variant="primary" size="lg">
          {resolvedButtonText}
        </Button>
      </Container>
    </section>
  );
}
