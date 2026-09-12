import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { experience } from '@/content/experience';

const organisations = experience.reduce<Array<{company:string;location:string;roles:typeof experience}>>((groups, role) => {
  const existing = groups.find(group => group.company === role.company);
  if (existing) existing.roles.push(role);
  else groups.push({ company: role.company, location: role.location, roles: [role] });
  return groups;
}, []);

export default function ExperiencePage(){
  return <section className="py-20"><p className="eyebrow">Career journey</p><h1 className="section-title mt-5">Five organisations. One continuous engineering journey.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">Each organisation is shown once, with promotions and designation changes nested underneath to make the progression clear.</p>
  <div className="mt-14 space-y-7">{organisations.map((organisation,index)=><article key={organisation.company} className="glass-card overflow-hidden"><header className="flex flex-wrap items-start justify-between gap-5 border-b border-white/10 p-7 md:p-9"><div className="flex gap-5"><span className="text-sm text-cyan-400">{String(index+1).padStart(2,'0')}</span><div><h2 className="text-3xl font-semibold tracking-tight text-white">{organisation.company}</h2><p className="mt-2 flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-3 w-3"/>{organisation.location}</p></div></div><div className="ml-auto rounded-full border border-cyan-400/20 bg-cyan-400/[.06] px-4 py-2 text-xs text-cyan-300">{organisation.roles.length} {organisation.roles.length===1?'designation':'designations'}</div></header>
  <div className="p-7 md:p-9">{organisation.roles.map((role,roleIndex)=><section key={role.role} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-4 pb-10 last:pb-0"><div className="flex flex-col items-center"><span className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-[#172235] bg-cyan-400"/>{roleIndex<organisation.roles.length-1&&<span className="mt-2 w-px flex-1 bg-slate-500/40"/>}</div><div className="grid gap-7 md:grid-cols-[minmax(15rem,.85fr)_minmax(0,1.5fr)]"><div><p className="text-xs uppercase tracking-[.18em] text-slate-400">{role.period}</p><h3 className="mt-3 text-xl font-semibold text-white">{role.role}</h3>{roleIndex===0&&organisation.roles.length>1&&<span className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">Latest designation</span>}</div><div><p className="leading-7 text-slate-200">{role.summary}</p><div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto]"><ul className="space-y-2 text-sm text-slate-300">{role.responsibilities.map(item=><li key={item} className="flex gap-3"><span className="text-cyan-400">-</span>{item}</li>)}</ul><div className="flex max-w-xs flex-wrap content-start justify-start gap-2 md:justify-end md:justify-self-end">{role.tools.map(tool=><span key={tool} className="h-fit whitespace-nowrap rounded-full border border-slate-500/40 bg-slate-800/30 px-3 py-1 text-xs text-slate-300">{tool}</span>)}</div></div></div></div></section>)}</div></article>)}</div>
  <Link href="/projects" className="button-primary mt-10">See the work behind the roles <ArrowUpRight className="h-4 w-4"/></Link></section>;
}
