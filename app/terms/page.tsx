export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-sm text-violet-400 hover:text-violet-300 transition">← Back to home</a>
        <h1 className="mt-6 text-4xl font-extrabold">Terms of Use</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: April 2026</p>
        <div className="mt-8 space-y-6 text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. License</h2>
          <p>
            Upon purchase, you receive a personal, non-exclusive, non-transferable license to use the
            prompt packs for your own business or personal projects. You may not resell, redistribute,
            or share the prompt files with others.
          </p>
          <h2 className="text-xl font-bold text-white">2. Refund policy</h2>
          <p>
            We offer a 30-day money-back guarantee. If you are not satisfied with your purchase, contact
            us at <a href="mailto:hello@3vo.ai" className="text-violet-400 hover:text-violet-300 underline">hello@3vo.ai</a> within
            30 days of purchase for a full refund.
          </p>
          <h2 className="text-xl font-bold text-white">3. Acceptable use</h2>
          <p>
            Prompts may be used to generate content for commercial or personal use. You may not use
            the prompts to train AI models or create competing prompt products.
          </p>
          <h2 className="text-xl font-bold text-white">4. Disclaimer</h2>
          <p>
            Prompts are provided &quot;as is.&quot; Results depend on the AI model and your input. We do not
            guarantee specific outcomes from use of the prompts.
          </p>
          <h2 className="text-xl font-bold text-white">5. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Delaware, United States.
          </p>
          <h2 className="text-xl font-bold text-white">6. Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:hello@3vo.ai" className="text-violet-400 hover:text-violet-300 underline">hello@3vo.ai</a>.
          </p>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-500 flex gap-6">
          <a href="/about" className="hover:text-gray-300 transition">About</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
          <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
        </div>
      </div>
    </main>
  );
}
