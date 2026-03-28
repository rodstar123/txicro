import { generatePageMetadata } from '@/lib/metadata';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

export const metadata = generatePageMetadata({
  title: 'Mapeo de Socios y Actores Clave | TXICRO',
  description:
    'Identifique y secuencie relaciones con actores clave en Texas — agencias gubernamentales, cámaras y socios del sector privado.',
  path: '/es/services/stakeholder-mapping',
  locale: 'es',
});

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mapeo de Socios y Actores Clave',
  description: 'Identifique y secuencie relaciones con actores clave en Texas — agencias gubernamentales, cámaras y socios del sector privado.',
  url: 'https://txicro.com/es/services/stakeholder-mapping',
  provider: { '@type': 'ProfessionalService', name: 'TXICRO', url: 'https://txicro.com' },
  areaServed: [{ '@type': 'State', name: 'Texas' }],
};

export default function StakeholderMappingPageES() {
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
        { label: 'Mapeo de Actores Clave', href: '/es/services/stakeholder-mapping' },
      ]}
      service={{
        title: 'Mapeo de Socios y Actores Clave',
        subtitle:
          'Saber quién importa — y en qué orden acercarse — es la diferencia entre una entrada fluida y meses de esfuerzo perdido.',
        description: `En cualquier mercado nuevo, las relaciones determinan los resultados. La presentación correcta en el momento correcto puede abrir puertas que ninguna cantidad de capital puede comprar. El enfoque incorrecto — o acercarse a la persona incorrecta primero — puede cerrar esas puertas permanentemente.

El servicio de Mapeo de Actores Clave de TXICRO identifica las organizaciones e individuos más relevantes para sus objetivos, evalúa su rol e influencia, y diseña una secuencia de vinculación que construye credibilidad de manera sistemática en lugar de aleatoria.

Mapeamos actores en instituciones públicas incluyendo corporaciones de desarrollo económico, oficinas de gobierno municipal y del condado, y agencias a nivel estatal. Socios del sector privado incluyendo clientes potenciales, proveedores, prestadores de servicios y candidatos para empresas conjuntas. Asociaciones industriales y grupos comerciales. Cámaras de comercio a nivel local, regional y binacional. Instituciones académicas y de investigación.`,
        audience: [
          'Empresas internacionales que ingresan a un mercado donde no tienen relaciones existentes',
          'Delegaciones comerciales que necesitan acceso estructurado a actores relevantes durante una visita limitada',
          'Inversionistas extranjeros que buscan comprender el panorama institucional antes de comprometerse',
          'Organizaciones que han intentado construir relaciones informalmente y necesitan un enfoque más sistemático',
        ],
        deliverables: [
          'Un mapa integral de actores clave con perfiles de organizaciones e individuos relevantes',
          'Un plan de secuenciación de vinculación que recomienda a quién acercarse primero, segundo y tercero — y por qué',
          'Coordinación de presentaciones para actores donde TXICRO tiene relaciones existentes',
          'Un documento informativo para cada reunión o presentación planificada',
          'Un sistema de seguimiento para mantener el impulso después del contacto inicial',
        ],
        methodology: `Comenzamos por entender sus objetivos y el tipo de actores más relevantes para su éxito. Luego nos basamos en seis décadas de relaciones locales para mapear el panorama — no desde una base de datos, sino desde conocimiento directo de quién hace qué, quién influye a quién, y cómo se toman realmente las decisiones en el Valle del Río Grande.`,
        faqs: [
          {
            question: '¿Realizan presentaciones directamente?',
            answer:
              'Sí, donde tengamos relaciones existentes. Coordinamos presentaciones con contexto y preparación apropiados para que ambas partes entiendan el propósito y el potencial de la reunión.',
          },
          {
            question: '¿Cómo es esto diferente de un directorio empresarial?',
            answer:
              'Un directorio le da nombres. El mapeo de actores clave le da estrategia — quién importa para sus objetivos específicos, en qué orden y con qué enfoque. Es la diferencia entre un directorio telefónico y un plan de juego.',
          },
        ],
        relatedServices: [
          { title: 'Asesoría para Entrada al Mercado Internacional', href: '/es/services/market-entry' },
          { title: 'Relaciones Comerciales e Institucionales', href: '/es/services/trade-relations' },
          { title: 'Apoyo a Delegaciones y Misiones Comerciales', href: '/es/services/delegation-support' },
        ],
        caseStudyExcerpt:
          'Conozca cómo TXICRO ha ayudado a organizaciones a identificar y conectarse con los actores clave correctos en nuestro portafolio de trabajo asesor.',
      }}
    />
    </>
  );
}
