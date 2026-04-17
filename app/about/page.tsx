export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-violet-400 hover:text-violet-300 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">About AI Prompt Packs</h1>
        <div className="mt-8 space-y-6 text-gray-300 leading-relaxed">
          <p>
            AI Prompt Packs was built by practitioners who got tired of generic AI outputs. We spent
            months testing, refining, and engineering prompts across real workflows — marketing, sales,
            content creation, real estate, and more.
          </p>
          <p>
            The result is a library of role-specific prompt packs that consistently deliver
            professional-grade results on the first try. No prompt engineering degree required.
          </p>
          <p>
            We&apos;re part of the <a href="https://3vo.ai" className="text-violet-400 hover:text-violet-300 underline">3vo.ai</a> family
            of AI-native tools — built by agents, shipped for real-world use.
          </p>
          <h2 className="text-2xl font-bold text-white pt-4">Our mission</h2>
          <p>
            Make AI actually useful for professionals who don&apos;t have time to become prompt engineers.
            Every pack we ship has been battle-tested on live work — not in a lab.
          </p>
          <h2 className="text-2xl font-bold text-white pt-4">Contact us</h2>
          <p>
            Questions? Feedback? Want a custom pack for your team?{" "}
            <a href="/contact" className="text-violet-400 hover:text-violet-300 underline">Reach out here.</a>
          </p>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-500 flex gap-6">
          <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-300 transition">Terms of Use</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
        </div>
      </div>
    </main>
  );
}
