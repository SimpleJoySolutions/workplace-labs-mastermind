"use client";

import { motion } from "framer-motion";

export const AIRealitySection = () => {
  return (
    <div className="section-inner">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Which AI Reality Are You Stuck In?
        </h2>

        <div className="py-16">
          <p className="text-2xl md:text-3xl font-semibold text-primary">
            81% of HR pros say they're already exploring or using AI
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-4">
            but most are stuck in one of three challenging situations:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-2 border-muted rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">
            Fighting FOMO and Skepticism
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>"My team is not sure where to start."</li>
            <li>"I'm worried we're falling behind with AI."</li>
            <li>"Employees are anxious about AI in the workplace."</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-2 border-muted rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Mindful of Past Failures</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>"We invested in AI tools that nobody uses."</li>
            <li>"Our AI projects aren't delivering expected results."</li>
            <li>"We're drowning in vendor promises."</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-2 border-muted rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">
            Concerned About Real Risks
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li>"How do we know our data are safe?"</li>
            <li>"What are the legal implications?"</li>
            <li>"Can we trust AI outputs?"</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center max-w-3xl mx-auto border-t-2 border-muted pt-16"
      >
        <h3 className="text-2xl font-bold mb-6">
          There's a Better Way Forward
        </h3>
        <p className="section-paragraph">
          Many of the HR practitioners and leaders we've met are curious about
          AI, but concerns hold them back, and their companies have yet to
          provide much guidance or support. That leaves HR pros to learn AI
          skills on their own.
        </p>
        <p className="section-paragraph mt-4">
          If you work in people analytics, talent acquisition, or employee
          experience, there's a better way to adopt AI.
        </p>
      </motion.div>
    </div>
  );
};
