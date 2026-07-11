import { generatePageMetadata } from "@/lib/metadata";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata = generatePageMetadata({
  title: "Trade & Institutional Relations | TXICRO",
  description:
    "Navigate institutional frameworks, government agencies, trade bodies, and chambers with protocol-aware strategy from McAllen, TX.",
  path: "/services/trade-relations",
  locale: "en",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Trade & Institutional Relations Guidance",
  description:
    "Navigate institutional frameworks, government agencies, trade bodies, and chambers with protocol-aware strategy from McAllen, TX.",
  url: "https://txicro.com/services/trade-relations",
  provider: {
    "@type": "ProfessionalService",
    name: "TXICRO",
    url: "https://txicro.com",
  },
  areaServed: [{ "@type": "State", name: "Texas" }],
};

export default function TradeRelationsPage() {
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
          { label: "Trade Relations", href: "/services/trade-relations" },
        ]}
        service={{
          title: "Trade & Institutional Relations Guidance",
          subtitle:
            "Navigating the institutional landscape with the right protocol, the right boundaries, and the right timing.",
          description: `International commerce does not operate in a vacuum. It operates within institutional frameworks — government agencies, trade promotion bodies, economic development corporations, chambers of commerce, and regulatory entities. Each has its own culture, its own protocol, and its own expectations for how external organizations should engage.

TXICRO provides guidance for organizations that need to navigate these frameworks without missteps. We help you understand which institutions are relevant to your objectives, how they operate, what they expect from external engagement, and where the boundaries are.

This is particularly important for organizations with aspirations that touch diplomatic, governmental, or quasi-governmental relationships. The difference between an appropriate approach and an inappropriate one can be subtle — but the consequences are not.

Our guidance covers institutional relationship strategy and engagement planning, protocol awareness for government and quasi-governmental interactions, boundary guidance to ensure appropriate separation between commercial and institutional activities, chamber of commerce and trade association engagement strategy, and preparation for meetings with government officials or institutional stakeholders.`,
          audience: [
            "Organizations whose cross-border activities involve government or institutional stakeholders",
            "Companies seeking to build relationships with economic development agencies",
            "Trade promotion organizations coordinating with US counterparts",
            "Any organization that needs to engage institutional stakeholders with professionalism and protocol awareness",
          ],
          deliverables: [
            "A protocol-aware strategy brief tailored to your institutional engagement objectives",
            "An institutional relationship overview mapping relevant government and quasi-governmental bodies",
            "Boundary guidelines ensuring your engagement approach maintains appropriate separation",
            "Meeting preparation support including briefing documents and protocol guidance",
            "Ongoing advisory support for organizations with active institutional relationships",
          ],
          methodology: `TXICRO operates with the professionalism expected by institutional and government stakeholders. Our guidance is rooted in an understanding of how these institutions work from the inside — not just what their websites say. We help you approach institutional relationships with the seriousness they require.`,
          faqs: [
            {
              question:
                "Do you lobby or represent clients before government bodies?",
              answer:
                "No. TXICRO advises and prepares. We do not act as registered lobbyists or representatives before government agencies.",
            },
            {
              question:
                "Can you help with consular or diplomatic relationships?",
              answer:
                "We can provide guidance on appropriate engagement with consular and diplomatic entities, including protocol awareness and preparation. However, we do not represent clients in diplomatic matters.",
            },
          ],
          relatedServices: [
            {
              title: "Partner & Stakeholder Mapping",
              href: "/services/stakeholder-mapping",
            },
            {
              title: "Strategic Briefings & Advisory Reports",
              href: "/services/strategic-briefings",
            },
            {
              title: "Delegation & Trade Mission Support",
              href: "/services/delegation-support",
            },
          ],
          caseStudyExcerpt:
            "See how TXICRO has helped organizations navigate institutional frameworks with protocol-aware strategy in our advisory work portfolio.",
        }}
      />
    </>
  );
}
