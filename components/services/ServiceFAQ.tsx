"use client";

import { useState } from "react";
import { Container, GoldDivider } from "@/components/ui";

interface ServiceFAQProps {
  locale: "en" | "es";
}

const content = {
  en: {
    sectionTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: 'What does "fee-based" mean?',
        answer:
          "It means you pay a disclosed fee for our advisory services. We do not receive commissions, referral fees, finder\u2019s fees, or any compensation tied to transactions. Our advice is independent because our income does not depend on what you decide.",
      },
      {
        question: "Do you represent clients in transactions?",
        answer:
          "No. TXICRO advises and coordinates. We do not act as brokers, agents, or representatives in any commercial transaction. If you need legal representation, brokerage, or accounting services, we can recommend qualified professionals \u2014 but we do not receive compensation for those referrals.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We work across industries, with particular depth in manufacturing, logistics, commerce, professional services, and institutional relations. The common factor is cross-border complexity, not a specific sector.",
      },
      {
        question: "How long does an engagement typically last?",
        answer:
          "An Initial Assessment typically takes two to three weeks. Strategic Advisory Packages range from one to three months depending on scope. Retainers are ongoing with monthly renewal.",
      },
      {
        question: "Do you work outside of Texas?",
        answer:
          "Our core expertise is Texas and the US-Mexico border region. However, we advise organizations from anywhere in the world that are considering this market. If your target is Texas, we can help \u2014 regardless of where you are based.",
      },
    ],
  },
  es: {
    sectionTitle: "Preguntas Frecuentes",
    faqs: [
      {
        question: '\u00bfQu\u00e9 significa "basado en honorarios"?',
        answer:
          "Significa que usted paga un honorario divulgado por nuestros servicios de asesor\u00eda. No recibimos comisiones, tarifas por referencia, tarifas de intermediaci\u00f3n ni ninguna compensaci\u00f3n vinculada a transacciones. Nuestro consejo es independiente porque nuestros ingresos no dependen de lo que usted decida.",
      },
      {
        question: "\u00bfRepresentan a clientes en transacciones?",
        answer:
          "No. TXICRO asesora y coordina. No actuamos como corredores, agentes o representantes en ninguna transacci\u00f3n comercial. Si necesita representaci\u00f3n legal, corretaje o servicios contables, podemos recomendar profesionales calificados \u2014 pero no recibimos compensaci\u00f3n por esas referencias.",
      },
      {
        question: "\u00bfCon qu\u00e9 industrias trabajan?",
        answer:
          "Trabajamos en todas las industrias, con profundidad particular en manufactura, log\u00edstica, comercio, servicios profesionales y relaciones institucionales. El factor com\u00fan es la complejidad transfronteriza, no un sector espec\u00edfico.",
      },
      {
        question: "\u00bfCu\u00e1nto dura un compromiso t\u00edpicamente?",
        answer:
          "Una Evaluaci\u00f3n Inicial generalmente toma de dos a tres semanas. Los Paquetes de Asesor\u00eda Estrat\u00e9gica van de uno a tres meses dependiendo del alcance. Las Retenciones son continuas con renovaci\u00f3n mensual.",
      },
      {
        question: "\u00bfTrabajan fuera de Texas?",
        answer:
          "Nuestra experiencia central es Texas y la regi\u00f3n fronteriza EE.UU.-M\u00e9xico. Sin embargo, asesoramos a organizaciones de cualquier parte del mundo que est\u00e9n considerando este mercado. Si su objetivo es Texas, podemos ayudar \u2014 independientemente de d\u00f3nde se encuentre.",
      },
    ],
  },
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base sm:text-lg font-semibold text-navy pr-4 group-hover:text-gold transition-colors duration-200">
          {question}
        </span>
        <span
          className={`text-gold text-xl shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="font-body text-slate text-sm sm:text-base leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function ServiceFAQ({ locale }: ServiceFAQProps) {
  const t = content[locale];

  return (
    <section className="py-section-mobile sm:py-section bg-white">
      <Container>
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl text-navy font-bold">
            {t.sectionTitle}
          </h2>
          <GoldDivider width="md" className="mt-4" />
        </div>

        <div className="max-w-3xl mx-auto">
          {t.faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container>
    </section>
  );
}
