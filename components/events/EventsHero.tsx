import { Container, GoldDivider } from "@/components/ui";

interface EventsHeroProps {
  locale: "en" | "es";
}

const content = {
  en: {
    headline: "Events & Speaking",
    subheadline:
      "TXICRO is active in the cross-border commerce community \u2014 participating in trade events, hosting delegations, and sharing insights on international business in the Rio Grande Valley.",
  },
  es: {
    headline: "Eventos y Conferencias",
    subheadline:
      "TXICRO es activo en la comunidad de comercio transfronterizo \u2014 participando en eventos comerciales, recibiendo delegaciones y compartiendo perspectivas sobre negocios internacionales en el Valle del R\u00edo Grande.",
  },
};

export default function EventsHero({ locale }: EventsHeroProps) {
  const t = content[locale];

  return (
    <section className="bg-navy py-16 lg:py-20">
      <Container>
        <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
          {t.headline}
        </h1>
        <p className="font-body text-lg text-gray-300 max-w-3xl">
          {t.subheadline}
        </p>
        <GoldDivider width="sm" className="mt-6 !mx-0" />
      </Container>
    </section>
  );
}
