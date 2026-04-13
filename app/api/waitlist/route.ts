import { NextRequest, NextResponse } from 'next/server';

const CAMPAIGN_ID = 'ai-prompt-packs';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/email_waitlist`, {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ email, campaign_id: CAMPAIGN_ID }),
      });
    } catch {
      // fail silently — email capture is best effort
    }
  }

  if (resendApiKey) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'AI Prompt Packs <noreply@3vo.ai>',
          to: [email],
          subject: "You're on the waitlist — AI Prompt Packs launching soon",
          html: `
            <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; color: #111;">
              <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">You're in! 🎉</h1>
              <p style="color: #555; line-height: 1.6;">
                Thanks for joining the AI Prompt Packs waitlist. You'll be among the first to know when we launch — and you'll get early-bird pricing.
              </p>
              <p style="color: #555; line-height: 1.6;">
                We're packaging expert-crafted prompts for marketers, founders, and business professionals — tested with ChatGPT and Claude, ready to paste.
              </p>
              <p style="color: #555; line-height: 1.6; margin-top: 24px;">
                — The AI Prompt Packs team
              </p>
            </div>
          `,
        }),
      });
    } catch (err) {
      console.error('[waitlist] Resend welcome email error:', err);
    }
  }

  return NextResponse.json({ ok: true });
}
