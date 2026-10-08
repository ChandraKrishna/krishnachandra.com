import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { siteMetadata } from '@/content/siteMetadata';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteMetadata.url;
const faviconUrl = '/favicon-96x96.png';
const analyticsId = process.env.PUBLIC_ANALYTICS_ID?.trim();
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Krishna Chandra',
      url: siteMetadata.url,
      image: `${siteMetadata.url}/icon-512.png`,
      jobTitle: 'Performance Engineering Leader',
      sameAs: ['https://www.linkedin.com/in/krishnachandraofficial/'],
      knowsAbout: siteMetadata.keywords.slice(1, 14),
    },
    {
      '@type': 'ProfessionalService',
      name: 'Krishna Chandra Design & Digital Services',
      url: siteMetadata.url,
      description: siteMetadata.description,
      areaServed: 'India',
      serviceType: siteMetadata.keywords.slice(14),
    },
  ],
};

export const metadata: Metadata = {
  title: { default: siteMetadata.title, template: '%s | Krishna Chandra' },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  metadataBase: new URL(siteUrl),
  applicationName: 'Krishna Chandra Portfolio',
  authors: [{ name: 'Krishna Chandra', url: siteMetadata.url }],
  creator: 'Krishna Chandra',
  publisher: 'Krishna Chandra',
  category: 'Professional services',
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [{ url: faviconUrl, type: 'image/png', sizes: '96x96' }],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Krishna Chandra',
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  twitter: { card: 'summary', title: siteMetadata.title, description: siteMetadata.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider><a href="#main" className="sr-only focus:not-sr-only">Skip to content</a><Header/><main id="main" className="mx-auto max-w-6xl px-5">{children}</main><Footer/></ThemeProvider><GoogleAnalytics measurementId={analyticsId}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
