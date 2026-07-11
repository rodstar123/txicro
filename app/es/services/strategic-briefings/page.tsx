import { generatePageMetadata } from "@/lib/metadata";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata = generatePageMetadata({
  title: "Informes Estratégicos y Reportes | TXICRO",
  description:
    "Informes independientes para equipos de liderazgo. Memorándums de decisión, documentos para juntas directivas y resúmenes ejecutivos.",
  path: "/es/services/strategic-briefings",
  locale: "es",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Informes Estratégicos y Reportes de Asesoría",
  description:
    "Informes independientes para equipos de liderazgo. Memorándums de decisión, documentos para juntas directivas y resúmenes ejecutivos.",
  url: "https://txicro.com/es/services/strategic-briefings",
  provider: {
    "@type": "ProfessionalService",
    name: "TXICRO",
    url: "https://txicro.com",
  },
  areaServed: [{ "@type": "State", name: "Texas" }],
};

export default function StrategicBriefingsPageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailPage
        locale="es"
        breadcrumbs={[
          { label: "Servicios", href: "/es/services" },
          {
            label: "Informes Estratégicos",
            href: "/es/services/strategic-briefings",
          },
        ]}
        service={{
          title: "Informes Estratégicos y Reportes de Asesoría",
          subtitle:
            "Análisis independiente y escrito en el que los equipos de liderazgo pueden confiar — porque fue producido por un asesor sin interés en el resultado.",
          description: `Los tomadores de decisiones necesitan documentos, no conversaciones. Necesitan análisis escritos que puedan revisar, compartir, cuestionar y sobre los cuales actuar. Necesitan informes que presenten hallazgos objetivamente, reconozcan la incertidumbre honestamente y recomienden próximos pasos con claridad.

TXICRO produce informes estratégicos y reportes de asesoría para equipos de liderazgo, juntas directivas, socios institucionales y actores gubernamentales. Cada documento que producimos es independiente — reflejando nuestra evaluación honesta, no una conclusión predeterminada.

Nuestros servicios de informes incluyen memorándums de decisión para directivos y ejecutivos C-suite que consideran oportunidades transfronterizas. Documentos para juntas directivas formateados para audiencias de gobernanza. Resúmenes ejecutivos que destilan situaciones complejas en inteligencia accionable. Informes de inteligencia de mercado que cubren sectores, corredores o geografías específicas. Informes de política para audiencias institucionales y gubernamentales sobre temas económicos transfronterizos.`,
          audience: [
            "CEOs y equipos de liderazgo que evalúan oportunidades transfronterizas y necesitan análisis escrito para su proceso de toma de decisiones",
            "Juntas directivas que requieren documentos de informe independientes antes de aprobar inversiones internacionales",
            "Socios institucionales incluyendo agencias gubernamentales y organismos comerciales que necesitan investigación objetiva",
            "Organizaciones que tienen análisis interno pero desean una segunda opinión independiente por escrito",
          ],
          deliverables: [
            "Un documento escrito con formato profesional adaptado a su audiencia y propósito",
            "Hallazgos claros, factores de riesgo y recomendaciones respaldados por evidencia",
            "Un resumen ejecutivo que capture los puntos esenciales en una a dos páginas",
            "Documentación de fuentes y transparencia metodológica",
            "Una sesión de presentación donde guiamos a su equipo a través de los hallazgos y respondemos preguntas",
          ],
          methodology: `Todo informe comienza con una conversación de alcance para definir la audiencia, el propósito y las preguntas clave. Luego realizamos investigación independiente, sintetizamos hallazgos y producimos un documento que cumple con los estándares profesionales esperados por audiencias institucionales y de gobernanza. Nuestros informes están diseñados para resistir el escrutinio — porque los mejores informes son los que siguen siendo válidos seis meses después.`,
          faqs: [
            {
              question: "¿Pueden producir informes en español?",
              answer:
                "Sí. TXICRO produce informes tanto en inglés como en español. Para audiencias bilingües, podemos producir un solo documento con resúmenes ejecutivos en ambos idiomas.",
            },
            {
              question: "¿Cuánto mide un informe típico?",
              answer:
                "Depende del alcance. Los memorándums de decisión son típicamente de cinco a diez páginas. Los informes estratégicos completos van de veinte a cincuenta páginas. Los resúmenes ejecutivos son de una a dos páginas.",
            },
            {
              question:
                "¿Pueden presentar el informe ante nuestra junta directiva?",
              answer:
                "Sí. Ofrecemos sesiones de presentación donde guiamos a su equipo a través de los hallazgos y respondemos preguntas en tiempo real.",
            },
          ],
          relatedServices: [
            {
              title: "Estrategia Transfronteriza y Evaluación de Riesgos",
              href: "/es/services/cross-border-risk",
            },
            {
              title: "Relaciones Comerciales e Institucionales",
              href: "/es/services/trade-relations",
            },
            {
              title: "Asesoría para Entrada al Mercado Internacional",
              href: "/es/services/market-entry",
            },
          ],
          caseStudyExcerpt:
            "Conozca cómo TXICRO ha entregado análisis estratégico independiente para equipos de liderazgo y socios institucionales en nuestro portafolio de trabajo asesor.",
        }}
      />
    </>
  );
}
