import { generatePageMetadata } from '@/lib/metadata';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

export const metadata = generatePageMetadata({
  title: 'Relaciones Comerciales e Institucionales | TXICRO',
  description:
    'Navegue marcos institucionales, agencias gubernamentales y cámaras de comercio con estrategia consciente del protocolo desde McAllen.',
  path: '/es/services/trade-relations',
  locale: 'es',
});

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Relaciones Comerciales e Institucionales',
  description: 'Navegue marcos institucionales, agencias gubernamentales y cámaras de comercio con estrategia consciente del protocolo desde McAllen.',
  url: 'https://txicro.com/es/services/trade-relations',
  provider: { '@type': 'ProfessionalService', name: 'TXICRO', url: 'https://txicro.com' },
  areaServed: [{ '@type': 'State', name: 'Texas' }],
};

export default function TradeRelationsPageES() {
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
        { label: 'Relaciones Comerciales', href: '/es/services/trade-relations' },
      ]}
      service={{
        title: 'Relaciones Comerciales e Institucionales',
        subtitle:
          'Navegando el panorama institucional con el protocolo correcto, los límites correctos y el momento correcto.',
        description: `El comercio internacional no opera en el vacío. Opera dentro de marcos institucionales — agencias gubernamentales, organismos de promoción comercial, corporaciones de desarrollo económico, cámaras de comercio y entidades reguladoras. Cada uno tiene su propia cultura, su propio protocolo y sus propias expectativas sobre cómo las organizaciones externas deben vincularse.

TXICRO proporciona orientación para organizaciones que necesitan navegar estos marcos sin tropiezos. Le ayudamos a entender cuáles instituciones son relevantes para sus objetivos, cómo operan, qué esperan de la vinculación externa y dónde están los límites.

Nuestra orientación cubre estrategia de relaciones institucionales y planificación de vinculación, conciencia del protocolo para interacciones gubernamentales y cuasi-gubernamentales, guía de límites para asegurar la separación apropiada entre actividades comerciales e institucionales, estrategia de vinculación con cámaras de comercio y asociaciones comerciales, y preparación para reuniones con funcionarios gubernamentales o actores institucionales.`,
        audience: [
          'Organizaciones cuyas actividades transfronterizas involucran actores gubernamentales o institucionales',
          'Empresas que buscan construir relaciones con agencias de desarrollo económico',
          'Organizaciones de promoción comercial que coordinan con contrapartes estadounidenses',
          'Cualquier organización que necesite vincularse con actores institucionales con profesionalismo y conciencia del protocolo',
        ],
        deliverables: [
          'Un informe estratégico consciente del protocolo adaptado a sus objetivos de vinculación institucional',
          'Una descripción general de relaciones institucionales mapeando organismos gubernamentales y cuasi-gubernamentales relevantes',
          'Directrices de límites asegurando que su enfoque de vinculación mantenga la separación apropiada',
          'Apoyo en preparación de reuniones incluyendo documentos informativos y orientación de protocolo',
          'Apoyo asesor continuo para organizaciones con relaciones institucionales activas',
        ],
        methodology: `TXICRO opera con el profesionalismo esperado por actores institucionales y gubernamentales. Nuestra orientación está arraigada en un entendimiento de cómo funcionan estas instituciones desde adentro — no solo lo que dicen sus sitios web. Le ayudamos a abordar las relaciones institucionales con la seriedad que requieren.`,
        faqs: [
          {
            question: '¿Hacen cabildeo o representan clientes ante organismos gubernamentales?',
            answer:
              'No. TXICRO asesora y prepara. No actuamos como cabilderos registrados ni representantes ante agencias gubernamentales.',
          },
          {
            question: '¿Pueden ayudar con relaciones consulares o diplomáticas?',
            answer:
              'Podemos proporcionar orientación sobre la vinculación apropiada con entidades consulares y diplomáticas, incluyendo conciencia del protocolo y preparación. Sin embargo, no representamos clientes en asuntos diplomáticos.',
          },
        ],
        relatedServices: [
          { title: 'Mapeo de Socios y Actores Clave', href: '/es/services/stakeholder-mapping' },
          { title: 'Informes Estratégicos y Reportes de Asesoría', href: '/es/services/strategic-briefings' },
          { title: 'Apoyo a Delegaciones y Misiones Comerciales', href: '/es/services/delegation-support' },
        ],
        caseStudyExcerpt:
          'Conozca cómo TXICRO ha ayudado a organizaciones a navegar marcos institucionales con estrategia consciente del protocolo en nuestro portafolio de trabajo asesor.',
      }}
    />
    </>
  );
}
