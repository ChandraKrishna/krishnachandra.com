import Link from 'next/link';
import Image from 'next/image';

const links=[['Home','/'],['About','/about/'],['Experience','/experience/'],['Expertise','/expertise/'],['Services','/services/'],['Projects','/projects/'],['Insights','/insights/'],['Contact','/contact/'],['Privacy','/privacy/']];

export function Footer(){
  return <footer className="border-t border-slate-600/40 py-8 text-sm text-slate-400">
    <div className="mx-auto mb-5 flex max-w-6xl items-center justify-center gap-2 px-5 text-sm font-medium text-slate-200"><Image src="/images/kkc-logo.png" alt="Krishna Chandra logo" width={36} height={32} className="h-8 w-9 object-contain"/><span>Krishna Chandra</span></div>
    <nav aria-label="Footer navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 text-center">
      {links.map(([label,href])=><Link key={href} href={href} prefetch className="shrink-0 transition hover:text-cyan-300">{label}</Link>)}
      <a href="https://www.linkedin.com/in/krishnachandraofficial/" target="_blank" rel="noreferrer" className="shrink-0 transition hover:text-cyan-300">LinkedIn ↗</a>
    </nav>
    <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Krishna Chandra. All rights reserved.</p>
  </footer>;
}
