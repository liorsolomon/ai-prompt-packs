import type { Metadata } from 'next';
import { Suspense } from 'react';
import ThankYouContent from './ThankYouContent';

export const metadata: Metadata = {
  title: 'Thank You — AI Prompt Packs',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
