import { Container, GoldDivider } from "@/components/ui";

interface CaseStudiesProps {
  locale: "en" | "es";
}

interface CaseStudy {
  number: string;
  title: string;
  situation: string;
  approach: string;
  outcome: string;
}

const content = {
  en: {
    sectionTitle: "Case Studies",
    situationLabel: "Situation",
    approachLabel: "Approach",
    outcomeLabel: "Outcome",
    cases: [
      {
        number: "01",
        title: "Market Entry Assessment for a Manufacturing Group",
        situation:
          "A mid-sized manufacturing company headquartered in Monterrey, Mexico was evaluating expansion into the United States. Leadership had identified the Rio Grande Valley as a potential location for a satellite facility, but lacked local market intelligence and had no existing relationships in the region.",
        approach:
          "TXICRO conducted a comprehensive market entry assessment, including analysis of three potential sites across McAllen, Pharr, and Edinburg. The assessment covered regulatory requirements, workforce availability, utility infrastructure, logistics access, and total cost of operations. We also mapped relevant stakeholders including the McAllen Economic Development Corporation and regional chamber contacts.",
        outcome:
          "The client received a written assessment report with a clear recommendation identifying Pharr as the optimal location based on bridge proximity and industrial zoning. The report included a twelve-month implementation timeline, estimated startup costs, and a stakeholder engagement plan. The client proceeded with site selection using our recommended partners.",
      },
      {
        number: "02",
        title: "Stakeholder Mapping for a Central American Delegation",
        situation:
          "A trade promotion organization from Central America was planning a five-day business development visit to South Texas. The delegation of twelve members, representing manufacturing, agriculture, and logistics sectors, needed structured access to relevant local stakeholders and institutions.",
        approach:
          "TXICRO designed the delegation itinerary, identified and vetted twenty-three potential meeting partners, coordinated scheduling across public and private sector organizations, prepared pre-meeting briefings for each session, and managed logistics throughout the visit. Cultural and protocol guidance was provided to both the delegation and the host organizations.",
        outcome:
          "The delegation completed fourteen structured meetings over four days, resulting in three preliminary partnership discussions and one signed memorandum of understanding. Post-visit, TXICRO provided a follow-up report with recommended next steps for each active conversation.",
      },
      {
        number: "03",
        title: "Cross-Border Risk Assessment for a Foreign Investor",
        situation:
          "A foreign investment group was evaluating the acquisition of a commercial warehouse facility near the McAllen-Hidalgo International Bridge. The group had limited experience with US commercial real estate transactions and was concerned about regulatory, operational, and market risks.",
        approach:
          "TXICRO conducted a structured risk assessment covering commercial risk (market conditions, vacancy rates, tenant quality), regulatory risk (zoning, environmental compliance, foreign ownership restrictions), and operational risk (property management, maintenance costs, insurance requirements). We also assessed the competitive landscape and long-term demand projections for warehouse space in the bridge corridor.",
        outcome:
          "The assessment identified two significant risk factors that the client\u2019s existing due diligence had not surfaced. Based on our findings, the client renegotiated the acquisition terms before proceeding, resulting in a substantially improved deal structure. The client credited the TXICRO assessment with preventing a six-figure exposure.",
      },
      {
        number: "04",
        title: "Strategic Briefing for an Institutional Partner",
        situation:
          "A binational institutional organization was preparing a policy brief on cross-border economic integration in the Rio Grande Valley. They needed independent research and analysis to support their recommendations to government stakeholders on both sides of the border.",
        approach:
          "TXICRO prepared a fifty-page strategic briefing covering trade flow data, infrastructure capacity, workforce demographics, regulatory frameworks, and comparative analysis with other US-Mexico border regions. The briefing included original analysis and was formatted for government and institutional audiences.",
        outcome:
          "The briefing was presented to government officials in both the United States and Mexico and was cited in subsequent policy discussions regarding border infrastructure investment. The institutional partner retained TXICRO for two additional briefing engagements in the following quarter.",
      },
      {
        number: "05",
        title: "Partner Screening for a Logistics Operation",
        situation:
          "An international logistics company expanding into the US-Mexico corridor needed to identify and vet potential local partners for customs brokerage, warehousing, and last-mile delivery in the McAllen area. Previous attempts to identify partners through online research had produced inconsistent results.",
        approach:
          "TXICRO conducted a structured partner screening using local knowledge, industry contacts, and direct vetting conversations. We evaluated seven potential partners across three service categories, assessing operational capacity, reputation, financial stability, and cultural compatibility with the client\u2019s organizational values.",
        outcome:
          "The client received a partner assessment report with detailed profiles and ranked recommendations for each category. Two of the three selected partners have been retained by the client and remain active eighteen months later. The client noted that TXICRO\u2019s local knowledge eliminated what would have been months of trial-and-error partner selection.",
      },
    ] as CaseStudy[],
  },
  es: {
    sectionTitle: "Casos de Estudio",
    situationLabel: "Situaci\u00f3n",
    approachLabel: "Enfoque",
    outcomeLabel: "Resultado",
    cases: [
      {
        number: "01",
        title:
          "Evaluaci\u00f3n de Entrada al Mercado para un Grupo Manufacturero",
        situation:
          "Una empresa manufacturera mediana con sede en Monterrey, M\u00e9xico estaba evaluando la expansi\u00f3n hacia los Estados Unidos. El liderazgo hab\u00eda identificado al Valle del R\u00edo Grande como una ubicaci\u00f3n potencial para una instalaci\u00f3n sat\u00e9lite, pero carec\u00eda de inteligencia del mercado local y no ten\u00eda relaciones existentes en la regi\u00f3n.",
        approach:
          "TXICRO realiz\u00f3 una evaluaci\u00f3n integral de entrada al mercado, incluyendo an\u00e1lisis de tres sitios potenciales en McAllen, Pharr y Edinburg. La evaluaci\u00f3n cubri\u00f3 requisitos regulatorios, disponibilidad de fuerza laboral, infraestructura de servicios p\u00fablicos, acceso log\u00edstico y costo total de operaciones. Tambi\u00e9n mapeamos actores relevantes incluyendo la Corporaci\u00f3n de Desarrollo Econ\u00f3mico de McAllen y contactos en c\u00e1maras regionales.",
        outcome:
          "El cliente recibi\u00f3 un informe de evaluaci\u00f3n escrito con una recomendaci\u00f3n clara que identific\u00f3 a Pharr como la ubicaci\u00f3n \u00f3ptima basada en la proximidad al puente y la zonificaci\u00f3n industrial. El informe incluy\u00f3 un cronograma de implementaci\u00f3n de doce meses, costos estimados de inicio y un plan de vinculaci\u00f3n con actores clave. El cliente procedi\u00f3 con la selecci\u00f3n del sitio utilizando los socios recomendados.",
      },
      {
        number: "02",
        title:
          "Mapeo de Actores Clave para una Delegaci\u00f3n Centroamericana",
        situation:
          "Una organizaci\u00f3n de promoci\u00f3n comercial de Centroam\u00e9rica estaba planeando una visita de desarrollo empresarial de cinco d\u00edas al sur de Texas. La delegaci\u00f3n de doce miembros, representando los sectores de manufactura, agricultura y log\u00edstica, necesitaba acceso estructurado a actores locales relevantes e instituciones.",
        approach:
          "TXICRO dise\u00f1\u00f3 el itinerario de la delegaci\u00f3n, identific\u00f3 y verific\u00f3 veintitr\u00e9s potenciales socios de reuni\u00f3n, coordin\u00f3 la programaci\u00f3n con organizaciones del sector p\u00fablico y privado, prepar\u00f3 informes previos para cada sesi\u00f3n y gestion\u00f3 la log\u00edstica durante toda la visita. Se proporcion\u00f3 orientaci\u00f3n cultural y de protocolo tanto a la delegaci\u00f3n como a las organizaciones anfitrionas.",
        outcome:
          "La delegaci\u00f3n complet\u00f3 catorce reuniones estructuradas en cuatro d\u00edas, resultando en tres discusiones preliminares de asociaci\u00f3n y un memor\u00e1ndum de entendimiento firmado. Despu\u00e9s de la visita, TXICRO proporcion\u00f3 un informe de seguimiento con pr\u00f3ximos pasos recomendados para cada conversaci\u00f3n activa.",
      },
      {
        number: "03",
        title: "Evaluaci\u00f3n de Riesgos para un Inversionista Extranjero",
        situation:
          "Un grupo de inversi\u00f3n extranjero estaba evaluando la adquisici\u00f3n de una instalaci\u00f3n de almac\u00e9n comercial cerca del Puente Internacional McAllen-Hidalgo. El grupo ten\u00eda experiencia limitada con transacciones de bienes ra\u00edces comerciales en Estados Unidos y estaba preocupado por los riesgos regulatorios, operacionales y de mercado.",
        approach:
          "TXICRO realiz\u00f3 una evaluaci\u00f3n estructurada de riesgos que cubri\u00f3 riesgo comercial (condiciones de mercado, tasas de vacancia, calidad de inquilinos), riesgo regulatorio (zonificaci\u00f3n, cumplimiento ambiental, restricciones de propiedad extranjera) y riesgo operacional (administraci\u00f3n de propiedad, costos de mantenimiento, requisitos de seguros). Tambi\u00e9n evaluamos el panorama competitivo y las proyecciones de demanda a largo plazo para espacio de almac\u00e9n en el corredor del puente.",
        outcome:
          "La evaluaci\u00f3n identific\u00f3 dos factores de riesgo significativos que la diligencia debida existente del cliente no hab\u00eda detectado. Bas\u00e1ndose en nuestros hallazgos, el cliente renegoci\u00f3 los t\u00e9rminos de adquisici\u00f3n antes de proceder, resultando en una estructura de negocio sustancialmente mejorada. El cliente acredit\u00f3 a la evaluaci\u00f3n de TXICRO la prevenci\u00f3n de una exposici\u00f3n de seis cifras.",
      },
      {
        number: "04",
        title: "Informe Estrat\u00e9gico para un Socio Institucional",
        situation:
          "Una organizaci\u00f3n institucional binacional estaba preparando un informe de pol\u00edtica sobre integraci\u00f3n econ\u00f3mica transfronteriza en el Valle del R\u00edo Grande. Necesitaban investigaci\u00f3n y an\u00e1lisis independiente para respaldar sus recomendaciones a funcionarios gubernamentales de ambos lados de la frontera.",
        approach:
          "TXICRO prepar\u00f3 un informe estrat\u00e9gico de cincuenta p\u00e1ginas que cubri\u00f3 datos de flujo comercial, capacidad de infraestructura, demograf\u00eda laboral, marcos regulatorios y an\u00e1lisis comparativo con otras regiones fronterizas entre Estados Unidos y M\u00e9xico. El informe incluy\u00f3 an\u00e1lisis original y fue formateado para audiencias gubernamentales e institucionales.",
        outcome:
          "El informe fue presentado a funcionarios gubernamentales tanto en Estados Unidos como en M\u00e9xico y fue citado en discusiones posteriores de pol\u00edtica sobre inversi\u00f3n en infraestructura fronteriza. El socio institucional retuvo a TXICRO para dos compromisos adicionales de informes en el trimestre siguiente.",
      },
      {
        number: "05",
        title:
          "Evaluaci\u00f3n de Socios para una Operaci\u00f3n Log\u00edstica",
        situation:
          "Una empresa log\u00edstica internacional que se expand\u00eda en el corredor EE.UU.-M\u00e9xico necesitaba identificar y evaluar potenciales socios locales para agencia aduanal, almacenamiento y entrega de \u00faltima milla en el \u00e1rea de McAllen. Intentos previos de identificar socios a trav\u00e9s de investigaci\u00f3n en l\u00ednea hab\u00edan producido resultados inconsistentes.",
        approach:
          "TXICRO realiz\u00f3 una evaluaci\u00f3n estructurada de socios utilizando conocimiento local, contactos de la industria y conversaciones directas de verificaci\u00f3n. Evaluamos siete socios potenciales en tres categor\u00edas de servicio, evaluando capacidad operacional, reputaci\u00f3n, estabilidad financiera y compatibilidad cultural con los valores organizacionales del cliente.",
        outcome:
          "El cliente recibi\u00f3 un informe de evaluaci\u00f3n de socios con perfiles detallados y recomendaciones clasificadas para cada categor\u00eda. Dos de los tres socios seleccionados han sido retenidos por el cliente y permanecen activos dieciocho meses despu\u00e9s. El cliente se\u00f1al\u00f3 que el conocimiento local de TXICRO elimin\u00f3 lo que habr\u00edan sido meses de selecci\u00f3n de socios por ensayo y error.",
      },
    ] as CaseStudy[],
  },
};

