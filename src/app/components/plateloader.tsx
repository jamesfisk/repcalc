"use client"
import { useState } from "react";
import Button from "@mui/material/Button";
import BarbellDiagram, { BarbellDiagramProps } from "./barbelldiagram";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { KG_TO_LBS, LBS_TO_KG, roundedTwoPlaces } from "./consts";


let defaultPlates: BarbellDiagramProps = {
    fiftyfives: 0,
    fortyfives: 0,
    thirtyfives: 0,
    twentyfives: 0,
    twenties: 0,
    fifteens: 0,
    tens: 0,
    fives: 0,
    twopointfives: 0,
    onepointtwofives: 0,
    leftover: 0,
    collar: false,
    isKg: false
}

export default function PlateLoader() {
    const [plates, setPlates] = useState<BarbellDiagramProps>(defaultPlates);
    const [weight, setWeight] = useState<number>(plates.isKg ? 20 : 45);

    const addPlate = (key: keyof BarbellDiagramProps, weight: number) => {
        if (key in plates && typeof plates[key] === 'number' && (plates[key] as number) < 6) {
            setPlates({
                ...plates,
                [key]: (plates[key] as number) + 1
            });
            setWeight((prev) => prev + 2 * weight);
        }
    }
    const removePlate = (key: keyof BarbellDiagramProps, weight: number) => {
        if (key in plates && typeof plates[key] === 'number' && (plates[key] as number) > 0) {
            setPlates({
                ...plates,
                [key]: (plates[key] as number) - 1
            });
            setWeight((prev) => prev - 2 * weight);
        }
    }
    const plateButton = (key: keyof BarbellDiagramProps, name: string, val: number, unit: 'lbs' | 'kg') => {
        return (
            <div className="flex flex-row justify-between w-full pt-2">
                <div className="pt-2 font-bold flex flex-row justify-between pr-1">
                    <div className={"text-slate-500 w-4"}>{typeof plates[key] === 'number' && (plates[key] as number) > 0 ? `${plates[key]} ` : ''}</div>
                    <div className={'text-slate-900'}>{name}</div>
                </div>
                <ButtonGroup variant="contained" aria-label="45s">
                    <Button onClick={() => removePlate(key, val)}><div className="font-bold text-slate-500 text-xl">–</div></Button>
                    <Button onClick={() => addPlate(key, val)}><div className="font-bold text-slate-500 text-xl">+</div></Button>
                </ButtonGroup>
            </div>);
    }
    const addCollar = () => {
        if (!plates.collar) {
            setPlates({
                ...plates,
                collar: true
            });
            setWeight((prev) => prev + 2 * 2.5);
        }
    }
    const removeCollar = () => {
        if (plates.collar) {
            setPlates({
                ...plates,
                collar: false
            });
            setWeight((prev) => prev - 2 * 2.5);
        }
    }
    const collarButton = () => {
        return (
            <div className="flex flex-row justify-between w-full pt-2">
                <div className="pt-2 font-bold flex flex-row justify-between pr-1">
                    <div className={"text-slate-500 w-4 m-auto"}>{plates.collar ? '1' : ''}</div>
                    <div className={'text-slate-900 text-sm m-auto'}>Collar</div>
                </div>
                <ButtonGroup variant="contained" aria-label="45s">
                    <Button onClick={() => removeCollar()}><div className="font-bold text-slate-500 text-l m-auto">👎</div></Button>
                    <Button onClick={() => addCollar()}><div className="font-bold text-slate-500 text-l m-auto">👍</div></Button>
                </ButtonGroup>
            </div>);
    }
    const lbsButtons = () => {
        return (
            <div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-1/2 pr-2">
                        {plateButton('fiftyfives', '55s', 55, 'lbs')}
                        {plateButton('fortyfives', '45s', 45, 'lbs')}
                        {plateButton('thirtyfives', '35s', 35, 'lbs')}
                        {plateButton('twentyfives', '25s', 25, 'lbs')}
                    </div>
                    <div className="flex flex-col w-1/2 pl-2">
                        {plateButton('tens', '10s', 10, 'lbs')}
                        {plateButton('fives', '5s', 5, 'lbs')}
                        {plateButton('twopointfives', '2.5s', 2.5, 'lbs')}
                        {plateButton('onepointtwofives', '1.25s', 1.25, 'lbs')}
                    </div>
                </div>
            </div>
        )
    }
    const kgsButtons = () => {
        return (
            <div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-1/2 pr-2">
                        {plateButton('twentyfives', '25s', 25, 'kg')}
                        {plateButton('twenties', '20s', 20, 'kg')}
                        {plateButton('fifteens', '15s', 15, 'kg')}
                        {plateButton('tens', '10s', 10, 'kg')}
                    </div>
                    <div className="flex flex-col w-1/2 pl-2">
                        {plateButton('fives', '5s', 5, 'kg')}
                        {plateButton('twopointfives', '2.5s', 2.5, 'kg')}
                        {plateButton('onepointtwofives', '1.25s', 1.25, 'kg')}
                        {collarButton()}
                    </div>
                </div>
            </div>
        )
    }
    const reset = (isKg: boolean) => {
        setPlates({ ...defaultPlates, isKg: isKg });
        setWeight(isKg ? 20 : 45);
    }
    const handleRadioKgClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value == "kgs") {
            reset(true)
        } else {
            setPlates({ ...plates, isKg: false })
            reset(false)
        }
    };
    const renderKgRadio = () => {
        return (
            <Typography
                sx={{ pr: 2, marginTop: 'auto', marginBottom: 'auto', minWidth: '120px' }}
                id="lbs"
                component="div"
            >
                <FormControl>
                    <RadioGroup
                        row={true}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <div className="flex flex-row">
                            <FormControlLabel value="lbs" control={<Radio checked={!plates.isKg} onChange={handleRadioKgClick} value={"lbs"} />} label="lbs" />
                            <FormControlLabel value="kg" control={<Radio checked={plates.isKg} onChange={handleRadioKgClick} value={"kgs"} />} label="kg" />
                        </div>
                    </RadioGroup>
                </FormControl>
            </Typography>
        )
    }

    const renderWeight = () => {
        return plates.isKg ? `${weight} kg (${roundedTwoPlaces(weight * KG_TO_LBS)} lbs)` : `${weight} lbs (${roundedTwoPlaces(weight * LBS_TO_KG)} kg)`
    }


    return (
        <div className="w-full flex flex-col md:flex-row md:justify-center items-center">
            <div>
                <Card sx={{ minWidth: 350 }}>
                    <CardContent>
                        <div className="flex flex-row justify-between pb-3">
                            {renderKgRadio()}
                            <Button variant="contained" onClick={() => reset(plates.isKg)}><span className="text-slate-900">Reset</span></Button>
                        </div>
                        {plates.isKg ? kgsButtons() : lbsButtons()}
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 350, marginTop: 4 }}>
                    <CardContent>
                        <div className="pt-2 flex flex-row justify-between">
                            <div>Weight:</div>
                            <div>{renderWeight()}</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="w-full md:w-1/2 flex flex-row justify-center align-top pt-4 px-6">
                <BarbellDiagram {...plates} />
            </div>
        </div>
    )
}