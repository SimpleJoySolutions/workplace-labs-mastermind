'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-muted'>
          <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col items-center text-center mb-12'
            >
              <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                About Us
              </h1>
              <p className='max-w-[800px] text-muted-foreground md:text-xl'>
                An Industrial Psychologist and an AI Engineer empowering HR professionals with cutting-edge AI solutions.
              </p>
            </motion.div>
            <div className='space-y-24'>
              <FounderProfile
                name='Neil Morelli, PhD'
                role='Co-Founder & CEO'
                bio={[
                  'My passion for the intersection of technology and talent management began during my doctoral studies in Industrial-Organizational (I-O) Psychology. I had the opportunity to publish one of the first empirical research articles on the differences between mobile and non-mobile delivered employment tests.',
                  "Since then, I've experienced how technology amplifies both good and bad human capital practices. Whether companies mandate their use or employees adopt them organically, I've worked hard to understand how technology impacts HR.",
                  "During my tenure as the Chief I-O Psychologist at Codility (a pre-hire assessment platform for technical skills), I've had a front-row seat to generative AI's impact on the software engineering field—the new skills AI requires, the changes to who and how companies hire engineers and wider effects on the work itself.",
                  "Since ChatGPT's launch in late 2022, I've counseled dozens of current and potential customers on the impact of AI on their technical jobs. I've written several articles on the topic for Forbes, Dice, and TechCrunch. I am also working on two book chapters on AI for HR and IO psychology.",
                  "Now, I want to bring what I'm learning to help other HR teams and organizations adapt to AI's mainstream arrival.",
                  'Why?',
                  "Because I know that AI is quickly becoming the new computing paradigm, much like cloud services, mobile, and internet-based services before it. Companies (and HR teams) that don't learn to adapt to this new reality will be left behind, wasting their workforce's potential.",
                  "I also know that AI provides one of the best opportunities for HR leaders to play more strategic roles in their organizations and finally get more evidence-based talent practices in the hands of more frontline and executive leaders.",
                  'AI is a tool. In the right hands, it can be a powerful force for good in the lives of millions of workers, benefiting their employers as well. I want to help you be a part of this change and direct it to a positive outcome for you and your organization.'
                ]}
                imageSrc='/images/neil.webp'
                linkedInUrl='https://www.linkedin.com/in/neilmorelli/'
              />
              <hr className='my-12 border-t border-muted' />
              <FounderProfile
                name='Jonathan Flower'
                role='Co-Founder & CTO'
                bio={[
                  "I've always been fascinated by why some software is intuitive and enjoyable to use, while other programs seem designed to make life miserable. I often found myself mentally redesigning solutions, wondering why they weren't created that way in the first place.",
                  "This fascination led me to study countless stories of failed software solutions. What I discovered is that most issues aren't technical—they stem from various barriers between what customers truly need and what's actually created.  I am passionate about creating AI solutions that genuinely meet end users' needs.",
                  { type: 'image', src: '/images/software-dev.webp', alt: 'coding illustration', width: 400, height: 300 },
                  "If you've used many AI tools recently, you've likely experienced the staggering number of failed or underwhelming AI apps. AI is unlike any other innovation, making it challenging to find the right fit between the product and our actual needs.",
                  "I welcome this fresh challenge after over a decade of delivering enterprise software solutions that my clients often praised for being user-friendly, fast, and intuitive.",
                  "There's an immense opportunity right now to discover how AI can make people's jobs easier, faster, higher quality, and more enjoyable.",
                  "I aim to equip HR leaders with the tools they need to accelerate the adoption of the most impactful and sustainable AI solutions and skills in the world."
                ]}
                imageSrc='/images/jonathan-square.webp'
                linkedInUrl='https://www.linkedin.com/in/jonathan-flower/'
              />
            </div>
          </div>
        </section>
        <section className='w-full py-6 md:py-8 bg-muted'>
          <div className='container px-4 md:px-6 mx-auto max-w-7xl'>
            <div className='text-sm text-muted-foreground'>
              <p>
                <strong>Note:</strong> The majority of the images on this site were generated using Juggernaut XL with a Suprematism style, 
                run locally on an M1 MacBook Pro.  The site was built with the help of v0 by Vercel, ChatGPT, and Llama 3.1.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

interface FounderProfileProps {
  name: string;
  role: string;
  bio: (string | { type: 'image'; src: string; alt: string; width: number; height: number })[];
  imageSrc: string;
  linkedInUrl: string;
}

const FounderProfile: React.FC<FounderProfileProps> = ({ name, role, bio, imageSrc, linkedInUrl }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className='flex flex-col items-center text-center md:text-left md:flex-row md:items-start bg-card rounded-lg shadow-lg overflow-hidden'
  >
    <div className='md:w-1/3 p-8'>
      <Image
        src={imageSrc}
        alt={name}
        width={300}
        height={300}
        className='rounded-full mx-auto md:mx-0 border-4 border-primary shadow-lg'
      />
      <h2 className='text-2xl font-bold mt-4 mb-2'>{name}</h2>
      <h3 className='text-xl text-muted-foreground mb-4'>{role}</h3>
      <a href={linkedInUrl} className='text-primary hover:text-primary-foreground inline-flex items-center bg-muted px-4 py-2 rounded-full transition-colors duration-200'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' className='mr-2'>
          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
        </svg>
        LinkedIn Profile
      </a>
    </div>
    <div className='md:w-2/3 p-8 bg-muted'>
      {bio.map((item, index) => (
        typeof item === 'string' ? (
          <motion.p 
            key={index} 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='text-muted-foreground mb-4 text-left'
          >
            {item}
          </motion.p>
        ) : (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className='mb-4 w-full rounded-lg shadow-md'
            />
          </motion.div>
        )
      ))}
    </div>
  </motion.div>
);