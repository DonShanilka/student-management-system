import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function StudentAddBtn() {
    return (
        <div>
            <Button variant="contained" sx={{ position: 'absolute', top: '24%', right: '2%' }}>ADD STUDENT +</Button>
        </div>
    )
}

export default StudentAddBtn