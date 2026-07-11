import { generatePageMetadata } from "@/lib/metadata";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata = generatePageMetadata({
  title: "Apoyo a Delegaciones y Misiones Comerciales | TXICRO",
  description:
    "Coordinación integral para delegaciones comerciales y misiones de negocios al Valle del Río Grande. Agenda, informes y logística.",
  path: "/es/services/delegation-support",
  locale: "es",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Apoyo a Delegaciones y Misiones Comerciales",
  description:
    "Coordinación integral para delegaciones comerciales y misiones de negocios al Valle del Río Grande. Agenda, informes y logística.",
  url: "https://txicro.com/es/services/delegation-support",
  provider: {
    "@type": "ProfessionalService",
    name: "TXICRO",
    url: "https://txicro.com",
  },
  areaServed: [{ "@type": "State", name: "Texas" }],
};

export default function DelegationSupportPageES() {
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
            label: "Apoyo a Delegaciones",
            href: "/es/services/delegation-support",
          },
        ]}
        service={{
          title: "Apoyo a Delegaciones y Misiones Comerciales",
          subtitle:
            "Coordinación profesional para delegaciones visitantes y misiones comerciales — desde el diseño de agenda hasta el seguimiento posterior, ejecutado con la precisión que su visita demanda.",
          description: `Una delegación comercial o misión de negocios al Valle del Río Grande es una inversión significativa de tiempo, recursos y atención organizacional. La diferencia entre una visita productiva y una desperdiciada frecuentemente se reduce a preparación, coordinación y seguimiento — las tres cosas más difíciles de gestionar a distancia.

TXICRO proporciona apoyo integral para delegaciones visitantes. Diseñamos la agenda, identificamos y verificamos socios de reunión, preparamos documentos informativos, gestionamos logística, proporcionamos orientación cultural y de protocolo, y coordinamos el seguimiento después de que la visita concluye.

Nuestro apoyo a delegaciones cubre planificación previa a la visita incluyendo definición de objetivos, diseño de agenda e identificación de socios de reunión. Verificación y emparejamiento de participantes para asegurar que cada reunión tenga un propósito claro. Informes previos a reuniones tanto para la delegación como para las organizaciones anfitrionas. Logística en terreno incluyendo transporte, sedes, comidas e interpretación si es necesario. Orientación cultural y de protocolo para interacciones comerciales transfronterizas. Coordinación en tiempo real durante toda la visita. Seguimiento posterior incluyendo informe resumido, elementos de acción y presentaciones cálidas para continuar conversaciones activas.`,
          audience: [
            "Delegaciones de promoción comercial patrocinadas por gobiernos que visitan el sur de Texas",
            "Delegaciones empresariales privadas realizando visitas de selección de sitios o identificación de socios",
            "Organizaciones institucionales coordinando programas de intercambio transfronterizo",
            "Cámaras de comercio organizando misiones de miembros a la región fronteriza EE.UU.-México",
            "Ejecutivos individuales o grupos pequeños haciendo visitas exploratorias al Valle del Río Grande",
          ],
          deliverables: [
            "Una agenda de visita profesionalmente estructurada adaptada a los objetivos y tamaño de su delegación",
            "Socios de reunión verificados en los sectores e instituciones más relevantes para sus objetivos",
            "Paquetes de informes previos para cada sesión en la agenda",
            "Coordinación logística completa durante la duración de la visita",
            "Un informe resumido posterior a la visita con resultados de reuniones, información de contacto y próximos pasos recomendados para cada conversación activa",
          ],
          methodology: `Comenzamos la planificación semanas antes de que la delegación llegue. Cada reunión en la agenda tiene un propósito — emparejada con los objetivos declarados de la delegación. Preparamos ambos lados: la delegación recibe informes sobre a quién están conociendo y por qué, y las organizaciones anfitrionas reciben contexto sobre los antecedentes e intereses de la delegación. Durante la visita, un coordinador de TXICRO gestiona el calendario y maneja cualquier ajuste en tiempo real. Después de la visita, producimos un informe integral de seguimiento y coordinamos presentaciones para conversaciones que deben continuar.`,
          faqs: [
            {
              question:
                "¿Con cuánta anticipación debemos contratar a TXICRO para una visita de delegación?",
              answer:
                "Idealmente cuatro a seis semanas antes de las fechas de visita. Esto permite tiempo adecuado para identificación de socios de reunión, verificación, programación y preparación de informes.",
            },
            {
              question: "¿Proporcionan servicios de interpretación?",
              answer:
                "El asesor principal de TXICRO es bilingüe en inglés y español. Para delegaciones que requieren apoyo lingüístico adicional, coordinamos servicios profesionales de interpretación.",
            },
            {
              question: "¿Qué tamaño de delegaciones apoyan?",
              answer:
                "Hemos coordinado visitas para delegaciones de tres a veinticinco participantes. La estructura de agenda y el enfoque logístico se escalan al tamaño del grupo.",
            },
          ],
          relatedServices: [
            {
              title: "Mapeo de Socios y Actores Clave",
              href: "/es/services/stakeholder-mapping",
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
            "Conozca cómo TXICRO ha coordinado visitas productivas de delegaciones comerciales al Valle del Río Grande en nuestro portafolio de trabajo asesor.",
        }}
      />
    </>
  );
}
