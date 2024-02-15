import { Metadata } from "next";
import NavMenu from "../components/navmenu";
import { allPages } from "../util/helper";
import OneRmCalculator from "../components/onermcalculator";

export const metadata: Metadata = {
  title: '1RM Calculator',
  description: 'Calculate your one rep max.',
  manifest: "/manifest.json",
  themeColor: "#000"
}

export default function Home() {
    return (
      <div className="w-full min-h-screen">
        <nav className='w-full flex flex-row justify-between absolute'>
          <h1 className='p-8 text-xl font-bold'>1RM Calculator</h1>
          <NavMenu items={allPages.filter((page) => page.id !== "onerm")}/>
        </nav>
        <main className="min-h-screen">
            <OneRmCalculator />
        </main>
      </div>
    )
  }
  