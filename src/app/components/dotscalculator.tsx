'use client'

import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from "@mui/material/FormLabel";


export default function DOTSCalculator() {
    var MALE_COEF = [-0.000001093, 0.0007391293, -0.1918759221 , 24.0900756, -307.75076];
    var FEMALE_COEF = [-0.0000010706, 0.0005158568, -0.1126655495, 13.6175032, -57.96288];
    const LBS_TO_KG = 0.45359237;
    const [bodyweight, setBodyweight] = useState<number | undefined>();
    const updateBodyweight = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number.parseFloat(e.target.value))){
            setBodyweight(undefined)
        }
        else {
            setBodyweight(Number.parseFloat(e.target.value))
        }
    }
    const [liftedweight, setLiftedweight] = useState<number | undefined>();
    const updateliftedweight = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number.parseFloat(e.target.value))){
            setLiftedweight(undefined)
        }
        else {
            setLiftedweight(Number.parseFloat(e.target.value))
        }
    }

    const [isMale, setIsMale] = useState<boolean>(true)
    const handleGenderClick =(event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value == "male") {
            setIsMale(true)
        } else {
            setIsMale(false)
        }
    };

    const [dotsScore, setDotsScore] = useState<number | undefined>();
    const doCalculate = () => {
        if (bodyweight === undefined || liftedweight === undefined){
            return
        }
        var bodyweightkg = iskg ? bodyweight : bodyweight * LBS_TO_KG
        var liftedweightkg = iskg ? liftedweight : liftedweight * LBS_TO_KG

        var res = liftedweightkg * 500
        var coefs = isMale ? MALE_COEF : FEMALE_COEF
        var pow = 4
        var denom = 0
        coefs.forEach(ce => {
            denom += (ce * bodyweightkg ** pow)
            pow -= 1
        });
        res /= denom
        res = Math.round(res * 100) / 100
        setDotsScore(res)
    }
    const [iskg, togglekg] = useState<boolean>(true)
    const handleRadioKgClick =(event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value == "kgs") {
            togglekg(true)
        } else {
            togglekg(false)
        }
    };

    const renderScore = () => {
        if (dotsScore === undefined){
            return
        }
        return <div className="py-4 text-xl">DOTS Score: {dotsScore}</div>
    }
    
    const buttonClasses = "bg-blue-700 text-white font-bold py-3 my-2 px-4 rounded"
    return(
        <div data-testid="calc" className="w-full flex flex-col justify-center md:flex-row md:justify-around align-top pt-24 sm:pt-36 px-6 md:px-0">
            <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="weight" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" >
                    Body Weight
                </label>
                <input id="bodyweight" type="number" inputMode="decimal" pattern="[0-9]+([,\.][0-9]+)?" value={bodyweight || ''} onChange={updateBodyweight} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                
                <label htmlFor="weight" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" >
                    Weight Lifted
                </label>
                <input id="liftedweight" type="number" inputMode="decimal" pattern="[0-9]+([,\.][0-9]+)?" value={liftedweight || ''} onChange={updateliftedweight} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                
                <div className="flex flex-row justify-between">
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row={true}
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            >
                            <div className="flex flex-row">
                                <FormControlLabel value="male" control={<Radio checked={isMale} onChange={handleGenderClick} />} label="Male" />
                                <FormControlLabel value="female" control={<Radio checked={!isMale} onChange={handleGenderClick} />} label="Female" />
                            </div>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Units</FormLabel>
                        <RadioGroup
                            row={true}
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            >
                            <div className="flex flex-row">
                                <FormControlLabel value="kg" control={<Radio checked={iskg} onChange={handleRadioKgClick} value={"kgs"} />} label="kg" />
                                <FormControlLabel value="lbs" control={<Radio checked={!iskg} onChange={handleRadioKgClick} value={"lbs"} />} label="lbs" />
                            </div>
                        </RadioGroup>
                    </FormControl>
                </div>
                <button onClick={doCalculate} className={buttonClasses} title={"Calculate DOTS Score"}>Calculate</button>
                {renderScore()}
            </div>
        </div>
    )
}