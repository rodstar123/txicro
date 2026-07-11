"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getNavigation } from "@/lib/navigation";

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.04 17.043h-2.963v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.206-1.78 2.45v4.72H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54 3.001 0 3.556 1.974 3.556 4.544v5.238zM4.447 6.194a1.72 1.72 0 11-.001-3.44 1.72 1.72 0 010 3.44zM5.93 17.043H2.963V7.5H5.93v9.543zM18.521 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.645 1.482-1.44V1.44C20 .645 19.333 0 18.518 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13L2 4" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6V12L16 14" />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const locale: "en" | "es" = pathname.startsWith("/es") ? "es" : "en";
  const nav = getNavigation(locale);
  const prefix = locale === "es" ? "/es" : "";

  const quickLinks = [
    { label: locale === "es" ? "Inicio" : "Home", href: `${prefix}/` },
    { label: locale === "es" ? "Nosotros" : "About", href: `${prefix}/about` },
    {
      label: locale === "es" ? "Casos de Estudio" : "Advisory Work",
      href: `${prefix}/advisory-work`,
    },
    {
      label: locale === "es" ? "Articulos" : "Insights",
      href: `${prefix}/insights`,
    },
    { label: locale === "es" ? "Eventos" : "Events", href: `${prefix}/events` },
    {
      label: locale === "es" ? "Contacto" : "Contact",
      href: `${prefix}/contact`,
    },
  ];

  const tagline =
    locale === "es"
      ? "Una oficina neutral de asesoria y coordinacion que apoya a empresas internacionales, inversionistas e instituciones."
      : "A neutral advisory and coordination office supporting international businesses, investors, and institutions.";

  const copyright =
    locale === "es"
      ? "2026 Texas International Commerce & Relations Office. Todos los derechos reservados."
      : "2026 Texas International Commerce & Relations Office. All rights reserved.";

  const disclaimerAgency =
    locale === "es"
      ? "TXICRO no es una agencia gubernamental. Todos los compromisos son de naturaleza privada y profesional."
      : "TXICRO is not a government agency. All engagements are private and professional in nature.";

  const disclaimerFees =
    locale === "es"
      ? "Asesoria basada en honorarios. Sin comisiones. Sin compensacion basada en transacciones."
      : "Fee-based advisory. No commissions. No transaction-based compensation.";

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-txicro mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href={`${prefix}/`}
              className="inline-flex items-center gap-2.5 mb-4"
            >
              <Image
                src="/images/txicro-logo.png"
                alt="TXICRO"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-heading text-xl font-semibold text-white tracking-wide">
                TXICRO
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {tagline}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">
              {locale === "es" ? "Enlaces" : "Quick Links"}
            </h3>
            <ul className="space-y-3 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">
              {locale === "es" ? "Servicios" : "Services"}
            </h3>
            <ul className="space-y-3 sm:space-y-2.5">
              {nav.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors inline-block py-0.5"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-gold mb-4">
              {locale === "es" ? "Contacto" : "Contact"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <span className="text-gold mt-0.5 shrink-0">
                  <LocationIcon />
                </span>
                <span className="text-sm text-white/70 leading-relaxed">
                  315 W Nolana Ave, Suite G-6
                  <br />
                  McAllen, TX 78504
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-gold shrink-0">
                  <EmailIcon />
                </span>
                <a
                  href="mailto:info@txicro.com"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  info@txicro.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-gold shrink-0">
                  <ClockIcon />
                </span>
                <span className="text-sm text-white/70">
                  {locale === "es"
                    ? "Lun-Vie 9am-5pm CST"
                    : "Mon-Fri 9am-5pm CST"}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com/company/txicro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                  aria-label="TXICRO on LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-txicro mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gold/30" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-txicro mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <p className="text-xs text-white/50">&copy; {copyright}</p>
          <div className="flex flex-col gap-1 lg:text-right">
            <p className="text-xs text-white/40">{disclaimerAgency}</p>
            <p className="text-xs text-white/40">{disclaimerFees}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
