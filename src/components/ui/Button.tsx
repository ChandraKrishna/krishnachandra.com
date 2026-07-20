import Link from 'next/link';
import { cn } from '@/lib/utils';
export function Button({ href, children, secondary=false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
 return <Link href={href} className={cn('inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition', secondary ? 'border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900' : 'bg-blue-600 text-white hover:bg-blue-500')}>{children}</Link>;
}
