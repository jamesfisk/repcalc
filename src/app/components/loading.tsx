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
import Switch from "@mui/material/Switch";

export interface LoadingGuideProps {
    weight: number,
    iskg: boolean
}

const getKgLoads = (weight: number) => {
    // Bar
    weight -= 20

    let loads = {
        twentyfives: 0,
        twenties: 0,
        fifteens: 0,
        tens: 0,
        fives: 0,
        twopointfives: 0,
        onepointtwofives: 0 
    }
    loads.twentyfives = Math.floor(weight / 50)
    weight -= loads.twentyfives * 50
    loads.twenties =  Math.floor(weight / 40)
    weight -= loads.twenties * 40
    loads.fifteens =  Math.floor(weight / 30)
    weight -= loads.fifteens * 30
    loads.tens =  Math.floor(weight / 20)
    weight -= loads.tens * 20
    loads.fives =  Math.floor(weight / 10)
    weight -= loads.fives * 10
    loads.twopointfives =  Math.floor(weight / 5)
    weight -= loads.twopointfives * 5
    loads.onepointtwofives =  Math.floor(weight / 2.5)
    weight -= loads.onepointtwofives * 2.5

    return loads
}

const getLbsLoads = (weight: number) => {
    // Bar
    weight -= 45

    let loads = {
        fortyfives: 0,
        thirtyfives: 0,
        twentyfives: 0,
        tens: 0,
        fives: 0,
        twopointfives: 0,
        onepointtwofives: 0 
    }
    loads.fortyfives = Math.floor(weight / 90)
    weight -= loads.fortyfives * 90
    loads.thirtyfives =  Math.floor(weight / 70)
    weight -= loads.thirtyfives * 70
    loads.twentyfives =  Math.floor(weight / 50)
    weight -= loads.twentyfives * 50
    loads.tens =  Math.floor(weight / 20)
    weight -= loads.tens * 20
    loads.fives =  Math.floor(weight / 10)
    weight -= loads.fives * 10
    loads.twopointfives =  Math.floor(weight / 5)
    weight -= loads.twopointfives * 5
    loads.onepointtwofives =  Math.floor(weight / 2.5)
    weight -= loads.onepointtwofives * 2.5

    return loads
}
  
function LoadingGuide(props: LoadingGuideProps) {
    const [iskg, togglekg] = useState(props.iskg)
    const load: any = iskg ? getKgLoads(props.weight) : getLbsLoads(props.weight);
    const baseStyles: SxProps = {
        paddingTop: '16px',
        paddingBottom: '16px',
        minWidth: '25px'
    }
    const redstyles: SxProps = (iskg && load.twentyfives > 0) || (!iskg && load.fortyfives > 0) ? {
        ...baseStyles,
        backgroundColor: '#d30000',
        color: 'white'
    } : baseStyles;
    const bluestyles: SxProps = (iskg && load.twenties > 0) || (!iskg && load.thirtyfives > 0) ? {
        ...baseStyles,
        backgroundColor: '#000de7',
        color: 'white'
    } : baseStyles;
    const yellowstyles: SxProps = (iskg && load.fifteens > 0) || (!iskg && load.twentyfives > 0) ? {
        ...baseStyles,
        backgroundColor: '#f9dd00',
        color: 'black'
    } : baseStyles;
    const greenstyles: SxProps = load.tens > 0 ? {
        ...baseStyles,
        backgroundColor: '#009300',
        opacity: '80%',
        color: 'white'
    } : baseStyles;
    const whitestyles: SxProps = load.fives > 0 ? {
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
        color: 'white'
    } : baseStyles;
    const KG_TO_LBS = 2.20462262185;
    const LBS_TO_KG = 0.45359237;
    const switchkg = () =>{
        togglekg((prev) => !prev)
    }
    const loadtext = iskg ?
        `${props.weight}kg (${Math.round((props.weight * KG_TO_LBS) * 100)/100}lbs)` :
        `${props.weight}lbs (${Math.round((props.weight * LBS_TO_KG) * 100)/100}kg)`
    return(
        <div className="w-full flex flex-col justify-center">
            <div className="py-6 md:py-3 w-full">
                <Box sx={{ width: '100%' }}>
                    <Paper sx={{ width: '100%', mb: 2 }}>
                        <div className="flex flex-row justify-between">
                            <Typography
                                sx={{ flex: '1 1 100%', pl:2, pt:2, pb:2 }}
                                variant="h6"
                                id="tableTitle"
                                component="div"
                                    >
                                    {loadtext}
                            </Typography>
                            <Typography
                                sx={{ pr:2, margin:'auto', minWidth: '120px'}}
                                id="lbs"
                                component="div"
                                    >
                                    lbs
                                    <Switch
                                        checked={iskg}
                                        onChange={switchkg}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                    kg
                            </Typography>
                        </div>
                        <TableContainer sx={{ width: '100%' }} >
                            <Table sx={{ width: '100%' }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center" sx={redstyles} padding="none">{iskg ? '25s' : '45s'}</TableCell>
                                    <TableCell align="center" sx={bluestyles} padding="none">{iskg ? '20s' : '35s'}</TableCell>
                                    <TableCell align="center" sx={yellowstyles} padding="none">{iskg ? '15s' : '25s'}</TableCell>
                                    <TableCell align="center" sx={greenstyles} padding="none">10s</TableCell>
                                    <TableCell align="center" sx={whitestyles} padding="none">5s</TableCell>
                                    <TableCell align="center" sx={blackstyles} padding="none">2.5s</TableCell>
                                    <TableCell align="center" sx={silverstyles} padding="none">1.25s</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="center" sx={redstyles} padding="none">{iskg ? load.twentyfives : load.fortyfives}</TableCell>
                                        <TableCell align="center" sx={bluestyles} padding="none">{iskg ? load.twenties : load.thirtyfives}</TableCell>
                                        <TableCell align="center" sx={yellowstyles} padding="none">{iskg ? load.fifteens : load.twentyfives}</TableCell>
                                        <TableCell align="center" sx={greenstyles} padding="none">{load.tens}</TableCell>
                                        <TableCell align="center" sx={whitestyles} padding="none">{load.fives}</TableCell>
                                        <TableCell align="center" sx={blackstyles} padding="none">{load.twopointfives}</TableCell>
                                        <TableCell align="center" sx={silverstyles} padding="none">{load.onepointtwofives}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </div>
        </div>
    )
}

export default LoadingGuide