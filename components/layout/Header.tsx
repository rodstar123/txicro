'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getNavigation } from '@/lib/navigation';
import MobileMenu from './MobileMenu';

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-1">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const locale: 'en' | 'es' = pathname.startsWith('/es') ? 'es' : 'en';
  const nav = getNavigation(locale);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Scroll listener for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key closes dropdowns
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpenDropdown(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handleEscape]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isActive = (href: string) => {
    if (href === '/' || href === '/es/') {
      return pathname === '/' || pathname === '/es' || pathname === '/es/';
    }
    return pathname.startsWith(href);
  };

  // Language toggle: swap /es prefix
  const getLocaleToggleHref = () => {
    if (locale === 'es') {
      const stripped = pathname.replace(/^\/es/, '') || '/';
      return stripped;
    }
    return `/es${pathname}`;
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg'
            : 'bg-navy/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-txicro mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href={locale === 'es' ? '/es/' : '/'} className="flex items-center gap-2.5 shrink-0">
              <Image
                src="/images/txicro-logo.png"
                alt="TXICRO"
                width={44}
                height={44}
                className="w-9 h-9 lg:w-11 lg:h-11"
                priority
              />
              <span className="font-heading text-xl lg:text-2xl font-semibold text-white tracking-wide">
                TXICRO
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {nav.main.map((item) => {
                const hasDropdown = item.children && item.children.length > 0;
                const active = isActive(item.href);
                const dropdownOpen = openDropdown === item.label;

                if (hasDropdown) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        onClick={() => setOpenDropdown(dropdownOpen ? null : item.label)}
                        className={`flex items-center px-3 py-2 text-sm font-body transition-colors rounded ${
                          active
                            ? 'text-gold'
                            : 'text-white hover:text-gold'
                        }`}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-card shadow-xl transition-all duration-200 origin-top ${
                          dropdownOpen
                            ? 'opacity-100 scale-y-100 visible'
                            : 'opacity-0 scale-y-95 invisible'
                        }`}
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="py-2">
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className={`flex items-center px-4 py-2.5 text-sm transition-colors border-l-[3px] ${
                                isActive(child.href)
                                  ? 'border-gold text-navy bg-lightgray font-semibold'
                                  : 'border-transparent text-slate hover:border-gold hover:bg-lightgray/50 hover:text-navy'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-body transition-colors rounded relative ${
                      active
                        ? 'text-gold'
                        : 'text-white hover:text-gold'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right section: language toggle + mobile hamburger */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <Link
                href={getLocaleToggleHref()}
                className="flex items-center text-sm font-body"
                aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Espanol'}
              >
                <span className={`px-1.5 py-0.5 rounded transition-colors ${
                  locale === 'en' ? 'text-gold font-semibold' : 'text-white/60 hover:text-white'
                }`}>
                  EN
                </span>
                <span className="text-white/40 mx-0.5">|</span>
                <span className={`px-1.5 py-0.5 rounded transition-colors ${
                  locale === 'es' ? 'text-gold font-semibold' : 'text-white/60 hover:text-white'
                }`}>
                  ES
                </span>
              </Link>

              {/* Hamburger - mobile only */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden text-gold hover:text-gold-light transition-colors p-1"
                aria-label={locale === 'es' ? 'Abrir menu' : 'Open menu'}
              >
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={nav.main}
        currentPath={pathname}
        locale={locale}
      />
    </>
  );
}
