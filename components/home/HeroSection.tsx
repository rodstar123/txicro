import Image from "next/image";
import { Button } from "@/components/ui";

interface HeroSectionProps {
  locale: "en" | "es";
}

const content = {
  en: {
    headline: "Where the Border Becomes a Bridge.",
    subheadline:
      "Independent, fee-based advisory for international companies entering Texas. Market entry assessments, risk analysis, and the right introductions — with no commissions and no conflicts of interest.",
    officeLine: "TXICRO · McAllen, Texas",
    ctaPrimary: "Request an Assessment",
    founderLine: "Noe Rodriguez — Founder & Principal Advisor",
    ctaPrimaryHref: "/contact",
  },
  es: {
    headline: "Donde la Frontera Se Convierte en Puente.",
    subheadline:
      "Asesoría independiente para empresas internacionales que entran a Texas. Evaluaciones de entrada al mercado, análisis de riesgo y las conexiones correctas — sin comisiones y sin conflictos de interés.",
    officeLine: "TXICRO · McAllen, Texas",
    ctaPrimary: "Solicitar una Evaluación",
    founderLine: "Noe Rodriguez — Fundador y Asesor Principal",
    ctaPrimaryHref: "/es/contact",
  },
};

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = content[locale];

  return (
    <section className="-mt-16 lg:-mt-[72px] relative bg-navy min-h-[60vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Ken Burns zoom wrapper — overflow:hidden on parent section clips the zoom */}
      <div className="absolute inset-0 animate-ken-burns motion-reduce:animate-none">
        <Image
          src="/images/MCE-Inter-Bridge.jpg"
          alt="Aerial view of the McAllen-Hidalgo International Bridge crossing the Rio Grande between Texas and Mexico"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
      </div>
      {/* Dark navy overlay at 58% opacity */}
      <div className="absolute inset-0 bg-navy/[0.58]" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center pt-28 sm:pt-32 lg:pt-[120px] pb-14 sm:pb-16 lg:pb-20">
        <h1
          className="font-heading text-white font-bold text-balance leading-tight"
          style={{ fontSize: "clamp(2rem, 8vw, 3.75rem)" }}
        >
          {t.headline}
        </h1>

        {/* Gold accent line */}
        <div className="w-24 h-0.5 bg-gold mx-auto mt-6 sm:mt-8" />

        <p className="font-body text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mt-5 sm:mt-6 leading-relaxed">
          {t.subheadline}
        </p>

        <p className="font-body text-sm text-gray-400 mt-3 sm:mt-4">
          {t.officeLine}
        </p>

        <div className="mt-7 sm:mt-8 flex justify-center">
          <Button
            href={t.ctaPrimaryHref}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {t.ctaPrimary}
          </Button>
        </div>

        <p className="mt-8 text-gold text-sm tracking-wide uppercase font-body">
          {t.founderLine}
        </p>
      </div>
    </section>
  );
}
