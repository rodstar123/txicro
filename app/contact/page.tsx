import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import AssessmentForm from "@/components/AssessmentForm";
import ContactInfo from "@/components/contact/ContactInfo";
import LeadMagnet from "@/components/contact/LeadMagnet";
import { LEAD_MAGNET_ENABLED } from "@/lib/flags";
import { Container, GoldDivider } from "@/components/ui";

export const metadata = generatePageMetadata({
  title: "Request an Assessment | Contact TXICRO",
  description:
    "Begin with clarity — request a structured assessment from TXICRO for your international business needs in Texas.",
  path: "/contact",
  locale: "en",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Texas International Commerce & Relations Office",
  alternateName: "TXICRO",
  url: "https://txicro.com",
  logo: "https://txicro.com/images/txicro-logo.png",
  description:
    "Fee-based cross-border advisory for international companies, investors, and institutions entering Texas through the Rio Grande Valley.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "315 W Nolana Ave, Suite G-6",
    addressLocality: "McAllen",
    addressRegion: "TX",
    postalCode: "78504",
    addressCountry: "US",
  },
  email: "info@txicro.com",
  openingHours: "Mo-Fr 09:00-17:00",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Mexico" },
  ],
  founder: {
    "@type": "Person",
    name: "Noe Rodriguez",
    jobTitle: "Founder & Principal Advisor",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {/* Intro Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <Container className="text-center">
          <h1 className="text-white font-heading text-4xl sm:text-5xl font-bold">
            Request an Assessment
          </h1>
          <p className="text-gold text-xl mt-2 font-body">Begin with Clarity</p>
          <GoldDivider width="md" className="mt-6 mb-0" />
          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-base sm:text-lg font-body leading-relaxed">
            An initial assessment provides a structured understanding of
            opportunities, risks, and next steps — before major decisions are
            made.
          </p>
        </Container>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs
            items={[{ label: "Contact", href: "/contact" }]}
            locale="en"
          />
        </Container>
      </div>

      {/* Assessment Form */}
      <section className="bg-white py-section-mobile sm:py-section">
        <Container className="max-w-3xl">
          <AssessmentForm locale="en" />
        </Container>
      </section>

      {/* Lead Magnet — hidden until the Gateway Guide PDF exists and the form
          actually delivers it. See lib/flags.ts. */}
      {LEAD_MAGNET_ENABLED && <LeadMagnet locale="en" />}

      {/* Contact Info + Map */}
      <ContactInfo locale="en" />
    </>
  );
}
