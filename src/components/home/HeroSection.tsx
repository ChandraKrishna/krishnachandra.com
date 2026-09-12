import Link from 'next/link';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { profile } from '@/content/profile';

export function HeroSection() {
  return <section className="relative flex min-h-[82vh] items-center py-20">
    <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
    <div className="relative z-10 w-full">
      <div className="mb-12 flex items-center gap-3 text-sm text-slate-400"><span className="h-px w-10 bg-cyan-400" /> Based in {profile.location}</div>
      <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_.65fr]">
        <div><p className="eyebrow">Performance Engineering · Platform Resilience</p><h1 className="mt-6 max-w-5xl text-6xl font-semibold leading-[.94] tracking-[-.06em] text-white sm:text-7xl lg:text-[7.2rem]">Systems that stay <span className="text-gradient">fast under pressure.</span></h1></div>
        <div className="pb-2"><p className="text-xl leading-8 text-slate-300">I’m <strong className="font-medium text-white">{profile.name}</strong>. {profile.tagline}</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/projects" className="button-primary">View selected work <ArrowUpRight className="h-4 w-4" /></Link><a href={profile.linkedin} target="_blank" rel="noreferrer" className="button-secondary"><Linkedin className="h-4 w-4" /> LinkedIn</a></div></div>
      </div>
    </div>
  </section>;
}
