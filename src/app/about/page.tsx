import Link from 'next/link';
import { ArrowUpRight, Award, Building2, CalendarRange, GraduationCap, HeartHandshake } from 'lucide-react';
import { profile } from '@/content/profile';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata('About', 'Meet Krishna Chandra, a performance engineering leader focused on reliable systems and evidence-led delivery.', '/about/');

const principles = [
  ['Evidence before opinion', 'Measure the system, reproduce the behaviour, and let data guide the decision.'],
  ['Production realism', 'Model workloads, dependencies, and failure modes that reflect how people actually use the product.'],
  ['One engineering story', 'Connect application, database, network, and infrastructure signals during analysis.'],
  ['Reusable capability', 'Automate repetitive work and leave teams with practices they can operate confidently.'],
];
const education = [
  { qualification: 'B.Tech', subject: 'Computer Science & Engineering', institution: 'Kurukshetra University', period: '2010 - 2014', level: 'Undergraduate degree' },
  { qualification: 'Higher Secondary', subject: 'Physics, Chemistry & Mathematics', institution: 'Swami Harsewanand Public School', period: 'Jun 2008 - Jun 2010', level: 'Senior secondary' },
  { qualification: 'High School', subject: 'General studies', institution: 'Bal Vikas Vidyalaya', period: 'Apr 2007 - Jun 2008', level: 'Secondary education' },
];

export default function About() {
  return <section className="py-20">
    <p className="eyebrow">About Krishna Chandra</p>
    <div className="mt-5 grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
      <div><h1 className="section-title max-w-4xl">I turn performance data into decisions engineering teams can act on.</h1><p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">{profile.tagline}</p><p className="mt-5 max-w-3xl leading-8 text-slate-400">Across Infinite Computer Solutions, Oracle, ITC Infotech, R Systems, and Cavisson Systems, I have supported enterprise applications in healthcare, banking, asset maintenance, aviation, oil and gas, and e-commerce. My work covers workload modelling, load and scalability testing, automation, observability, root-cause analysis, capacity planning, and performance tuning.</p></div>
      <aside className="glass-card p-7"><p className="text-xs uppercase tracking-[.2em] text-cyan-400">At a glance</p><dl className="mt-6 space-y-5"><div><dt className="text-sm text-slate-500">Current role</dt><dd className="mt-1 text-white">Assistant Manager</dd></div><div><dt className="text-sm text-slate-500">Experience</dt><dd className="mt-1 text-white">{profile.experienceYears} years</dd></div><div><dt className="text-sm text-slate-500">Location</dt><dd className="mt-1 text-white">{profile.location}</dd></div><div><dt className="text-sm text-slate-500">Languages</dt><dd className="mt-1 text-white">English / Hindi</dd></div></dl></aside>
    </div>
    <div className="mt-20 grid gap-4 md:grid-cols-2">{principles.map(([title,text],i)=><article key={title} className="glass-card p-6"><span className="text-xs text-cyan-400">0{i+1}</span><h2 className="mt-6 text-xl font-semibold text-white">{title}</h2><p className="mt-3 leading-7 text-slate-400">{text}</p></article>)}</div>
    <section className="mt-24"><p className="eyebrow">Education</p><h2 className="section-title mt-5">Academic qualifications.</h2><div className="mt-10 grid gap-5 lg:grid-cols-2 lg:grid-rows-2">{education.map((item,index)=><article key={item.qualification} className={`glass-card group relative overflow-hidden p-7 ${index===0?'lg:row-span-2 lg:p-9':''}`}><span className="absolute right-6 top-4 text-7xl font-semibold text-white/[.035]">0{index+1}</span><div className="relative flex h-full flex-col"><div className="flex items-center justify-between gap-4"><span className="rounded-full border border-cyan-400/25 bg-cyan-400/[.07] px-3 py-1 text-xs text-cyan-300">{item.level}</span><GraduationCap className="h-5 w-5 text-cyan-400"/></div><div className={index===0?'my-auto py-12':'mt-9'}><p className="text-sm text-slate-400">{item.subject}</p><h3 className={`${index===0?'mt-3 text-4xl':'mt-2 text-2xl'} font-semibold tracking-tight text-white`}>{item.qualification}</h3><p className="mt-4 text-slate-300">{item.institution}</p></div><p className="mt-7 flex items-center gap-2 border-t border-slate-600/40 pt-5 text-xs uppercase tracking-[.15em] text-slate-400"><CalendarRange className="h-4 w-4 text-cyan-400"/>{item.period}</p></div></article>)}</div></section>
    <div className="mt-20 grid gap-5 md:grid-cols-3"><article className="glass-card p-6"><Award className="text-cyan-400"/><h2 className="mt-5 text-lg font-semibold">Recognised performance</h2><p className="mt-2 text-sm leading-6 text-slate-400">Two Best Performer honours recognising innovation, teamwork, strategic execution, and high-quality delivery.</p></article><article className="glass-card p-6"><GraduationCap className="text-cyan-400"/><h2 className="mt-5 text-lg font-semibold">Continuous learning</h2><p className="mt-2 text-sm leading-6 text-slate-400">Training across AWS, cloud security, JMeter, Selenium, Cucumber, Java, and build automation.</p></article><article className="glass-card p-6"><HeartHandshake className="text-cyan-400"/><h2 className="mt-5 text-lg font-semibold">Collaboration</h2><p className="mt-2 text-sm leading-6 text-slate-400">Professional recommendations highlight technical depth, ownership, reliability, and a focus on high standards.</p></article></div>
    <div className="mt-16 flex flex-wrap gap-3"><Link href="/experience" className="button-primary">Explore my experience <ArrowUpRight className="h-4 w-4"/></Link><Link href="/contact" className="button-secondary"><Building2 className="h-4 w-4"/> Work with me</Link></div>
  </section>;
}
