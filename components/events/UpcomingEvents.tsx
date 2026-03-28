import { Container, GoldDivider } from '@/components/ui';

interface UpcomingEventsProps {
  locale: 'en' | 'es';
}

const content = {
  en: {
    title: 'Upcoming Events',
    emptyState: 'No upcoming events currently listed. Check back for announcements about trade missions, speaking engagements, and community events.',
    placeholder: 'Event TBD',
  },
  es: {
    title: 'Eventos Pr\u00f3ximos',
    emptyState: 'No hay eventos pr\u00f3ximos listados actualmente. Regrese para anuncios sobre misiones comerciales, conferencias y eventos comunitarios.',
    placeholder: 'Evento por confirmar',
  },
};

export default function UpcomingEvents({ locale }: UpcomingEventsProps) {
  const t = content[locale];

  return (
    <section className="bg-white py-section-mobile sm:py-section">
      <Container>
        <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
          {t.title}
        </h2>
        <GoldDivider width="sm" className="mb-8 !mx-0" />

        <p className="font-body text-slate text-lg leading-relaxed italic mb-10 max-w-3xl">
          {t.emptyState}
        </p>

        {/* Build as a card grid that can be populated from a simple data file or CMS.
            Each card shows: date, title, location, description, and optional registration link. */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border-2 border-dashed border-gray-200 rounded-card p-8 flex flex-col items-center justify-center min-h-[200px] text-center"
            >
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <p className="font-heading text-lg text-gray-300">
                {t.placeholder}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
