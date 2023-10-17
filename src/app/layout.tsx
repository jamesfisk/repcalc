import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RPE Calculator',
  description: 'RPE Calculator for weightlifting and powerlifting. Estimate RPE in kilos or pounds for your next bench, squat, deadlift, snatch or clean and jerk lift.',
  manifest: "/manifest.json",
  themeColor: "#000"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
