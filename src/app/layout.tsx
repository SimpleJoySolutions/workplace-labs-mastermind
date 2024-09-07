import type { Metadata } from "next";
import { Manrope, Taviraj } from 'next/font/google'
import { cn } from '@/lib/utils'
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '400',
})
// const fontBody = Manrope({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-body',
// })
export const metadata: Metadata = {
  title: 'AI For HR Mastermind',
  description: 'Join our 4-week mastermind program to demystify Gen AI, spot HR use cases, and become your company\'s go-to AI expert. Transform your HR practices with AI.',
  openGraph: {
    title: 'AI For HR Mastermind',
    description: 'Become an AI-empowered HR leader in 4 weeks. Join our exclusive mastermind program.',
    images: [
      {
        url: '/images/man-working.png', // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: 'AI For HR Mastermind',
      },
    ],
    type: 'website',
    url: 'https://www.aiforhrmastermind.com', // Replace with your actual URL
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI For HR Mastermind',
    description: 'Transform your HR practices with AI. Join our 4-week mastermind program.',
    images: ['/images/man-working.png'], // Replace with your actual image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}