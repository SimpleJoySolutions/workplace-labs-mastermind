"use client";

import { AboutUsSection } from '@/components/about-us-section';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <AboutUsSection />
      </main>
    </div>
  );
}
