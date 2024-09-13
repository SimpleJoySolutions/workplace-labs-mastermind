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
    description: 'Workplace Labs: AI for HR Mastermind: From Concept to Action Plan in 4 Weeks',
    images: [
      {
        url: 'https://www.aiforhrmastermind.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI For HR Mastermind',
      },
    ],
    type: 'website',
    url: 'https://www.aiforhrmastermind.com',
    siteName: 'AI For HR Mastermind',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI For HR Mastermind',
    description: 'WorkplaceLabs: AI for HR Mastermind: From Concept to Action Plan in 4 Weeks',
    images: ['https://www.aiforhrmastermind.com/images/og-image.png'],
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