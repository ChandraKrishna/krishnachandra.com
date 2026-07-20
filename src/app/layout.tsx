import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { siteMetadata } from '@/content/siteMetadata';
export const metadata: Metadata = { title: {default:siteMetadata.title,template:'%s | Krishna Chandra'}, description: siteMetadata.description, metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000') };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><ThemeProvider><a href="#main" className="sr-only focus:not-sr-only">Skip to content</a><Header/><main id="main" className="mx-auto max-w-6xl px-5">{children}</main><Footer/></ThemeProvider></body></html>}
