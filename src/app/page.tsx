import Link from 'next/link';
import { ArrowUpRight, BookOpen, Building2, CheckCircle2, Gauge, Globe, House, LayoutTemplate, Network, Package, PenTool, Search, ShieldCheck, Smartphone, Tag } from 'lucide-react';
import { HeroSection } from '@/components/home/HeroSection';

const outcomes = [
  { icon: Gauge, title: 'Performance by design', text: 'Workload models and test strategies grounded in real user behaviour.' },
  { icon: Search, title: 'Faster root-cause analysis', text: 'Application, database, infrastructure, and network signals connected into one story.' },
  { icon: Network, title: 'Delivery at enterprise scale', text: 'Repeatable practices that align engineering teams, pipelines, and stakeholders.' },
  { icon: ShieldCheck, title: 'Confidence before release', text: 'Clear evidence and risk communication for better go-live decisions.' },
];

const services = [
  { icon: PenTool, title: 'Logo design', text: 'Distinct visual identities shaped for memorable brands.' },
  { icon: LayoutTemplate, title: 'Pamphlet design', text: 'Clear, polished promotional material for print and digital use.' },
  { icon: House, title: 'Interior design', text: 'Thoughtful interior concepts that balance style and function.' },
  { icon: Building2, title: 'Exterior design', text: 'Striking exterior concepts that give spaces a stronger presence.' },
  { icon: Globe, title: 'Website creation', text: 'Responsive websites designed around your goals and audience.' },
  { icon: Smartphone, title: 'Android app development', text: 'Practical mobile experiences built for Android users.' },
  { icon: Tag, title: 'Product sticker design', text: 'On-brand labels and stickers that stand out on the shelf.' },
  { icon: BookOpen, title: 'Cover design', text: 'Professional covers that make products and publications feel complete.' },
  { icon: Package, title: 'Packaging design', text: 'Packaging concepts that protect the product and elevate the brand.' },
];

export default function Home() {
  return <>
    <HeroSection />
    <section className="border-y border-white/10 py-8"><div className="grid gap-5 text-sm text-slate-400 sm:grid-cols-2 lg:grid-cols-4">{['10+ years in engineering', '5 enterprise organisations', '6 industry domains', '2x Best Performer'].map(item => <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" />{item}</div>)}</div></section>
    <section className="py-24"><p className="eyebrow">How I create impact</p><div className="mt-5 grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><h2 className="section-title">From a slow system to a clear engineering decision.</h2><div className="grid gap-4 sm:grid-cols-2">{outcomes.map(({ icon: Icon, title, text }, index) => <article key={title} className="glass-card group p-6"><div className="mb-8 flex items-start justify-between"><Icon className="h-6 w-6 text-cyan-400" /><span className="text-xs text-slate-600">0{index + 1}</span></div><h3 className="text-lg font-semibold text-white">{title}</h3><p className="mt-2 leading-7 text-slate-400">{text}</p></article>)}</div></div></section>
    <section id="services" className="border-y border-white/10 py-24"><div className="max-w-2xl"><p className="eyebrow">Creative & digital services</p><h2 className="section-title mt-5">Practical design and digital solutions from our team.</h2><p className="mt-5 leading-7 text-slate-400">Alongside performance engineering, our team helps businesses shape their brand, spaces, products, and digital presence.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, text }, index) => <article key={title} className="glass-card p-6"><div className="flex items-start justify-between"><Icon className="h-6 w-6 text-cyan-400" /><span className="text-xs text-slate-600">{String(index + 1).padStart(2, '0')}</span></div><h3 className="mt-8 text-lg font-semibold text-white">{title}</h3><p className="mt-2 leading-7 text-slate-400">{text}</p></article>)}</div><Link href="/services/" className="button-secondary mt-8">Explore all services <ArrowUpRight className="h-4 w-4" /></Link></section>
    <section className="my-20 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-cyan-400 px-6 py-16 text-center text-slate-950 md:px-12"><p className="text-sm font-semibold uppercase tracking-[.22em]">Build with confidence</p><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Make performance a product advantage.</h2><p className="mx-auto mt-5 max-w-xl text-lg text-slate-800">Let’s talk about scaling your platform, modernising your test practice, or finding the bottleneck everyone else missed.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-medium text-white">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link></section>
  </>;
}
