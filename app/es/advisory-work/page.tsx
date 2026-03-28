import { generatePageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdvisoryHero from '@/components/advisory/AdvisoryHero';
import AdvisoryIntro from '@/components/advisory/AdvisoryIntro';
import CaseStudies from '@/components/advisory/CaseStudies';
import Testimonials from '@/components/advisory/Testimonials';
import CTASection from '@/components/CTASection';
import { Container } from '@/components/ui';

export const metadata = generatePageMetadata({
  title: 'Trabajo de Asesoría y Casos de Estudio | TXICRO',
  description:
    'Cómo TXICRO ha ayudado a organizaciones internacionales con la entrada al mercado de Texas, riesgos transfronterizos y delegaciones.',
  path: '/es/advisory-work',
  locale: 'es',
});

export default function AdvisoryWorkPageES() {
  return (
    <>
      <AdvisoryHero locale="es" />
      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs
            items={[{ label: 'Trabajo de Asesor\u00eda', href: '/es/advisory-work' }]}
            locale="es"
          />
        </Container>
      </div>
      <AdvisoryIntro locale="es" />
      <CaseStudies locale="es" />
      <Testimonials locale="es" />
      <CTASection
        locale="es"
        heading="Su Evaluaci\u00f3n Comienza Aqu\u00ed"
        subtext="Cada caso de estudio en esta p\u00e1gina comenz\u00f3 de la misma manera \u2014 con una conversaci\u00f3n confidencial sobre objetivos, preocupaciones y cronograma. La suya puede comenzar de la misma manera."
      />
    </>
  );
}
