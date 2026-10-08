import Link from 'next/link';
import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata('Privacy', 'Privacy information for the Krishna Chandra portfolio website.', '/privacy/');

export default function Privacy() {
  return <section className="mx-auto max-w-3xl py-20">
    <p className="eyebrow">Privacy</p>
    <h1 className="section-title mt-5">A simple portfolio, with simple data practices.</h1>
    <div className="mt-10 space-y-8 leading-8 text-slate-400">
      <section>
        <h2 className="text-xl font-semibold text-white">Information collected</h2>
        <p className="mt-2">The contact form collects the details you submit so that we can reply to your enquiry. When Google Analytics is enabled, it collects pseudonymous website-usage information such as pages visited, device and browser details, and traffic source. Contact-form content is not sent to Google Analytics.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white">Analytics</h2>
        <p className="mt-2">Google Analytics helps us understand site traffic and successful contact enquiries. Google’s privacy practices apply to analytics data processed through its service.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white">External links</h2>
        <p className="mt-2">Links to LinkedIn open a third-party service. LinkedIn’s own privacy terms apply after you leave this website.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white">Contact</h2>
        <p className="mt-2">Questions about this website can be sent through the professional contact path on the <Link href="/contact" className="text-cyan-400">contact page</Link>.</p>
      </section>
    </div>
  </section>;
}
