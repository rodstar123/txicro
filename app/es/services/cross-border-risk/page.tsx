import { generatePageMetadata } from '@/lib/metadata';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

export const metadata = generatePageMetadata({
  title: 'Evaluación de Riesgos Transfronterizos | TXICRO',
  description:
    'Análisis de riesgos comerciales, regulatorios y operacionales para organizaciones en el corredor EE.UU.-México. Evaluación independiente.',
  path: '/es/services/cross-border-risk',
  locale: 'es',
});

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Estrategia Transfronteriza y Evaluación de Riesgos',
  description: 'Análisis de riesgos comerciales, regulatorios y operacionales para organizaciones en el corredor EE.UU.-México. Evaluación independiente.',
  url: 'https://txicro.com/es/services/cross-border-risk',
  provider: { '@type': 'ProfessionalService', name: 'TXICRO', url: 'https://txicro.com' },
  areaServed: [{ '@type': 'State', name: 'Texas' }],
};

export default function CrossBorderRiskPageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailPage
      locale="es"
      breadcrumbs={[
        { label: 'Servicios', href: '/es/services' },
        { label: 'Riesgo Transfronterizo', href: '/es/services/cross-border-risk' },
      ]}
      service={{
        title: 'Estrategia Transfronteriza y Evaluación de Riesgos',
        subtitle:
          'Un análisis objetivo de lo que puede salir mal — comercial, regulatoria y operacionalmente — antes de que comprometa capital, contratos o reputación.',
        description: `Los negocios transfronterizos operan en la intersección de dos sistemas legales, dos marcos regulatorios, dos regímenes fiscales y dos culturas empresariales. Cada dimensión agrega complejidad, y cada brecha en la comprensión agrega riesgo.

El servicio de Evaluación de Riesgos de TXICRO proporciona un análisis estructurado de los riesgos específicos que enfrenta su operación o inversión transfronteriza. No producimos matrices de riesgo genéricas. Producimos evaluaciones específicas y contextualizadas que identifican los riesgos más relevantes para su situación, evalúan su probabilidad e impacto potencial, y recomiendan estrategias concretas de mitigación.

Nuestra evaluación examina tres categorías de riesgo. El riesgo comercial cubre condiciones de mercado, competencia, estabilidad de demanda, dinámica de precios, concentración de clientes y sostenibilidad de ingresos. El riesgo regulatorio cubre requisitos de cumplimiento federal y estatal, licencias y permisos, restricciones de propiedad extranjera, obligaciones fiscales, derecho laboral y cumplimiento ambiental. El riesgo operacional cubre confiabilidad de la cadena de suministro, disponibilidad de fuerza laboral, riesgos de propiedad e instalaciones, requisitos de seguros, infraestructura tecnológica y continuidad del negocio.`,
        audience: [
          'Inversionistas extranjeros que evalúan adquisiciones o desarrollos en la región fronteriza de Texas',
          'Empresas internacionales que establecen o expanden operaciones transfronterizas',
          'Organizaciones que ingresan a empresas conjuntas o asociaciones con entidades basadas en EE.UU.',
          'Actores institucionales que necesitan análisis independiente de riesgos para decisiones de política o inversión',
          'Cualquier organización que opera en el corredor EE.UU.-México y necesita entender su exposición',
        ],
        deliverables: [
          'Un informe escrito de evaluación de riesgos con riesgos identificados categorizados por tipo, probabilidad e impacto potencial',
          'Un registro de riesgos documentando cada riesgo con acciones de mitigación recomendadas',
          'Una descripción general del panorama regulatorio específica a su industria y ubicación',
          'Una lista de verificación de riesgos operacionales para monitoreo continuo',
          'Una consulta de seguimiento para revisar hallazgos y discutir implementación',
        ],
        methodology: `Comenzamos con un ingreso detallado para entender su operación, inversión o actividad planificada. Luego realizamos investigación independiente en las tres categorías de riesgo, basándonos en conocimiento regulatorio local, contactos de la industria e inteligencia de mercado. Nuestro análisis se entrega como un informe escrito — estructurado para tomadores de decisiones, no para consultores.`,
        faqs: [
          {
            question: '¿Es esto una opinión legal?',
            answer:
              'No. TXICRO proporciona evaluación de riesgos de asesoría, no asesoría legal. Para preguntas legales, recomendamos contratar abogados calificados.',
          },
          {
            question: '¿Evalúan riesgos para operaciones en México?',
            answer:
              'Nuestra evaluación se enfoca en el lado estadounidense de las operaciones transfronterizas. Para riesgos específicos de operaciones mexicanas, podemos coordinar con socios que se especializan en el entorno regulatorio mexicano.',
          },
          {
            question: '¿Cómo es esto diferente de la debida diligencia?',
            answer:
              'La debida diligencia es típicamente específica a una transacción y retrospectiva. La evaluación de riesgos es prospectiva — evalúa lo que podría afectar su operación en el futuro.',
          },
        ],
        relatedServices: [
          { title: 'Asesoría para Entrada al Mercado Internacional', href: '/es/services/market-entry' },
          { title: 'Mapeo de Socios y Actores Clave', href: '/es/services/stakeholder-mapping' },
          { title: 'Informes Estratégicos y Reportes de Asesoría', href: '/es/services/strategic-briefings' },
        ],
        caseStudyExcerpt:
          'Conozca cómo TXICRO ha ayudado a organizaciones a identificar y mitigar riesgos transfronterizos antes de comprometer capital en nuestro portafolio de trabajo asesor.',
      }}
    />
    </>
  );
}
