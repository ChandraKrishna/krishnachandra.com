import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { insights } from '@/content/insights';
import { siteMetadata } from '@/content/siteMetadata';

export const dynamic = 'force-static';

export default function sitemap():MetadataRoute.Sitemap {
  const base=process.env.NEXT_PUBLIC_SITE_URL||siteMetadata.url;
  const staticRoutes=['','/about','/experience','/expertise','/services','/projects','/insights','/contact','/privacy'];
  const dynamicRoutes=[...projects.map(p=>`/projects/${p.slug}`),...insights.map(p=>`/insights/${p.slug}`)];
  return [...staticRoutes,...dynamicRoutes].map(route=>({
    url: route ? `${base}${route}/` : `${base}/`,
  }));
}
