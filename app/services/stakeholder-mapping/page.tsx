import { generatePageMetadata } from "@/lib/metadata";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata = generatePageMetadata({
  title: "Stakeholder Mapping | Partner Identification | TXICRO",
  description:
    "Identify and sequence relationships with key stakeholders in Texas — government agencies, chambers, EDOs, and private sector partners.",
  path: "/services/stakeholder-mapping",
  locale: "en",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Partner & Stakeholder Mapping",
  description:
    "Identify and sequence relationships with key stakeholders in Texas — government agencies, chambers, EDOs, and private sector partners.",
  url: "https://txicro.com/services/stakeholder-mapping",
  provider: {
    "@type": "ProfessionalService",
    name: "TXICRO",
    url: "https://txicro.com",
  },
  areaServed: [{ "@type": "State", name: "Texas" }],
};

export default function StakeholderMappingPage() {
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
            label: "Stakeholder Mapping",
            href: "/services/stakeholder-mapping",
          },
        ]}
        service={{
          title: "Partner & Stakeholder Mapping",
          subtitle:
            "Knowing who matters — and in what order to approach them — is the difference between a smooth entry and months of wasted effort.",
          description: `In any new market, relationships determine outcomes. The right introduction at the right time can open doors that no amount of capital can buy. The wrong approach — or approaching the wrong person first — can close those doors permanently.

TXICRO's Stakeholder Mapping service identifies the organizations and individuals most relevant to your objectives, assesses their role and influence, and designs an engagement sequence that builds credibility systematically rather than randomly.

We map stakeholders across public institutions including economic development corporations, city and county government offices, and state-level agencies. Private sector partners including potential customers, suppliers, service providers, and joint venture candidates. Industry associations and trade groups that shape policy and connect members. Chambers of commerce at local, regional, and binational levels. Academic and research institutions including universities and workforce development programs.`,
          audience: [
            "International companies entering a market where they have no existing relationships",
            "Trade delegations that need structured access to relevant stakeholders during a limited visit",
            "Foreign investors seeking to understand the institutional landscape before committing",
            "Organizations that have attempted to build relationships informally and need a more systematic approach",
          ],
          deliverables: [
            "A comprehensive stakeholder map with profiles of key organizations and individuals",
            "An engagement sequencing plan that recommends who to approach first, second, and third — and why",
            "Introduction coordination for stakeholders where TXICRO has existing relationships",
            "A briefing document for each planned meeting or introduction",
            "A follow-up tracking system to maintain momentum after initial contact",
          ],
          methodology: `We start by understanding your objectives and the type of stakeholders most relevant to your success. We then draw on decades of local relationships to map the landscape — not from a database, but from direct knowledge of who does what, who influences whom, and how decisions actually get made in the Rio Grande Valley.`,
          faqs: [
            {
              question: "Do you make introductions directly?",
              answer:
                "Yes, where we have existing relationships. We coordinate introductions with appropriate context and briefing so that both parties understand the purpose and potential of the meeting.",
            },
            {
              question: "How is this different from a business directory?",
              answer:
                "A directory gives you names. Stakeholder mapping gives you strategy — who matters for your specific objectives, in what order, and with what approach. It is the difference between a phone book and a game plan.",
            },
          ],
          relatedServices: [
            {
              title: "International Market Entry Advisory",
              href: "/services/market-entry",
            },
            {
              title: "Trade & Institutional Relations Guidance",
              href: "/services/trade-relations",
            },
            {
              title: "Delegation & Trade Mission Support",
              href: "/services/delegation-support",
            },
          ],
          caseStudyExcerpt:
            "See how TXICRO has helped organizations identify and connect with the right stakeholders in our advisory work portfolio.",
        }}
      />
    </>
  );
}
