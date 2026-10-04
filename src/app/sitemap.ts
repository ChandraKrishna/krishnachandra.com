import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { insights } from '@/content/insights';

export const dynamic = 'force-static';

export default function sitemap():MetadataRoute.Sitemap {
  const base=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000';
  const staticRoutes=['','/about','/experience','/expertise','/services','/projects','/insights','/contact','/privacy'];
  const dynamicRoutes=[...projects.map(p=>`/projects/${p.slug}`),...insights.map(p=>`/insights/${p.slug}`)];
  return [...staticRoutes,...dynamicRoutes].map(route=>({url:`${base}${route}`,lastModified:new Date()}));
}
