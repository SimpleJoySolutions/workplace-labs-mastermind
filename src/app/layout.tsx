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
  title: "Workplace Labs",
  description: "Workplace Labs is a group of AI experts and technologists that are helping companies to leverage the power of AI to improve their operations and products.",
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