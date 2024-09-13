import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Script from 'next/script'

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
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-DHSXQX35HP`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DHSXQX35HP');
            `,
          }}
        />
      </head>
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