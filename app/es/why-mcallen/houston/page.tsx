import { generatePageMetadata } from "@/lib/metadata";
import CorridorDetailPage from "@/components/why-mcallen/CorridorDetailPage";

export const metadata = generatePageMetadata({
  title: "Corredor McAllen–Houston | Acceso Portuario | TXICRO",
  description:
    "Cinco horas de McAllen al puerto de importaci\u00f3n/exportaci\u00f3n m\u00e1s grande de EE.UU. Energ\u00eda, log\u00edstica y conexiones de cadena de suministro a trav\u00e9s del corredor de Houston.",
  path: "/es/why-mcallen/houston",
  locale: "es",
});

export default function HoustonPageES() {
  return (
    <CorridorDetailPage
      locale="es"
      corridor={{
        title: "McAllen \u2194 Houston",
        subtitle:
          "Cinco horas hasta el puerto de importaci\u00f3n-exportaci\u00f3n m\u00e1s grande de los Estados Unidos \u2014 y la capital energ\u00e9tica del mundo.",
        overview: `McAllen se conecta con Houston v\u00eda US-77 y US-281 en aproximadamente cinco horas. Este corredor une la frontera EE.UU.-M\u00e9xico con el complejo portuario m\u00e1s grande de la naci\u00f3n y la sede de la industria energ\u00e9tica global.\n\nEl Puerto de Houston maneja m\u00e1s tonelaje extranjero que cualquier otro puerto de EE.UU. y es el puerto l\u00edder para exportaciones estadounidenses. El Canal de Navegaci\u00f3n de Houston, el complejo petroqu\u00edmico a lo largo de la Costa del Golfo y la concentraci\u00f3n de sedes de empresas energ\u00e9ticas hacen de Houston el centro gravitacional del comercio internacional de EE.UU.`,
        tradeRelationship: `Las mercanc\u00edas que cruzan la frontera en McAllen frecuentemente contin\u00faan hacia el norte a Houston para distribuci\u00f3n, exportaci\u00f3n o procesamiento adicional. Las din\u00e1micas clave incluyen acceso portuario, cadenas de suministro energ\u00e9tico, exportaciones agr\u00edcolas y servicios profesionales donde el profundo banco de firmas legales internacionales, bancos y consultoras de Houston sirve a clientes con operaciones en la regi\u00f3n fronteriza.`,
        businessImplications: `Si su cadena de suministro involucra tanto manufactura mexicana como env\u00edo internacional, el eje McAllen-Houston le da cruce fronterizo y acceso portuario en una sola cadena log\u00edstica. Si usted est\u00e1 basado en Houston y necesita presencia en la regi\u00f3n fronteriza, McAllen ofrece una base operacional de menor costo con acceso directo al corredor Reynosa-Monterrey.`,
        keyFacts: [
          { label: "McAllen a Houston", value: "~5 horas" },
          {
            label: "Tonelaje extranjero Puerto Houston",
            value: "#1 en EE.UU.",
          },
          {
            label: "Exportaciones Puerto Houston",
            value: "Puerto exportador l\u00edder",
          },
          { label: "Empresas energ\u00e9ticas Houston", value: "5,000+" },
          { label: "Poblaci\u00f3n metro Houston", value: "7+ millones" },
          {
            label: "Especialidad puente Pharr",
            value: "#1 cruce agr\u00edcola EE.UU.",
          },
        ],
        stakeholders: [
          "Puerto de Houston",
          "Greater Houston Partnership",
          "Consejo del \u00c1rea Houston-Galveston",
          "Departamento de Transporte de Texas",
          "Corporaci\u00f3n de Desarrollo Econ\u00f3mico de McAllen",
        ],
        howTxicroHelps: `TXICRO proporciona servicios de asesor\u00eda y coordinaci\u00f3n para organizaciones que navegan el corredor McAllen-Houston. Ya sea que usted sea una empresa con sede en Houston evaluando McAllen para operaciones fronterizas, o una empresa mexicana que busca un punto de entrada a EE.UU. que conecte con el Puerto de Houston, proporcionamos la inteligencia local y el acceso a actores clave que hacen funcionar los negocios transfronterizos.`,
        relatedCorridors: [
          {
            title: "McAllen \u2194 Monterrey",
            href: "/es/why-mcallen/monterrey",
          },
          {
            title: "McAllen \u2194 Austin / San Antonio",
            href: "/es/why-mcallen/austin-corridor",
          },
          {
            title: "McAllen \u2194 Ciudad de M\u00e9xico",
            href: "/es/why-mcallen/mexico-city",
          },
        ],
      }}
    />
  );
}
