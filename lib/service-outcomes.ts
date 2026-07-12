/**
 * Plain-language outcome line for each service, keyed by slug.
 * Shared by the homepage cards (ServicesOverview) and the /services cards
 * (ServiceCards) so the two never drift apart.
 */
export const serviceOutcomes: Record<string, Record<"en" | "es", string>> = {
  "market-entry": {
    en: "In plain terms: know whether, when, and how to enter — before you spend.",
    es: "En términos simples: sepa si entrar, cuándo y cómo — antes de gastar.",
  },
  "cross-border-risk": {
    en: "In plain terms: know what can go wrong before you sign a lease or wire money.",
    es: "En términos simples: sepa qué puede salir mal antes de firmar un contrato o transferir dinero.",
  },
  "stakeholder-mapping": {
    en: "In plain terms: know exactly who to call, in what order, before your first trip.",
    es: "En términos simples: sepa exactamente a quién llamar y en qué orden, antes de su primer viaje.",
  },
  "trade-relations": {
    en: "In plain terms: walk into government and chamber meetings prepared, credible, and correct.",
    es: "En términos simples: llegue a reuniones con gobierno y cámaras preparado, creíble y correcto.",
  },
  "strategic-briefings": {
    en: "In plain terms: a written document your board can act on — not a conversation you have to remember.",
    es: "En términos simples: un documento escrito sobre el cual su consejo puede actuar — no una conversación que tenga que recordar.",
  },
  "delegation-support": {
    en: "In plain terms: your delegation arrives prepared, meets the right people, and leaves with next steps.",
    es: "En términos simples: su delegación llega preparada, conoce a las personas correctas y se va con pasos concretos.",
  },
};
