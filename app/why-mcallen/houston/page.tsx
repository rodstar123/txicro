import { generatePageMetadata } from "@/lib/metadata";
import CorridorDetailPage from "@/components/why-mcallen/CorridorDetailPage";

export const metadata = generatePageMetadata({
  title: "McAllen–Houston Corridor | Port Access | TXICRO",
  description:
    "Five hours from McAllen to the largest import/export port in the US. Energy, logistics, and supply chain connections through the Houston corridor.",
  path: "/why-mcallen/houston",
  locale: "en",
});

export default function HoustonPage() {
  return (
    <CorridorDetailPage
      locale="en"
      corridor={{
        title: "McAllen \u2194 Houston",
        subtitle:
          "Five hours to the largest import-export port in the United States \u2014 and the energy capital of the world.",
        overview: `McAllen connects to Houston via US-77 and US-281 in approximately five hours. This corridor links the US-Mexico border to the largest port complex in the nation and the headquarters of the global energy industry.\n\nThe Port of Houston handles more foreign tonnage than any other US port and is the leading port for US exports. The Houston Ship Channel, the petrochemical complex along the Gulf Coast, and the concentration of energy company headquarters make Houston the gravitational center of US international trade.`,
        tradeRelationship: `Goods that cross the border in McAllen often continue north to Houston for distribution, export, or further processing. The relationship flows in both directions. Key dynamics include port access where manufacturers and distributors using McAllen\u2019s FTZ can stage goods for export through the Port of Houston. Energy supply chains where equipment, materials, and services for the oil and gas industry flow between Houston and the border region. Agricultural exports where produce crossing through the Pharr bridge moves to Houston for domestic distribution and international export. Professional services where Houston\u2019s deep bench of international law firms, banks, and consulting firms serves clients with border-region operations.`,
        businessImplications: `If your supply chain involves both Mexican manufacturing and international shipping, the McAllen-Houston axis gives you border crossing and port access in a single logistics chain. If you are based in Houston and need a border-region presence, McAllen offers a lower-cost operational base with direct access to the Reynosa-Monterrey corridor.`,
        keyFacts: [
          { label: "McAllen to Houston", value: "~5 hours" },
          { label: "Port Houston foreign tonnage", value: "#1 in the US" },
          { label: "Port Houston exports", value: "Leading US export port" },
          { label: "Houston energy companies", value: "5,000+" },
          { label: "Houston metro population", value: "7+ million" },
          { label: "Pharr bridge specialty", value: "#1 US produce crossing" },
        ],
        stakeholders: [
          "Port Houston",
          "Greater Houston Partnership",
          "Houston-Galveston Area Council",
          "Texas Department of Transportation",
          "McAllen Economic Development Corporation",
        ],
        howTxicroHelps: `TXICRO provides advisory and coordination services for organizations navigating the McAllen-Houston corridor. Whether you are a Houston-based company evaluating McAllen for border operations, or a Mexican company seeking a US entry point that connects to Port Houston, we provide the local intelligence and stakeholder access that makes cross-border business work.`,
        relatedCorridors: [
          { title: "McAllen \u2194 Monterrey", href: "/why-mcallen/monterrey" },
          {
            title: "McAllen \u2194 Austin / San Antonio",
            href: "/why-mcallen/austin-corridor",
          },
          {
            title: "McAllen \u2194 Mexico City",
            href: "/why-mcallen/mexico-city",
          },
        ],
      }}
    />
  );
}
