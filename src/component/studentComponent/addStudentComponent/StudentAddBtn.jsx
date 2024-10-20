import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function StudentAddBtn() {

    const [open, setOpen] = useState(false);

    // Functions to open and close the dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* Button to open the dialog */}
            <Button
                variant="contained"
                sx={{ position: 'absolute', top: '24%', right: '2%' }}
                onClick={handleClickOpen}
            >
                ADD STUDENT +
            </Button>

            {/* Dialog component */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Student Details</DialogTitle>
                <DialogContent>
                    {/* Form Fields */}
                    <TextField margin="dense" id="student-id" label="Student ID" variant="filled" fullWidth />
                    <TextField margin="dense" id="name" label="Name" variant="filled" fullWidth />
                    <TextField margin="dense" id="age" label="Age" variant="filled" fullWidth />
                    <TextField margin="dense" id="address" label="Address" variant="filled" fullWidth />
                    <TextField margin="dense" id="class" label="Class" variant="filled" fullWidth />
                </DialogContent>
                <DialogActions>
                    {/* Close button */}
                    <Button onClick={handleClose}>Cancel</Button>
                    {/* You can add your save or submit button here */}
                    <Button variant="contained" onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default StudentAddBtn