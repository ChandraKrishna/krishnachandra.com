import { experience } from '@/content/experience';

const organisations = experience.reduce<Array<{company:string;roles:typeof experience}>>((groups, role) => {
  const existing = groups.find(group => group.company === role.company);
  if (existing) existing.roles.push(role);
  else groups.push({ company: role.company, roles: [role] });
  return groups;
}, []);

export function CareerTimeline() {
  return <section className="py-24"><p className="eyebrow">Experience</p><div className="mt-5 grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><h2 className="section-title">A decade of making complex systems dependable.</h2><p className="mt-5 max-w-md leading-7 text-slate-400">Career progression across healthcare, banking, retail, aviation, asset maintenance, and energy.</p></div><div className="space-y-4">{organisations.map((organisation,index)=><article key={organisation.company} className="glass-card p-6"><div className="flex items-start justify-between gap-4"><div><span className="text-xs text-cyan-400">{String(index+1).padStart(2,'0')}</span><h3 className="mt-3 text-xl font-semibold text-white">{organisation.company}</h3></div><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500">{organisation.roles.length} {organisation.roles.length===1?'role':'roles'}</span></div><div className="mt-6 border-l border-white/10 pl-5">{organisation.roles.map(role=><div key={role.role} className="relative pb-6 last:pb-0"><span className="absolute -left-[25px] top-2 h-2 w-2 rounded-full bg-cyan-400"/><div className="flex flex-wrap justify-between gap-2"><p className="font-medium text-slate-200">{role.role}</p><p className="text-xs text-slate-500">{role.period}</p></div><p className="mt-2 text-sm leading-6 text-slate-500">{role.summary}</p></div>)}</div></article>)}</div></div></section>;
}
