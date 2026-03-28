import Image from 'next/image';
import { Container, GoldDivider } from '@/components/ui';

interface AboutHeroProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    headline: 'Noe Rodriguez',
    subtitle:
      'Founder & Principal Advisor, Texas International Commerce & Relations Office',
    alt: 'Noe Rodriguez — Founder and Principal Advisor of TXICRO',
  },
  es: {
    headline: 'Noe Rodriguez',
    subtitle:
      'Fundador y Asesor Principal, Texas International Commerce & Relations Office',
    alt: 'Noe Rodriguez — Fundador y Asesor Principal de TXICRO',
  },
};

export default function AboutHero({ locale }: AboutHeroProps) {
  const t = content[locale];

  return (
    <section className="bg-navy py-20 lg:py-28">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Photo — shows first on mobile */}
          <div className="w-full lg:w-[45%] flex justify-center lg:order-2">
            <div className="relative w-64 sm:w-72 lg:w-full max-w-sm aspect-[3/4] rounded-card overflow-hidden shadow-2xl">
              <Image
                src="/images/noe-headshot.jpg"
                alt={t.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 288px, 384px"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-[55%] text-center lg:text-left lg:order-1">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
              {t.headline}
            </h1>
            <p className="text-gold text-lg sm:text-xl mt-4 font-body">
              {t.subtitle}
            </p>
            <GoldDivider width="md" className="mt-6 lg:mx-0" />
          </div>
        </div>
      </Container>
    </section>
  );
}
