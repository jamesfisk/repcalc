"use client"
import { useState, useRef } from "react";
import LoadingGuide from "./loadingguide";
import Button from "@mui/material/Button";
import BarbellDiagram, { BarbellDiagramProps } from "./barbelldiagram";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


let defaultPlates: BarbellDiagramProps = {
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
    const [weight, setWeight] = useState<number>(45);
    const [isKg, setIsKg] = useState<boolean>(false);
    const addPlate = (key: keyof BarbellDiagramProps, weight: number) => {
        if (key in plates && typeof plates[key] === 'number' && plates[key] < 5) {
            setPlates({
                ...plates,
                [key]: plates[key] + 1
            });
            setWeight((prev) => prev + 2 * weight);
        }
    }
    const removePlate = (key: keyof BarbellDiagramProps, weight: number) => {
        if (key in plates && typeof plates[key] === 'number' && plates[key] > 0) {
            setPlates({
                ...plates,
                [key]: plates[key] - 1
            });
            setWeight((prev) => prev - 2 * weight);
        }
    }
    const plateButton = (key: keyof BarbellDiagramProps, name: string, val: number, color: string) => {
        return (
            <div className="flex flex-row justify-between w-full pt-2">
                <div className="pt-2 font-bold text-slate-700">{typeof plates[key] === 'number' && plates[key] > 0 ? `${plates[key]} ` : ''}<span className={color}>{name}</span></div>
                <ButtonGroup variant="contained" aria-label="45s">
                    <Button onClick={() => removePlate(key, val)}><div className="font-bold text-slate-500 text-xl">–</div></Button>
                    <Button onClick={() => addPlate(key, val)}><div className="font-bold text-slate-500 text-xl">+</div></Button>
                </ButtonGroup>
            </div>);
    }
    const lbsButtons = () => {
        return (
            <div>
                {plateButton('fortyfives', '45s', 45, 'text-red-500')}
                {plateButton('thirtyfives', '35s', 35, 'text-red-500')}
                {plateButton('twentyfives', '25s', 25, 'text-red-500')}
                {plateButton('tens', '10s', 10, 'text-red-500')}
                {plateButton('fives', '5s', 5, 'text-red-500')}
                {plateButton('twopointfives', '2.5s', 2.5, 'text-red-500')}
                {plateButton('onepointtwofives', '1.25s', 1.25, 'text-red-500')}
            </div>
        )
    }
    const reset = () => {
        setPlates(defaultPlates);
        setWeight(45);
    }


    return (
        <div className="w-full flex flex-col items-center">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Button variant="contained" onClick={() => reset()}>Reset</Button>
                    {lbsButtons()}
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, marginTop: 5 }}>
                <CardContent>
                    <div className="pt-2">Weight: {weight}lbs</div>
                </CardContent>
            </Card>
            <div className="w-full flex flex-row justify-center align-top pt-6 px-6 m-auto">
                <BarbellDiagram {...plates} />
            </div>
        </div>
    )
}