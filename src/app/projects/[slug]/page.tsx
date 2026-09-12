import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Building2, CalendarRange, Check } from 'lucide-react';
import { projects } from '@/content/projects';

export function generateStaticParams(){return projects.map(project=>({slug:project.slug}))}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const project=projects.find(item=>item.slug===slug);
  if(!project) notFound();
  const index=projects.findIndex(item=>item.slug===slug);
  const next=projects[(index+1)%projects.length];

  return <section className="py-20">
    <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300"><ArrowLeft className="h-4 w-4"/>All projects</Link>
    <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_.4fr]"><div><p className="eyebrow">{project.category} / {project.status}</p><h1 className="mt-5 text-5xl font-semibold leading-tight tracking-[-.04em] text-white md:text-7xl">{project.title}</h1><p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">{project.summary}</p></div><aside className="glass-card h-fit p-6"><dl className="space-y-5"><div><dt className="text-xs uppercase tracking-[.16em] text-slate-500">Associated with</dt><dd className="mt-2 flex items-center gap-2 text-slate-200"><Building2 className="h-4 w-4 text-cyan-400"/>{project.organization}</dd></div><div><dt className="text-xs uppercase tracking-[.16em] text-slate-500">Project period</dt><dd className="mt-2 flex items-center gap-2 text-slate-200"><CalendarRange className="h-4 w-4 text-cyan-400"/>{project.period}</dd></div></dl></aside></div>
    <div className="mt-16 grid gap-5 md:grid-cols-2"><article className="glass-card p-7"><span className="text-xs text-cyan-400">01 / Context</span><h2 className="mt-6 text-2xl font-semibold text-white">The requirement</h2><p className="mt-4 leading-8 text-slate-300">{project.problem}</p></article><article className="glass-card p-7"><span className="text-xs text-cyan-400">02 / Delivery</span><h2 className="mt-6 text-2xl font-semibold text-white">The engineering approach</h2><p className="mt-4 leading-8 text-slate-300">{project.solution}</p></article></div>
    <article className="mt-5 rounded-3xl border border-cyan-400/25 bg-cyan-400/[.07] p-7"><span className="text-xs text-cyan-400">03 / Responsibilities</span><ul className="mt-6 grid gap-4 md:grid-cols-2">{project.features.map(item=><li key={item} className="flex items-start gap-3 text-slate-200"><Check className="mt-1 h-4 w-4 shrink-0 text-cyan-400"/>{item}</li>)}</ul></article>
    <article className="mt-5 glass-card p-7"><span className="text-xs uppercase tracking-[.18em] text-slate-500">Skills and technology</span><div className="mt-5 flex flex-wrap gap-2">{project.stack.map(skill=><span key={skill} className="rounded-full border border-slate-500/40 bg-slate-800/30 px-3 py-1 text-sm text-slate-300">{skill}</span>)}</div></article>
    <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-slate-600/40 pt-8"><div><p className="text-xs uppercase tracking-[.2em] text-slate-500">Next project</p><p className="mt-2 text-lg font-medium text-white">{next.title}</p></div><Link href={`/projects/${next.slug}`} className="button-secondary">View project <ArrowRight className="h-4 w-4"/></Link></div>
  </section>;
}
