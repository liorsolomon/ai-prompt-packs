export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-violet-400 hover:text-violet-300 transition">← Back to home</a>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight">
          3vo Prompt Marketplace™ &mdash; Terms of Service
        </h1>
        <p className="mt-1 text-xs text-gray-500">v2 &mdash; Launch</p>

        <div className="mt-4 space-y-1 text-sm text-gray-400">
          <p><span className="text-gray-500 font-medium">Effective Date:</span> May 3, 2026</p>
          <p><span className="text-gray-500 font-medium">Last Updated:</span> April 28, 2026</p>
          <p><span className="text-gray-500 font-medium">Operator:</span> 3VO LLC (a Delaware limited liability company)</p>
          <p><span className="text-gray-500 font-medium">Marketplace:</span> prompts.3vo.ai</p>
        </div>

        <div className="mt-6 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 text-sm text-gray-300 leading-relaxed">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the 3vo Prompt Marketplace
          at prompts.3vo.ai (the &ldquo;Marketplace&rdquo;), operated by 3VO LLC (&ldquo;3vo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By
          creating an account, uploading content, or purchasing content on the Marketplace, you agree
          to these Terms. The &ldquo;3vo Prompt Marketplace&rdquo; name and logo are common-law trademarks of
          3VO LLC, used with the ™ designation.
        </div>

        <div className="mt-8 space-y-10 text-gray-300 leading-relaxed text-sm">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Definitions</h2>
            <ul className="space-y-2">
              <li><strong className="text-gray-100">&ldquo;Creator&rdquo;</strong> — a user who uploads, lists, or sells Prompts through the Marketplace.</li>
              <li><strong className="text-gray-100">&ldquo;Buyer&rdquo;</strong> — a user who purchases or downloads Prompts.</li>
              <li><strong className="text-gray-100">&ldquo;Prompt&rdquo;</strong> — any AI prompt, prompt template, agent configuration, or related digital work submitted by a Creator.</li>
              <li><strong className="text-gray-100">&ldquo;User Content&rdquo;</strong> — Prompts and any other content a User submits.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Eligibility &amp; Accounts</h2>
            <p>
              You must be at least 18 years old and able to enter a binding contract. You are
              responsible for keeping your credentials secure and for all activity on your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Creator Terms</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-white mb-1">3.1 Ownership</h3>
                <p>You retain all right, title, and interest in your Prompts. Nothing in these Terms transfers ownership of your Prompts to 3vo.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">3.2 License Grant to 3vo</h3>
                <p>
                  You grant 3vo a worldwide, <strong className="text-gray-100">non-exclusive</strong>, royalty-free,
                  transferable, sublicensable license to host, store, reproduce, display, perform,
                  distribute, market, and create derivative works from your Prompts solely for the
                  purpose of operating, promoting, and improving the Marketplace, including
                  sublicensing your Prompts to Buyers under Section 4. This license is perpetual
                  with respect to copies already delivered to Buyers, and otherwise terminates when
                  you remove the Prompt under Section 3.6.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">3.3 Exclusivity</h3>
                <p>
                  By default, your Prompts are listed on a non-exclusive basis. You may sell,
                  license, or distribute the same Prompts elsewhere. Optional exclusive listing
                  tiers may be offered separately.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">3.4 Creator Warranties</h3>
                <p className="mb-2">You represent and warrant that:</p>
                <ul className="space-y-1 list-disc list-inside ml-2">
                  <li>you own or have all rights necessary to grant the licenses in these Terms;</li>
                  <li>your Prompts do not infringe, misappropriate, or violate any third party&apos;s intellectual property, privacy, publicity, or contractual rights;</li>
                  <li>your Prompts do not contain confidential client material, personal data of identifiable individuals, or content received under non-disclosure agreement;</li>
                  <li>your Prompts comply with applicable laws, including export controls and AI/content regulations.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">3.5 Revenue Share</h3>
                <ul className="space-y-1 list-disc list-inside ml-2">
                  <li>3vo retains <strong className="text-gray-100">30%</strong> of net revenue from each Prompt sale.</li>
                  <li>Creator receives <strong className="text-gray-100">70%</strong> of net revenue.</li>
                  <li>&ldquo;Net revenue&rdquo; = gross sale price minus refunds, chargebacks, taxes, and payment processor fees passed through by Stripe/Gumroad. Currency conversion fees, where applicable, are deducted before the split.</li>
                  <li>Payouts are made monthly via Stripe Connect (or equivalent) once your balance reaches the minimum threshold (initially $25).</li>
                  <li>3vo may revise the revenue share with 30 days&apos; written notice; existing Prompts continue under the prior share until you accept the change or remove the Prompt.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">3.6 Takedown by Creator</h3>
                <p>
                  You may remove a Prompt from future sale at any time via your dashboard. Removal
                  does not affect licenses already granted to Buyers, which survive under Section 4.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Buyer Terms</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-white mb-1">4.1 License to Buyers</h3>
                <p>
                  Upon purchase of a Prompt, Buyer receives a perpetual, worldwide, non-exclusive,
                  non-transferable license to use the Prompt for personal or internal commercial
                  purposes, including running it through AI systems and using outputs for any lawful
                  purpose.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">4.2 Restrictions</h3>
                <p className="mb-2">Buyers may NOT:</p>
                <ul className="space-y-1 list-disc list-inside ml-2">
                  <li>resell, redistribute, or sublicense the Prompt as a standalone item or as part of a prompt pack/library;</li>
                  <li>claim authorship of the Prompt;</li>
                  <li>use the Prompt to train or fine-tune competing AI models intended to reproduce or replace the Prompt;</li>
                  <li>remove attribution or copyright notices.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">4.3 Refunds</h3>
                <p>
                  Digital goods are generally non-refundable once downloaded. 3vo offers a
                  discretionary 7-day refund window for Prompts that materially fail to perform as
                  described. Repeated abuse of the refund window may result in account suspension.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. AI Output Disclaimer</h2>
            <p>
              Prompts generate output via third-party AI systems (e.g., Anthropic, OpenAI, Google).
              3vo does not control, endorse, or guarantee any AI output. Output may be inaccurate,
              biased, offensive, or unsuitable for your use case. <strong className="text-gray-100">You are solely responsible</strong> for
              reviewing AI output before relying on or distributing it. The Marketplace and Prompts
              are not a substitute for legal, medical, financial, or other professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Prohibited Content</h2>
            <p className="mb-2">You may not upload Prompts that:</p>
            <ul className="space-y-1 list-disc list-inside ml-2">
              <li>generate sexually explicit content involving minors, non-consensual content, or content depicting real people without consent;</li>
              <li>target individuals for harassment, doxing, or threats;</li>
              <li>generate malware, exploit code, or instructions for weapons of mass destruction;</li>
              <li>facilitate fraud, scams, election interference, or unlawful surveillance;</li>
              <li>infringe trademark, copyright, trade secrets, or right of publicity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Intellectual Property of 3vo</h2>
            <p>
              The Marketplace itself, including its branding, software, design, and original
              3vo-authored reference Prompts, is owned by 3VO LLC and protected by copyright and
              common-law trademark. The marks &ldquo;3vo Prompt Marketplace&rdquo; and the Marketplace logo are
              common-law trademarks of 3VO LLC, used with the ™ designation. Nothing in these Terms
              grants you any right to those marks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. DMCA / Copyright Complaints</h2>
            <p>
              If you believe content on the Marketplace infringes your copyright, send a DMCA
              notice to our designated agent at{" "}
              <a href="mailto:dmca@3vo.ai" className="text-violet-400 hover:text-violet-300 underline">dmca@3vo.ai</a>.
              Notices must comply with 17 U.S.C. §&thinsp;512(c)(3). We will respond promptly.
              Counter-notices are accepted under §&thinsp;512(g). Repeat infringers will be terminated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Indemnification</h2>
            <p className="mb-3">
              Creator agrees to indemnify, defend, and hold harmless 3VO LLC from any third-party
              claim arising out of (a) Creator&apos;s Prompts or other User Content, (b) Creator&apos;s
              breach of these Terms or warranties, or (c) Creator&apos;s violation of applicable law.
            </p>
            <p>
              Buyer agrees to indemnify 3VO LLC for claims arising out of Buyer&apos;s misuse of
              Prompts in violation of Sections 4.2, 5, or 6.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Disclaimers &amp; Limitation of Liability</h2>
            <p className="mb-3 uppercase text-xs tracking-wide leading-relaxed text-gray-400">
              The marketplace and all content are provided &ldquo;as is&rdquo; without warranty of any kind.
              To the fullest extent permitted by law, 3VO LLC disclaims all warranties, express or
              implied, including merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
            <p className="uppercase text-xs tracking-wide leading-relaxed text-gray-400">
              3VO LLC&apos;s total liability arising out of or relating to these Terms will not exceed
              the greater of (A) amounts paid or payable by or to you in the 12 months preceding
              the claim, or (B) USD $100. 3VO LLC is not liable for indirect, incidental,
              consequential, special, or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Suspension &amp; Termination</h2>
            <p>
              We may suspend or terminate your account for violation of these Terms, fraud, abuse,
              legal compliance, or risk to the Marketplace. You may close your account at any time.
              Sections 3.2 (residual sublicense to existing Buyers), 4.1, 5, 7, 9, 10, 12, and 13
              survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Governing Law &amp; Disputes</h2>
            <p className="mb-3">
              These Terms are governed by the laws of the State of Delaware, USA, without regard to
              conflicts-of-law principles.
            </p>
            <p className="mb-3">
              <strong className="text-gray-100">Pre-suit notice:</strong> Before initiating any formal proceeding,
              the parties will attempt good-faith resolution by written notice to the other party
              for 30 days.
            </p>
            <p className="mb-3">
              <strong className="text-gray-100">Small claims carve-out:</strong> Either party may bring a qualifying
              claim in small-claims court.
            </p>
            <p>
              <strong className="text-gray-100">Arbitration:</strong> All other disputes will be resolved by binding
              individual arbitration administered by the American Arbitration Association (AAA) under
              its Consumer Arbitration Rules. 3VO LLC will pay AAA filing and administrative fees
              for individual claims of less than USD $10,000.{" "}
              <strong className="text-gray-100">Class actions and class arbitration are waived.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Changes to These Terms</h2>
            <p>
              We may update these Terms; material changes get 30 days&apos; notice via email or
              in-product banner. Continued use after the effective date is acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">14. Miscellaneous</h2>
            <ul className="space-y-2 list-disc list-inside ml-2">
              <li><strong className="text-gray-100">Entire agreement</strong> between you and 3VO LLC on the subject matter.</li>
              <li><strong className="text-gray-100">Severability</strong> — if any provision is unenforceable, the rest remains in effect.</li>
              <li><strong className="text-gray-100">No waiver</strong> — failure to enforce a provision is not a waiver.</li>
              <li><strong className="text-gray-100">Assignment</strong> — you may not assign without our consent; we may assign in connection with a corporate transaction.</li>
              <li><strong className="text-gray-100">Notices</strong> — to 3VO LLC at <a href="mailto:legal@3vo.ai" className="text-violet-400 hover:text-violet-300 underline">legal@3vo.ai</a>; to you at the email on your account.</li>
            </ul>
          </section>

        </div>

        <div className="mt-12 rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-sm text-gray-400 space-y-1">
          <p><strong className="text-gray-300">Contact:</strong>{" "}
            <a href="mailto:legal@3vo.ai" className="text-violet-400 hover:text-violet-300 underline">legal@3vo.ai</a>
            {" "}·{" "}
            <a href="mailto:dmca@3vo.ai" className="text-violet-400 hover:text-violet-300 underline">dmca@3vo.ai</a>
          </p>
          <p><strong className="text-gray-300">Operator:</strong> 3VO LLC, a Delaware limited liability company</p>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-xs text-gray-600 leading-relaxed">
          &ldquo;3vo Prompt Marketplace&rdquo; is a common-law trademark of 3VO LLC, used with ™ designation.
          Federal registration to follow under a final brand mark.
        </div>

        <div className="mt-6 text-sm text-gray-500 flex flex-wrap gap-6">
          <a href="/" className="hover:text-gray-300 transition">Home</a>
          <a href="/privacy" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="/about" className="hover:text-gray-300 transition">About</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
        </div>
      </div>
    </main>
  );
}
