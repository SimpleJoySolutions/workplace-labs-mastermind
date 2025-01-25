import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-24 flex items-center border-b border-solid border-border bg-gray-50">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Image 
          src="/images/ai-for-hr-logo.webp" 
          alt="AI Mastermind" 
          width={100} 
          height={100} 
          className="max-h-20 w-auto border border-gray-200 rounded-sm transition-transform duration-300 hover:scale-105" 
        />
        <span className="sr-only">AI Mastermind</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/" className="text-md font-medium hover:underline underline-offset-4 flex items-center" prefetch={false}>
          Home
        </Link>
        <Link href="/faq" className="text-md font-medium hover:underline underline-offset-4 flex items-center" prefetch={false}>FAQ</Link>
        <Link href="/about-us" className="text-md font-medium hover:underline underline-offset-4 flex items-center" prefetch={false}>
          Instructors
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeysTaenp0vmB4qtWRXItMwY-m1_pmTrmalKPWZjt6P5ymUTw/viewform?usp=sf_link"
          className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Apply Now
        </Link>
      </nav>
    </header>
  );
};
