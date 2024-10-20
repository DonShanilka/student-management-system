import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function StudentAddBtn() {
    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="contained">ADD STUDENT +</Button>
            </Stack>
        </div>
    )
}

export default StudentAddBtn