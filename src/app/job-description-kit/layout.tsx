import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Job Description Builder Workflow | AI for HR Mastermind",
  description:
    "Transform your hiring process with our research-backed AI workflow for creating job descriptions that convert. Includes 4 Custom GPTs and step-by-step training.",
};

export default function JobDescriptionKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
