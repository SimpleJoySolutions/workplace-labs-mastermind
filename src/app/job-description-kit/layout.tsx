import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Job Description Quick Start Guide | AI for HR Mastermind",
  description:
    "Learn to write job descriptions tailored to your business. Complete tutorial to build your custom GPT, plus 4 ready-made GPTs to get started immediately.",
};

export default function JobDescriptionKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
