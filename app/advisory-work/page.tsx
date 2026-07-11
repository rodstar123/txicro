import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdvisoryHero from "@/components/advisory/AdvisoryHero";
import AdvisoryIntro from "@/components/advisory/AdvisoryIntro";
import CaseStudies from "@/components/advisory/CaseStudies";
import Testimonials from "@/components/advisory/Testimonials";
import CTASection from "@/components/CTASection";
import { Container } from "@/components/ui";

export const metadata = generatePageMetadata({
  title: "Advisory Work & Case Studies | TXICRO",
  description:
    "How TXICRO has helped international organizations navigate Texas market entry, cross-border risk, and trade delegation coordination in the RGV.",
  path: "/advisory-work",
  locale: "en",
});

export default function AdvisoryWorkPage() {
  return (
    <>
      <AdvisoryHero locale="en" />
      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs
            items={[{ label: "Advisory Work", href: "/advisory-work" }]}
            locale="en"
          />
        </Container>
      </div>
      <AdvisoryIntro locale="en" />
      <CaseStudies locale="en" />
      <Testimonials locale="en" />
      <CTASection
        locale="en"
        heading="Your Assessment Starts Here"
        subtext="Every case study on this page began the same way — with a confidential conversation about objectives, concerns, and timeline. Yours can begin the same way."
      />
    </>
  );
}
