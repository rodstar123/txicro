import { Container, GoldDivider, Button } from "@/components/ui";

interface EngagementTiersProps {
  locale: "en" | "es";
}

const content = {
  en: {
    sectionTitle: "How to Engage TXICRO",
    sectionSubtitle:
      "Three engagement options designed for different stages of your cross-border journey.",
    tiers: [
      {
        title: "Initial Assessment",
        badge: "One-time engagement",
        description:
          "The starting point for every new relationship. A structured evaluation of your objectives, readiness, and the landscape you are entering \u2014 delivered as a written report with clear findings and recommended next steps.",
        items: [
          "Confidential intake consultation (60-90 minutes)",
          "Written assessment report with findings, risk factors, and recommendations",
          "Go/no-go recommendation with supporting rationale",
          "Follow-up call to discuss findings and answer questions",
        ],
        bestFor:
          "Organizations in the early stages of evaluating Texas or the Rio Grande Valley. You need clarity before making any commitments.",
      },
      {
        title: "Strategic Advisory Package",
        badge: "Project-based engagement",
        description:
          "A comprehensive engagement scoped to a defined objective \u2014 market entry, risk assessment, stakeholder mapping, or delegation coordination. Includes all deliverables specific to the service, plus ongoing access to Noe Rodriguez throughout the engagement.",
        items: [
          "Full scope of the selected service(s) with all deliverables",
          "Direct access to the principal advisor throughout the engagement",
          "Written reports, briefings, and documentation",
          "Coordination of introductions and meetings where applicable",
          "Post-engagement summary with action items",
        ],
        bestFor:
          "Organizations ready to act on a specific objective. You have identified the opportunity and need expert support to execute with precision.",
      },
      {
        title: "Ongoing Retainer",
        badge: "Monthly engagement",
        description:
          "Continuous advisory support for organizations with active or expanding cross-border operations. Includes regular strategy sessions, ongoing stakeholder coordination, and priority access to TXICRO\u2019s advisory resources.",
        items: [
          "Monthly strategy sessions with the principal advisor",
          "Ongoing stakeholder coordination and introduction management",
          "Priority response on emerging questions and opportunities",
          "Quarterly strategic review and updated recommendations",
          "Access to all TXICRO advisory services at retainer rates",
        ],
        bestFor:
          "Organizations with ongoing operations in the region that need a permanent advisory partner. You want someone watching the landscape and keeping you informed.",
      },
    ],
    whatYouReceive: "What you receive:",
    bestForLabel: "Best for:",
    pricingNote:
      "Fees vary by scope and complexity. Contact TXICRO for a confidential discussion of your needs and a transparent fee proposal. All fees are disclosed upfront \u2014 there are no hidden costs, commissions, or transaction-based charges.",
    cta: "Request a fee proposal",
    ctaHref: "/contact",
  },
  es: {
    sectionTitle: "C\u00f3mo Contratar a TXICRO",
    sectionSubtitle:
      "Tres opciones de contrataci\u00f3n dise\u00f1adas para diferentes etapas de su recorrido transfronterizo.",
    tiers: [
      {
        title: "Evaluaci\u00f3n Inicial",
        badge: "Compromiso \u00fanico",
        description:
          "El punto de partida para toda nueva relaci\u00f3n. Una evaluaci\u00f3n estructurada de sus objetivos, preparaci\u00f3n y el panorama al que ingresa \u2014 entregada como un informe escrito con hallazgos claros y pr\u00f3ximos pasos recomendados.",
        items: [
          "Consulta confidencial de ingreso (60-90 minutos)",
          "Informe de evaluaci\u00f3n escrito con hallazgos, factores de riesgo y recomendaciones",
          "Recomendaci\u00f3n de proceder o no, con fundamento de respaldo",
          "Llamada de seguimiento para discutir hallazgos y responder preguntas",
        ],
        bestFor:
          "Organizaciones en etapas tempranas de evaluaci\u00f3n de Texas o el Valle del R\u00edo Grande. Necesita claridad antes de asumir cualquier compromiso.",
      },
      {
        title: "Paquete de Asesor\u00eda Estrat\u00e9gica",
        badge: "Compromiso por proyecto",
        description:
          "Un compromiso integral definido para un objetivo espec\u00edfico \u2014 entrada al mercado, evaluaci\u00f3n de riesgos, mapeo de actores clave o coordinaci\u00f3n de delegaciones. Incluye todos los entregables espec\u00edficos del servicio, m\u00e1s acceso directo a Noe Rodriguez durante todo el compromiso.",
        items: [
          "Alcance completo del servicio(s) seleccionado(s) con todos los entregables",
          "Acceso directo al asesor principal durante todo el compromiso",
          "Informes escritos, presentaciones y documentaci\u00f3n",
          "Coordinaci\u00f3n de presentaciones y reuniones donde sea aplicable",
          "Resumen posterior al compromiso con elementos de acci\u00f3n",
        ],
        bestFor:
          "Organizaciones listas para actuar sobre un objetivo espec\u00edfico. Ha identificado la oportunidad y necesita apoyo experto para ejecutar con precisi\u00f3n.",
      },
      {
        title: "Retenci\u00f3n Continua",
        badge: "Compromiso mensual",
        description:
          "Apoyo de asesor\u00eda continuo para organizaciones con operaciones transfronterizas activas o en expansi\u00f3n. Incluye sesiones regulares de estrategia, coordinaci\u00f3n continua de actores clave y acceso prioritario a los recursos de asesor\u00eda de TXICRO.",
        items: [
          "Sesiones mensuales de estrategia con el asesor principal",
          "Coordinaci\u00f3n continua de actores clave y gesti\u00f3n de presentaciones",
          "Respuesta prioritaria a preguntas y oportunidades emergentes",
          "Revisi\u00f3n estrat\u00e9gica trimestral con recomendaciones actualizadas",
          "Acceso a todos los servicios de asesor\u00eda de TXICRO a tarifas de retenci\u00f3n",
        ],
        bestFor:
          "Organizaciones con operaciones activas en la regi\u00f3n que necesitan un socio asesor permanente. Usted quiere a alguien observando el panorama y manteni\u00e9ndole informado.",
      },
    ],
    whatYouReceive: "Lo que recibe:",
    bestForLabel: "Ideal para:",
    pricingNote:
      "Los honorarios var\u00edan seg\u00fan el alcance y la complejidad. Contacte a TXICRO para una discusi\u00f3n confidencial de sus necesidades y una propuesta transparente de honorarios. Todos los honorarios se divulgan por adelantado \u2014 no hay costos ocultos, comisiones ni cargos basados en transacciones.",
    cta: "Solicitar una propuesta de honorarios",
    ctaHref: "/es/contact",
  },
};

