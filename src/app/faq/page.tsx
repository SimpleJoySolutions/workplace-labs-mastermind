'use client';

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const FAQPage = () => {
  const faqItems = [
    {
      question: 'Who is The AI for HR Mastermind for?',
      answer: (
        <>
          <p>This mastermind is for HR and People leaders who want to demystify Gen AI, spot use cases aligned with business goals, and turn their teams into the go-to company experts on AI. It's ideal for:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>HR professionals looking to start or streamline their AI journey</li>
            <li>Leaders who want to network with other early adopters in HR</li>
            <li>Those seeking to save costs by learning how to avoid common AI implementation mistakes</li>
            <li>HR executives aiming to play more strategic roles in their organizations</li>
            <li>Professionals interested in implementing evidence-based talent practices using AI</li>
            <li>HR leaders ready for a hybrid digital and in-person experience for optimal learning and engagement</li>
          </ul>
          <p className="mt-2"><strong>Curious if The AI for HR Mastermind is for you? <a href="https://docs.google.com/forms/d/e/1FAIpQLSeysTaenp0vmB4qtWRXItMwY-m1_pmTrmalKPWZjt6P5ymUTw/viewform" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apply and we will let you know!</a></strong></p>
        </>
      ),
    },
    {
      question: 'What does the 4-week program cover?',
      answer: (
        <>
          <p>Our comprehensive 4-week program covers:</p>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li><strong>Week 1: AI Readiness</strong> - Assess your organization's AI readiness and identify focus areas for long-term success.</li>
            <li><strong>Week 2: Select Use Case</strong> - Learn to choose AI use cases that offer real results and navigate common concerns.</li>
            <li><strong>Week 3: Prototype</strong> - Build quick prototypes that demonstrate the value of your AI initiatives.</li>
            <li><strong>Week 4: Scale</strong> - Create a comprehensive action plan to scale your AI initiatives and deliver sustainable value.</li>
          </ol>
        </>
      ),
    },
    {
      question: 'What if I can\'t make a session?',
      answer: 'All calls are recorded for you to watch later if you\'re unable to make the live sessions. Our in-person sessions will also be recorded and available on your private community page.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'We have a no-questions-asked refund policy. If you ever feel that the program isn\'t meeting your expectations or isn\'t a good fit for you, we\'ll refund your full tuition. Our goal is to ensure you receive value from the program, and we stand behind its quality.',
    },
    {
      question: 'What is included in the program?',
      answer: (
        <>
          <p>The AI for HR Mastermind includes:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Weekly interactive and hands-on group training sessions</li>
            <li>Resources curated specifically for HR leaders</li>
            <li>Reusable templates and frameworks for AI implementation</li>
            <li>Networking opportunities with like-minded HR and People leaders</li>
            <li>Access to a private community page for ongoing discussions and resource sharing</li>
            <li>Recordings of all sessions for review</li>
          </ul>
        </>
      ),
    },
    // {
    //   question: 'I\'ve applied, now what?',
    //   answer: (
    //     <>
    //       <p>Congratulations on taking this exciting first step! Here's what to expect next:</p>
    //       <ol>
    //         <li>We'll review your application and, if approved, you'll receive an email to schedule a brief onboarding call.</li>
    //         <li>You'll gain access to the exclusive members-only Slack community.</li>
    //         <li>Introduce yourself to your fellow HR leaders in the community.</li>
    //         <li>Participate in the welcome call to meet your coaches and peers.</li>
    //         <li>Prepare for the first week's session on AI Readiness.</li>
    //         <li>Look out for weekly emails with session details and any pre-work or resources.</li>
    //       </ol>
    //     </>
    //   ),
    // },
    {
      question: 'How can this mastermind benefit my organization?',
      answer: 'This mastermind will empower you to lead AI initiatives in your HR department, potentially reducing costs, improving efficiency, and enhancing decision-making. You\'ll learn to identify valuable AI use cases, build prototypes, and create action plans for implementation. This knowledge can position your HR team as strategic partners in your organization\'s AI transformation.',
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-muted">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-center"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mx-auto mb-8"
            >
              Find answers to common questions about The AI for HR Mastermind
            </motion.p>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index + 1}`} className="border-b border-muted">
                    <AccordionTrigger className="text-2xl font-semibold py-4 hover:text-primary transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-[17px] space-y-2"
                      >
                        {typeof item.answer === 'string' ? (
                          <p>{item.answer}</p>
                        ) : (
                          item.answer
                        )}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQPage;
