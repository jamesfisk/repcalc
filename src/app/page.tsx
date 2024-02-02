import Link from 'next/link'
import About from './components/aboutmodal'
import Calculator from './components/calculator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RPE Calculator',
  description: 'RPE Calculator for weightlifting and powerlifting. Estimate RPE in kilos or pounds for your next bench, squat, deadlift, snatch or clean and jerk lift.',
  manifest: "/manifest.json",
  themeColor: "#000"
}

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <nav className='w-full flex flex-row justify-between absolute'>
        <h1 className='p-8 text-xl font-bold'>RPE Calculator</h1>
        <div className="flex flex-row justify-center">
          <Link className='text-gray-700 dark:text-gray-300 text-sm font-bold m-auto' href="/loading">Loading Chart</Link>
          <About/>
        </div>
      </nav>
      <main className="min-h-screen">
        <Calculator/>
      </main>
    </div>
  )
}
