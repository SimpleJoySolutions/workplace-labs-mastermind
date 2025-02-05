import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Description Builder AI Kit | AI for HR Mastermind",
  description:
    "Create high-quality job descriptions that attract top talent with our research-backed Custom GPTs and training course.",
};

export default function JobDescriptionKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
