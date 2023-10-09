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

export interface LoadingGuideProps {
    weight: number,
    iskg: boolean
}

const getLoads = (weight: number) => {
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
    loads.twentyfives = Math.floor(weight / 50) * 2
    weight -= loads.twentyfives * 25
    loads.twenties =  Math.floor(weight / 40) * 2
    weight -= loads.twenties * 15
    loads.fifteens =  Math.floor(weight / 30) * 2
    weight -= loads.fifteens * 15
    loads.tens =  Math.floor(weight / 20) * 2
    weight -= loads.tens * 10
    loads.fives =  Math.floor(weight / 10) * 2
    weight -= loads.fives * 5
    loads.twopointfives =  Math.floor(weight / 5) * 2
    weight -= loads.twopointfives * 2.5
    loads.onepointtwofives =  Math.floor(weight / 2.5) * 2
    weight -= loads.onepointtwofives * 1.25

    return loads
}
  
function LoadingGuide(props: LoadingGuideProps) {
    const load = getLoads(props.weight)

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        },
    }));
    const redstyles: SxProps = load.twentyfives > 0 ? {
        backgroundColor: '#d30000',
        color: 'white'
    } : {};
    const bluestyles: SxProps = load.twenties > 0 ? {
        backgroundColor: '#000de7',
        color: 'white'
    } : {};
    const yellowstyles: SxProps = load.fifteens > 0 ? {
        backgroundColor: '#f9dd00',
        color: 'black'
    } : {};
    const greenstyles: SxProps = load.tens > 0 ? {
        backgroundColor: '#009300',
        opacity: '80%',
        color: 'white'
    } : {};
    const whitestyles: SxProps = load.fives > 0 ? {
        backgroundColor: '#e6e0e0'
    } : {};
    const blackstyles: SxProps = load.twopointfives > 0 ? {
        backgroundColor: 'black',
        opacity: '80%',
        color: 'white'
    } : {};
    const silverstyles: SxProps = load.onepointtwofives > 0 ? {
        backgroundColor: '#b4baba',
        opacity: '80%',
        color: 'white'
    } : {};
    return(
        <div className="w-full flex flex-row justify-center">
            <div className="py-3 w-full">
                <Box sx={{ width: '100%' }}>
                    <Paper sx={{ width: '100%', mb: 2 }}>
                        <Typography
                            sx={{ flex: '1 1 100%', pl:2, pt:2, pb:2 }}
                            variant="h6"
                            id="tableTitle"
                            component="div"
                                >
                                Loading guide (kg)
                        </Typography>
                        <TableContainer sx={{ width: '100%' }} >
                            <Table sx={{ width: '100%' }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center" sx={redstyles}>25s</TableCell>
                                    <TableCell align="center" sx={bluestyles}>20s</TableCell>
                                    <TableCell align="center" sx={yellowstyles}>15s</TableCell>
                                    <TableCell align="center" sx={greenstyles}>10s</TableCell>
                                    <TableCell align="center" sx={whitestyles}>5s</TableCell>
                                    <TableCell align="center" sx={blackstyles}>2.5s</TableCell>
                                    <TableCell align="center" sx={silverstyles}>1.25s</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="center" sx={redstyles}>{load.twentyfives}</TableCell>
                                    <TableCell align="center" sx={bluestyles}>{load.twenties}</TableCell>
                                    <TableCell align="center" sx={yellowstyles}>{load.fifteens}</TableCell>
                                    <TableCell align="center" sx={greenstyles}>{load.tens}</TableCell>
                                    <TableCell align="center" sx={whitestyles}>{load.fives}</TableCell>
                                    <TableCell align="center" sx={blackstyles}>{load.twopointfives}</TableCell>
                                    <TableCell align="center" sx={silverstyles}>{load.onepointtwofives}</TableCell>
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