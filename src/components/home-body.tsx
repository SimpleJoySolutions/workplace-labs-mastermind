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
'use client'
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import { PublicationLogosComponent } from './publication-logos';

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
                <div className="">
                  <h4 className="text-5xl font-bold py-6">
                    The Essential AI for HR Mastermind
                  </h4>
                  <h4 className="text-3xl font-bold">
                    From Concept to Action Plan in 4 Weeks
                  </h4>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl py-4">
                    Our invite-only, 4-week mastermind training program and
                    community helps HR and People leaders demystify Gen AI, spot
                    use cases aligned with business goals, and turn their teams
                    into the go-to company experts on AI.
                  </p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col gap-2 min-[400px]:flex-row"
                  >
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeysTaenp0vmB4qtWRXItMwY-m1_pmTrmalKPWZjt6P5ymUTw/viewform?usp=sf_link"
                      className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Join the Mastermind
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
                  src="/images/man-working.png"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </motion.div>
            </div>
        <PublicationLogosComponent />
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
                width="550"
                height="310"
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
          className="container-class"
        >
          <div className="section-inner">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/lines-w-circles.png"
                  width={600}
                  height={400}
                  alt="AI Transformation Challenges"
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center md:text-left mb-6">
                  Most AI transformations...
                </h2>
                <ul className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left space-y-4">
                  <li>
                    <h3 className="text-xl font-bold">
                      Come with employees saying, "I am afraid for my
                      job."
                    </h3>
                    <p>
                      (We help you address the cultural element of a successful
                      AI adoption.)
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold">
                      Have buyer's remorse after wasting a ton of time and
                      money.
                    </h3>
                    <p>
                      (We help you identify use cases that generate business
                      results and have a high chance of success.)
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold">
                      Come with questions about bias, accuracy, and legality.
                    </h3>
                    <p>
                      (We help you develop a safe proof-of-concept you can show
                      to stakeholders to get their buy-in.)
                    </p>
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
        >
          <div className="section-inner">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                  Become your company's go-to leader on AI
                </h2>
                <p className="section-paragraph">
                  Inside the AI in HR Mastermind, you'll get resources
                  curated for HR leaders, interactive and hands-on group
                  training sessions, reusable templates and frameworks, and
                  networking opportunities with like-minded HR and People
                  leaders from some of the best companies.
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
          className="container-class"
        >
          <div className="section-inner">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                  AI for HR Mastermind
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
                  our comprehensive 4-week
                  program
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
                  Week 1: AI Readiness
                </h3>
                <h4 className="text-xl mb-3">
                  The 6 driving forces behind successful (and unsuccessful) AI
                  use cases
                </h4>
                <p className="text-muted-foreground text-lg">
                  Assess your organization's AI readiness and identify
                  focus areas for long-term success.
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
                  Week 2: Select Use Case
                </h3>
                <h4 className="text-xl mb-3">
                  5 tips for choosing an AI use case that offers real results
                </h4>
                <p className="text-muted-foreground text-lg">
                  Navigate common concerns and ensure your initiatives deliver
                  measurable business outcomes.
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
                <h3 className="text-2xl font-bold mb-3">Week 3: Prototype</h3>
                <h4 className="text-xl mb-3">
                  3 steps to building a proof-of-concept
                </h4>
                <p className="text-muted-foreground text-lg">
                  Learn to quickly build prototypes that demonstrate the value
                  of your AI initiatives.
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
                <h3 className="text-2xl font-bold mb-3">Week 4: Scale</h3>
                <h4 className="text-xl mb-3">
                  How to scale your proof-of-concept
                </h4>
                <p className="text-muted-foreground text-lg">
                  Create a comprehensive action plan to scale your AI
                  initiatives and deliver sustainable value.
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
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                  Who should join the AI for HR mastermind?
                </h2>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Leaders who want to start or streamline their AI journey
                    </h3>
                    <p className="section-paragraph">
                      Are you looking for ways to get started with AI? Or maybe
                      you're experimenting with AI tools and need better
                      ways to test your progress and get buy-in? If you're
                      starting or upskilling in AI, this mastermind group is for
                      you.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Leaders who want to network with other early adopters
                    </h3>
                    <p className="section-paragraph">
                      Want to learn from what others are doing? Are you looking
                      for benchmarks and feedback on what you've tried so far?
                      You'll have an opportunity to network and trade notes with
                      other amazing HR leaders who are passionate about AI.
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
          className="bg-accent text-primary-foreground container-class"
        >
          <div className="section-inner">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Our Mission
              </h2>
              <p className="max-w-[900px] text-xl md:text-2xl">
                To cut through the noise and teach AI skills that help HR
                leaders create more engaged, equitable, and evidence-based
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
                  Apply to Join The AI for HR Mastermind
                </h2>
                <p className="section-paragraph">
                  Ready to become an AI-empowered HR leader and
                  the go-to company expert?
                </p>
                <p className="section-paragraph">
                  Each cohort has limited space, so apply now!
                </p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center"
                >
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeysTaenp0vmB4qtWRXItMwY-m1_pmTrmalKPWZjt6P5ymUTw/viewform?usp=sf_link"
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Apply Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};
