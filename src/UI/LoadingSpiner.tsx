import React from 'react';
import { Box, CircularProgress } from "@mui/material";


export function LoadingSpiner(): JSX.Element {

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItem: 'center'}} >
            <CircularProgress />
        </Box>
    );
}