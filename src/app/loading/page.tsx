"use client"
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState<number | undefined>(undefined);
  const [isKg, setIsKg] = useState<boolean>(true);

    const updateWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number.parseInt(e.target.value))){
            setWeight(undefined)
        }
        else {
            setWeight(Number.parseInt(e.target.value))
        }
    }
    return (
      <div className="w-full min-h-screen">
        <nav className='w-full flex flex-row justify-between absolute'>
          <h1 className='p-8 text-xl font-bold'>Barbell Loading Guide</h1>
         <Link href="/" className="p-8 text-gray-700 dark:text-gray-300 text-sm font-bold">Back</Link>
        </nav>
        <main className="min-h-screen">
          <div data-testid="load" className="w-full flex flex-col justify-center md:flex-row md:justify-around align-top pt-24 sm:pt-36 px-6 md:px-0">
                <label htmlFor="weight" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" >
                    Loading Weight
                </label>
                <input id="weight" type="number" inputMode="numeric" pattern="[0-9]*" value={weight || ''} onChange={updateWeight} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
          </div>
        </main>
      </div>
    )
  }
  