export default function CaseStudies({ locale }: CaseStudiesProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold">
            {t.sectionTitle}
          </h2>
          <GoldDivider width="md" className="mt-4" />
        </div>
      </Container>

      {t.cases.map((cs, i) => {
        const isAlt = i % 2 === 1;
        return (
          <div key={cs.number} className={isAlt ? "bg-lightgray" : "bg-white"}>
            <Container>
              <div className="py-10 sm:py-14">
                {/* Number badge + title */}
                <div className="flex items-start gap-4 mb-6">
                  <span className="shrink-0 w-12 h-12 rounded-full bg-gold text-navy font-heading text-lg font-bold flex items-center justify-center">
                    {cs.number}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy pt-2">
                    {cs.title}
                  </h3>
                </div>

                {/* Situation / Approach / Outcome */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ml-0 sm:ml-16">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold font-heading mb-2">
                      {t.situationLabel}
                    </p>
                    <p className="font-body text-slate text-sm leading-relaxed">
                      {cs.situation}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold font-heading mb-2">
                      {t.approachLabel}
                    </p>
                    <p className="font-body text-slate text-sm leading-relaxed">
                      {cs.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold font-heading mb-2">
                      {t.outcomeLabel}
                    </p>
                    <p className="font-body text-slate text-sm leading-relaxed">
                      {cs.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        );
      })}
    </section>
  );
}
