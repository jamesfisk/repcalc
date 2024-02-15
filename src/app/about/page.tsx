import { Metadata } from "next";
import NavMenu from "../components/navmenu";
import { allPages } from "../util/helper";

export const metadata: Metadata = {
  title: 'About',
  description: 'Online tools for weightlifters and powerlifters including RPE Calculator, DOTS Calculator, and barbell loading guide.',
  manifest: "/manifest.json",
  themeColor: "#000"
}

export default function Home() {
    return (
      <div className="w-full min-h-screen">
        <nav className='w-full flex flex-row justify-between absolute'>
          <h1 className='p-8 text-xl font-bold'>About</h1>
          <NavMenu items={allPages.filter((page) => page.id !== "about")}/>
        </nav>
        <main className="min-h-screen">
            <div className="pt-24 px-8 dark:text-gray-300 md:w-2/3 m-auto">
                <p>Welcome! This RPE calculator and is designed to easily estimate the weight needed for your next set.</p>
                <br/>
                <p>Input the weight, reps and RPE of your last completed set, hit calculate, then view the estimated weight for your target RPE and reps.</p>
                <br/>
                <p>The loading guide shows the plates needed on each side for the estimated load in kg or lbs. It assumes a 20kg/45lbs bar. You can view kg loading with or without 2.5kg collars.</p>
                <br/>
                <p>The DOTS score calculator uses the formula from <a className='text-blue-500 dark:text-blue-300'  target="_blank" href="https://www.powerlifting.sport/rules/codes/info/ipf-formula">IPF regulations</a>.</p>
                <br/>
                <p>1RM Calculator uses Wathan's formula.</p>
                <br/>
                <p>Have feedback? <a className='text-blue-500 dark:text-blue-300'  target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdZgCf4Tu6y-5SvOfZkanyqr0pQj8M9u7-RpRiWFUvL4piTQA/viewform?usp=sf_link">Help us improve</a>!</p>
                <br/>
                <p>Have a good lift 🏋️‍♂️</p>
                <div className='pt-3 text-xs w-full text-center'>Made with 💪 by <a className='text-blue-500 dark:text-blue-300' href="https://www.jamesfisk.io" target="_blank">james</a></div>
            </div>
        </main>
      </div>
    )
  }
  