'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container, GoldDivider } from '@/components/ui';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  href: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  audience: string[];
  deliverables: string[];
  methodology: string;
  faqs: FAQ[];
  relatedServices: RelatedService[];
  caseStudyExcerpt?: string;
}

interface ServiceDetailPageProps {
  locale: 'en' | 'es';
  service: ServiceData;
  breadcrumbs: { label: string; href: string }[];
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg text-navy pr-4 group-hover:text-gold transition-colors duration-200">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-gold transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="font-body text-slate leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function ServiceDetailPage({ locale, service, breadcrumbs }: ServiceDetailPageProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const labels = {
    en: {
      whatCovers: 'What This Service Covers',
      whoNeeds: 'Who Needs This',
      whatReceive: 'What You Receive',
      approach: 'Our Approach',
      questions: 'Common Questions',
      caseStudy: 'From Our Advisory Work',
      viewWork: 'View Advisory Work',
      related: 'Related Services',
      learnMore: 'Learn more',
    },
    es: {
      whatCovers: 'Qué Cubre Este Servicio',
      whoNeeds: 'Quién Necesita Este Servicio',
      whatReceive: 'Qué Recibe',
      approach: 'Nuestro Enfoque',
      questions: 'Preguntas Frecuentes',
      caseStudy: 'De Nuestro Trabajo de Asesoría',
      viewWork: 'Ver Trabajo de Asesoría',
      related: 'Servicios Relacionados',
      learnMore: 'Más información',
    },
  };

  const t = labels[locale];
  const advisoryHref = locale === 'es' ? '/es/advisory-work' : '/advisory-work';

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <Container>
          <h1 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            {service.title}
          </h1>
          <p className="font-body text-lg text-gray-300 max-w-3xl">
            {service.subtitle}
          </p>
          <GoldDivider width="sm" className="mt-6 !mx-0" />
        </Container>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs items={breadcrumbs} locale={locale} />
        </Container>
      </div>

      {/* What This Covers */}
      <section className="bg-white py-section-mobile sm:py-section">
        <Container>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
            {t.whatCovers}
          </h2>
          <GoldDivider width="sm" className="mb-8 !mx-0" />
          <div className="max-w-3xl space-y-4">
            {service.description.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-slate leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Who Needs This */}
      <section className="bg-lightgray py-section-mobile sm:py-section">
        <Container>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
            {t.whoNeeds}
          </h2>
          <GoldDivider width="sm" className="mb-8 !mx-0" />
          <ul className="space-y-4 max-w-3xl">
            {service.audience.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-body text-slate text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-section-mobile sm:py-section">
        <Container>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
            {t.whatReceive}
          </h2>
          <GoldDivider width="sm" className="mb-8 !mx-0" />
          <ul className="space-y-4 max-w-3xl">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2.5" aria-hidden="true" />
                <span className="font-body text-slate text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Methodology */}
      <section className="bg-lightgray py-section-mobile sm:py-section">
        <Container>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
            {t.approach}
          </h2>
          <GoldDivider width="sm" className="mb-8 !mx-0" />
          <div className="max-w-3xl space-y-4">
            {service.methodology.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-slate leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="bg-white py-section-mobile sm:py-section">
        <Container>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
            {t.questions}
          </h2>
          <GoldDivider width="sm" className="mb-8 !mx-0" />
          <div className="max-w-3xl">
            {service.faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openFAQ === i}
                onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Case Study Excerpt */}
      {service.caseStudyExcerpt && (
        <section className="bg-navy py-section-mobile sm:py-section">
          <Container>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mb-6">
              {t.caseStudy}
            </h2>
            <GoldDivider width="sm" className="mb-8 !mx-0" />
            <p className="font-body text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
              {service.caseStudyExcerpt}
            </p>
            <Link
              href={advisoryHref}
              className="inline-flex items-center font-heading text-gold hover:text-gold-light transition-colors duration-200"
            >
              {t.viewWork}
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Container>
        </section>
      )}

      {/* Cross-Links */}
      <section className="bg-lightgray py-12">
        <Container>
          <h3 className="font-heading text-2xl sm:text-3xl text-navy mb-8 text-center">
            {t.related}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.relatedServices.map((rs) => (
              <Link
                key={rs.href}
                href={rs.href}
                className="block bg-white rounded-card p-6 border border-gray-100 hover:border-gold hover:shadow-md transition-all duration-200 group"
              >
                <h4 className="font-heading text-lg text-navy group-hover:text-gold transition-colors duration-200 mb-2">
                  {rs.title}
                </h4>
                <span className="font-body text-sm text-gold flex items-center">
                  {t.learnMore}
                  <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection locale={locale} />
    </>
  );
}
