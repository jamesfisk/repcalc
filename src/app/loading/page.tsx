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
          <h1 className='p-8 text-xl font-bold'>Barbell Loading Guide</h1>
          <NavMenu items={allPages.filter((page) => page.id !== "loading")}/>
        </nav>
        <main className="min-h-screen">
           <BarbellCalculator/>
        </main>
      </div>
    )
  }
  