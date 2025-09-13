import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'AverixAI - Voice AI Platform | Fortune 500 Voice Intelligence',
  description: 'Transform your business with cutting-edge voice AI technology. Trusted by Fortune 500 companies for scalable, secure, and intelligent voice solutions.',
  keywords: 'voice AI, Fortune 500 AI, voice intelligence, AI agents, automation, voice technology',
  authors: [{ name: 'AverixAI' }],
  robots: 'index, follow',
  openGraph: {
    title: 'AverixAI - The Future of Voice Intelligence',
    description: 'Advanced voice AI that transforms how Fortune 500 companies connect with their customers.',
    type: 'website',
    siteName: 'AverixAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AverixAI - Voice AI Platform',
    description: 'The future of voice intelligence for modern businesses.',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
