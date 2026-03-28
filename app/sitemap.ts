import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://txicro.com';
  const lastModified = new Date();

  const enRoutes = [
    '/',
    '/about',
    '/advisory-work',
    '/events',
    '/services',
    '/services/market-entry',
    '/services/cross-border-risk',
    '/services/stakeholder-mapping',
    '/services/trade-relations',
    '/services/strategic-briefings',
    '/services/delegation-support',
    '/why-mcallen',
    '/why-mcallen/monterrey',
    '/why-mcallen/vs-laredo',
    '/why-mcallen/austin-corridor',
    '/why-mcallen/houston',
    '/why-mcallen/rgv-cities',
    '/why-mcallen/mexico-city',
    '/insights',
    '/contact',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of enRoutes) {
    const esRoute = route === '/' ? '/es' : `/es${route}`;
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? 1.0 : route.split('/').length <= 2 ? 0.8 : 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          es: `${baseUrl}${esRoute}`,
        },
      },
    });
    entries.push({
      url: `${baseUrl}${esRoute}`,
      lastModified,
      changeFrequency: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? 1.0 : route.split('/').length <= 2 ? 0.8 : 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          es: `${baseUrl}${esRoute}`,
        },
      },
    });
  }

  return entries;
}
