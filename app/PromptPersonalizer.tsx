'use client';

import { useState } from 'react';

type Role = 'Founder' | 'Marketer' | 'Consultant' | 'Sales' | 'Freelancer';
type Challenge = 'Client outreach' | 'Content creation' | 'Pricing' | 'Discovery calls' | 'Research';

const ROLES: Role[] = ['Founder', 'Marketer', 'Consultant', 'Sales', 'Freelancer'];
const CHALLENGES: Challenge[] = ['Client outreach', 'Content creation', 'Pricing', 'Discovery calls', 'Research'];

const roleContext: Record<Role, { clientType: string; service: string }> = {
  Founder:    { clientType: 'potential investors and early customers', service: 'my product' },
  Marketer:   { clientType: 'B2B companies',                          service: 'marketing services' },
  Consultant: { clientType: 'mid-sized businesses',                   service: 'consulting services' },
  Sales:      { clientType: 'enterprise decision-makers',             service: 'my solution' },
  Freelancer: { clientType: 'agencies and startups',                  service: 'freelance services' },
};

const promptTemplates: Record<Challenge, ((r: Role) => string)[]> = {
  'Client outreach': [
    (r) => `Write a cold pitch email to ${roleContext[r].clientType} introducing me as a ${r} offering ${roleContext[r].service}. Keep it under 150 words and end with a clear ask.`,
    (r) => `Create a LinkedIn connection request message from a ${r} to ${roleContext[r].clientType}. Make it specific, warm, and under 300 characters.`,
    (r) => `Write a follow-up email for a ${r} to send to ${roleContext[r].clientType} who hasn't replied after 5 days. Acknowledge the silence without being pushy.`,
    (r) => `Draft a referral ask a ${r} can send to current clients asking them to introduce me to ${roleContext[r].clientType}.`,
    (r) => `Write a re-engagement message a ${r} can send to ${roleContext[r].clientType} who went cold 3 months ago.`,
  ],
  'Content creation': [
    (r) => `Write 5 LinkedIn post hooks for a ${r} speaking to ${roleContext[r].clientType} about a challenge they face. Each hook under 15 words.`,
    (r) => `Create a newsletter intro for a ${r} targeting ${roleContext[r].clientType}. Open with a relatable frustration, transition to a useful insight.`,
    (r) => `Write a case study headline and 3-sentence summary for a ${r} who helped ${roleContext[r].clientType} improve a key result.`,
    (r) => `Generate 3 Twitter/X thread openers for a ${r} sharing lessons from delivering ${roleContext[r].service} to ${roleContext[r].clientType}.`,
    (r) => `Write an 'About' page bio for a ${r} who works with ${roleContext[r].clientType}. First person, 80–100 words, end with a CTA.`,
  ],
  'Pricing': [
    (r) => `Write a value proposition statement for a ${r} explaining the ROI of ${roleContext[r].service} to ${roleContext[r].clientType} in 2 sentences.`,
    (r) => `Create an objection-handling script for when ${roleContext[r].clientType} say the price is too high. I'm a ${r}. Give me 3 reframes.`,
    (r) => `Write a proposal pricing section for a ${r} pitching ${roleContext[r].service} to ${roleContext[r].clientType}. Include 2 tiers with a clear recommended option.`,
    (r) => `Draft a price increase announcement email from a ${r} to existing ${roleContext[r].clientType} clients. Keep the tone confident and relationship-first.`,
    (r) => `Write a response a ${r} can send when ${roleContext[r].clientType} ask "Can you do it for less?" — firm, fair, and without discounting.`,
  ],
  'Discovery calls': [
    (r) => `Give me 10 discovery call questions a ${r} should ask ${roleContext[r].clientType} before proposing ${roleContext[r].service}. Focus on uncovering pain, urgency, and fit.`,
    (r) => `Write a calendar confirmation email a ${r} sends to a ${roleContext[r].clientType} prospect ahead of a discovery call. Include what to expect.`,
    (r) => `Create a discovery call opening script for a ${r} that quickly builds rapport and transitions to learning about the ${roleContext[r].clientType}'s goals.`,
    (r) => `Write a follow-up email a ${r} sends within 24 hours of a discovery call with ${roleContext[r].clientType}. Summarize key points and propose next steps.`,
    (r) => `Write the 60-second pitch a ${r} delivers on a discovery call to explain ${roleContext[r].service} to ${roleContext[r].clientType} before asking questions.`,
  ],
  'Research': [
    (r) => `List the top 5 challenges ${roleContext[r].clientType} face in 2025 that a ${r} offering ${roleContext[r].service} is uniquely positioned to solve.`,
    (r) => `Compare 3 competitors a ${r} faces when pitching ${roleContext[r].service} to ${roleContext[r].clientType}. For each: positioning, pricing, and where they fall short.`,
    (r) => `Create a 1-page competitive positioning brief for a ${r} targeting ${roleContext[r].clientType}. Include differentiators, objections, and win themes.`,
    (r) => `Give a ${r} 8 qualifying questions to quickly assess whether ${roleContext[r].clientType} are good-fit prospects for ${roleContext[r].service}.`,
    (r) => `Summarize the top 3 trends shaping how ${roleContext[r].clientType} buy ${roleContext[r].service} in 2025. Format as bullets a ${r} can use in pitches.`,
  ],
};

export default function PromptPersonalizer() {
  const [role, setRole] = useState<Role | ''>('');
  const [challenge, setChallenge] = useState<Challenge | ''>('');
  const [copied, setCopied] = useState<number | null>(null);

  const prompts = role && challenge ? promptTemplates[challenge].map((fn) => fn(role as Role)) : [];

  const copyPrompt = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section className="bg-gray-900 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm text-violet-300 mb-4">
            Try before you buy
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">See prompts built for you</h2>
          <p className="mt-3 text-gray-400">Pick your role and biggest challenge — get 5 prompts from the pack, personalized.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">My role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as Role | '')}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-violet-500 focus:outline-none"
            >
              <option value="">Select your role…</option>
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">My main challenge</label>
            <select
              value={challenge}
              onChange={(e) => setChallenge(e.target.value as Challenge | '')}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-violet-500 focus:outline-none"
            >
              <option value="">Select your challenge…</option>
              {CHALLENGES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {prompts.length > 0 ? (
          <div className="space-y-4">
            {prompts.map((text, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl border border-violet-500/20 bg-gray-800/60 p-5 transition hover:border-violet-500/40"
              >
                <p className="text-sm text-gray-200 leading-relaxed pr-16">{text}</p>
                <button
                  onClick={() => copyPrompt(text, idx)}
                  className="absolute right-4 top-4 rounded-md border border-gray-600 bg-gray-700 px-3 py-1.5 text-xs font-medium text-gray-300 opacity-0 transition group-hover:opacity-100 hover:border-violet-500/50 hover:text-violet-300"
                >
                  {copied === idx ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ))}
            <p className="pt-2 text-center text-sm text-gray-500">
              These are 5 of 80+ prompts in the pack — across all roles and challenges.
            </p>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-700 bg-gray-800/30 p-10 text-center text-gray-500 text-sm">
            Select your role and challenge above to see your personalized prompts.
          </div>
        )}
      </div>
    </section>
  );
}
