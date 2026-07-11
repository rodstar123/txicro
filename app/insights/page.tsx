import { generatePageMetadata } from "@/lib/metadata";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = generatePageMetadata({
  title: "Insights & Articles",
  description:
    "Expert analysis on cross-border commerce, market entry strategy, and the Rio Grande Valley economy.",
  path: "/insights",
  locale: "en",
});

export default function InsightsPage() {
  return (
    <PlaceholderPage
      title="Insights & Articles"
      subtitle="Expert analysis on cross-border commerce and market entry"
      locale="en"
      breadcrumbs={[{ label: "Insights", href: "/insights" }]}
    />
  );
}
