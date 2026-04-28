'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const purchased = searchParams.get('purchased') === '1';

  useEffect(() => {
    if (!purchased) return;
    const fire = () => {
      const rdt = (window as any).rdt;
      if (typeof rdt === 'function') {
        rdt('track', 'Purchase', { value: 99, currency: 'USD', itemCount: 1 });
        return true;
      }
      return false;
    };
    if (!fire()) {
      const t = setTimeout(fire, 500);
      return () => clearTimeout(t);
    }
  }, [purchased]);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-gray-950 to-gray-950 px-6 py-24 text-center">
        <div className="relative mx-auto max-w-2xl">
          {purchased ? (
            <>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-300">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                Purchase confirmed
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                You&apos;re in. Let&apos;s get you started.
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Your AI Prompt Pack is ready. Check your inbox — we&apos;ve sent your access link and download instructions.
              </p>
              <div className="mt-10 rounded-xl border border-violet-500/30 bg-violet-500/10 p-8 text-left">
                <h2 className="text-xl font-bold text-violet-300 mb-5">What happens next</h2>
                <ol className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 font-bold shrink-0">1.</span>
                    Check your inbox for a Gumroad receipt — it includes your download link.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 font-bold shrink-0">2.</span>
                    Download the prompt pack (PDF + copy-paste format).
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 font-bold shrink-0">3.</span>
                    Open ChatGPT or Claude, paste your first prompt, and ship something today.
                  </li>
                </ol>
              </div>
              <p className="mt-8 text-sm text-gray-500">
                Questions?{' '}
                <a href="/contact" className="text-violet-400 hover:text-violet-300 transition underline">
                  Contact us
                </a>{' '}
                — we reply within 24 hours.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Thanks for stopping by.
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Ready to 10x your output with AI prompts that actually work?
              </p>
              <div className="mt-8">
                <a
                  href="/"
                  className="inline-block rounded-lg bg-violet-600 px-8 py-3 font-semibold text-white transition hover:bg-violet-500 active:bg-violet-700"
                >
                  View AI Prompt Packs
                </a>
              </div>
            </>
          )}
          <div className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-600">
            — The Prompts team
          </div>
        </div>
      </section>
    </main>
  );
}
