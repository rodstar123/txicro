import Link from 'next/link';
import { Container } from '@/components/ui';

interface WhyMcAllenPreviewProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    sectionTitle: 'McAllen: The Strategic Gateway',
    stats: [
      { value: '2.5 hrs', label: 'from Monterrey, Mexico\u2019s industrial capital' },
      { value: 'FTZ #12', label: 'McAllen Foreign Trade Zone — one of the most active in the US' },
      { value: '$200B+', label: 'in annual US-Mexico border trade through the RGV' },
      { value: '0%', label: 'state income tax in Texas' },
      { value: 'MFE', label: 'McAllen-Miller International Airport with direct connections' },
      { value: '1.4M', label: 'metro population — McAllen-Edinburg-Mission' },
    ],
    linkText: 'Discover why McAllen is the right gateway',
    linkHref: '/why-mcallen',
  },
  es: {
    sectionTitle: 'McAllen: El Portal Estratégico',
    stats: [
      { value: '2.5 hrs', label: 'de Monterrey, capital industrial de México' },
      { value: 'ZCE #12', label: 'Zona de Comercio Exterior de McAllen — una de las más activas de EE.UU.' },
      { value: '$200B+', label: 'en comercio anual entre EE.UU. y México por el RGV' },
      { value: '0%', label: 'impuesto estatal sobre la renta en Texas' },
      { value: 'MFE', label: 'Aeropuerto Internacional McAllen-Miller con conexiones directas' },
      { value: '1.4M', label: 'población metropolitana — McAllen-Edinburg-Mission' },
    ],
    linkText: 'Descubra por qué McAllen es el portal ideal',
    linkHref: '/es/why-mcallen',
  },
};

export default function WhyMcAllenPreview({ locale }: WhyMcAllenPreviewProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-lightgray">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold text-center mb-10">
          {t.sectionTitle}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {t.stats.map((stat, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="font-heading text-2xl sm:text-3xl text-gold font-bold">
                {stat.value}
              </div>
              <p className="text-navy text-sm mt-1 leading-snug font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={t.linkHref}
            className="inline-flex items-center text-gold font-body font-semibold hover:text-gold-dark transition-colors"
          >
            {t.linkText}
            <span className="ml-2" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
