import React from 'react';
import { Box, Typography } from "@mui/material";


export function ErrorBlock():JSX.Element {

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItem: 'center'}} >
            <Typography
                variant="h3"
                sx={{ fontSize: 30, color: "red",display: 'flex', justifyContent: 'center', alignItem: 'center' }}
            >
                Something goes wrong
            </Typography>
        </Box>
    );
}