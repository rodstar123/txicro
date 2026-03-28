import { generatePageMetadata } from '@/lib/metadata';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

export const metadata = generatePageMetadata({
  title: 'Cross-Border Risk Assessment | TXICRO',
  description:
    'Structured risk analysis across commercial, regulatory, and operational dimensions for organizations in the US-Mexico corridor.',
  path: '/services/cross-border-risk',
  locale: 'en',
});

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cross-Border Strategy & Risk Assessment',
  description: 'Structured risk analysis across commercial, regulatory, and operational dimensions for organizations in the US-Mexico corridor.',
  url: 'https://txicro.com/services/cross-border-risk',
  provider: { '@type': 'ProfessionalService', name: 'TXICRO', url: 'https://txicro.com' },
  areaServed: [{ '@type': 'State', name: 'Texas' }],
};

export default function CrossBorderRiskPage() {
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
        { label: 'Cross-Border Risk', href: '/services/cross-border-risk' },
      ]}
      service={{
        title: 'Cross-Border Strategy & Risk Assessment',
        subtitle:
          'A clear-eyed analysis of what can go wrong — commercially, regulatorily, and operationally — before you commit capital, contracts, or reputation.',
        description: `Cross-border business operates at the intersection of two legal systems, two regulatory frameworks, two tax regimes, and two business cultures. Every dimension adds complexity, and every gap in understanding adds risk.

TXICRO's Risk Assessment service provides a structured analysis of the specific risks facing your cross-border operation or investment. We do not produce generic risk matrices. We produce specific, contextualized assessments that identify the risks most relevant to your situation, evaluate their likelihood and potential impact, and recommend concrete mitigation strategies.

Our assessment examines three categories of risk. Commercial risk covers market conditions, competition, demand stability, pricing dynamics, customer concentration, and revenue sustainability. Regulatory risk covers federal and state compliance requirements, licensing and permitting, foreign ownership restrictions, tax obligations, employment law, and environmental compliance. Operational risk covers supply chain reliability, workforce availability, property and facility risks, insurance requirements, technology infrastructure, and business continuity.`,
        audience: [
          'Foreign investors evaluating acquisitions or developments in the Texas border region',
          'International companies establishing or expanding cross-border operations',
          'Organizations entering joint ventures or partnerships with US-based entities',
          'Institutional stakeholders who need independent risk analysis for policy or investment decisions',
          'Any organization operating in the US-Mexico corridor that needs to understand its exposure',
        ],
        deliverables: [
          'A written risk assessment report with identified risks categorized by type, likelihood, and potential impact',
          'A risk register documenting each risk with recommended mitigation actions',
          'A regulatory landscape overview specific to your industry and location',
          'An operational risk checklist for ongoing monitoring',
          'A follow-up consultation to review findings and discuss implementation',
        ],
        methodology: `We begin with a detailed intake to understand your operation, investment, or planned activity. We then conduct independent research across all three risk categories, drawing on local regulatory knowledge, industry contacts, and market intelligence. Our analysis is delivered as a written report — structured for decision-makers, not consultants.`,
        faqs: [
          {
            question: 'Is this a legal opinion?',
            answer:
              'No. TXICRO provides advisory risk assessment, not legal advice. For legal questions, we recommend engaging qualified attorneys — and we can suggest professionals in the region.',
          },
          {
            question: 'Do you assess risks for operations in Mexico?',
            answer:
              'Our assessment focuses on the US side of cross-border operations. For risks specific to Mexican operations, we can coordinate with partners who specialize in the Mexican regulatory environment.',
          },
          {
            question: 'How is this different from due diligence?',
            answer:
              'Due diligence is typically transaction-specific and backward-looking. Risk assessment is forward-looking — it evaluates what could affect your operation going forward, not just what has happened in the past.',
          },
        ],
        relatedServices: [
          { title: 'International Market Entry Advisory', href: '/services/market-entry' },
          { title: 'Partner & Stakeholder Mapping', href: '/services/stakeholder-mapping' },
          { title: 'Strategic Briefings & Advisory Reports', href: '/services/strategic-briefings' },
        ],
        caseStudyExcerpt:
          'See how TXICRO has helped organizations identify and mitigate cross-border risks before committing capital in our advisory work portfolio.',
      }}
    />
    </>
  );
}
