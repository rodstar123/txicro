import { Container, GoldDivider } from "@/components/ui";

interface ContactInfoProps {
  locale: "en" | "es";
}

const content = {
  en: {
    title: "Direct Contact",
    email: "info@txicro.com",
    address: "315 W Nolana Ave, Suite G-6, McAllen, TX 78504",
    hours: "Monday\u2013Friday, 9:00 AM \u2013 5:00 PM CST",
    byAppointment: "Meetings by appointment",
    emailLabel: "Email",
    addressLabel: "Address",
    hoursLabel: "Hours",
  },
  es: {
    title: "Contacto Directo",
    email: "info@txicro.com",
    address: "315 W Nolana Ave, Suite G-6, McAllen, TX 78504",
    hours: "Lunes\u2013Viernes, 9:00 AM \u2013 5:00 PM CST",
    byAppointment: "Reuniones con cita previa",
    emailLabel: "Correo",
    addressLabel: "Direcci\u00f3n",
    hoursLabel: "Horario",
  },
};

export default function ContactInfo({ locale }: ContactInfoProps) {
  const t = content[locale];

  return (
    <section className="bg-white py-section-mobile sm:py-section">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Contact Details */}
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy font-semibold mb-4">
              {t.title}
            </h2>
            <GoldDivider width="md" className="mb-8 mx-0" />

            <div className="space-y-6">
              {/* Email */}
              <div>
                <h3 className="text-sm font-semibold text-navy uppercase tracking-wider font-body mb-1">
                  {t.emailLabel}
                </h3>
                <a
                  href={`mailto:${t.email}`}
                  className="text-gold text-lg font-body hover:text-gold-dark transition-colors duration-200"
                >
                  {t.email}
                </a>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-sm font-semibold text-navy uppercase tracking-wider font-body mb-1">
                  {t.addressLabel}
                </h3>
                <p className="text-slate text-lg font-body leading-relaxed">
                  {t.address}
                </p>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-sm font-semibold text-navy uppercase tracking-wider font-body mb-1">
                  {t.hoursLabel}
                </h3>
                <p className="text-slate text-lg font-body">{t.hours}</p>
                <p className="text-slate-light text-base font-body mt-1 italic">
                  {t.byAppointment}
                </p>
              </div>
            </div>
          </div>

          {/* Right — Map */}
          <div className="flex items-start">
            <div className="w-full rounded-card overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.2!2d-98.2402!3d26.2034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzEyLjIiTiA5OMKwMTQnMjQuNyJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={
                  locale === "es"
                    ? "Ubicaci\u00f3n de TXICRO en McAllen"
                    : "TXICRO office location in McAllen"
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
