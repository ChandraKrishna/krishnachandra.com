import Link from 'next/link';

const links=[['Home','/'],['About','/about'],['Experience','/experience'],['Expertise','/expertise'],['Projects','/projects'],['Insights','/insights'],['Contact','/contact'],['Privacy','/privacy']];

export function Footer(){
  return <footer className="border-t border-slate-600/40 py-8 text-sm text-slate-400">
    <nav aria-label="Footer navigation" className="mx-auto flex max-w-6xl flex-nowrap items-center justify-center gap-6 overflow-x-auto whitespace-nowrap px-5">
      {links.map(([label,href])=><Link key={href} href={href} className="shrink-0 transition hover:text-cyan-300">{label}</Link>)}
      <a href="https://www.linkedin.com/in/krishnachandraofficial/" target="_blank" rel="noreferrer" className="shrink-0 transition hover:text-cyan-300">LinkedIn ↗</a>
    </nav>
  </footer>;
}
