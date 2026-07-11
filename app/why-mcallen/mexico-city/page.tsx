import { generatePageMetadata } from "@/lib/metadata";
import CorridorDetailPage from "@/components/why-mcallen/CorridorDetailPage";

export const metadata = generatePageMetadata({
  title: "McAllen–Mexico City Corridor | TXICRO",
  description:
    "Mexico City is where expansion decisions are made. McAllen is where they are executed. Connecting CDMX's corporate headquarters to the Texas border gateway.",
  path: "/why-mcallen/mexico-city",
  locale: "en",
});

export default function MexicoCityPage() {
  return (
    <CorridorDetailPage
      locale="en"
      corridor={{
        title: "McAllen \u2194 Mexico City",
        subtitle:
          "The decisions are made in Polanco and Santa Fe. The execution happens on the border. McAllen connects Latin America\u2019s corporate headquarters to the United States.",
        overview: `Mexico City \u2014 the Ciudad de M\u00e9xico, CDMX \u2014 is the political, financial, and corporate capital of Latin America. With a metropolitan population exceeding twenty-one million, it is the largest city in the Western Hemisphere and home to the headquarters of virtually every major Mexican corporation, as well as the Latin American offices of most multinational companies.\n\nMcAllen connects to Mexico City through Monterrey, with total travel time of approximately eight to ten hours by road or two to three hours by air through connecting flights. The distance is significant, but the business relationship is direct: executives in CDMX make the expansion decisions, and the US-Mexico border is where those decisions become operational reality.`,
        tradeRelationship: `The McAllen-Mexico City relationship is strategic rather than logistical. It is about decision-making, capital flows, and corporate strategy. Key dimensions include corporate decision-making where the CEO, CFO, and board members of Mexican companies considering US expansion are typically based in Mexico City. Their first question is where in the US to enter, and McAllen\u2019s proximity to Monterrey makes it a natural recommendation from their Monterrey-based operations teams. Capital flows where Mexican investment groups and family offices based in CDMX deploy capital across the border, with the RGV representing an attractive risk-return profile compared to more expensive US markets. Professional networks where Mexico City\u2019s law firms, banks, and consulting firms advise clients on cross-border matters and serve as referral sources for border-region advisory firms. Government relations where Mexico\u2019s federal government agencies relevant to trade and investment are headquartered in CDMX, making this corridor important for policy-level engagement.`,
        businessImplications: `If you are a Mexico City-based company evaluating US market entry, McAllen offers the most culturally familiar and cost-effective entry point in Texas. The bilingual infrastructure, the proximity to Monterrey (where your operations team likely already works), and the lower cost structure compared to Houston or Dallas make McAllen the pragmatic choice. If you are a CDMX-based investor, the RGV offers real estate, commercial, and industrial opportunities at valuations that Mexico City-based capital finds attractive relative to other US border markets.`,
        keyFacts: [
          { label: "CDMX metro population", value: "21+ million" },
          { label: "CDMX: corporate capital", value: "Latin America #1" },
          { label: "Travel time via Monterrey", value: "2\u20133 hrs by air" },
          {
            label: "McAllen cost advantage vs Houston/Dallas",
            value: "30\u201350% lower",
          },
          { label: "McAllen bilingual workforce", value: "86%" },
          { label: "Key CDMX HQs", value: "Grupo Carso, Bimbo, FEMSA" },
        ],
        stakeholders: [
          "Mexico\u2019s Secretariat of Economy (SE)",
          "ProM\u00e9xico successor agencies",
          "COMCE (Mexican Foreign Trade Council)",
          "AmCham Mexico",
          "Binational chambers with chapters in both CDMX and the RGV",
        ],
        howTxicroHelps: `TXICRO bridges the gap between Mexico City\u2019s corporate decision-making centers and McAllen\u2019s operational advantages. Our advisory team understands both worlds \u2014 the institutional dynamics of Mexican corporate expansion and the practical realities of establishing US operations in the Rio Grande Valley.\n\nFor Mexico City-headquartered companies evaluating US market entry, we provide structured assessments that compare McAllen to alternative locations on the metrics that matter: operating costs, workforce availability, regulatory environment, logistics connectivity, and quality of life. For CDMX executives making their first visit to the RGV, we coordinate delegation programs that showcase the region\u2019s capabilities.`,
        relatedCorridors: [
          { title: "McAllen \u2194 Monterrey", href: "/why-mcallen/monterrey" },
          { title: "McAllen \u2194 Houston", href: "/why-mcallen/houston" },
          {
            title: "Rio Grande Valley Cities",
            href: "/why-mcallen/rgv-cities",
          },
        ],
      }}
    />
  );
}
