import { generatePageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import AboutHero from '@/components/about/AboutHero';
import Biography from '@/components/about/Biography';
import Philosophy from '@/components/about/Philosophy';
import CommunityRoots from '@/components/about/CommunityRoots';
import CTASection from '@/components/CTASection';
import { Container } from '@/components/ui';

export const metadata = generatePageMetadata({
  title: 'About Noe Rodriguez | Founder & Advisor | TXICRO',
  description:
    'Noe Rodriguez — born and raised in McAllen, TX. 60 years in the Rio Grande Valley. Entrepreneur, cross-border commerce advisor, and founder of TXICRO.',
  path: '/about',
  locale: 'en',
});

export default function AboutPage() {
  return (
    <>
      <AboutHero locale="en" />
      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs
            items={[{ label: 'About', href: '/about' }]}
            locale="en"
          />
        </Container>
      </div>
      <Biography locale="en" />
      <Philosophy locale="en" />
      <CommunityRoots locale="en" />
      <CTASection
        locale="en"
        heading="Work with Noe"
        subtext="Whether you are an international organization evaluating Texas, a foreign investor exploring the Rio Grande Valley, or an institution seeking coordination support — an initial conversation costs nothing but time, and the clarity it provides can save you from costly missteps."
      />
    </>
  );
}
