import { generatePageMetadata } from '@/lib/metadata';
import HeroSection from '@/components/home/HeroSection';
import ValueProps from '@/components/home/ValueProps';
import NoePreview from '@/components/home/NoePreview';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhoWeServe from '@/components/home/WhoWeServe';
import WhyMcAllenPreview from '@/components/home/WhyMcAllenPreview';
import AdvisoryProcess from '@/components/home/AdvisoryProcess';
import InsightsPreview from '@/components/home/InsightsPreview';
import CTASection from '@/components/CTASection';

export const metadata = generatePageMetadata({
  title: 'TXICRO | Cross-Border Trade Advisory | McAllen, TX',
  description:
    'Fee-based advisory for international organizations entering or expanding in Texas. Independent, bilingual, McAllen-based.',
  path: '/',
  locale: 'en',
});

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Texas International Commerce & Relations Office',
  alternateName: 'TXICRO',
  url: 'https://txicro.com',
  logo: 'https://txicro.com/images/txicro-logo.png',
  description:
    'Fee-based cross-border advisory for international companies, investors, and institutions entering Texas through the Rio Grande Valley.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '315 W Nolana Ave, Suite G-6',
    addressLocality: 'McAllen',
    addressRegion: 'TX',
    postalCode: '78504',
    addressCountry: 'US',
  },
  email: 'info@txicro.com',
  openingHours: 'Mo-Fr 09:00-17:00',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Mexico' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Noe Rodriguez',
    jobTitle: 'Founder & Principal Advisor',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection locale="en" />
      <ValueProps locale="en" />
      <NoePreview locale="en" />
      <ServicesOverview locale="en" />
      <WhoWeServe locale="en" />
      <WhyMcAllenPreview locale="en" />
      <AdvisoryProcess locale="en" />
      <InsightsPreview locale="en" />
      <CTASection
        locale="en"
        variant="dark"
        subtext="An initial assessment provides a structured understanding of opportunities, risks, and next steps — before major decisions are made. This is not a sales conversation. It is a disciplined evaluation to help you determine whether and how to proceed."
      />
    </>
  );
}
