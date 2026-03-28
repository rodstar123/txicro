import { Container, GoldDivider } from '@/components/ui';

interface AdvisoryHeroProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    headline: 'Advisory Work',
    subheadline:
      'A selection of representative engagements illustrating how TXICRO supports international organizations in navigating the Texas market with clarity and confidence.',
  },
  es: {
    headline: 'Trabajo de Asesor\u00eda',
    subheadline:
      'Una selecci\u00f3n de compromisos representativos que ilustran c\u00f3mo TXICRO apoya a organizaciones internacionales en la navegaci\u00f3n del mercado texano con claridad y confianza.',
  },
};

export default function AdvisoryHero({ locale }: AdvisoryHeroProps) {
  const t = content[locale];

  return (
    <section className="bg-navy py-20 lg:py-28">
      <Container className="text-center">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
          {t.headline}
        </h1>
        <GoldDivider width="md" className="mt-6" />
        <p className="font-body text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
          {t.subheadline}
        </p>
      </Container>
    </section>
  );
}
