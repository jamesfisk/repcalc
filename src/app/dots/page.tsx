import Link from "next/link";
import { Metadata } from "next";
import DOTSCalculator from "../components/dotscalculator";

export const metadata: Metadata = {
  title: 'DOTS Score',
  description: 'Calculate DOTS score for powerlifting based on bodyweight, gender and weight lifted.',
  manifest: "/manifest.json",
  themeColor: "#000"
}

export default function Home() {
    return (
      <div className="w-full min-h-screen">
        <nav className='w-full flex flex-row justify-between absolute'>
          <h1 className='p-8 text-xl font-bold'>DOTS Score Calculator</h1>
          <Link href="/" className="p-8 text-gray-700 dark:text-gray-300 text-sm font-bold">Back</Link>
        </nav>
        <main className="min-h-screen">
          <DOTSCalculator />
        </main>
      </div>
    )
  }
  