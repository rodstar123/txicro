import { Container, GoldDivider } from "@/components/ui";

interface ServiceIntroProps {
  locale: "en" | "es";
}

const content = {
  en: {
    sectionTitle: "How We Work",
    paragraphs: [
      "TXICRO provides structured advisory services designed to reduce risk, accelerate understanding, and support better decisions for international organizations operating in or entering the Texas market.",
      "Every engagement begins with assessment \u2014 not assumptions. We do not sell outcomes. We sell analysis, preparation, and coordination. Our fee-based model means we have no incentive to recommend a particular transaction, partnership, or location. The only incentive is to give you the clearest picture possible of your opportunities, risks, and options.",
      "We advise and coordinate. We do not represent parties in transactions. We do not accept commissions, referral fees, or any form of transaction-based compensation. This structural independence is not a marketing statement \u2014 it is how every engagement is built.",
    ],
  },
  es: {
    sectionTitle: "C\u00f3mo Trabajamos",
    paragraphs: [
      "TXICRO proporciona servicios de asesor\u00eda estructurados dise\u00f1ados para reducir riesgos, acelerar la comprensi\u00f3n y apoyar mejores decisiones para organizaciones internacionales que operan en Texas o buscan ingresar a este mercado.",
      "Cada compromiso comienza con evaluaci\u00f3n \u2014 no con suposiciones. No vendemos resultados. Vendemos an\u00e1lisis, preparaci\u00f3n y coordinaci\u00f3n. Nuestro modelo basado en honorarios significa que no tenemos ning\u00fan incentivo para recomendar una transacci\u00f3n, sociedad o ubicaci\u00f3n en particular. El \u00fanico incentivo es darle la imagen m\u00e1s clara posible de sus oportunidades, riesgos y opciones.",
      "Asesoramos y coordinamos. No representamos partes en transacciones. No aceptamos comisiones, tarifas por referencia ni ninguna forma de compensaci\u00f3n basada en transacciones. Esta independencia estructural no es una declaraci\u00f3n de marketing \u2014 es como se construye cada compromiso.",
    ],
  },
};

export default function ServiceIntro({ locale }: ServiceIntroProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-white">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold text-center">
          {t.sectionTitle}
        </h2>
        <GoldDivider width="md" className="mt-4 mb-10" />
        <div className="max-w-3xl mx-auto space-y-6">
          {t.paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-body text-slate text-base sm:text-lg leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
