import { generatePageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Container } from '@/components/ui';
import CTASection from '@/components/CTASection';
import WhyMcAllenHero from '@/components/why-mcallen/WhyMcAllenHero';
import StatsBlock from '@/components/why-mcallen/StatsBlock';
import StrategicPosition from '@/components/why-mcallen/StrategicPosition';
import WhyTexas from '@/components/why-mcallen/WhyTexas';
import WhyMcAllenSpecific from '@/components/why-mcallen/WhyMcAllenSpecific';
import IndustrySectors from '@/components/why-mcallen/IndustrySectors';
import CorridorCards from '@/components/why-mcallen/CorridorCards';

export const metadata = generatePageMetadata({
  title: 'Por Qué McAllen, Texas | Portal Comercial | TXICRO',
  description:
    'McAllen, TX en la encrucijada del comercio EE.UU.-América Latina. A 2.5 horas de Monterrey, ZCE #12, fuerza laboral bilingüe.',
  path: '/es/why-mcallen',
  locale: 'es',
});

export default function WhyMcAllenPageES() {
  return (
    <>
      <WhyMcAllenHero locale="es" />
      <Container className="pt-8">
        <Breadcrumbs
          items={[{ label: 'Por Qu\u00e9 McAllen', href: '/es/why-mcallen' }]}
          locale="es"
        />
      </Container>
      <StatsBlock locale="es" />
      <StrategicPosition locale="es" />
      <WhyTexas locale="es" />
      <WhyMcAllenSpecific locale="es" />
      <IndustrySectors locale="es" />
      <CorridorCards locale="es" />
      <CTASection
        locale="es"
        heading="\u00bfExplorando McAllen para Su Pr\u00f3xima Expansi\u00f3n?"
        subtext="Si est\u00e1 evaluando McAllen o el Valle del R\u00edo Grande como ubicaci\u00f3n para su negocio, una evaluaci\u00f3n inicial le dar\u00e1 la inteligencia estructurada que necesita para tomar una decisi\u00f3n con confianza. Conocemos esta regi\u00f3n porque hemos pasado sesenta a\u00f1os construyendo en ella."
        buttonText="Solicitar una Evaluaci\u00f3n"
      />
    </>
  );
}
