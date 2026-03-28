import { generatePageMetadata } from '@/lib/metadata';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

export const metadata = generatePageMetadata({
  title: 'Market Entry Advisory | Texas Consulting | TXICRO',
  description:
    'Structured advisory for organizations evaluating Texas market entry. Readiness assessment, regulatory overview, and go/no-go recommendations.',
  path: '/services/market-entry',
  locale: 'en',
});

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'International Market Entry Advisory',
  description: 'Structured advisory for organizations evaluating Texas market entry. Readiness assessment, regulatory overview, and go/no-go recommendations.',
  url: 'https://txicro.com/services/market-entry',
  provider: { '@type': 'ProfessionalService', name: 'TXICRO', url: 'https://txicro.com' },
  areaServed: [{ '@type': 'State', name: 'Texas' }],
};

export default function MarketEntryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailPage
      locale="en"
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Market Entry', href: '/services/market-entry' },
      ]}
      service={{
        title: 'International Market Entry Advisory',
        subtitle:
          'A structured assessment of whether, when, and how your organization should enter the Texas and United States market — delivered as a written recommendation you can act on.',
        description: `Entering a new market is one of the most consequential decisions an organization can make. It commits capital, reputation, and organizational bandwidth to an uncertain outcome. The cost of entering poorly — wrong timing, wrong structure, wrong location — often exceeds the cost of not entering at all.

TXICRO's Market Entry Advisory service is designed to reduce that uncertainty. We provide a structured assessment that examines your organization's readiness, maps the regulatory and commercial landscape, evaluates location options, and delivers a clear, written recommendation — proceed, adjust, or wait.

This is not a feasibility study produced by a firm that profits when you proceed. It is an independent assessment by an advisor whose only incentive is accuracy. If the market is not right for you, we will tell you. If the timing is wrong, we will explain why. If the opportunity is strong, we will show you exactly how to capture it.

Our assessment covers organizational readiness and capacity for US operations, federal, state, and local regulatory requirements, entity structure options (LLC, corporation, branch office, partnership), location analysis within Texas and the Rio Grande Valley, competitive landscape and market positioning, timeline and milestone planning, estimated startup costs and ongoing operational expenses, and go/no-go recommendation with supporting rationale.`,
        audience: [
          'International companies considering their first US presence through Texas',
          'Latin American manufacturers evaluating twin-plant or maquiladora operations near the border',
          'Foreign investors assessing commercial or industrial opportunities in South Texas',
          'Institutional organizations exploring partnerships or expansions in the Rio Grande Valley',
          'Any organization that needs an independent, written assessment before committing to the Texas market',
        ],
        deliverables: [
          'A comprehensive market entry assessment report (typically twenty to forty pages) covering all dimensions of readiness, risk, and opportunity',
          'A clear go/no-go recommendation with the reasoning explained in detail',
          'A timeline and milestone plan if the recommendation is to proceed',
          'A stakeholder map identifying key contacts for the next phase',
          'A follow-up consultation to discuss findings, answer questions, and plan next steps',
        ],
        methodology: `TXICRO's market entry process follows three phases. In the discovery phase, we conduct a confidential intake session to understand your objectives, constraints, timeline, and risk tolerance. We review your existing research and identify gaps. In the research and analysis phase, we conduct independent research on the regulatory environment, competitive landscape, location options, workforce availability, and cost structure. We draw on local knowledge built over decades in the Rio Grande Valley. In the delivery phase, we compile our findings into a professional written report and present it in a dedicated session. The report is yours — to share with your board, your investors, or your partners.`,
        faqs: [
          {
            question: 'How long does a market entry assessment take?',
            answer:
              'Typically two to four weeks from the initial consultation to report delivery, depending on scope and complexity.',
          },
          {
            question: 'Do you help with entity formation or legal setup?',
            answer:
              'No. TXICRO provides advisory and assessment services. If you need legal, accounting, or formation services, we can recommend qualified professionals in the region — but we do not receive compensation for those referrals.',
          },
          {
            question: 'What if your recommendation is not to proceed?',
            answer:
              'Then you have saved yourself from a costly mistake. Our fee-based model means we have no incentive to recommend entry when the conditions are not right. A "wait" or "no-go" recommendation is one of the most valuable outcomes we can deliver.',
          },
          {
            question: 'Can you assess locations outside the Rio Grande Valley?',
            answer:
              'Our deepest expertise is in the RGV and South Texas. For locations in Houston, Austin, Dallas, or San Antonio, we can provide general guidance and refer you to regional specialists.',
          },
        ],
        relatedServices: [
          { title: 'Cross-Border Strategy & Risk Assessment', href: '/services/cross-border-risk' },
          { title: 'Partner & Stakeholder Mapping', href: '/services/stakeholder-mapping' },
          { title: 'Delegation & Trade Mission Support', href: '/services/delegation-support' },
        ],
        caseStudyExcerpt:
          'See how TXICRO has helped international organizations evaluate and execute Texas market entry strategies in our advisory work portfolio.',
      }}
    />
    </>
  );
}
