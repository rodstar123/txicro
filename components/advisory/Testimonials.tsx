import { Container, GoldDivider } from '@/components/ui';

interface TestimonialsProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    sectionTitle: 'What Our Clients Say',
    note: 'Testimonials are currently being collected from recent advisory engagements. This section will be updated as client feedback is received.',
    quotes: [
      {
        text: 'Quote placeholder \u2014 client testimonial about the assessment process.',
        name: 'Name',
        title: 'Title',
        org: 'Organization',
      },
      {
        text: 'Quote placeholder \u2014 client testimonial about stakeholder mapping value.',
        name: 'Name',
        title: 'Title',
        org: 'Organization',
      },
      {
        text: 'Quote placeholder \u2014 client testimonial about delegation coordination.',
        name: 'Name',
        title: 'Title',
        org: 'Organization',
      },
    ],
  },
  es: {
    sectionTitle: 'Lo Que Dicen Nuestros Clientes',
    note: 'Actualmente estamos recopilando testimonios de compromisos de asesor\u00eda recientes. Esta secci\u00f3n se actualizar\u00e1 a medida que se reciba retroalimentaci\u00f3n de los clientes.',
    quotes: [
      {
        text: 'Testimonio pendiente \u2014 comentario del cliente sobre el proceso de evaluaci\u00f3n.',
        name: 'Nombre',
        title: 'T\u00edtulo',
        org: 'Organizaci\u00f3n',
      },
      {
        text: 'Testimonio pendiente \u2014 comentario del cliente sobre el valor del mapeo de actores.',
        name: 'Nombre',
        title: 'T\u00edtulo',
        org: 'Organizaci\u00f3n',
      },
      {
        text: 'Testimonio pendiente \u2014 comentario del cliente sobre la coordinaci\u00f3n de delegaciones.',
        name: 'Nombre',
        title: 'T\u00edtulo',
        org: 'Organizaci\u00f3n',
      },
    ],
  },
};

export default function Testimonials({ locale }: TestimonialsProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-lightgray">
      <Container>
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold">
            {t.sectionTitle}
          </h2>
          <GoldDivider width="md" className="mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.quotes.map((quote, i) => (
            <div
              key={i}
              className="bg-white rounded-card p-6 border border-gray-100 flex flex-col"
            >
              {/* Quote mark */}
              <span className="text-gold text-4xl font-heading leading-none mb-2" aria-hidden="true">
                &ldquo;
              </span>
              <p className="font-body text-slate text-sm leading-relaxed italic flex-1">
                {quote.text}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-heading text-sm font-semibold text-navy">
                  {quote.name}, {quote.title}
                </p>
                <p className="font-body text-xs text-slate-light">
                  {quote.org}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Collection note */}
        <p className="text-center text-slate text-sm font-body mt-8 italic">
          {t.note}
        </p>
      </Container>
    </section>
  );
}
