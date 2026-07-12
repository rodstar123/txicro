import { Container, GoldDivider } from "@/components/ui";

interface CommunityRootsProps {
  locale: "en" | "es";
}

const content = {
  en: {
    title: "Community Roots",
    body: "Noe Rodriguez is deeply embedded in the McAllen community. As a lifelong resident of the Rio Grande Valley, his network spans local government, business associations, economic development organizations, and the broader institutional landscape of South Texas. He is committed to the long-term growth of the region and actively participates in initiatives that promote McAllen\u2019s visibility as an international commerce gateway.",
  },
  es: {
    title: "Ra\u00edces Comunitarias",
    body: "Noe Rodriguez est\u00e1 profundamente integrado en la comunidad de McAllen. Como residente de toda la vida del Valle del R\u00edo Grande, su red abarca gobierno local, asociaciones empresariales, organizaciones de desarrollo econ\u00f3mico y el panorama institucional m\u00e1s amplio del sur de Texas. Est\u00e1 comprometido con el crecimiento a largo plazo de la regi\u00f3n y participa activamente en iniciativas que promueven la visibilidad de McAllen como portal de comercio internacional.",
  },
};

export default function CommunityRoots({ locale }: CommunityRootsProps) {
  const t = content[locale];

  return (
    <section className="bg-white py-section-mobile sm:py-section">
      <Container className="max-w-3xl">
        <h2 className="font-heading text-3xl sm:text-4xl text-navy font-semibold mb-4">
          {t.title}
        </h2>
        <GoldDivider width="md" className="mb-8 mx-0" />

        <p className="text-slate text-base sm:text-lg leading-relaxed font-body">
          {t.body}
        </p>
      </Container>
    </section>
  );
}
