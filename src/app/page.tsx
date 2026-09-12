import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Gauge, Network, Search, ShieldCheck } from 'lucide-react';
import { HeroSection } from '@/components/home/HeroSection';

const outcomes = [
  { icon: Gauge, title: 'Performance by design', text: 'Workload models and test strategies grounded in real user behaviour.' },
  { icon: Search, title: 'Faster root-cause analysis', text: 'Application, database, infrastructure, and network signals connected into one story.' },
  { icon: Network, title: 'Delivery at enterprise scale', text: 'Repeatable practices that align engineering teams, pipelines, and stakeholders.' },
  { icon: ShieldCheck, title: 'Confidence before release', text: 'Clear evidence and risk communication for better go-live decisions.' },
];

export default function Home() {
  return <>
    <HeroSection />
    <section className="border-y border-white/10 py-8"><div className="grid gap-5 text-sm text-slate-400 sm:grid-cols-2 lg:grid-cols-4">{['10+ years in engineering', '5 enterprise organisations', '6 industry domains', '2x Best Performer'].map(item => <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" />{item}</div>)}</div></section>
    <section className="py-24"><p className="eyebrow">How I create impact</p><div className="mt-5 grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><h2 className="section-title">From a slow system to a clear engineering decision.</h2><div className="grid gap-4 sm:grid-cols-2">{outcomes.map(({ icon: Icon, title, text }, index) => <article key={title} className="glass-card group p-6"><div className="mb-8 flex items-start justify-between"><Icon className="h-6 w-6 text-cyan-400" /><span className="text-xs text-slate-600">0{index + 1}</span></div><h3 className="text-lg font-semibold text-white">{title}</h3><p className="mt-2 leading-7 text-slate-400">{text}</p></article>)}</div></div></section>
    <section className="my-20 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-cyan-400 px-6 py-16 text-center text-slate-950 md:px-12"><p className="text-sm font-semibold uppercase tracking-[.22em]">Build with confidence</p><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Make performance a product advantage.</h2><p className="mx-auto mt-5 max-w-xl text-lg text-slate-800">Let’s talk about scaling your platform, modernising your test practice, or finding the bottleneck everyone else missed.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-medium text-white">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link></section>
  </>;
}
