import Calculator from './components/calculator'
import { Metadata } from 'next'
import NavMenu from './components/navmenu'
import { allPages } from './util/helper'

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
        <NavMenu items={allPages.filter((page) => page.id !== "rpe")}/>
      </nav>
      <main className="min-h-screen pb-24">
        <Calculator/>
      </main>
    </div>
  )
}
