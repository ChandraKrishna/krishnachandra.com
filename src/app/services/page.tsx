import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Logo, Packaging, Website & Android App Services',
  description: 'Creative and digital services including logo design, pamphlets, interior and exterior concepts, website creation, Android apps, stickers, covers and packaging.',
  keywords: ['logo design', 'pamphlet design', 'interior design', 'exterior design', 'website creation', 'Android app development', 'product sticker design', 'cover design', 'packaging design'],
  alternates: { canonical: '/services/' },
};

const services = [
  {
    title: 'Logo design',
    description: 'A logo is the foundation of a recognisable brand. We create original marks that reflect your business personality and remain clear across digital, print, and physical applications.',
    deliverables: ['Primary logo concept', 'Colour and type direction', 'Digital-ready logo files'],
  },
  {
    title: 'Pamphlet design',
    description: 'We turn your message into an easy-to-read promotional piece that gives customers the information they need and presents your offer with confidence.',
    deliverables: ['Structured content layout', 'Brand-aligned visual design', 'Print and sharing-ready artwork'],
  },
  {
    title: 'Interior design',
    description: 'Interior concepts are shaped around how a space will be used, combining layout, materials, colour, and finishes into a cohesive direction.',
    deliverables: ['Space-planning concepts', 'Material and colour direction', 'Visual design recommendations'],
  },
  {
    title: 'Exterior design',
    description: 'We develop exterior concepts that give homes and commercial spaces a distinctive, welcoming, and considered street presence.',
    deliverables: ['Facade design concepts', 'Colour and material direction', 'Exterior visual recommendations'],
  },
  {
    title: 'Website creation',
    description: 'We create responsive websites that explain what you do clearly, work well on every screen size, and make it simple for visitors to get in touch.',
    deliverables: ['Responsive page design', 'Clear content structure', 'Contact and conversion paths'],
  },
  {
    title: 'Android app development',
    description: 'From an initial idea to a focused mobile experience, we help shape Android applications around useful features, approachable interfaces, and real user needs.',
    deliverables: ['Mobile user-flow planning', 'Android interface development', 'Feature-focused app builds'],
  },
  {
    title: 'Product sticker design',
    description: 'Product stickers and labels are designed to communicate key information quickly while reinforcing the personality of your brand on the shelf.',
    deliverables: ['Custom label concepts', 'Readable product information', 'Print-ready sticker layouts'],
  },
  {
    title: 'Cover design',
    description: 'We create covers that establish the right first impression for books, reports, albums, and digital publications, with typography and visuals working together.',
    deliverables: ['Cover concept direction', 'Typography and image layout', 'Digital and print-ready files'],
  },
  {
    title: 'Packaging design',
    description: 'Packaging is designed to look distinctive, communicate essential details, and create a consistent brand experience from first glance to unboxing.',
    deliverables: ['Packaging visual concepts', 'Product information hierarchy', 'Production-ready artwork direction'],
  },
];

export default function ServicesPage() {
  return <section className="py-20"><div className="max-w-3xl"><p className="eyebrow">Creative & digital services</p><h1 className="section-title mt-5">Design and digital solutions made to move your business forward.</h1><p className="mt-6 text-lg leading-8 text-slate-400">Our team partners with businesses on brand identity, promotional design, spaces, products, websites, and Android applications. Every engagement starts with understanding the purpose, audience, and outcome you need.</p></div><div className="mt-14 grid gap-5 md:grid-cols-2">{services.map((service, index) => <article key={service.title} className="glass-card p-7"><span className="text-xs text-cyan-400">{String(index + 1).padStart(2, '0')} / Service</span><h2 className="mt-5 text-2xl font-semibold text-white">{service.title}</h2><p className="mt-4 leading-8 text-slate-300">{service.description}</p><ul className="mt-6 space-y-3 border-t border-white/10 pt-6">{service.deliverables.map(item => <li key={item} className="flex items-start gap-3 text-sm text-slate-400"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />{item}</li>)}</ul></article>)}</div><div className="mt-16 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[.07] p-8 md:flex md:items-center md:justify-between"><div><p className="eyebrow">Let’s collaborate</p><h2 className="mt-4 text-2xl font-semibold text-white">Have a project in mind?</h2><p className="mt-3 max-w-xl leading-7 text-slate-400">Tell us what you are building, refreshing, or launching, and we can discuss the right creative or digital solution.</p></div><Link href="/contact/" className="button-primary mt-6 md:mt-0">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link></div></section>;
}
