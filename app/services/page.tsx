import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceCards from "@/components/services/ServiceCards";
import EngagementTiers from "@/components/services/EngagementTiers";
import AudienceSegments from "@/components/services/AudienceSegments";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CTASection from "@/components/CTASection";
import { Container } from "@/components/ui";

export const metadata = generatePageMetadata({
  title: "Advisory Services | TXICRO | McAllen, TX",
  description:
    "Fee-based advisory for market entry, cross-border risk, stakeholder mapping, trade relations, briefings, and delegation support in Texas.",
  path: "/services",
  locale: "en",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero locale="en" />
      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs
            items={[{ label: "Services", href: "/services" }]}
            locale="en"
          />
        </Container>
      </div>
      <ServiceIntro locale="en" />
      <ServiceCards locale="en" />
      <EngagementTiers locale="en" />
      <AudienceSegments locale="en" />
      <ServiceProcess locale="en" />
      <ServiceFAQ locale="en" />
      <CTASection
        locale="en"
        heading="Ready to Begin?"
        subtext="Every engagement starts with a conversation. Tell us about your objectives, and we will respond with a clear assessment of how TXICRO can help — along with a transparent fee proposal."
      />
    </>
  );
}
