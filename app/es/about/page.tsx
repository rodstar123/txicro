import { generatePageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import AboutHero from '@/components/about/AboutHero';
import Biography from '@/components/about/Biography';
import Philosophy from '@/components/about/Philosophy';
import CommunityRoots from '@/components/about/CommunityRoots';
import CTASection from '@/components/CTASection';
import { Container } from '@/components/ui';

export const metadata = generatePageMetadata({
  title: 'Sobre Noe Rodriguez | Fundador y Asesor | TXICRO',
  description:
    'Noe Rodriguez — nacido y criado en McAllen, TX. 60 a\u00f1os en el Valle del R\u00edo Grande. Empresario, asesor de comercio transfronterizo y fundador de TXICRO.',
  path: '/es/about',
  locale: 'es',
});

export default function AboutPageES() {
  return (
    <>
      <AboutHero locale="es" />
      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs
            items={[{ label: 'Sobre Nosotros', href: '/es/about' }]}
            locale="es"
          />
        </Container>
      </div>
      <Biography locale="es" />
      <Philosophy locale="es" />
      <CommunityRoots locale="es" />
      <CTASection
        locale="es"
        heading="Trabaje con Noe"
        subtext="Ya sea que usted sea una organizaci\u00f3n internacional evaluando Texas, un inversionista extranjero explorando el Valle del R\u00edo Grande o una instituci\u00f3n que busca apoyo de coordinaci\u00f3n \u2014 una conversaci\u00f3n inicial no cuesta m\u00e1s que tiempo, y la claridad que proporciona puede ahorrarle errores costosos."
      />
    </>
  );
}
