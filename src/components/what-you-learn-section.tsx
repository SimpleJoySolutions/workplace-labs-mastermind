"use client";

import { motion } from "framer-motion";

export const WhatYouLearnSection = () => {
  return (
    <div className="section-inner">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
          What You Will Learn
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-2 border-muted rounded-lg p-8"
        >
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M8 13h8" />
                <path d="M8 17h8" />
                <path d="M8 9h2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">AI Readiness</h3>
            <p className="text-muted-foreground">
              You'll learn about the factors driving people to accept or reject
              new technologies. Both their internal predisposition, as well as
              the company culture and environment make it easier or harder for
              new tech like AI to thrive.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-2 border-muted rounded-lg p-8"
        >
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Task-Technology Fit</h3>
            <p className="text-muted-foreground">
              You'll learn about how to identify a task to augment or automate
              with AI, and how to evaluate where you're using the right tool for
              the job. This fit between task and technology is crucial for
              success (and whether you're wasting your time).
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-2 border-muted rounded-lg p-8"
        >
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10"
              >
                <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" />
                <path d="M12 6c-1.79 1.96-2 5.35-2 8 0 2.65.21 6.04 2 8 1.79-1.96 2-5.35 2-8 0-2.65-.21-6.04-2-8z" />
                <path d="M6 12h12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Custom GPTs (and other no code AI prototypes)
            </h3>
            <p className="text-muted-foreground">
              You'll learn how to build a custom GPT, Claude Project, Gemini
              Gem, or Copilot Project. This isn't a high-level overview. You'll
              get hands-on support and guidance from an AI engineer to bring
              your idea to life and experiment with it.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-2 border-muted rounded-lg p-8"
        >
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Scaling Questionnaire</h3>
            <p className="text-muted-foreground">
              You'll learn who to talk to and what to ask when it comes to
              getting your prototype in front of more users. You'll develop an
              action plan that gives you a clear path forward.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
