import { type MetadataRoute } from 'next';
import { ROUTES, SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.7,
  }));
}
