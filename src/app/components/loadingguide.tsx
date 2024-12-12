import { useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SxProps, styled } from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import BarbellDiagram, { BarbellDiagramProps } from "./barbelldiagram";
import { rounded } from "./consts";

export interface LoadingGuideProps {
    onerm: number;
    weight: number,
    iskg: boolean,
    showKgToggle: boolean,
    forceStackUi: boolean
}

const getKgLoads = (weight: number, useCollars: boolean): BarbellDiagramProps => {
    // Bar
    weight -= 20

    if (useCollars) {
        weight -= 5
    }

    let loads: BarbellDiagramProps = {
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
        collar: useCollars,
        isKg: true
    }
    loads.twentyfives = Math.floor(weight / 50)
    weight -= loads.twentyfives * 50
    loads.twenties = Math.floor(weight / 40)
    weight -= loads.twenties * 40
    loads.fifteens = Math.floor(weight / 30)
    weight -= loads.fifteens * 30
    loads.tens = Math.floor(weight / 20)
    weight -= loads.tens * 20
    loads.fives = Math.floor(weight / 10)
    weight -= loads.fives * 10
    loads.twopointfives = Math.floor(weight / 5)
    weight -= loads.twopointfives * 5
    loads.onepointtwofives = Math.floor(weight / 2.5)
    weight -= loads.onepointtwofives * 2.5
    loads.leftover = weight

    return loads
}

