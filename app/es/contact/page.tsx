import { generatePageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import AssessmentForm from '@/components/AssessmentForm';
import ContactInfo from '@/components/contact/ContactInfo';
import LeadMagnet from '@/components/contact/LeadMagnet';
import { Container, GoldDivider } from '@/components/ui';

export const metadata = generatePageMetadata({
  title: 'Solicitar una Evaluación | Contacte a TXICRO',
  description:
    'Comience con claridad — solicite una evaluaci\u00f3n estructurada de TXICRO para sus necesidades comerciales internacionales en Texas.',
  path: '/es/contact',
  locale: 'es',
});

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Texas International Commerce & Relations Office',
  alternateName: 'TXICRO',
  url: 'https://txicro.com',
  logo: 'https://txicro.com/images/txicro-logo.png',
  description:
    'Asesoría transfronteriza para empresas internacionales, inversionistas e instituciones que ingresan a Texas a través del Valle del Río Grande.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '315 W Nolana Ave, Suite G-6',
    addressLocality: 'McAllen',
    addressRegion: 'TX',
    postalCode: '78504',
    addressCountry: 'US',
  },
  email: 'info@txicro.com',
  openingHours: 'Mo-Fr 09:00-17:00',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Mexico' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Noe Rodriguez',
    jobTitle: 'Fundador y Asesor Principal',
  },
};

export default function ContactPageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Intro Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <Container className="text-center">
          <h1 className="text-white font-heading text-4xl sm:text-5xl font-bold">
            {`Solicitar una Evaluaci\u00f3n`}
          </h1>
          <p className="text-gold text-xl mt-2 font-body">
            Comience con Claridad
          </p>
          <GoldDivider width="md" className="mt-6 mb-0" />
          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-base sm:text-lg font-body leading-relaxed">
            {`Una evaluaci\u00f3n inicial proporciona un entendimiento estructurado de oportunidades, riesgos y pr\u00f3ximos pasos \u2014 antes de tomar decisiones importantes.`}
          </p>
        </Container>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs
            items={[{ label: 'Contacto', href: '/es/contact' }]}
            locale="es"
          />
        </Container>
      </div>

      {/* Assessment Form */}
      <section className="bg-white py-section-mobile sm:py-section">
        <Container className="max-w-3xl">
          <AssessmentForm locale="es" />
        </Container>
      </section>

      {/* Lead Magnet */}
      <LeadMagnet locale="es" />

      {/* Contact Info + Map */}
      <ContactInfo locale="es" />
    </>
  );
}
