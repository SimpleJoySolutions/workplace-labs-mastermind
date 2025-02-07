/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0WdrGkHX670
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { DM_Sans } from 'next/font/google'
import { Archivo } from 'next/font/google'

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { PublicationLogosComponent } from "./publication-logos";
import { AlumniCompaniesSection } from "./alumni-companies-section";
import { SocialProofSection } from "./social-proof-section";
import { AboutUsSection } from "./about-us-section";
import { UseCasesSection } from "./use-cases-section";
import { AIRealitySection } from "./ai-reality-section";
import { AITransformationsSection } from "./ai-transformations-section";
import { OurApproachSection } from "./our-approach-section";
import { WhatYouLearnSection } from "./what-you-learn-section";

export const HomeBody = () => {
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
                  <h4 className="text-4xl lg:text-5xl font-bold py-6">
                    The Essential Mastermind for AI-enabled HR
                  </h4>
                  <h4 className="text-2xl lg:text-3xl font-bold">
                    Less Admin, More Impact: AI Skills for Modern HR
                  </h4>
                  <p className="text-lg md:text-xl text-muted-foreground py-4">
                    Become your organization's go-to expert for AI people
                    solutions.
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Our next cohort kicks off February 13th.
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col gap-2 min-[400px]:flex-row"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeysTaenp0vmB4qtWRXItMwY-m1_pmTrmalKPWZjt6P5ymUTw/viewform?usp=sf_link"
                      className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-secondary px-10 text-base font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Apply Today
                    </a>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="/images/man-working.png"
                  width={550}
                  height={550}
                  alt="Hero"
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
          className="container-class"
        >
          <AIRealitySection />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-muted container-class"
        >
          <OurApproachSection />
          <PublicationLogosComponent />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container-class"
        >
          <WhatYouLearnSection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container-class py-0"
        >
          <div className="section-inner">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <AboutUsSection />
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-muted container-class border-y-4"
        >
          <div className="section-inner">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                  Become your company's go-to leader on AI
                </h2>
                <p className="section-paragraph">
                  Inside the AI in HR Mastermind, you'll get resources curated
                  for HR leaders, interactive and hands-on group training
                  sessions, reusable templates and frameworks, and networking
                  opportunities with like-minded HR and People leaders from some
                  of the best companies.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-36 mt-14">
              <Image
                src="/images/woman-looking.png"
                alt="AI in HR Mastermind"
                className="rounded-lg w-full"
                width={400}
                height={300}
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <Image
                src="/images/desk-with-computer.png"
                alt="HR Leaders Collaboration"
                className="rounded-lg w-full"
                width={400}
                height={300}
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container-class py-0"
        >
          <div className="section-inner">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <UseCasesSection />
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container-class"
        >
          <AITransformationsSection />
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
                  This Mastermind is Right for You If
                </h2>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      You Have a Vision for Better HR, But Limited Bandwidth
                    </h3>
                    <p className="section-paragraph">
                      You have a long list of 'one day' HR projects, but
                      administrative tasks keep getting in the way. You've found
                      plenty of areas to improve people operations in your
                      organization, there just aren't enough hours in the day.
                      You're curious how AI can help.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      You're Ready to Move Beyond Basic AI Use Cases
                    </h3>
                    <p className="section-paragraph">
                      You've experimented with ChatGPT and other AI tools, but
                      you know there's more potential. You want a structured
                      approach to implement AI effectively across your HR
                      functions and get measurable results.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      You Need a Practical Implementation Roadmap
                    </h3>
                    <p className="section-paragraph">
                      You're tired of theoretical AI discussions and vendor
                      pitches. You want hands-on guidance, real examples, and a
                      clear framework for implementing AI in ways that your
                      leadership and teams will embrace.
                    </p>
                  </div>
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
                  AI for HR Mastermind
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
                  The four-week curriculum
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="border-2 border-muted rounded-lg p-8 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 mb-6"
                >
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                </svg>
                <h3 className="text-2xl font-bold mb-3">
                  Week 1: Assess AI Readiness
                </h3>
                <h4 className="text-xl mb-3">
                  The 6 driving forces behind successful (and unsuccessful) AI
                  deployments
                </h4>
                <p className="text-muted-foreground text-lg">
                  Assess your organization's AI readiness and learn from real HR
                  case studies of successful (and failed) AI implementations.
                </p>
              </div>
              <div className="border-2 border-muted rounded-lg p-8 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 mb-6"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                <h3 className="text-2xl font-bold mb-3">
                  Week 2: Select a Use Case
                </h3>
                <h4 className="text-xl mb-3">
                  5 tips for choosing an AI use case that offers real results
                </h4>
                <p className="text-muted-foreground text-lg">
                  Learn the secrets to picking the right tasks to automate or
                  augment with AI
                </p>
              </div>
              <div className="border-2 border-muted rounded-lg p-8 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 mb-6"
                >
                  <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                  <path d="M7 7h.01" />
                </svg>
                <h3 className="text-2xl font-bold mb-3">
                  Week 3: Build a Prototype
                </h3>
                <h4 className="text-xl mb-3">
                  3 steps to building a proof-of-concept
                </h4>
                <p className="text-muted-foreground text-lg">
                  Quickly build prototypes that demonstrate the value of your AI
                  initiatives.
                </p>
              </div>
              <div className="border-2 border-muted rounded-lg p-8 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 mb-6"
                >
                  <path d="M5 22h14" />
                  <path d="M5 2h14" />
                  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                </svg>
                <h3 className="text-2xl font-bold mb-3">
                  Week 4: Prepare to Scale
                </h3>
                <h4 className="text-xl mb-3">
                  How to scale your proof-of-concept
                </h4>
                <p className="text-muted-foreground text-lg">
                  Draft a real-life action plan to scale your AI initiatives and
                  deliver sustainable value.
                </p>
              </div>
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
              <div className="space-y-2 mb-14">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                  Key Benefits
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  By the end of the 4-week mastermind, we'll help you:
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Focus on Strategic Work
                      </h3>
                      <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Automate repetitive HR tasks and free up your team to
                        focus on high-impact strategic initiatives.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Identify Valuable Use Cases
                      </h3>
                      <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Discover how AI can streamline your HR processes, from
                        talent acquisition to employee engagement.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Upskill Your Team</h3>
                      <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Learn in-demand AI skills and empower your HR team to
                        become leaders in the field.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/images/whiteboarding.png"
                width={550}
                height={310}
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AlumniCompaniesSection />
          <SocialProofSection />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-accent text-primary-foreground container-class"
        >
          <div className="section-inner">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Our Mission
              </h2>
              <p className="max-w-[900px] text-xl md:text-2xl">
                Cut through the hype and teach AI skills that help HR
                professionals create more effective, engaged, and equitable
                workplaces.
              </p>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                  Ready to become a leader in AI-enabled HR?
                </h2>
                <p className="section-paragraph">
                  Each cohort has limited space, so apply now!
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeysTaenp0vmB4qtWRXItMwY-m1_pmTrmalKPWZjt6P5ymUTw/viewform?usp=sf_link"
                    className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-secondary px-10 text-base font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Apply Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};