export default function EngagementTiers({ locale }: EngagementTiersProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold">
            {t.sectionTitle}
          </h2>
          <p className="font-body text-slate text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            {t.sectionSubtitle}
          </p>
          <GoldDivider width="md" className="mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.tiers.map((tier, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-card p-6 lg:p-8 flex flex-col hover:border-gold transition-colors duration-200"
            >
              {/* Badge */}
              <span className="inline-block self-start text-xs font-semibold uppercase tracking-wider text-gold bg-gold/10 px-3 py-1 rounded-full font-body">
                {tier.badge}
              </span>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-navy mt-4">
                {tier.title}
              </h3>

              {/* Description */}
              <p className="font-body text-slate text-sm mt-3 leading-relaxed">
                {tier.description}
              </p>

              {/* What you receive */}
              <p className="font-heading text-sm font-semibold text-navy mt-6 mb-2">
                {t.whatYouReceive}
              </p>
              <ul className="space-y-2 flex-1">
                {tier.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm font-body text-slate"
                  >
                    <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Best for */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy font-heading">
                  {t.bestForLabel}
                </p>
                <p className="text-slate text-sm mt-1 leading-relaxed font-body">
                  {tier.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing note */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="font-body text-slate text-sm leading-relaxed">
            {t.pricingNote}
          </p>
          <div className="mt-6">
            <Button href={t.ctaHref} variant="primary" size="md">
              {t.cta} &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
