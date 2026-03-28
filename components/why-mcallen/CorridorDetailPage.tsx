import Link from 'next/link';
import { Container, GoldDivider, Button } from '@/components/ui';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

interface KeyFact {
  label: string;
  value: string;
}

interface RelatedCorridor {
  title: string;
  href: string;
}

interface ComparisonItem {
  category: string;
  mcallen: string;
  laredo: string;
}

interface CorridorData {
  title: string;
  subtitle: string;
  overview: string;
  tradeRelationship: string;
  businessImplications: string;
  keyFacts: KeyFact[];
  stakeholders: string[];
  howTxicroHelps: string;
  relatedCorridors: RelatedCorridor[];
  comparison?: ComparisonItem[];
}

interface CorridorDetailPageProps {
  locale: 'en' | 'es';
  corridor: CorridorData;
}

export default function CorridorDetailPage({ locale, corridor }: CorridorDetailPageProps) {
  const hubHref = locale === 'es' ? '/es/why-mcallen' : '/why-mcallen';
  const contactHref = locale === 'es' ? '/es/contact' : '/contact';

  const labels = {
    en: {
      hubLabel: 'Why McAllen',
      overviewHeading: 'The Corridor',
      keyFactsHeading: 'Key Facts',
      tradeHeading: 'Trade Relationship',
      businessHeading: 'Why This Matters',
      comparisonHeading: 'Head-to-Head Comparison',
      stakeholdersHeading: 'Key Stakeholders',
      helpHeading: 'How TXICRO Can Help',
      helpCta: 'Request an Assessment',
      relatedHeading: 'Related Corridors',
      explore: 'Explore',
      categoryLabel: 'Category',
      mcallenLabel: 'McAllen',
      laredoLabel: 'Laredo',
    },
    es: {
      hubLabel: 'Por Que McAllen',
      overviewHeading: 'El Corredor',
      keyFactsHeading: 'Datos Clave',
      tradeHeading: 'Relacion Comercial',
      businessHeading: 'Por Que Importa',
      comparisonHeading: 'Comparacion Directa',
      stakeholdersHeading: 'Actores Clave',
      helpHeading: 'Como TXICRO Puede Ayudar',
      helpCta: 'Solicitar una Evaluacion',
      relatedHeading: 'Corredores Relacionados',
      explore: 'Explorar',
      categoryLabel: 'Categoria',
      mcallenLabel: 'McAllen',
      laredoLabel: 'Laredo',
    },
  };

  const t = labels[locale];

  const breadcrumbs = [
    { label: t.hubLabel, href: hubHref },
    { label: corridor.title, href: '#' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <Container>
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            {corridor.title}
          </h1>
          <p className="font-body text-lg text-gray-300 max-w-3xl">
            {corridor.subtitle}
          </p>
          <GoldDivider width="sm" className="mt-6 !mx-0" />
        </Container>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs items={breadcrumbs} locale={locale} />
        </Container>
      </div>

      {/* Overview */}
      <section className="bg-white py-section-mobile sm:py-section">
        <Container>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
            {t.overviewHeading}
          </h2>
          <GoldDivider width="sm" className="mb-8 !mx-0" />
          <div className="max-w-3xl space-y-4">
            {corridor.overview.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-slate leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Facts */}
      <section className="bg-lightgray py-12">
        <Container>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-8 text-center">
            {t.keyFactsHeading}
          </h2>
          <GoldDivider width="sm" className="mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corridor.keyFacts.map((fact, i) => (
              <div
                key={i}
                className="bg-white rounded-card p-6 border border-gray-100"
              >
                <p className="font-heading text-2xl sm:text-3xl text-gold mb-2">
                  {fact.value}
                </p>
                <p className="font-body text-slate text-sm leading-relaxed">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trade Relationship */}
      <section className="bg-white py-section-mobile sm:py-section">
        <Container>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
            {t.tradeHeading}
          </h2>
          <GoldDivider width="sm" className="mb-8 !mx-0" />
          <div className="max-w-3xl space-y-4">
            {corridor.tradeRelationship.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-slate leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison Table (vs-laredo only) */}
      {corridor.comparison && corridor.comparison.length > 0 && (
        <section className="bg-lightgray py-section-mobile sm:py-section">
          <Container>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
              {t.comparisonHeading}
            </h2>
            <GoldDivider width="sm" className="mb-8 !mx-0" />
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl border-collapse">
                <thead>
                  <tr className="border-b-2 border-gold">
                    <th className="font-heading text-left text-navy py-4 pr-6 text-lg">
                      {t.categoryLabel}
                    </th>
                    <th className="font-heading text-left text-navy py-4 pr-6 text-lg">
                      {t.mcallenLabel}
                    </th>
                    <th className="font-heading text-left text-navy py-4 text-lg">
                      {t.laredoLabel}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {corridor.comparison.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <td className="font-body font-medium text-navy py-4 pr-6">
                        {row.category}
                      </td>
                      <td className="font-body text-slate py-4 pr-6">
                        {row.mcallen}
                      </td>
                      <td className="font-body text-slate py-4">
                        {row.laredo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      )}

      {/* Business Implications */}
      <section className={corridor.comparison ? 'bg-white py-section-mobile sm:py-section' : 'bg-lightgray py-section-mobile sm:py-section'}>
        <Container>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
            {t.businessHeading}
          </h2>
          <GoldDivider width="sm" className="mb-8 !mx-0" />
          <div className="max-w-3xl space-y-4">
            {corridor.businessImplications.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-slate leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Stakeholders */}
      <section className={corridor.comparison ? 'bg-lightgray py-section-mobile sm:py-section' : 'bg-white py-section-mobile sm:py-section'}>
        <Container>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
            {t.stakeholdersHeading}
          </h2>
          <GoldDivider width="sm" className="mb-8 !mx-0" />
          <ul className="space-y-4 max-w-3xl">
            {corridor.stakeholders.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2.5" aria-hidden="true" />
                <span className="font-body text-slate text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How TXICRO Helps */}
      <section className="bg-navy py-section-mobile sm:py-section">
        <Container>
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-6">
            {t.helpHeading}
          </h2>
          <GoldDivider width="sm" className="mb-8 !mx-0" />
          <div className="max-w-3xl space-y-4 mb-8">
            {corridor.howTxicroHelps.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-gray-300 text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <Button href={contactHref} variant="primary" size="lg">
            {t.helpCta}
          </Button>
        </Container>
      </section>

      {/* Related Corridors */}
      <section className="bg-lightgray py-12">
        <Container>
          <h3 className="font-heading text-2xl sm:text-3xl text-navy mb-8 text-center">
            {t.relatedHeading}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corridor.relatedCorridors.map((rc) => (
              <Link
                key={rc.href}
                href={rc.href}
                className="block bg-white rounded-card p-6 border border-gray-100 hover:border-gold hover:shadow-md transition-all duration-200 group"
              >
                <h4 className="font-heading text-lg text-navy group-hover:text-gold transition-colors duration-200 mb-2">
                  {rc.title}
                </h4>
                <span className="font-body text-sm text-gold flex items-center">
                  {t.explore}
                  <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection locale={locale} />
    </>
  );
}
