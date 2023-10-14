'use client'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import React from 'react';
import { SxProps } from '@mui/material';

export default function About() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style: SxProps = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <div className="p-8">
        <Button className='text-gray-700 dark:text-gray-300 text-sm font-bold' onClick={handleOpen}>About</Button>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box className='w-full md:w-1/2 dark:bg-slate-800' sx={{ ...style }}>
                <div className="py-4 px-3 dark:text-gray-300">
                    <p>Welcome! This RPE calculator is designed to easily estimate the weight needed for your next set.</p>
                    <br/>
                    <p>Input the weight, reps and RPE of your last completed set, hit calculate, then view the estimated weight for your target RPE and reps.</p>
                    <br/>
                    <p>The loading guide below shows the plates needed on each side for the estimated load in kg or lbs. It assumes a 20kg/45lbs bar but does not assume any weight from collars.</p>
                    <br/>
                    <p>Have a good lift!</p>
                    <div className='pt-3 text-xs w-full text-center'>Made with 💪 by <a className='text-blue-500 dark:text-blue-300' href="https://github.com/jamesfisk" target="_blank">james</a></div>
                </div>
            </Box>
        </Modal>
    </div>
  )
}
