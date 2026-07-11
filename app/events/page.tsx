import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import EventsHero from "@/components/events/EventsHero";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import SpeakingTopics from "@/components/events/SpeakingTopics";
import PastEvents from "@/components/events/PastEvents";

export const metadata = generatePageMetadata({
  title: "Events & Speaking | TXICRO | McAllen, TX",
  description:
    "TXICRO participates in trade events, business missions, and cross-border commerce gatherings in the Rio Grande Valley.",
  path: "/events",
  locale: "en",
});

export default function EventsPage() {
  return (
    <>
      <EventsHero locale="en" />

      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs
            items={[{ label: "Events", href: "/events" }]}
            locale="en"
          />
        </Container>
      </div>

      <UpcomingEvents locale="en" />
      <SpeakingTopics locale="en" />
      <PastEvents locale="en" />

      <CTASection
        locale="en"
        heading="Interested in Having TXICRO at Your Event?"
        subtext="Whether you are organizing a trade mission, a chamber event, a university lecture, or a business conference, Noe Rodriguez brings a unique perspective on cross-border commerce rooted in decades of practical experience."
        buttonText="Contact Us About Speaking"
        buttonHref="/contact"
      />
    </>
  );
}
