declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAnalyticsEvent(name: string, parameters?: Record<string, string>) {
  if (typeof window !== 'undefined') {
    window.gtag?.('event', name, parameters);
  }
}

export function trackPageView(measurementId: string, pagePath: string) {
  if (typeof window !== 'undefined') {
    window.gtag?.('config', measurementId, { page_path: pagePath });
  }
}
