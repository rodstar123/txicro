import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import EventsHero from "@/components/events/EventsHero";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import SpeakingTopics from "@/components/events/SpeakingTopics";
import PastEvents from "@/components/events/PastEvents";

export const metadata = generatePageMetadata({
  title: "Eventos y Conferencias | TXICRO | McAllen, TX",
  description:
    "TXICRO participa en eventos comerciales, misiones de negocios y encuentros de comercio transfronterizo en el Valle del Río Grande.",
  path: "/es/events",
  locale: "es",
});

export default function EventsPageES() {
  return (
    <>
      <EventsHero locale="es" />

      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs
            items={[{ label: "Eventos", href: "/es/events" }]}
            locale="es"
          />
        </Container>
      </div>

      <UpcomingEvents locale="es" />
      <SpeakingTopics locale="es" />
      <PastEvents locale="es" />

      <CTASection
        locale="es"
        heading="\u00bfInteresado en Tener a TXICRO en Su Evento?"
        subtext="Ya sea que est\u00e9 organizando una misi\u00f3n comercial, un evento de c\u00e1mara, una conferencia universitaria o un congreso de negocios, Noe Rodriguez aporta una perspectiva \u00fanica sobre el comercio transfronterizo enraizada en d\u00e9cadas de experiencia pr\u00e1ctica."
        buttonText="Cont\u00e1ctenos Sobre Conferencias"
        buttonHref="/es/contact"
      />
    </>
  );
}
