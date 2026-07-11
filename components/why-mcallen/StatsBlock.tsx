import { Container } from "@/components/ui";

interface WhyMcAllenStatsBlockProps {
  locale: "en" | "es";
}

const content = {
  en: {
    title: "McAllen at a Glance",
    stats: [
      {
        value: "1.4M",
        label: "Metro population (McAllen-Edinburg-Mission MSA)",
      },
      {
        value: "2.5 hrs",
        label: "Drive time to Monterrey, Mexico\u2019s industrial capital",
      },
      {
        value: "$200B+",
        label: "Annual US-Mexico trade flowing through the Rio Grande Valley",
      },
      {
        value: "FTZ #12",
        label: "McAllen Foreign Trade Zone, one of the most active in the US",
      },
      { value: "0%", label: "State income tax in Texas" },
      {
        value: "4 bridges",
        label: "International bridges connecting the RGV to Tamaulipas, Mexico",
      },
      {
        value: "86%",
        label: "Bilingual workforce rate in the McAllen metro area",
      },
      {
        value: "MFE",
        label:
          "McAllen-Miller International Airport \u2014 direct flights to major US and Mexican cities",
      },
    ],
  },
  es: {
    title: "McAllen en N\u00fameros",
    stats: [
      {
        value: "1.4M",
        label:
          "Poblaci\u00f3n metropolitana (\u00c1rea McAllen-Edinburg-Mission)",
      },
      {
        value: "2.5 hrs",
        label: "Tiempo de viaje a Monterrey, capital industrial de M\u00e9xico",
      },
      {
        value: "$200 mil M+",
        label:
          "Comercio anual EE.UU.-M\u00e9xico que fluye por el Valle del R\u00edo Grande",
      },
      {
        value: "ZCE #12",
        label:
          "Zona de Comercio Exterior de McAllen, una de las m\u00e1s activas de EE.UU.",
      },
      { value: "0%", label: "Impuesto estatal sobre la renta en Texas" },
      {
        value: "4 puentes",
        label:
          "Puentes internacionales conectando el VRG con Tamaulipas, M\u00e9xico",
      },
      {
        value: "86%",
        label:
          "Tasa de fuerza laboral biling\u00fce en el \u00e1rea metropolitana de McAllen",
      },
      {
        value: "MFE",
        label:
          "Aeropuerto Internacional McAllen-Miller \u2014 vuelos directos a principales ciudades",
      },
    ],
  },
};

export default function StatsBlock({ locale }: WhyMcAllenStatsBlockProps) {
  const t = content[locale];

  return (
    <section className="bg-white py-section-mobile sm:py-section">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy text-center mb-12">
          {t.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {t.stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="font-heading text-2xl sm:text-3xl text-gold font-bold">
                {stat.value}
              </div>
              <p className="text-slate text-xs sm:text-sm mt-1.5 sm:mt-2 font-body leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
