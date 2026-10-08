import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata('Projects', 'Selected performance engineering programmes across healthcare, financial services, retail, aviation, and cloud platforms.', '/projects/');

export default function ProjectsPage(){return <section className="py-20"><p className="eyebrow">Selected work</p><h1 className="section-title mt-5">Complex systems. Clear engineering outcomes.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">A selection of programmes and product work spanning investment services, retail cloud readiness, and performance intelligence. Details are framed to protect client confidentiality.</p><div className="mt-14 grid gap-6 lg:grid-cols-3">{projects.map((p,index)=><ProjectCard key={p.slug} project={p} index={index}/>)}</div></section>}
