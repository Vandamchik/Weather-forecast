import React from 'react';
import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";


export function Navigation():JSX.Element {

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Weather Forcast
                    </Typography>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                        <Button color="inherit">Home Page</Button>
                    </Link>
                    <Link to={"/favorites"} style={{ textDecoration: "none" }}>
                        <Button color="inherit">Favorites</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}