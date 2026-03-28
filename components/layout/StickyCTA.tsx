'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 4L12 12M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1.5 inline-block">
      <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function StickyCTA() {
  const pathname = usePathname();
  const locale: 'en' | 'es' = pathname.startsWith('/es') ? 'es' : 'en';

  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Observe footer visibility
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Hide on contact page — user is already there
  const isContactPage = pathname === '/contact' || pathname === '/es/contact';

  const shouldShow = visible && !dismissed && !footerInView && !isContactPage;

  const contactHref = locale === 'es' ? '/es/contact' : '/contact';
  const promptText = locale === 'es'
    ? 'Listo para explorar oportunidades en Texas?'
    : 'Ready to explore opportunities in Texas?';
  const ctaLabel = locale === 'es' ? 'Solicitar Evaluacion' : 'Request Assessment';

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-out ${
        shouldShow ? 'translate-y-0' : 'translate-y-full'
      }`}
      role="complementary"
      aria-label={locale === 'es' ? 'Llamada a la accion' : 'Call to action'}
    >
      <div className="border-t-2 border-gold/60 bg-navy/95 backdrop-blur-md">
        <div className="max-w-txicro mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Text */}
            <p className="text-white text-sm hidden sm:block">
              {promptText}
            </p>

            <div className="flex items-center gap-3 sm:gap-4 ml-auto">
              {/* CTA Button */}
              <Link
                href={contactHref}
                className="inline-flex items-center bg-gold text-navy font-heading font-semibold text-sm px-4 py-2 rounded-card hover:bg-gold-dark transition-colors whitespace-nowrap"
              >
                {ctaLabel}
                <ArrowRight />
              </Link>

              {/* Dismiss button */}
              <button
                onClick={() => setDismissed(true)}
                className="text-white/50 hover:text-white transition-colors p-1 shrink-0"
                aria-label={locale === 'es' ? 'Cerrar' : 'Dismiss'}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
