import { Container, GoldDivider } from "@/components/ui";

interface PastEventsProps {
  locale: "en" | "es";
}

const content = {
  en: {
    title: "Past Events",
    placeholder:
      "As TXICRO participates in events throughout 2026, this section will feature recaps, photos, and key takeaways from trade missions, speaking engagements, and community gatherings.",
  },
  es: {
    title: "Eventos Pasados",
    placeholder:
      "A medida que TXICRO participe en eventos durante 2026, esta secci\u00f3n presentar\u00e1 res\u00famenes, fotos y conclusiones clave de misiones comerciales, conferencias y reuniones comunitarias.",
  },
};

export default function PastEvents({ locale }: PastEventsProps) {
  const t = content[locale];

  return (
    <section className="bg-white py-section-mobile sm:py-section">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
          {t.title}
        </h2>
        <GoldDivider width="sm" className="mb-8 !mx-0" />

        <p className="font-body text-slate text-lg leading-relaxed italic mb-10 max-w-3xl">
          {t.placeholder}
        </p>

        {/* Photo gallery placeholder */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-video border-2 border-dashed border-gray-200 rounded-card flex items-center justify-center bg-gray-50"
            >
              <svg
                className="w-8 h-8 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z"
                />
              </svg>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
