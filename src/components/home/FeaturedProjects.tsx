import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
export function FeaturedProjects(){return <section className="py-20"><p className="text-sm uppercase tracking-[.2em] text-blue-500">Selected work</p><h2 className="mt-3 text-3xl font-semibold">Projects that connect engineering and business outcomes</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></section>}
