import { Container, GoldDivider } from '@/components/ui';

interface ServicesHeroProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    headline: 'Advisory Services',
    subheadline:
      'Fee-based advisory, assessment, and coordination for international organizations navigating the Texas market. We provide the clarity you need before commitments are made.',
  },
  es: {
    headline: 'Servicios de Asesor\u00eda',
    subheadline:
      'Asesor\u00eda, evaluaci\u00f3n y coordinaci\u00f3n basada en honorarios para organizaciones internacionales que navegan el mercado texano. Proporcionamos la claridad que necesita antes de asumir compromisos.',
  },
};

export default function ServicesHero({ locale }: ServicesHeroProps) {
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
