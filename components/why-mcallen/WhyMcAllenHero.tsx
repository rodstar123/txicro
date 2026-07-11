import { GoldDivider } from "@/components/ui";

interface WhyMcAllenHeroProps {
  locale: "en" | "es";
}

const content = {
  en: {
    headline: "Why McAllen",
    subheadline:
      "At the crossroads of the United States and Latin America, McAllen, Texas offers what few cities can \u2014 strategic position, bilingual infrastructure, and a cost structure that makes growth sustainable.",
  },
  es: {
    headline: "Por Qu\u00e9 McAllen",
    subheadline:
      "En la encrucijada de los Estados Unidos y Am\u00e9rica Latina, McAllen, Texas ofrece lo que pocas ciudades pueden \u2014 posici\u00f3n estrat\u00e9gica, infraestructura biling\u00fce y una estructura de costos que hace sostenible el crecimiento.",
  },
};

export default function WhyMcAllenHero({ locale }: WhyMcAllenHeroProps) {
  const t = content[locale];

  return (
    <section className="-mt-16 lg:-mt-[72px] relative bg-navy py-16 lg:py-24 overflow-hidden">
      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(22,32,53,0.6) 0%, rgba(10,22,40,1) 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 lg:pt-[120px]">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight">
          {t.headline}
        </h1>

        <GoldDivider width="md" className="mt-8" />

        <p className="font-body text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
          {t.subheadline}
        </p>
      </div>
    </section>
  );
}
