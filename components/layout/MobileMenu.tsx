'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { NavItem } from '@/lib/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  currentPath: string;
  locale: 'en' | 'es';
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
    >
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function MobileMenu({ isOpen, onClose, items, currentPath, locale }: MobileMenuProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape]);

  const toggleSection = (label: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  const isActive = (href: string) => {
    if (href === '/' || href === '/es/') {
      return currentPath === href || currentPath === href.replace(/\/$/, '');
    }
    return currentPath.startsWith(href);
  };

  const contactHref = locale === 'es' ? '/es/contact' : '/contact';
  const ctaLabel = locale === 'es' ? 'Solicitar Evaluacion' : 'Request Assessment';

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-navy z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={locale === 'es' ? 'Menu de navegacion' : 'Navigation menu'}
      >
        {/* Close button */}
        <div className="flex justify-end p-3">
          <button
            onClick={onClose}
            className="text-white hover:text-gold transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={locale === 'es' ? 'Cerrar menu' : 'Close menu'}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Nav items */}
        <nav className="px-6 pb-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 72px)' }}>
          <ul className="space-y-1">
            {items.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const expanded = expandedSections.has(item.label);
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() => toggleSection(item.label)}
                        className={`w-full flex items-center justify-between py-3 text-lg font-heading transition-colors ${
                          active ? 'text-gold' : 'text-white hover:text-gold'
                        }`}
                        aria-expanded={expanded}
                      >
                        <span>{item.label}</span>
                        <ChevronIcon expanded={expanded} />
                      </button>

                      {/* Accordion content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <ul className="pl-4 border-l-2 border-gold/30 space-y-1 pb-2">
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className={`block py-2.5 text-base transition-colors ${
                                  isActive(child.href)
                                    ? 'text-gold'
                                    : 'text-white/80 hover:text-gold'
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block py-3 text-lg font-heading transition-colors ${
                        active ? 'text-gold' : 'text-white hover:text-gold'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Gold divider */}
          <div className="h-px bg-gold/30 my-6" />

          {/* CTA Button */}
          <Link
            href={contactHref}
            onClick={onClose}
            className="block w-full text-center bg-gold text-navy font-heading font-semibold py-3.5 px-6 rounded-card hover:bg-gold-dark transition-colors min-h-[48px]"
          >
            {ctaLabel}
          </Link>
        </nav>
      </div>
    </>
  );
}
