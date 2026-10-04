'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { trackPageView } from '@/lib/analytics';

export function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const isInitialPage = useRef(true);

  useEffect(() => {
    if (!measurementId || isInitialPage.current) {
      isInitialPage.current = false;
      return;
    }

    trackPageView(measurementId, pathname);
  }, [measurementId, pathname]);

  if (!measurementId?.startsWith('G-')) return null;

  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${measurementId}');`}
    </Script>
  </>;
}
