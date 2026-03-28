import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui';

interface NoePreviewProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    sectionTitle: 'Led by Noe Rodriguez',
    paragraph1:
      'Noe Rodriguez has spent sixty years in the Rio Grande Valley — building businesses, forging cross-border relationships, and developing a deep understanding of what it takes for international organizations to succeed in Texas.',
    paragraph2:
      'As the founder of TXICRO and General Manager of Pioneer Zeal Enterprises, Noe brings a practitioner\u2019s perspective to advisory work. He is not a theorist. He is an entrepreneur who has navigated the complexities of US-Mexico commerce firsthand, and who now dedicates his expertise to helping others do the same.',
    linkText: 'Learn more about Noe',
    linkHref: '/about',
  },
  es: {
    sectionTitle: 'Liderado por Noe Rodriguez',
    paragraph1:
      'Noe Rodriguez ha dedicado sesenta años al Valle del Río Grande — construyendo negocios, forjando relaciones transfronterizas y desarrollando un profundo entendimiento de lo que se necesita para que las organizaciones internacionales tengan éxito en Texas.',
    paragraph2:
      'Como fundador de TXICRO y Director General de Pioneer Zeal Enterprises, Noe aporta la perspectiva de un profesional con experiencia práctica. No es un teórico. Es un empresario que ha navegado las complejidades del comercio entre Estados Unidos y México de primera mano, y que ahora dedica su experiencia a ayudar a otros a hacer lo mismo.',
    linkText: 'Conozca más sobre Noe',
    linkHref: '/es/about',
  },
};

export default function NoePreview({ locale }: NoePreviewProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-lightgray">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Image column - 2/5 width on desktop */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-64 sm:w-72 lg:w-full aspect-[3/4] rounded-card overflow-hidden">
              <Image
                src="/images/noe-headshot.jpg"
                alt="Noe Rodriguez — Founder and Principal Advisor of TXICRO"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 288px, 40vw"
                priority
              />
            </div>
          </div>

          {/* Text column - 3/5 width on desktop */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold mb-6">
              {t.sectionTitle}
            </h2>
            <p className="font-body text-slate text-base leading-relaxed mb-4">
              {t.paragraph1}
            </p>
            <p className="font-body text-slate text-base leading-relaxed mb-6">
              {t.paragraph2}
            </p>
            <Link
              href={t.linkHref}
              className="inline-flex items-center text-gold font-body font-semibold hover:text-gold-dark transition-colors"
            >
              {t.linkText}
              <span className="ml-2" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
