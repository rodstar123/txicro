import { Container } from "@/components/ui";

interface InsightsPreviewProps {
  locale: "en" | "es";
}

const content = {
  en: {
    sectionTitle: "Insights & Perspectives",
    sectionSubtitle:
      "Analysis and guidance on international market entry, cross-border strategy, and doing business in the Rio Grande Valley.",
    articles: [
      {
        category: "Market Entry",
        title:
          "The McAllen Advantage: Why International Companies Are Choosing the RGV",
        excerpt:
          "The Rio Grande Valley offers a unique combination of proximity to Mexico, Foreign Trade Zone access, and a bilingual workforce that makes it an increasingly attractive entry point for international companies.",
      },
      {
        category: "Operations",
        title: "A Guide to Opening a Maquiladora Near McAllen, Texas",
        excerpt:
          "Understanding the regulatory framework, site selection criteria, and cross-border logistics involved in establishing maquiladora operations along the Texas-Mexico border.",
      },
      {
        category: "Strategy",
        title:
          "McAllen vs Laredo: Which Border City Is Right for Your Business?",
        excerpt:
          "A comparative analysis of two major Texas border cities — their infrastructure, workforce availability, trade volumes, and strategic advantages for different types of operations.",
      },
    ],
    readMore: "Read more",
  },
  es: {
    sectionTitle: "Perspectivas y Análisis",
    sectionSubtitle:
      "Análisis y orientación sobre entrada al mercado internacional, estrategia transfronteriza y hacer negocios en el Valle del Río Grande.",
    articles: [
      {
        category: "Entrada al Mercado",
        title:
          "La Ventaja de McAllen: Por Qué las Empresas Internacionales Eligen el RGV",
        excerpt:
          "El Valle del Río Grande ofrece una combinación única de proximidad a México, acceso a Zonas de Comercio Exterior y una fuerza laboral bilingüe que lo convierte en un punto de entrada cada vez más atractivo para empresas internacionales.",
      },
      {
        category: "Operaciones",
        title: "Guía para Abrir una Maquiladora Cerca de McAllen, Texas",
        excerpt:
          "Comprender el marco regulatorio, criterios de selección de sitio y la logística transfronteriza involucrada en establecer operaciones de maquiladora a lo largo de la frontera Texas-México.",
      },
      {
        category: "Estrategia",
        title:
          "McAllen vs Laredo: ¿Cuál Ciudad Fronteriza Es Mejor para Su Negocio?",
        excerpt:
          "Un análisis comparativo de dos ciudades fronterizas importantes de Texas — su infraestructura, disponibilidad de fuerza laboral, volúmenes comerciales y ventajas estratégicas para diferentes tipos de operaciones.",
      },
    ],
    readMore: "Leer más",
  },
};

export default function InsightsPreview({ locale }: InsightsPreviewProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-lightgray">
      <Container>
        <div className="mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold">
            {t.sectionTitle}
          </h2>
          <p className="font-body text-slate text-lg max-w-3xl mt-4 leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.articles.map((article, i) => (
            <div
              key={i}
              className="bg-white rounded-card overflow-hidden border border-gray-100"
            >
              {/* Image placeholder */}
              <div className="bg-navy/10 aspect-video" />

              {/* Card body */}
              <div className="p-5">
                <span className="text-gold text-xs uppercase tracking-wide font-body font-semibold">
                  {article.category}
                </span>
                <h3 className="font-heading text-lg font-semibold text-navy mt-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-slate text-sm mt-2 leading-relaxed line-clamp-3 font-body">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center text-gold text-sm font-semibold mt-3 font-body">
                  {t.readMore}
                  <span className="ml-1" aria-hidden="true">
                    &rarr;
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
