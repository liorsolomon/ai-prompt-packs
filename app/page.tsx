'use client';

import { useState } from 'react';
import PromptPersonalizer from './PromptPersonalizer';

const WHY = [
  {
    title: "Curated, not crowdsourced.",
    description: "PromptBase sells individual bundles at $19–$49 each. You get a solopreneur-specific, organized pack for the same price.",
  },
  {
    title: "Built for output, not experimentation.",
    description: "Each prompt is labeled by use case, tested for quality, and ready to run.",
  },
  {
    title: "One-time.",
    description: "No subscription. No credits. No limits.",
  },
];

const WHATS_INCLUDED = [
  "Client outreach and cold pitch prompts",
  "Content creation prompts (LinkedIn, email, blog)",
  "Market research and competitive analysis prompts",
  "Pricing and positioning prompts",
  "Discovery call and proposal prompts",
  "Weekly planning and review prompts",
  "Rewriting and editing prompts",
];

const FAQS = [
  {
    q: "What AI tools do these work with?",
    a: "Optimized for ChatGPT and Claude. Most work with any major LLM.",
  },
  {
    q: "Are these templates I fill in, or ready-to-run prompts?",
    a: "Both. Some are run-ready. Others have [brackets] for your specific details.",
  },
  {
    q: "How many prompts are included?",
    a: "80+ prompts across 7 categories.",
  },
  {
    q: "Do you add new prompts?",
    a: "Yes. One-time purchase includes all future additions.",
  },
  {
    q: "I'm not technical. Will I be able to use these?",
    a: "Yes. No coding required. Copy, paste, customize, run.",
  },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tosAgreed, setTosAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== 'undefined' && (window as any).posthog) {
          (window as any).posthog.capture('waitlist_submitted', { email });
        }
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'sign_up', { method: 'waitlist' });
        }
        if (typeof window !== 'undefined' && (window as any).rdt) {
          (window as any).rdt('track', 'Lead', { currency: 'USD', value: 5.00 });
        }
      }
    } catch {
      // fail silently
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-gray-950 to-gray-950 px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-400" />
            80+ prompts · 7 categories · $49 one-time
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Stop prompting from scratch.<br />
            <span className="text-violet-400">Get the exact prompts that work.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            A curated pack of battle-tested AI prompts for solopreneurs: client outreach, content
            creation, research, strategy, and more. Organized, labeled, and ready to run.
            One-time. No subscription.
          </p>
          <div className="mt-10">
            {submitted ? (
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-6 text-violet-300">
                <p className="text-lg font-semibold">You&apos;re in! Check your inbox. ✅</p>
                <p className="mt-1 text-sm">We&apos;ll send your access link shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none sm:w-80"
                  />
                  <button
                    type="submit"
                    disabled={loading || !tosAgreed}
                    className="rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500 disabled:opacity-50"
                  >
                    {loading ? 'Joining...' : 'Get Early Access — Free'}
                  </button>
                </div>
                <label className="flex items-center justify-center gap-2 text-xs text-gray-400 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={tosAgreed}
                    onChange={(e) => setTosAgreed(e.target.checked)}
                    className="accent-violet-500"
                  />
                  <span>
                    I agree to the{' '}
                    <a href="/terms" className="text-violet-400 hover:text-violet-300 underline">
                      Terms of Service
                    </a>
                  </span>
                </label>
              </form>
            )}
            <p className="mt-3 text-sm text-gray-500">Early access is free · $49 at launch · No subscription</p>
          </div>
        </div>
      </section>

      {/* Product preview */}
      <section className="px-6 py-16 bg-gray-900/60 border-y border-gray-800">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">Sample prompts from the pack</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Client Outreach",
                prompt: "Write a cold pitch to [target client type] for [your service]. Lead with their pain point, not your credentials. Keep it under 100 words.",
              },
              {
                label: "Content — LinkedIn",
                prompt: "Write a LinkedIn post about [topic or lesson learned]. Format: 1-line hook, 3–5 short paragraphs, CTA. Tone: direct, no buzzwords.",
              },
              {
                label: "Pricing & Positioning",
                prompt: "I charge [current rate] for [service]. Help me reframe my pricing conversation so clients focus on ROI, not cost.",
              },
            ].map((card) => (
              <div key={card.label} className="rounded-xl border border-gray-700 bg-gray-900 p-5">
                <div className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-3">{card.label}</div>
                <p className="text-sm text-gray-300 leading-relaxed font-mono">{card.prompt}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-600 mt-5">80+ prompts like these · 7 categories · Tested on ChatGPT &amp; Claude · Ready to paste</p>
        </div>
      </section>

      {/* Why prompts.3vo.ai */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl mb-12">Why prompts.3vo.ai</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {WHY.map((item) => (
              <div key={item.title} className="rounded-xl border border-violet-500/30 bg-violet-500/5 p-6">
                <h3 className="font-bold text-violet-300 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl mb-4">What&apos;s included</h2>
          <p className="text-center text-gray-400 mb-10">80+ prompts across 7 categories — organized, labeled, and ready to run.</p>
          <ul className="space-y-4">
            {WHATS_INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                <span className="text-violet-400 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Market context */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl grid gap-6 sm:grid-cols-2 text-center">
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <div className="text-4xl font-extrabold text-violet-400 mb-2">5–10 hrs</div>
            <p className="text-sm text-gray-400">saved per week by solopreneurs using AI for content and outreach</p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <div className="text-4xl font-extrabold text-violet-400 mb-2">Generic</div>
            <p className="text-sm text-gray-400">most AI prompt collections are not built for the solo operator workflow — this one is</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold mb-12">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((item) => (
              <details key={item.q} className="group border border-gray-700 rounded-xl px-6 py-4 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-white text-sm list-none">
                  {item.q}
                  <span className="ml-4 text-violet-400 text-lg font-light group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Personalizer */}
      <PromptPersonalizer />

      {/* CTA */}
      <section className="bg-gradient-to-br from-violet-900 to-gray-950 px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Stop prompting from scratch.<br />
            <span className="text-violet-400">Start getting output you can actually use.</span>
          </h2>
          <p className="mt-4 text-gray-300">
            80+ battle-tested prompts for solopreneurs — outreach, content, research, strategy,
            and more. One-time. No subscription.
          </p>
          <div className="mt-8">
            {submitted ? (
              <p className="text-violet-300 text-lg font-semibold">You&apos;re in! Check your inbox. ✅</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none sm:w-80"
                  />
                  <button
                    type="submit"
                    disabled={loading || !tosAgreed}
                    className="rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500 disabled:opacity-50"
                  >
                    {loading ? 'Joining...' : 'Get Early Access — Free'}
                  </button>
                </div>
                <label className="flex items-center justify-center gap-2 text-xs text-gray-400 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={tosAgreed}
                    onChange={(e) => setTosAgreed(e.target.checked)}
                    className="accent-violet-500"
                  />
                  <span>
                    I agree to the{' '}
                    <a href="/terms" className="text-violet-400 hover:text-violet-300 underline">
                      Terms of Service
                    </a>
                  </span>
                </label>
              </form>
            )}
            <p className="mt-3 text-sm text-gray-500">Early access is free · $49 at launch · No subscription</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-10 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
          <a href="/about" className="hover:text-gray-300 transition-colors">About</a>
          <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
          <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          <a href="https://x.com/3voai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">X @3voai</a>
        </div>
        <p>© 2026 3vo Prompt Marketplace™ — The 3vo Prompt Marketplace team</p>
      </footer>
    </main>
  );
}
