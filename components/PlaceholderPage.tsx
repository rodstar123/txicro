import Image from 'next/image';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
  locale: 'en' | 'es';
  breadcrumbs?: BreadcrumbItem[];
}

export default function PlaceholderPage({ title, subtitle, locale, breadcrumbs }: PlaceholderPageProps) {
  const homeHref = locale === 'es' ? '/es' : '/';
  const homeLabel = locale === 'es' ? 'Inicio' : 'Home';
  const comingSoon = locale === 'es' ? 'Contenido próximamente — Fase 2' : 'Content coming soon — Phase 2';
  const backHome = locale === 'es' ? '← Volver al inicio' : '← Back to home';

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[#3D4F5F]">
              <li><Link href={homeHref} className="hover:text-[#F0B924] transition-colors">{homeLabel}</Link></li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#F0B924]">/</span>
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-[#0A1628] font-medium">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-[#F0B924] transition-colors">{crumb.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src="/images/txicro-logo.png" alt="TXICRO" width={80} height={80} />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0A1628] text-center mb-3">{title}</h1>
        {subtitle && <p className="text-lg text-[#3D4F5F] text-center mb-6">{subtitle}</p>}

        {/* Gold divider */}
        <div className="w-24 h-0.5 bg-[#F0B924] mx-auto mb-8" />

        {/* Coming soon */}
        <p className="text-center text-[#3D4F5F] text-lg mb-8">{comingSoon}</p>

        {/* Back link */}
        <div className="text-center">
          <Link href={homeHref} className="inline-flex items-center text-[#F0B924] hover:text-[#0A1628] transition-colors font-medium">
            {backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