const getLbsLoads = (weight: number): BarbellDiagramProps => {
    // Bar
    weight -= 45

    let loads: BarbellDiagramProps = {
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
    loads.fortyfives = Math.floor(weight / 90)
    weight -= loads.fortyfives * 90
    loads.thirtyfives = Math.floor(weight / 70)
    weight -= loads.thirtyfives * 70
    loads.twentyfives = Math.floor(weight / 50)
    weight -= loads.twentyfives * 50
    loads.tens = Math.floor(weight / 20)
    weight -= loads.tens * 20
    loads.fives = Math.floor(weight / 10)
    weight -= loads.fives * 10
    loads.twopointfives = Math.floor(weight / 5)
    weight -= loads.twopointfives * 5
    loads.onepointtwofives = Math.floor(weight / 2.5)
    weight -= loads.onepointtwofives * 2.5
    loads.leftover = weight

    return loads
}

function LoadingGuide(props: LoadingGuideProps) {
    const [iskg, togglekg] = useState(props.iskg)
    const [useCollars, setCollars] = useState(false)
    const load: any = iskg ? getKgLoads(props.weight, useCollars) : getLbsLoads(props.weight);
    const baseStyles: SxProps = {
        paddingTop: '16px',
        paddingBottom: '16px',
        minWidth: '25px'
    }
    const redstyles: SxProps = (iskg && load.twentyfives > 0) || (!iskg && load.fives > 0) ? {
        ...baseStyles,
        backgroundColor: '#d30000',
        color: 'white',
        borderRadius: '0 0 0 4px'
    } : baseStyles;
    const bluestyles: SxProps = (iskg && load.twenties > 0) || (!iskg && load.fortyfives > 0) ? {
        ...baseStyles,
        backgroundColor: '#000de7',
        color: 'white',
    } : baseStyles;
    const yellowstyles: SxProps = (iskg && load.fifteens > 0) || (!iskg && load.thirtyfives > 0) ? {
        ...baseStyles,
        backgroundColor: '#f9dd00',
        color: 'black'
    } : baseStyles;
    const greenstyles: SxProps = (iskg && load.tens > 0) || (!iskg && load.twentyfives > 0) ? {
        ...baseStyles,
        backgroundColor: '#009300',
        opacity: '80%',
        color: 'white'
    } : baseStyles;
    const whitestyles: SxProps = (iskg && load.fives > 0) || (!iskg && load.tens > 0) ? {
        ...baseStyles,
        backgroundColor: '#e6e0e0'
    } : baseStyles;
    const blackstyles: SxProps = load.twopointfives > 0 ? {
        ...baseStyles,
        backgroundColor: 'black',
        opacity: '80%',
        color: 'white'
    } : baseStyles;
    const silverstyles: SxProps = load.onepointtwofives > 0 ? {
        ...baseStyles,
        backgroundColor: '#b4baba',
        opacity: '80%',
        color: 'white',
        borderRadius: '0 0 4px 0'
    } : baseStyles;
    const KG_TO_LBS = 2.20462262185;
    const LBS_TO_KG = 0.45359237;

    const handleRadioKgClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value == "kgs") {
            togglekg(true)
        } else {
            togglekg(false)
        }
    };
    const renderKgRadio = () => {
        if (!props.showKgToggle) {
            return null
        }
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
                            <FormControlLabel value="lbs" control={<Radio checked={!iskg} onChange={handleRadioKgClick} value={"lbs"} />} label="lbs" />
                            <FormControlLabel value="kg" control={<Radio checked={iskg} onChange={handleRadioKgClick} value={"kgs"} />} label="kg" />
                        </div>
                    </RadioGroup>
                </FormControl>
            </Typography>
        )
    }

    const handleCollarsClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setCollars(true)
        } else {
            setCollars(false)
        }
    };
    const renderCollarsSelection = () => {
        if (!iskg) {
            return null
        }
        return (
            <Typography
                sx={{ margin: 'auto', minWidth: '150px' }}
                id="collars"
                component="div"
            >
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={useCollars} onChange={handleCollarsClick} />} label="2.5kg collars" />
                </FormGroup>
            </Typography>
        )
    }
    const barload = props.weight - load.leftover
    const loadtext = iskg ?
        `${barload}kg (${Math.round((barload * KG_TO_LBS) * 100) / 100}lbs)` :
        `${barload}lbs (${Math.round((barload * LBS_TO_KG) * 100) / 100}kg)`
    return (
        <div className="w-full md:w-1/2 flex flex-col items-center">
            {props.onerm >= 0 && (
                <div className="flex flex-row w-full justify-between">
                    <p className="text-center text-xl font-bold mt-auto">Target weight: {props.weight}</p>
                    <p className="text-center mt-auto">Est. 1RM {rounded(props.onerm)}</p>
                </div>
            )}
            <div className={`w-full pt-4 flex md:flex-row md:justify-around flex-col justify-center`}>
                <div className="py-6 md:py-3 w-full">
                    <Box sx={{ width: '100%' }}>
                        <Paper sx={{ width: '100%', mb: 2 }}>
                            <div className="flex flex-row justify-between h-28">
                                <Typography
                                    sx={{ flex: '1 1 100%', pl: 3, pt: 5, pb: 2, pr: 2 }}
                                    variant="h6"
                                    id="tableTitle"
                                    component="div"
                                >
                                    {loadtext}
                                </Typography>
                                <div className="flex flex-col py-2">
                                    {renderKgRadio()}
                                    {renderCollarsSelection()}
                                </div>
                            </div>
                            <TableContainer sx={{ width: '100%' }} >
                                <Table sx={{ width: '100%' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" sx={iskg ? redstyles : bluestyles} padding="none">{iskg ? '25s' : '45s'}</TableCell>
                                            <TableCell align="center" sx={iskg ? bluestyles : yellowstyles} padding="none">{iskg ? '20s' : '35s'}</TableCell>
                                            <TableCell align="center" sx={iskg ? yellowstyles : greenstyles} padding="none">{iskg ? '15s' : '25s'}</TableCell>
                                            <TableCell align="center" sx={iskg ? greenstyles : whitestyles} padding="none">10s</TableCell>
                                            <TableCell align="center" sx={iskg ? whitestyles : redstyles} padding="none">5s</TableCell>
                                            <TableCell align="center" sx={blackstyles} padding="none">2.5s</TableCell>
                                            <TableCell align="center" sx={silverstyles} padding="none">1.25s</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell align="center" sx={iskg ? redstyles : bluestyles} padding="none">{iskg ? load.twentyfives : load.fortyfives}</TableCell>
                                            <TableCell align="center" sx={iskg ? bluestyles : yellowstyles} padding="none">{iskg ? load.twenties : load.thirtyfives}</TableCell>
                                            <TableCell align="center" sx={iskg ? yellowstyles : greenstyles} padding="none">{iskg ? load.fifteens : load.twentyfives}</TableCell>
                                            <TableCell align="center" sx={iskg ? greenstyles : whitestyles} padding="none">{load.tens}</TableCell>
                                            <TableCell align="center" sx={iskg ? whitestyles : redstyles} padding="none">{load.fives}</TableCell>
                                            <TableCell align="center" sx={blackstyles} padding="none">{load.twopointfives}</TableCell>
                                            <TableCell align="center" sx={silverstyles} padding="none">{load.onepointtwofives}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Box>
                </div>
                <div>
                    <BarbellDiagram {...load} />
                </div>
            </div>
        </div>
    )
}

export default LoadingGuide