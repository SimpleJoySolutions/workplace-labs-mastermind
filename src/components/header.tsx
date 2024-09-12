import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-24 flex items-center border-b border-solid border-border">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Image src="/images/logo-icon.webp" alt="AI Mastermind" width={80} height={80} className="max-h-12 w-auto" />
        <span className="sr-only">AI Mastermind</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/" className="text-md font-medium hover:underline underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="/faq" className="text-md font-medium hover:underline underline-offset-4" prefetch={false}>FAQ</Link>
        <Link href="/about-us" className="text-md font-medium hover:underline underline-offset-4" prefetch={false}>
          About Us
        </Link>
      </nav>
    </header>
  );
};
