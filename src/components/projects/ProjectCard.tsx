import Link from 'next/link';
import { ArrowUpRight, Building2, CalendarRange } from 'lucide-react';
import type { Project } from '@/types/project';

export function ProjectCard({project,index=0}:{project:Project;index?:number}) {
  return <Link href={`/projects/${project.slug}`} className="glass-card group flex min-h-[25rem] flex-col p-7">
    <div className="flex items-start justify-between gap-4"><span className="text-xs uppercase tracking-[.18em] text-cyan-400">{project.category}</span><span className="text-xs text-slate-400">{String(index+1).padStart(2,'0')}</span></div>
    <div className="my-auto py-9"><h2 className="text-2xl font-semibold leading-tight text-white transition group-hover:text-cyan-300">{project.title}</h2><div className="mt-5 space-y-2 text-sm text-slate-400"><p className="flex items-center gap-2"><Building2 className="h-4 w-4 text-cyan-400"/>{project.organization}</p><p className="flex items-center gap-2"><CalendarRange className="h-4 w-4 text-cyan-400"/>{project.period}</p></div><p className="mt-6 leading-7 text-slate-300">{project.summary}</p></div>
    <div className="flex items-end justify-between gap-3 border-t border-slate-600/40 pt-5"><div className="flex flex-wrap gap-2">{project.stack.slice(0,3).map(skill=><span key={skill} className="rounded-full border border-slate-500/40 px-3 py-1 text-xs text-slate-300">{skill}</span>)}</div><ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"/></div>
  </Link>;
}
