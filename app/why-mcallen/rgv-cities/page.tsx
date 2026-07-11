import { generatePageMetadata } from "@/lib/metadata";
import CorridorDetailPage from "@/components/why-mcallen/CorridorDetailPage";

export const metadata = generatePageMetadata({
  title: "RGV Cities | Edinburg, Pharr, Mission | TXICRO",
  description:
    "The RGV is more than McAllen \u2014 Edinburg, Pharr, Mission, Hidalgo, Weslaco each offer distinct economic advantages. Regional overview from TXICRO.",
  path: "/why-mcallen/rgv-cities",
  locale: "en",
});

export default function RGVCitiesPage() {
  return (
    <CorridorDetailPage
      locale="en"
      corridor={{
        title: "The Rio Grande Valley Cities",
        subtitle:
          "McAllen is the anchor, but the RGV is an economic region \u2014 and each city brings something different to the table.",
        overview: `The McAllen-Edinburg-Mission metropolitan statistical area encompasses 1.4 million people across multiple cities in Hidalgo County. While McAllen is the commercial center, the surrounding cities each have distinct economic identities and competitive advantages that matter for site selection, workforce planning, and operational strategy.\n\nUnderstanding the RGV as a region \u2014 not just a single city \u2014 is essential for any organization considering this area.`,
        tradeRelationship: `Edinburg \u2014 The county seat and home to the University of Texas Rio Grande Valley (UTRGV). Edinburg\u2019s primary advantage is its talent pipeline \u2014 UTRGV produces thousands of graduates annually in engineering, business, healthcare, and education. The university also drives research activity and technology transfer. Edinburg is also the site of the Hidalgo County Courthouse and government offices, making it the administrative center of the region.\n\nPharr \u2014 Home to the Pharr-Reynosa International Bridge, which is the number one produce crossing point in the entire United States. More fresh fruits and vegetables enter the US through Pharr than through any other port of entry. This makes Pharr uniquely attractive for companies in the agricultural supply chain, food processing, cold storage, and distribution.\n\nMission \u2014 Historically an agricultural community, Mission is evolving into a growing warehouse and light industrial district. Its location west of McAllen provides access to land at competitive prices, and its proximity to the Anzalduas International Bridge adds logistics flexibility.\n\nHidalgo \u2014 The city of Hidalgo is located at the US end of the McAllen-Hidalgo International Bridge. It is a popular crossing point for pedestrians and has developed a retail and entertainment economy that serves cross-border visitors.\n\nWeslaco \u2014 Located east of McAllen, Weslaco is home to the USDA Animal and Plant Health Inspection Service (APHIS) facility that processes agricultural inspections for the region. The city has a growing industrial park and offers competitive land costs.\n\nMercedes and Harlingen \u2014 Further east, these cities extend the RGV economic zone toward Cameron County and the Port of Brownsville. Harlingen is home to Valley International Airport and the Marine Military Academy.`,
        businessImplications: `Site selection in the RGV is not a one-city decision. A manufacturing operation might locate in Mission for land costs while maintaining offices in McAllen. A food distribution company would target Pharr for bridge access. A company that needs university talent would look at Edinburg. TXICRO helps you evaluate the full regional landscape and select the city \u2014 or combination of cities \u2014 that best serves your operational needs.`,
        keyFacts: [
          { label: "RGV metro population", value: "1.4 million" },
          { label: "UTRGV enrollment (Edinburg)", value: "31,000+" },
          {
            label: "Pharr bridge distinction",
            value: "#1 US produce crossing",
          },
          { label: "McAllen Foreign Trade Zone", value: "FTZ #12" },
          { label: "Regional bilingual workforce", value: "86%" },
          { label: "Hidalgo County cities", value: "7+ distinct economies" },
        ],
        stakeholders: [
          "McAllen Economic Development Corporation",
          "City of Pharr Bridge System",
          "UTRGV (University of Texas Rio Grande Valley)",
          "Hidalgo County government",
          "City of Edinburg Economic Development",
          "Mission Economic Development Agency",
          "Rio Grande Valley Partnership",
          "USDA APHIS (Pharr crossing)",
        ],
        howTxicroHelps: `Navigating the RGV requires understanding how the pieces fit together. TXICRO has operated across these cities for decades \u2014 we know which city is right for which type of operation, which economic development agencies are most responsive, which infrastructure investments are changing the regional map, and how to structure operations that take advantage of the entire Valley\u2019s resources rather than limiting yourself to a single city.`,
        relatedCorridors: [
          { title: "McAllen \u2194 Monterrey", href: "/why-mcallen/monterrey" },
          { title: "McAllen vs Laredo", href: "/why-mcallen/vs-laredo" },
          { title: "McAllen \u2194 Houston", href: "/why-mcallen/houston" },
        ],
      }}
    />
  );
}
