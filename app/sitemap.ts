import { type MetadataRoute } from 'next';
import { HIGH_PRIORITY_ROUTES, ROUTES, SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency: route === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '/' ? 1 : HIGH_PRIORITY_ROUTES.has(route) ? 0.8 : 0.5,
  }));
}
