'use client';

import { motion } from 'framer-motion';

interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const useCases: UseCase[] = [
  {
    title: 'Identifying Skills & Optimizing Tasks',
    description: 'We use job and task analysis to understand critical skills and identify where AI can add the most value to performing tasks across your organization.',
    icon: (
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: 'Enhancing Recruitment Processes',
    description: 'We specialize in talent acquisition best practices and can help Integrate conversational AI to streamline recruitment and improve candidate experience— saving recruiters\' and hiring managers\' time.',
    icon: (
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
        <path d="M17 18a2 2 0 0 1 2 2v2H5v-2a2 2 0 0 1 2-2h10Z" />
        <path d="M12 2v8" />
        <path d="m9 7 3 3 3-3" />
        <rect width="14" height="4" x="5" y="14" rx="1" />
      </svg>
    )
  },
  {
    title: 'Designing Assessments and Surveys',
    description: 'We are trained in advanced research methods and psychometrics and are equipped to automate high-volume survey programs to gather attitudinal and behavioral data at scale.',
    icon: (
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
        <path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3" />
        <path d="M12 3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Z" />
        <path d="M16 3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Z" />
        <path d="M5 8h14" />
        <path d="M6 13h12" />
        <path d="M12 18h6" />
      </svg>
    )
  },
  {
    title: 'Developing Interview & Performance Tools',
    description: 'We create smarter interview guides, scoring rubrics, and performance metrics and use AI skills and agents to help automate and streamline the process for your team.',
    icon: (
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
        <path d="M2 12h10" />
        <path d="M9 4v16" />
        <path d="m3 9 3 3-3 3" />
        <path d="M12 6h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4" />
      </svg>
    )
  },
  {
    title: 'Creating an Upskilling & Reskilling Strategy',
    description: 'We have conducted several studies on the changing skill requirements due to AI adoption and integration. We can assist with designing AI upskilling programs that prepare your workforce for the future.',
    icon: (
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
        <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
        <path d="M12 13v8" />
        <path d="M12 3v3" />
      </svg>
    )
  },
  {
    title: 'Coordinating and Implementing Workforce Planning',
    description: 'We help you understand and measure the impacts of AI adoption on your workforce and use AI to improve scheduling, forecasting, and in-office coordination.',
    icon: (
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
        <path d="M16.5 9.4 7.5 4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96 12 12.01l8.73-5.05" />
        <path d="M12 22.08V12" />
      </svg>
    )
  }
];

const UseCaseCard: React.FC<UseCase & { index: number }> = ({ title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
  >
    <div className="flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

export const UseCasesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Explore the Power of AI in HR: Key Use Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are just a few examples of the HR problems we have solved and how we can integrate AI:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}; 