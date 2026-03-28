import Link from 'next/link';
import { generateBreadcrumbSchema, type BreadcrumbItem } from '@/lib/schema';

interface BreadcrumbsProps {
  items: { label: string; href: string }[];
  locale: 'en' | 'es';
}

export default function Breadcrumbs({ items, locale }: BreadcrumbsProps) {
  const homeLabel = locale === 'es' ? 'Inicio' : 'Home';
  const homeHref = locale === 'es' ? '/es' : '/';

  // Build schema items: Home first, then all provided items
  const schemaItems: BreadcrumbItem[] = [
    { name: homeLabel, href: homeHref },
    ...items.map((item) => ({ name: item.label, href: item.href })),
  ];

  const schema = generateBreadcrumbSchema(schemaItems);

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate font-body">
          <li>
            <Link
              href={homeHref}
              className="hover:text-gold transition-colors duration-200"
            >
              {homeLabel}
            </Link>
          </li>
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                <span className="text-gold" aria-hidden="true">
                  /
                </span>
                {isLast ? (
                  <span className="font-medium text-navy">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
