import React from 'react'
import type { Metadata } from 'next'
import { PT_Sans, PT_Sans_Narrow } from 'next/font/google'
import './globals.css'

const ptSans = PT_Sans({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans',
})

const ptSansNarrow = PT_Sans_Narrow({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans-narrow',
})

export const metadata: Metadata = {
  title: 'ONCE — Introducing ONCE',
  description: 'Once upon a time you owned what you paid for, you controlled what you depended on, and your privacy and security were your own business. We think it\'s that time again.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} ${ptSansNarrow.variable} font-sans antialiased bg-white text-black min-h-screen`}>
        <div className="max-w-3xl mx-auto px-4 pt-48 pb-16 relative">
          <div className="absolute top-12 right-0">
            <img
              src="/logo.png"
              alt="The Business of You"
              width={100}
              height={100}
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}