import Image from 'next/image';
import { Button } from '@/components/ui';

interface HeroSectionProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    headline: 'Where the Border Becomes a Bridge.',
    subheadline: 'TXICRO — An Office for International Commerce and Relations. McAllen, Texas.',
    ctaPrimary: 'Request an Assessment',
    ctaSecondary: 'Download the McAllen Gateway Guide',
    founderLine: 'Noe Rodriguez — Founder & Principal Advisor',
    ctaPrimaryHref: '/contact',
    ctaSecondaryHref: '#',
  },
  es: {
    headline: 'Donde la Frontera Se Convierte en Puente.',
    subheadline: 'TXICRO — Una Oficina de Comercio Internacional y Relaciones. McAllen, Texas.',
    ctaPrimary: 'Solicitar una Evaluación',
    ctaSecondary: 'Descargue la Guía de McAllen como Portal de Comercio',
    founderLine: 'Noe Rodriguez — Fundador y Asesor Principal',
    ctaPrimaryHref: '/es/contact',
    ctaSecondaryHref: '#',
  },
};

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = content[locale];

  return (
    <section className="-mt-16 lg:-mt-[72px] relative bg-navy min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bridge.jpeg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={85}
      />
      {/* Dark navy overlay at 68% opacity */}
      <div className="absolute inset-0 bg-navy/[0.68]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 lg:pt-[120px] pb-16 lg:pb-20">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-bold text-balance leading-tight">
          {t.headline}
        </h1>

        {/* Gold accent line */}
        <div className="w-24 h-0.5 bg-gold mx-auto mt-8" />

        <p className="font-body text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
          {t.subheadline}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={t.ctaPrimaryHref} variant="primary" size="lg">
            {t.ctaPrimary}
          </Button>
          <Button href={t.ctaSecondaryHref} variant="secondary" size="lg">
            {t.ctaSecondary}
          </Button>
        </div>

        <p className="mt-8 text-gold text-sm tracking-wide uppercase font-body">
          {t.founderLine}
        </p>
      </div>
    </section>
  );
}
