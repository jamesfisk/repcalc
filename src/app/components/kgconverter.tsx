'use client'

import { useState } from "react";
import { KG_TO_LBS, LBS_TO_KG, roundedTwoPlaces } from "./consts";

export default function KgConverter() {
    const [kilograms, setKilograms] = useState<number | undefined>();
    const updateKilograms = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number.parseFloat(e.target.value))) {
            setKilograms(undefined)
            setPounds(undefined)
        }
        else {
            const kilos = Number.parseFloat(e.target.value)
            setKilograms(roundedTwoPlaces(kilos))
            setPounds(roundedTwoPlaces(kilos * KG_TO_LBS))
        }
    }
    const [pounds, setPounds] = useState<number | undefined>();
    const updatePounds = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number.parseFloat(e.target.value))) {
            setPounds(undefined)
            setKilograms(undefined)
        }
        else {
            const pounds = Number.parseFloat(e.target.value)
            setPounds(roundedTwoPlaces(pounds))
            setKilograms(roundedTwoPlaces(pounds * LBS_TO_KG))
        }
    }
    return (
        <div data-testid="converter" className="w-full flex flex-col justify-center md:flex-row md:justify-around align-top pt-24 sm:pt-36 px-6 md:px-0">
            <div className="flex flex-col justify-center md:flex-row md:justify-between w-full md:w-1/3">

                <div className="flex flex-col">
                    <label htmlFor="kilograms" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" >
                        Kilograms
                    </label>
                    <input id="kilograms" type="number" inputMode="decimal" pattern="[0-9]+([,\.][0-9]+)?" value={kilograms || ''} onChange={updateKilograms} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>

                </div>

                <div className="flex flex-col">
                    <label htmlFor="pounds" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" >
                        Pounds
                    </label>
                    <input id="pounds" type="number" inputMode="decimal" pattern="[0-9]+([,\.][0-9]+)?" value={pounds || ''} onChange={updatePounds} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>

                </div>
            </div>

        </div>

    )
}