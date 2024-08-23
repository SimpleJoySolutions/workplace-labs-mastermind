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
  title: "AI For HR Mastermind",
  description: "AI For HR Mastermind is an introductory program for HR and People leaders to demystify Gen AI, spot use cases aligned with business goals, and turn their teams into the go-to company experts on AI.",
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