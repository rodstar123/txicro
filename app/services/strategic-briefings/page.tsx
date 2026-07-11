import { generatePageMetadata } from "@/lib/metadata";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata = generatePageMetadata({
  title: "Strategic Briefings & Advisory Reports | TXICRO",
  description:
    "Independent written briefings for leadership teams. Decision memos, board-ready documents, and executive summaries on cross-border commerce.",
  path: "/services/strategic-briefings",
  locale: "en",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Strategic Briefings & Advisory Reports",
  description:
    "Independent written briefings for leadership teams. Decision memos, board-ready documents, and executive summaries on cross-border commerce.",
  url: "https://txicro.com/services/strategic-briefings",
  provider: {
    "@type": "ProfessionalService",
    name: "TXICRO",
    url: "https://txicro.com",
  },
  areaServed: [{ "@type": "State", name: "Texas" }],
};

export default function StrategicBriefingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailPage
        locale="en"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          {
            label: "Strategic Briefings",
            href: "/services/strategic-briefings",
          },
        ]}
        service={{
          title: "Strategic Briefings & Advisory Reports",
          subtitle:
            "Independent, written analysis that leadership teams can trust — because it was produced by an advisor with no stake in the outcome.",
          description: `Decision-makers need documents, not conversations. They need written analysis they can review, share, challenge, and act on. They need briefings that present findings objectively, acknowledge uncertainty honestly, and recommend next steps clearly.

TXICRO produces strategic briefings and advisory reports for leadership teams, boards of directors, institutional partners, and government stakeholders. Every document we produce is independent — meaning it reflects our honest assessment, not a predetermined conclusion.

Our briefing services include decision memos for principals and C-suite executives considering cross-border opportunities. Board-ready briefing documents formatted for governance audiences. Executive summaries that distill complex situations into actionable intelligence. Market intelligence reports covering specific sectors, corridors, or geographies. Policy briefs for institutional and government audiences on cross-border economic topics.`,
          audience: [
            "CEOs and leadership teams evaluating cross-border opportunities who need written analysis for their decision-making process",
            "Boards of directors that require independent briefing documents before approving international investments",
            "Institutional partners including government agencies and trade bodies that need objective research",
            "Organizations that have internal analysis but want an independent second opinion in writing",
          ],
          deliverables: [
            "A professionally formatted written document tailored to your audience and purpose",
            "Clear findings, risk factors, and recommendations supported by evidence",
            "An executive summary that captures the essential points in one to two pages",
            "Source documentation and methodology transparency",
            "A presentation session where we walk your team through the findings and answer questions",
          ],
          methodology: `Every briefing begins with a scoping conversation to define the audience, purpose, and key questions. We then conduct independent research, synthesize findings, and produce a document that meets the professional standards expected by institutional and governance audiences. Our reports are designed to withstand scrutiny — because the best briefings are the ones that still hold up six months later.`,
          faqs: [
            {
              question: "Can you produce briefings in Spanish?",
              answer:
                "Yes. TXICRO produces briefings in both English and Spanish. For bilingual audiences, we can produce a single document with executive summaries in both languages.",
            },
            {
              question: "How long is a typical briefing?",
              answer:
                "It depends on scope. Decision memos are typically five to ten pages. Full strategic briefings range from twenty to fifty pages. Executive summaries are one to two pages.",
            },
            {
              question:
                "Can you present the briefing to our board or leadership team?",
              answer:
                "Yes. We offer presentation sessions where we walk your team through the findings, provide context, and answer questions in real time.",
            },
          ],
          relatedServices: [
            {
              title: "Cross-Border Strategy & Risk Assessment",
              href: "/services/cross-border-risk",
            },
            {
              title: "Trade & Institutional Relations Guidance",
              href: "/services/trade-relations",
            },
            {
              title: "International Market Entry Advisory",
              href: "/services/market-entry",
            },
          ],
          caseStudyExcerpt:
            "See how TXICRO has delivered independent strategic analysis for leadership teams and institutional partners in our advisory work portfolio.",
        }}
      />
    </>
  );
}
