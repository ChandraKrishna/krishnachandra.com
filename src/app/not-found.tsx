import Link from 'next/link';
export default function NotFound(){return <section className="py-32 text-center"><p className="eyebrow">Error 404</p><h1 className="mt-5 text-6xl font-semibold text-white">That page isn’t here.</h1><p className="mt-4 text-slate-500">The link may be outdated, or the page may have moved.</p><Link href="/" className="button-primary mt-7">Return home</Link></section>}
