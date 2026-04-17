import WaitlistForm from "./WaitlistForm";

export default function Home() {
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
            Stop wasting 2 hours a day<br />
            <span className="text-violet-400">writing the same prompts.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            Plug-and-play AI Prompt Packs for marketers, founders, and business professionals.
            Get expert-crafted prompts that actually work — tested, refined, and ready to paste.
          </p>
          <div className="mt-10">
            <WaitlistForm buttonText="Get Instant Access" variant="hero" />
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
              { icon: "⏱", title: "Time wasted", desc: "Crafting prompts from scratch every single day" },
              { icon: "😤", title: "Mediocre output", desc: "Generic responses that still need heavy editing" },
              { icon: "💸", title: "Missed ROI", desc: "Paying for AI tools but not extracting their value" },
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
                icon: "📣",
                title: "Marketing Campaigns",
                price: "$19",
                popular: false,
                bullets: [
                  "Ad copy for 5 channels",
                  "Email sequences (7-part)",
                  "Social content calendar",
                  "Campaign brief generator",
                  "25 prompts total",
                ],
              },
              {
                icon: "🏡",
                title: "Real Estate Agents",
                price: "$19",
                popular: false,
                bullets: [
                  "Listing descriptions",
                  "Buyer/seller scripts",
                  "Follow-up email sequences",
                  "Market report summaries",
                  "30 prompts total",
                ],
              },
              {
                icon: "🚀",
                title: "Founders & Solopreneurs",
                price: "$29",
                popular: false,
                bullets: [
                  "Pitch deck narrative",
                  "Cold outreach sequences",
                  "Product positioning",
                  "Investor update templates",
                  "40 prompts total",
                ],
              },
              {
                icon: "✍️",
                title: "Content Creators",
                price: "$19",
                popular: false,
                bullets: [
                  "YouTube script outlines",
                  "Newsletter frameworks",
                  "Thread / carousel hooks",
                  "Repurposing workflows",
                  "30 prompts total",
                ],
              },
              {
                icon: "🎯",
                title: "Sales Professionals",
                price: "$29",
                popular: false,
                bullets: [
                  "Discovery call prep",
                  "Objection handling scripts",
                  "Proposal generators",
                  "Pipeline cadence emails",
                  "35 prompts total",
                ],
              },
              {
                icon: "📦",
                title: "The Full Bundle",
                price: "$79",
                popular: true,
                bullets: [
                  "All 5 packs included",
                  "Lifetime updates",
                  "New packs as released",
                  "Priority email support",
                  "160+ prompts total",
                ],
              },
            ].map((pack) => (
              <div
                key={pack.title}
                className={`relative rounded-xl border p-6 ${
                  pack.popular
                    ? "border-violet-500 bg-violet-500/10"
                    : "border-gray-700 bg-gray-800"
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

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">What professionals are saying</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                quote:
                  "I was spending 45 minutes a day fighting ChatGPT for decent ad copy. Now I paste a prompt and get something I can actually use in under 3 minutes.",
                name: "Sarah K.",
                role: "Marketing Director",
              },
              {
                quote:
                  "The real estate pack alone paid for itself on the first listing description I ran through it. My seller was blown away.",
                name: "Marcus T.",
                role: "Realtor, 12 years exp.",
              },
              {
                quote:
                  "I bought the bundle thinking it was overpriced. I was wrong. These prompts have replaced two hours of daily writing work.",
                name: "Priya M.",
                role: "Founder, B2B SaaS",
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

      {/* CTA */}
      <section className="bg-gradient-to-br from-violet-900 to-gray-950 px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Your competitors are already using AI.<br />
            <span className="text-violet-400">Start winning the prompts arms race.</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Individual packs from $19. Full bundle $79. Instant download — yours forever.
          </p>
          <div className="mt-8">
            <WaitlistForm buttonText="Buy Now" variant="cta" />
            <p className="mt-3 text-sm text-gray-500">Individual packs $19–$39 · Full bundle $79 · One-time payment</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-10 space-y-4">
            {[
              {
                q: "What exactly do I get?",
                a: "A downloadable PDF and plain-text file containing 25–50 professionally engineered prompts specific to your chosen role. Each prompt includes fill-in-the-blank variables so you can use it immediately without editing.",
              },
              {
                q: "Do these work with ChatGPT and Claude?",
                a: "Yes. Every prompt is tested on both ChatGPT (GPT-4o) and Claude 3.5/3.7. They're written in plain language — no jailbreaks, no tricks — so they work reliably on any major AI model.",
              },
              {
                q: "I'm not technical. Will I be able to use these?",
                a: "That's exactly who these are made for. Copy the prompt, paste it into your AI tool, fill in the [brackets], hit send. No setup, no coding, no learning curve.",
              },
              {
                q: "What if I'm not satisfied?",
                a: "We offer a 30-day no-questions-asked refund. If you don't get value from the prompts, email us and we'll refund you in full.",
              },
              {
                q: "Are updates included?",
                a: "Yes. Individual packs include 12 months of free updates. The bundle includes lifetime updates — including any new packs released.",
              },
              {
                q: "How do I get the files after purchase?",
                a: "Instant digital download. You'll receive a download link immediately after payment — no waiting, no shipping.",
              },
              {
                q: "Can I buy just one pack, or do I need the bundle?",
                a: "You can buy any individual pack for $19–$39 or grab the bundle for $79 and get everything. Start with one if you want to try before you commit.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-gray-800 bg-gray-900 px-6 py-4 open:border-violet-500/50"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-white list-none">
                  {item.q}
                  <span className="ml-4 shrink-0 text-gray-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-10 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="/about" className="hover:text-gray-300 transition">About</a>
            <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
            <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-300 transition">Terms of Use</a>
          </div>
          <p>© 2026 AI Prompt Packs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
