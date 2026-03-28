import { generatePageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Container } from '@/components/ui';
import CTASection from '@/components/CTASection';
import WhyMcAllenHero from '@/components/why-mcallen/WhyMcAllenHero';
import StatsBlock from '@/components/why-mcallen/StatsBlock';
import StrategicPosition from '@/components/why-mcallen/StrategicPosition';
import WhyTexas from '@/components/why-mcallen/WhyTexas';
import WhyMcAllenSpecific from '@/components/why-mcallen/WhyMcAllenSpecific';
import IndustrySectors from '@/components/why-mcallen/IndustrySectors';
import CorridorCards from '@/components/why-mcallen/CorridorCards';

export const metadata = generatePageMetadata({
  title: 'Why McAllen, Texas | Trade Gateway | TXICRO',
  description:
    'McAllen, TX sits at the crossroads of US-Latin America trade. 2.5 hours from Monterrey, FTZ #12, no state income tax, bilingual workforce.',
  path: '/why-mcallen',
  locale: 'en',
});

export default function WhyMcAllenPage() {
  return (
    <>
      <WhyMcAllenHero locale="en" />
      <Container className="pt-8">
        <Breadcrumbs
          items={[{ label: 'Why McAllen', href: '/why-mcallen' }]}
          locale="en"
        />
      </Container>
      <StatsBlock locale="en" />
      <StrategicPosition locale="en" />
      <WhyTexas locale="en" />
      <WhyMcAllenSpecific locale="en" />
      <IndustrySectors locale="en" />
      <CorridorCards locale="en" />
      <CTASection
        locale="en"
        heading="Exploring McAllen for Your Next Expansion?"
        subtext="If you are evaluating McAllen or the Rio Grande Valley as a location for your business, an initial assessment will give you the structured intelligence you need to make a confident decision. We know this region because we have spent sixty years building in it."
        buttonText="Request an Assessment"
      />
    </>
  );
}
