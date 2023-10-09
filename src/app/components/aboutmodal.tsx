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
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <div className="p-8">
        <Button className='' onClick={handleOpen}>About</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 700 }}>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            </Box>
        </Modal>
    </div>
  )
}
