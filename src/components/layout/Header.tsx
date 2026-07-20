'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
const links=[['About','/about'],['Experience','/experience'],['Expertise','/expertise'],['Projects','/projects'],['Insights','/insights'],['Contact','/contact']];
export function Header(){const [open,setOpen]=useState(false);return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"><Link href="/" className="font-semibold">KC<span className="text-blue-500">.</span></Link><nav className="hidden gap-6 md:flex">{links.map(([l,h])=><Link key={h} href={h} className="text-sm text-slate-600 hover:text-blue-500 dark:text-slate-300">{l}</Link>)}</nav><div className="flex items-center gap-3"><ThemeToggle/><button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div></div>{open&&<nav className="border-t border-slate-200 px-5 py-4 dark:border-slate-800 md:hidden">{links.map(([l,h])=><Link key={h} href={h} className="block py-2" onClick={()=>setOpen(false)}>{l}</Link>)}</nav>}</header>}
