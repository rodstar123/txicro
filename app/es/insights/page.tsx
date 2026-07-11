import { generatePageMetadata } from "@/lib/metadata";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = generatePageMetadata({
  title: "An\u00e1lisis y Art\u00edculos de Comercio Exterior",
  description:
    "An\u00e1lisis experto sobre comercio transfronterizo, estrategia de entrada al mercado y la econom\u00eda del Valle del R\u00edo Grande.",
  path: "/es/insights",
  locale: "es",
});

export default function InsightsPageES() {
  return (
    <PlaceholderPage
      title="An\u00e1lisis y Art\u00edculos"
      subtitle="An\u00e1lisis experto sobre comercio transfronterizo y entrada al mercado"
      locale="es"
      breadcrumbs={[{ label: "An\u00e1lisis", href: "/es/insights" }]}
    />
  );
}
