"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const JobDescriptionKitPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container-class pb-0"
        >
          <div className="section-inner">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="max-w-[700px]">
                  <h1 className="text-4xl lg:text-5xl font-bold py-6">
                    AI Job Description Builder Workflow
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-bold">
                    A Research-Backed System for Creating Job Descriptions That
                    Convert
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground py-4">
                    Complete Workflow with 4 Custom GPTs + Training to Transform
                    Your Hiring Process
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col gap-2 min-[400px]:flex-row"
                  >
                    <Link
                      href="#buy-now"
                      className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Get Instant Access - $45
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="/images/job-description.png"
                  width="550"
                  height="550"
                  alt="Job Description Builder"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-muted container-class"
        >
          <div className="section-inner">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                  Why Job Descriptions Matter
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto">
                  High-quality job descriptions help attract candidates aligned
                  with your company's mission, values and culture. They help
                  teams stay rooted in skills-based hiring decisions by focusing
                  on the skills that predict success in the role.
                </p>
                <p className="text-sm text-muted-foreground italic mt-2">
                  - Journal of Applied Psychology
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container-class"
        >
          <div className="section-inner">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                What's Included in the Workflow
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-2 border-muted rounded-lg p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">
                  4 Custom GPTs - Your AI Workflow Team
                </h3>
                <ul className="text-left space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Job Description Revision GPT</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Feasible Work Analysis Assistant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Company Overview Assistant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Job Description Assistant</span>
                  </li>
                </ul>
              </div>
              <div className="border-2 border-muted rounded-lg p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">
                  Step-by-Step Training
                </h3>
                <ul className="text-left space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Master the complete workflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Adapt the process to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Create your own AI workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Research-backed templates & examples</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-muted container-class"
          id="buy-now"
        >
          <div className="section-inner">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                  Get Started Today
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto mb-8">
                  Start using our proven workflow to create job descriptions
                  that attract qualified candidates
                </p>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                  <h3 className="text-3xl font-bold mb-4">$45</h3>
                  <p className="text-muted-foreground mb-6">
                    One-time payment, instant access
                  </p>
                  <Link
                    href="/checkout"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container-class"
        >
          <div className="section-inner">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                  Created by HR Experts
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <Image
                      src="/images/neil.jpg"
                      width={120}
                      height={120}
                      alt="Dr. Neil Morelli"
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold">Dr. Neil Morelli</h3>
                    <p className="text-muted-foreground">
                      AI for HR Mastermind
                    </p>
                  </div>
                  <div className="text-center">
                    <Image
                      src="/images/jonathan.jpg"
                      width={120}
                      height={120}
                      alt="Jonathan Flower"
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold">Jonathan Flower</h3>
                    <p className="text-muted-foreground">
                      AI for HR Mastermind
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default JobDescriptionKitPage;
