import { Container, GoldDivider } from "@/components/ui";

interface ProblemSectionProps {
  locale: "en" | "es";
}

const content = {
  en: {
    heading: "Most advice at the border isn't free — it's commissioned.",
    body: "Brokers, agents, and intermediaries get paid when your deal closes, whether or not it's the right deal for you. TXICRO exists because international companies deserve one advisor in the room whose only incentive is your best decision. You pay a disclosed fee. You get honest analysis. That's the entire model.",
  },
  es: {
    heading:
      "La mayoría de la asesoría en la frontera no es gratis — es comisionada.",
    body: "Corredores, agentes e intermediarios cobran cuando su transacción se cierra, sea o no la decisión correcta para usted. TXICRO existe porque las empresas internacionales merecen un asesor en la mesa cuyo único incentivo sea su mejor decisión. Usted paga un honorario transparente. Recibe un análisis honesto. Ese es todo el modelo.",
  },
};

export default function ProblemSection({ locale }: ProblemSectionProps) {
  const t = content[locale];

  return (
    <section className="bg-navy py-section-mobile sm:py-section">
      <Container className="max-w-3xl text-center">
        <h2 className="font-heading text-3xl sm:text-4xl text-gold font-bold text-balance leading-tight">
          {t.heading}
        </h2>
        <GoldDivider width="md" className="mt-6" />
        <p className="font-body text-gray-300 text-base sm:text-lg leading-relaxed mt-6">
          {t.body}
        </p>
      </Container>
    </section>
  );
}
