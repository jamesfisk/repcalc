'use client'
import React, { ChangeEvent, useState, useTransition } from "react";
import { rounded, rpe_lookup } from "./consts";
import Results from "./results";

export default function Calculator() {
    const [weight, setWeight] = useState<number | undefined>(undefined);
    const [reps, setReps] = useState(1)
    const [rpe, setRpe] = useState(6)
    const [onerm, setOneRm] = useState<number | undefined>(undefined)

    const updateWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number.parseInt(e.target.value))){
            setWeight(undefined)
        }
        else {
            setWeight(Number.parseInt(e.target.value))
        }
    }

    const updateRpe = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRpe(Number.parseInt(e.target.value))
    }
    const updateReps = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setReps(Number.parseInt(e.target.value))
    }

    const renderRepsSelections = () => {
        let selections = []
        for(let i = 1; i < 13; i++) {
            selections.push(
                <option value={i} key={i}>{i}</option>
            )
        }
        return selections
    }

    const renderRpeSelections = () => {
        let selections = []
        for(let i = 6; i < 10.5; i = i + 0.5) {
            selections.push(
                <option value={i} key={i}>{i}</option>
            )
        }
        return selections
    }

    const doCalculate = () => {
        if (weight === undefined){
            return
        }
        setOneRm((prev) => {
            return weight / rpe_lookup[reps][rpe] *  100
        });
    }

    const buttonClasses = weight === undefined
        ? "bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50 dark:opacity-70 cursor-not-allowed"
        : "bg-blue-700 text-white font-bold py-2 px-4 rounded"
    const buttonAlt = weight === undefined
        ? "Please enter your last set's weight"
        : "Compute your 1RM"
    
    return(
        <div data-testid="calc" className="w-full flex flex-col justify-center md:flex-row md:justify-around align-top pt-24 sm:pt-36 px-6 md:px-0">
            <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="weight" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" >
                    Current Weight
                </label>
                <input id="weight" type="number" inputMode="numeric" pattern="[0-9]*" value={weight || ''} onChange={updateWeight} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor="reps" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" >
                            Current Reps
                        </label>
                        <select id="reps" onChange={updateReps} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            {renderRepsSelections()}
                        </select>
                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor="rpe" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" >
                            Current RPE
                        </label>
                        <select id="rpe" onChange={updateRpe} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            {renderRpeSelections()}
                        </select>
                    </div>
                </div>

                <button onClick={doCalculate} className={buttonClasses} title={buttonAlt}>Calculate</button>
            </div>
            {onerm && <Results onerm={onerm} reps={reps} rpe={rpe} />}
        </div>
    )
}
