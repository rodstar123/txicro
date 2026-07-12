import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ValueProps from "@/components/home/ValueProps";
import NoePreview from "@/components/home/NoePreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhoWeServe from "@/components/home/WhoWeServe";
import WhyMcAllenPreview from "@/components/home/WhyMcAllenPreview";
import AdvisoryProcess from "@/components/home/AdvisoryProcess";
import InsightsPreview from "@/components/home/InsightsPreview";
import CTASection from "@/components/CTASection";

export const metadata = generatePageMetadata({
  title: "TXICRO | Asesoría Comercial Transfronteriza | McAllen, TX",
  description:
    "Asesoría independiente para organizaciones internacionales que ingresan o se expanden en Texas. Bilingüe, basada en McAllen.",
  path: "/es",
  locale: "es",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Texas International Commerce & Relations Office",
  alternateName: "TXICRO",
  url: "https://txicro.com",
  logo: "https://txicro.com/images/txicro-logo.png",
  description:
    "Asesoría transfronteriza para empresas internacionales, inversionistas e instituciones que ingresan a Texas a través del Valle del Río Grande.",
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
    jobTitle: "Fundador y Asesor Principal",
  },
};

export default function HomePageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <HeroSection locale="es" />
      <ProblemSection locale="es" />
      <ValueProps locale="es" />
      <NoePreview locale="es" />
      <ServicesOverview locale="es" />
      <WhoWeServe locale="es" />
      <WhyMcAllenPreview locale="es" />
      <AdvisoryProcess locale="es" />
      <InsightsPreview locale="es" />
      <CTASection
        locale="es"
        variant="dark"
        subtext="Una evaluación inicial proporciona un entendimiento estructurado de las oportunidades, riesgos y próximos pasos — antes de que se tomen decisiones importantes. Esta no es una conversación de ventas. Es una evaluación disciplinada para ayudarle a determinar si debe proceder y cómo hacerlo."
      />
    </>
  );
}
