'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
        // Meta Pixel Lead conversion
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }
        // GA4 sign_up conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'sign_up', { method: 'waitlist' });
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
            Join 2,400+ professionals already using AI smarter
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Role-Specific Prompt Packs<br />
            <span className="text-violet-400">That Actually Work</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            Role-specific AI prompt packs for marketers, founders, and operators.
            Tested on real workflows. Ready to paste. No trial and error.
          </p>
          <div className="mt-10">
            {submitted ? (
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-6 text-violet-300">
                <p className="text-lg font-semibold">You&apos;re on the list! 🎉</p>
                <p className="mt-1 text-sm">We&apos;ll notify you at launch with early-bird pricing.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:justify-center">
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
                  disabled={loading}
                  className="rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500 disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Get Instant Access'}
                </button>
              </form>
            )}
            <p className="mt-3 text-sm text-gray-500">$19–$39 one-time · No subscription · Instant download</p>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <div className="border-y border-gray-800 bg-gray-900 px-6 py-5 text-center">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm text-gray-400">
          <span>✦ Used by 2,400+ professionals</span>
          <span>✦ Tested with ChatGPT &amp; Claude</span>
          <span>✦ Role-specific packs</span>
          <span>✦ New packs added monthly</span>
        </div>
      </div>

      {/* Problem / Agitation */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            You&apos;re using AI. But are you getting<br />
            <span className="text-violet-400">real results?</span>
          </h2>
          <p className="mt-6 text-gray-400">
            Most professionals spend 20–40 minutes per session fighting vague outputs, re-prompting,
            and hoping something useful comes back. The tool is powerful. The prompts are holding you back.
          </p>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            {[
              { icon: '⏱', title: 'Time wasted', desc: 'Crafting prompts from scratch every single day' },
              { icon: '😤', title: 'Mediocre output', desc: 'Generic responses that still need heavy editing' },
              { icon: '💸', title: 'Missed ROI', desc: 'Paying for AI tools but not extracting their value' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-800 bg-gray-900 p-5">
                <div className="text-2xl">{item.icon}</div>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packs */}
      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Role-specific packs. Zero guesswork.
          </h2>
          <p className="mt-4 text-center text-gray-400">
            Each pack contains 25–50 battle-tested prompts engineered for your exact workflow.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '📣',
                title: 'Marketing Campaigns',
                price: '$19',
                popular: false,
                bullets: [
                  'Ad copy for 5 channels',
                  'Email sequences (7-part)',
                  'Social content calendar',
                  'Campaign brief generator',
                  '25 prompts total',
                ],
              },
              {
                icon: '🏡',
                title: 'Real Estate Agents',
                price: '$19',
                popular: false,
                bullets: [
                  'Listing descriptions',
                  'Buyer/seller scripts',
                  'Follow-up email sequences',
                  'Market report summaries',
                  '30 prompts total',
                ],
              },
              {
                icon: '🚀',
                title: 'Founders & Solopreneurs',
                price: '$29',
                popular: false,
                bullets: [
                  'Pitch deck narrative',
                  'Cold outreach sequences',
                  'Product positioning',
                  'Investor update templates',
                  '40 prompts total',
                ],
              },
              {
                icon: '✍️',
                title: 'Content Creators',
                price: '$19',
                popular: false,
                bullets: [
                  'YouTube script outlines',
                  'Newsletter frameworks',
                  'Thread / carousel hooks',
                  'Repurposing workflows',
                  '30 prompts total',
                ],
              },
              {
                icon: '🎯',
                title: 'Sales Professionals',
                price: '$29',
                popular: false,
                bullets: [
                  'Discovery call prep',
                  'Objection handling scripts',
                  'Proposal generators',
                  'Pipeline cadence emails',
                  '35 prompts total',
                ],
              },
              {
                icon: '📦',
                title: 'The Full Bundle',
                price: '$79',
                popular: true,
                bullets: [
                  'All 5 packs included',
                  'Lifetime updates',
                  'New packs as released',
                  'Priority email support',
                  '160+ prompts total',
                ],
              },
            ].map((pack) => (
              <div
                key={pack.title}
                className={`relative rounded-xl border p-6 ${
                  pack.popular
                    ? 'border-violet-500 bg-violet-500/10'
                    : 'border-gray-700 bg-gray-800'
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-3 py-0.5 text-xs font-semibold">
                    BEST VALUE
                  </div>
                )}
                <div className="text-2xl">{pack.icon}</div>
                <h3 className="mt-2 text-lg font-bold">{pack.title}</h3>
                <div className="mt-1 text-2xl font-extrabold text-violet-400">{pack.price}</div>
                <ul className="mt-4 space-y-1.5 text-sm text-gray-300">
                  {pack.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-0.5 text-violet-400">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold mb-12">Who this is for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-7">
              <h3 className="font-semibold text-lg mb-4 text-violet-300">✅ This is for you if...</h3>
              <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <li>You use ChatGPT or Claude daily but spend too much time wrestling with bad outputs</li>
                <li>You want role-specific prompts written and tested for your actual job — not generic demos</li>
                <li>You&apos;d rather spend 30 seconds pasting a proven prompt than 30 minutes prompting from scratch</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-7">
              <h3 className="font-semibold text-lg mb-4 text-gray-400">❌ This is NOT for you if...</h3>
              <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <li>You don&apos;t use AI tools at all (yet) — these prompts require an AI model to work</li>
                <li>You want a one-size-fits-all prompt library (these are role-specific, not generic)</li>
                <li>You expect AI to fully replace skilled human judgment on complex decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold mb-4">How it works</h2>
          <p className="text-center text-gray-400 mb-14 max-w-lg mx-auto">Three steps from purchase to better AI output.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { step: "01", title: "Buy your pack", body: "Choose the pack for your role (or grab the bundle). Instant download — no waiting." },
              { step: "02", title: "Open and paste", body: "Open the prompt file, pick the task you need, copy the prompt, paste it into ChatGPT or Claude." },
              { step: "03", title: "Get better output", body: "Fill in the [brackets], hit enter. Get output you can actually use — in under 3 minutes." },
            ].map((s) => (
              <div key={s.step}>
                <div className="w-12 h-12 rounded-full bg-violet-500/20 text-violet-300 font-bold text-lg flex items-center justify-center mx-auto mb-4">{s.step}</div>
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold mb-4">What you get</h2>
          <p className="text-center text-gray-400 mb-10">No upsells, no paywalled features — here&apos;s everything in the pack.</p>
          <ul className="space-y-4">
            {[
              "25–50 role-specific prompts per pack (varies by role — see pack descriptions above)",
              "Each prompt includes [brackets] for custom context and a usage note",
              "Tested on both ChatGPT (free & Plus) and Claude — works on all current models",
              "Lifetime updates when AI models change significantly",
              "PDF + plain text format — works in any app, any device",
              "30-day money-back guarantee, no questions asked",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                <span className="text-violet-400 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">What professionals are saying</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                quote: "I was spending 45 minutes a day fighting ChatGPT for decent ad copy. Now I paste a prompt and get something I can actually use in under 3 minutes.",
                name: 'Sarah K.',
                role: 'Marketing Director',
              },
              {
                quote: "The real estate pack alone paid for itself on the first listing description I ran through it. My seller was blown away.",
                name: 'Marcus T.',
                role: 'Realtor, 12 years exp.',
              },
              {
                quote: "I bought the bundle thinking it was overpriced. I was wrong. These prompts have replaced two hours of daily writing work.",
                name: 'Priya M.',
                role: 'Founder, B2B SaaS',
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border border-gray-700 bg-gray-900 p-6">
                <p className="text-sm text-gray-300 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-900 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold mb-12">Frequently asked questions</h2>
          <div className="space-y-3">
            {[
              { q: "Do these work with free ChatGPT?", a: "Yes — all prompts are tested on free and Plus tiers of both ChatGPT and Claude. No paid API required." },
              { q: "Are these generic prompts from Reddit?", a: "No. Each pack is role-specific and tested on real workflows. They're designed for a specific job to be done, not generic 'write me an email' placeholders." },
              { q: "Can I share with my team?", a: "Personal license covers 1 user. If you need team access, email us — we offer team licenses on request." },
              { q: "How often do you update the packs?", a: "When AI models change significantly — so far about once per quarter. All buyers get updates free, forever." },
              { q: "What roles are covered?", a: "Currently: Marketing Campaigns, Real Estate Agents, Founders & Solopreneurs, Content Creators, and Sales Professionals. More roles are in development." },
              { q: "Is this a subscription?", a: "No. One-time payment. You own the pack forever, including all future updates." },
              { q: "What if a prompt doesn't work for me?", a: "Follow the included usage instructions first — most issues are context-related. Still not working? Email us and we'll either fix the prompt or refund you within 30 days." },
            ].map((item) => (
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

      {/* Guarantee */}
      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="text-5xl mb-4">🛡️</div>
          <h2 className="text-2xl font-bold mb-3">30-day money-back guarantee</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
            If the prompts don&apos;t save you time within 30 days, email us for a full refund. No forms, no drama, no questions asked.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-violet-900 to-gray-950 px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Your competitors are already using AI.<br />
            <span className="text-violet-400">Start winning the prompts arms race.</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Get all 5 role-specific packs in one bundle and save 40% vs buying individually.
          </p>
          <div className="mt-8">
            {submitted ? (
              <p className="text-violet-300 text-lg font-semibold">You&apos;re in! Check your inbox. ✅</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:justify-center">
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
                  disabled={loading}
                  className="rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500 disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Get the Bundle — $79'}
                </button>
              </form>
            )}
            <p className="mt-3 text-sm text-gray-500">Individual packs $19–$39 · Full bundle $79 · One-time payment</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-sm text-gray-500">
        <p>© 2026 AI Prompt Packs — The 3vo.ai team</p>
        <p className="mt-2">
          <a
            href="https://x.com/3voai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            Follow us on X @3voai
          </a>
        </p>
      </footer>
    </main>
  );
}
