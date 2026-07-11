import { generatePageMetadata } from "@/lib/metadata";
import CorridorDetailPage from "@/components/why-mcallen/CorridorDetailPage";

export const metadata = generatePageMetadata({
  title: "McAllen–Austin–San Antonio Corridor | TXICRO",
  description:
    "The I-35/I-37 corridor connecting McAllen to San Antonio and Austin \u2014 tech, defense, nearshoring, and the Texas Triangle economic zone.",
  path: "/why-mcallen/austin-corridor",
  locale: "en",
});

export default function AustinCorridorPage() {
  return (
    <CorridorDetailPage
      locale="en"
      corridor={{
        title: "McAllen \u2194 Austin / San Antonio",
        subtitle:
          "The Texas Triangle \u2014 connecting McAllen\u2019s border gateway to the tech capital and military hub of Central Texas.",
        overview: `McAllen connects to San Antonio via US-281 and I-37 in approximately three and a half hours, and to Austin via I-35 in approximately four and a half hours. This corridor links the US-Mexico border to two of Texas\u2019s most dynamic economies.\n\nSan Antonio \u2014 home to five military installations, a growing cybersecurity sector, and a healthcare economy that serves the entire region \u2014 sits at the midpoint. Austin \u2014 the fastest-growing major metro in the US, capital of the Texas technology economy, and headquarters to companies including Tesla, Oracle, Samsung, and Apple \u2014 sits at the northern end.`,
        tradeRelationship: `The McAllen-Austin-San Antonio corridor represents the vertical spine of the Texas Triangle economic zone. This relationship is deepening as nearshoring accelerates. Austin and San Antonio technology and defense companies need supply chain access to Mexican manufacturing. McAllen provides that access through the Reynosa-Monterrey gateway.\n\nKey dynamics include nearshoring supply chains where Austin-based tech companies source components from Monterrey-area manufacturers, with goods crossing through McAllen. Defense and security where San Antonio\u2019s military and cybersecurity economy intersects with border security infrastructure and cross-border intelligence operations. Talent pipeline where UTRGV in Edinburg produces graduates who feed both the local economy and the Central Texas job market. Regional distribution where goods entering through McAllen\u2019s FTZ can be staged for distribution throughout Central Texas.`,
        businessImplications: `If you are a Central Texas company exploring nearshoring, McAllen is your gateway to the Monterrey manufacturing ecosystem \u2014 closer and more integrated than alternatives like El Paso or Laredo. If you are a Latin American company targeting the Austin tech economy, McAllen offers a culturally familiar staging point with lower costs and bilingual infrastructure.`,
        keyFacts: [
          { label: "McAllen to San Antonio", value: "3.5 hours" },
          { label: "McAllen to Austin", value: "4.5 hours" },
          { label: "San Antonio military installations", value: "5 bases" },
          { label: "Austin tech HQs", value: "Tesla, Oracle, Samsung, Apple" },
          { label: "Texas Triangle share of state GDP", value: "~75%" },
          {
            label: "UTRGV talent pipeline",
            value: "Engineering, Business, Healthcare",
          },
        ],
        stakeholders: [
          "San Antonio Economic Development Foundation",
          "Austin Chamber of Commerce",
          "Texas Department of Transportation",
          "UTRGV Office of Economic Development",
          "Regional logistics providers along the I-35/I-37 corridor",
        ],
        howTxicroHelps: `TXICRO understands this corridor not as a line on a map but as an integrated economic system. When Austin tech companies explore nearshoring to Monterrey, when San Antonio defense contractors evaluate border-region supply chains, or when Mexican manufacturers seek a US-side operational base with access to Central Texas markets, they need local intelligence and introductions that cannot be assembled from public databases.\n\nOur advisory team provides corridor-specific analysis: logistics route optimization, cross-border supply chain structuring, stakeholder mapping across the McAllen\u2013San Antonio\u2013Austin axis, and practical guidance on operating in the binational business environment of the Texas-Mexico border.`,
        relatedCorridors: [
          { title: "McAllen \u2194 Monterrey", href: "/why-mcallen/monterrey" },
          { title: "McAllen \u2194 Houston", href: "/why-mcallen/houston" },
          { title: "McAllen vs Laredo", href: "/why-mcallen/vs-laredo" },
        ],
      }}
    />
  );
}
