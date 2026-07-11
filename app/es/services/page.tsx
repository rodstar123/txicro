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
  title: "Servicios de Asesoría | TXICRO | McAllen, TX",
  description:
    "Asesoría para entrada al mercado, evaluación de riesgos transfronterizos, mapeo de actores clave, relaciones comerciales e informes en Texas.",
  path: "/es/services",
  locale: "es",
});

export default function ServicesPageES() {
  return (
    <>
      <ServicesHero locale="es" />
      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs
            items={[{ label: "Servicios", href: "/es/services" }]}
            locale="es"
          />
        </Container>
      </div>
      <ServiceIntro locale="es" />
      <ServiceCards locale="es" />
      <EngagementTiers locale="es" />
      <AudienceSegments locale="es" />
      <ServiceProcess locale="es" />
      <ServiceFAQ locale="es" />
      <CTASection
        locale="es"
        heading="\u00bfListo para Comenzar?"
        subtext="Cada compromiso comienza con una conversaci\u00f3n. Cu\u00e9ntenos sobre sus objetivos y responderemos con una evaluaci\u00f3n clara de c\u00f3mo TXICRO puede ayudar \u2014 junto con una propuesta transparente de honorarios."
      />
    </>
  );
}
