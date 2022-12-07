import React from 'react';
import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


export function Navigation():JSX.Element {

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Weather Forcast
                    </Typography>
                    <Link to={"/"}>
                        <Button color="inherit">Home Page</Button>
                    </Link>
                    <Link to={"/favorites"}>
                        <Button color="inherit">Favorites</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}