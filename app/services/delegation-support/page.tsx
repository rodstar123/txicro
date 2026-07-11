import { generatePageMetadata } from "@/lib/metadata";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata = generatePageMetadata({
  title: "Delegation & Trade Mission Support | TXICRO",
  description:
    "End-to-end coordination for visiting trade delegations and business missions to the Rio Grande Valley. Agenda, briefings, and logistics.",
  path: "/services/delegation-support",
  locale: "en",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Delegation & Trade Mission Support",
  description:
    "End-to-end coordination for visiting trade delegations and business missions to the Rio Grande Valley. Agenda, briefings, and logistics.",
  url: "https://txicro.com/services/delegation-support",
  provider: {
    "@type": "ProfessionalService",
    name: "TXICRO",
    url: "https://txicro.com",
  },
  areaServed: [{ "@type": "State", name: "Texas" }],
};

export default function DelegationSupportPage() {
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
          { label: "Delegation Support", href: "/services/delegation-support" },
        ]}
        service={{
          title: "Delegation & Trade Mission Support",
          subtitle:
            "Professional coordination for visiting delegations and trade missions — from agenda design to post-visit follow-up, executed with the precision your visit demands.",
          description: `A trade delegation or business mission to the Rio Grande Valley is a significant investment of time, resources, and organizational attention. The difference between a productive visit and a wasted one often comes down to preparation, coordination, and follow-through — the three things that are hardest to manage from a distance.

TXICRO provides end-to-end support for visiting delegations. We design the agenda, identify and vet meeting partners, prepare briefing documents, manage logistics, provide cultural and protocol guidance, and coordinate follow-up after the visit concludes.

Our delegation support covers pre-visit planning including objective definition, agenda design, and meeting partner identification. Participant vetting and matching to ensure every meeting has a clear purpose and potential for productive outcomes. Pre-meeting briefings for both the delegation and the host organizations. On-the-ground logistics including transportation, venues, meals, and interpreting if needed. Cultural and protocol guidance for cross-border business interactions. Real-time coordination throughout the visit to handle changes, opportunities, and issues. Post-visit follow-up including a summary report, action items, and warm introductions to continue active conversations.`,
          audience: [
            "Government-sponsored trade promotion delegations visiting South Texas for business development",
            "Private business delegations conducting site selection or partner identification visits",
            "Institutional organizations coordinating cross-border exchange programs or study tours",
            "Chambers of commerce organizing member missions to the US-Mexico border region",
            "Individual executives or small groups making exploratory visits to the Rio Grande Valley",
          ],
          deliverables: [
            "A professionally structured visit agenda tailored to your delegation's objectives and size",
            "Vetted meeting partners across the sectors and institutions most relevant to your goals",
            "Pre-meeting briefing packages for every session on the agenda",
            "Full logistics coordination for the duration of the visit",
            "A post-visit summary report with meeting outcomes, contact information, and recommended next steps for each active conversation",
          ],
          methodology: `We begin planning weeks before the delegation arrives. Every meeting on the agenda is there for a reason — matched to the delegation's stated objectives. We prepare both sides: the delegation receives briefings on who they are meeting and why, and the host organizations receive context on the delegation's background and interests. During the visit, a TXICRO coordinator manages the schedule and handles any adjustments in real time. After the visit, we produce a comprehensive follow-up report and coordinate introductions for conversations that should continue.`,
          faqs: [
            {
              question:
                "How far in advance should we engage TXICRO for a delegation visit?",
              answer:
                "Ideally four to six weeks before the visit dates. This allows adequate time for meeting partner identification, vetting, scheduling, and briefing preparation.",
            },
            {
              question:
                "Can you coordinate visits outside the Rio Grande Valley?",
              answer:
                "Our primary coordination capability is in the RGV and South Texas. For visits that include stops in Houston, San Antonio, or Austin, we can provide guidance and referrals to local coordinators.",
            },
            {
              question: "Do you provide interpreting services?",
              answer:
                "TXICRO's principal advisor is bilingual in English and Spanish. For delegations requiring additional language support, we coordinate professional interpreting services.",
            },
            {
              question: "What size delegations do you support?",
              answer:
                "We have coordinated visits for delegations ranging from three to twenty-five participants. The agenda structure and logistics approach scale to the group size.",
            },
          ],
          relatedServices: [
            {
              title: "Partner & Stakeholder Mapping",
              href: "/services/stakeholder-mapping",
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
            "See how TXICRO has coordinated productive trade delegation visits to the Rio Grande Valley in our advisory work portfolio.",
        }}
      />
    </>
  );
}
