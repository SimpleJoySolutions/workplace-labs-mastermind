"use client";

import { motion } from "framer-motion";

export const OurApproachSection = () => {
  return (
    <div className="section-inner">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
          Our Approach
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="section-paragraph">
            We blend AI Engineering expertise with Workplace Psychology to
            address the human elements of successful AI adoption, turning
            skepticism into enthusiasm.
          </p>
          <p className="section-paragraph">
            We help you identify and prioritize use cases with clear ROI and
            build safe, compliant proofs-of-concept that get buy-in.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center md:text-left">
            Other Ways to Learn AI Skills
          </h3>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="border-2 border-muted rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-red-500 mr-2">✕</span>
                In-the-weeds Technical Overview
              </h4>
              <p className="text-muted-foreground">
                Most AI training today focuses much of its time on the technical
                specifications, terms, and mechanics that are less relevant to
                HR and shift quickly.
              </p>
            </div>

            <div className="border-2 border-muted rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-red-500 mr-2">✕</span>
                Vague Terms and High-level Descriptions
              </h4>
              <p className="text-muted-foreground">
                AI in HR training starts and stops with PowerPoints, term
                glossaries, and could/would/should statements about AI, not
                hands-on skills developed by building.
              </p>
            </div>

            <div className="border-2 border-muted rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-red-500 mr-2">✕</span>
                One-and-done Demos and Workshops
              </h4>
              <p className="text-muted-foreground">
                Today, learners are overwhelmed with narrow, single use
                tutorials that have a limited impact on workflows and employees.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center md:text-left">
            Our Way
          </h3>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="border-2 border-muted rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Research-Based Frameworks
              </h4>
              <p className="text-muted-foreground">
                Drawing from tech adoption, workplace psychology, and computer
                science research, we've built an adoption framework that gets
                your team excited about AI.
              </p>
            </div>

            <div className="border-2 border-muted rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Hands-on Tutorials and Coaching
              </h4>
              <p className="text-muted-foreground">
                Learning AI on your own can be time-consuming and frustrating.
                Our hands-on demos and support will boost your confidence, and
                our Slack community will connect you to a growing network of
                AI-enabled HR consultants and practitioners.
              </p>
            </div>

            <div className="border-2 border-muted rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Scalable Solutions
              </h4>
              <p className="text-muted-foreground">
                Our materials and coaching will help you scale. We won't leave
                you with access to new tools or systems without a plan for
                making sure they provide high-impact, high-margin results that
                grow with your organization.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
