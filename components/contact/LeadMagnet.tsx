"use client";

import { useState } from "react";
import { Container, GoldDivider, Button } from "@/components/ui";

interface LeadMagnetProps {
  locale: "en" | "es";
}

const content = {
  en: {
    title: "Not Ready for an Assessment?",
    description:
      "Download our free McAllen Gateway Guide \u2014 a comprehensive introduction to cross-border commerce in the Rio Grande Valley.",
    placeholder: "Enter your email",
    button: "Download",
    disclaimer: "We respect your privacy. Unsubscribe anytime.",
    success: "Thank you! Check your email for the download link.",
  },
  es: {
    title: "\u00bfA\u00fan No Est\u00e1 Listo para una Evaluaci\u00f3n?",
    description:
      "Descargue nuestra Gu\u00eda Gratuita del Portal de McAllen \u2014 una introducci\u00f3n completa al comercio transfronterizo en el Valle del R\u00edo Grande.",
    placeholder: "Ingrese su correo electr\u00f3nico",
    button: "Descargar",
    disclaimer: "Respetamos su privacidad. Cancele en cualquier momento.",
    success: "Gracias! Revise su correo para el enlace de descarga.",
  },
};

export default function LeadMagnet({ locale }: LeadMagnetProps) {
  const t = content[locale];
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // eslint-disable-next-line no-console
      console.log("Lead magnet email:", email);
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-lightgray py-section-mobile sm:py-section">
      <Container className="max-w-2xl text-center">
        <h2 className="font-heading text-3xl sm:text-4xl text-navy font-semibold mb-4">
          {t.title}
        </h2>
        <GoldDivider width="md" className="mb-6" />
        <p className="text-slate text-base sm:text-lg font-body leading-relaxed mb-8">
          {t.description}
        </p>

        {submitted ? (
          <p className="text-trust text-lg font-body font-semibold">
            {t.success}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              required
              className="flex-1 border border-gray-200 rounded-card px-4 py-3 font-body text-navy bg-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors duration-200"
            />
            <Button type="submit" variant="primary" size="md">
              {t.button}
            </Button>
          </form>
        )}

        <p className="text-sm text-slate-light font-body mt-4">
          {t.disclaimer}
        </p>
      </Container>
    </section>
  );
}
