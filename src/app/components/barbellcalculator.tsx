"use client"
import { useState, useRef } from "react";
import LoadingGuide from "./loadingguide";
import Button from "@mui/material/Button";


export default function BarbellCalculator() {
    const [weight, setWeight] = useState<number | undefined>(undefined);
    const [inputWeight, setInputWeight] = useState<number | undefined>(undefined);

    const updateInputWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number.parseFloat(e.target.value))) {
            setInputWeight(undefined);
        }
        else {
            setInputWeight(Number.parseFloat(e.target.value));
        }
    }

    const submitWeight = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setWeight(inputWeight);
    }

    const renderLoadingGuide = () => {
        if (!weight) {
            return null;
        }
        return (
            <LoadingGuide weight={weight} iskg={true} showKgToggle={true} forceStackUi={false} onerm={-1} />
        );
    }

    return (
        <div className="w-full flex flex-col items-center">
            <form onSubmit={submitWeight} className="w-full md:w-1/3">
                <div className="w-full flex flex-row justify-center align-top pt-24 sm:pt-36 px-6 m-auto">
                    <div data-testid="load" className="w-full flex flex-col justify-center">
                        <label htmlFor="weight" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" >
                            Loading Weight
                        </label>
                        <div className="flex flex-row">
                            <input id="weight" step="any" type="number" inputMode="decimal" pattern="[0-9]+([,\.][0-9]+)?" onChange={updateInputWeight} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                            <div className="pl-3">
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    size={"large"}
                                    disabled={inputWeight === undefined}
                                    className="h-full"
                                >
                                    Compute
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {renderLoadingGuide()}
        </div>
    )
}