import Link from "next/link";
import { Metadata } from "next";
import BarbellCalculator from "../components/barbellcalculator";
import NavMenu from "../components/navmenu";
import { allPages } from "../util/helper";

export const metadata: Metadata = {
  title: 'Barbell Loading Guide',
  description: 'How to load plates on a barbell for a given amount of kilograms or pounds.',
  manifest: "/manifest.json",
  themeColor: "#000"
}

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <nav className='w-full flex flex-row justify-between absolute'>
        <div className='flex flex-col'>
          <h1 className='px-8 pt-6 pb-4 text-xl font-bold'>Barbell Loading Guide</h1>
          <div className='px-8 -mt-4 text-sm'>Display a barbell plate diagram for a given load</div>
        </div>
        <div className='flex flex-col justify-center'>
          <NavMenu items={allPages.filter((page) => page.id !== "loading")} />
        </div>
      </nav>
      <main className="min-h-screen pt-8 pb-24">
        <BarbellCalculator />
      </main>
    </div>
  )
}
