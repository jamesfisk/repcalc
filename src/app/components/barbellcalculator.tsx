"use client"
import { useState, useRef } from "react";
import LoadingGuide from "./loadingguide";
import Button from "@mui/material/Button";


export default function BarbellCalculator() {
    const [weight, setWeight] = useState<number | undefined>(undefined);
    const inputWeightRef = useRef<number | undefined>(undefined);

    const updateInputWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number.parseFloat(e.target.value))){
            inputWeightRef.current = undefined
        }
        else {
            inputWeightRef.current = Number.parseFloat(e.target.value)
        }
    }
    const submitWeight = (e: React.SyntheticEvent) => {
      e.preventDefault()
      setWeight(inputWeightRef.current);
    }
    const renderLoadingGuide = () => {
      if (!weight) {
        return null
      }
      return ( 
        <div className="max-w-screen-md m-auto px-2">
          <LoadingGuide weight={weight} iskg={true} showKgToggle={true} forceStackUi={false}/>
        </div>
      );
    }

    return (
        <div>
            <form onSubmit={submitWeight}>
                <div className="flex flex-row justify-center align-top pt-24 sm:pt-36 px-6 max-w-screen-md m-auto">
                    <div data-testid="load" className="w-full flex flex-col justify-center max-w-sm">
                        <label htmlFor="weight" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" >
                            Loading Weight
                        </label>
                        <input id="weight" type="number" inputMode="numeric" pattern="[0-9]*" onChange={updateInputWeight} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                    </div>
                    <div className="flex flex-row justify-center pl-3 mt-auto mb-auto text-xl pt-4">
                        <Button type="submit" variant="outlined" size={"large"}>Compute</Button>
                    </div>
                </div>
            </form>
            { renderLoadingGuide() }
        </div>
    )
}