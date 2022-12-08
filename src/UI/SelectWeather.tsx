import React from 'react';
import { Box, Autocomplete, TextField } from "@mui/material";
import { SelectProps } from "../modules/modules";


const citiesOption = [
    { label: "Kyiv", id: "703448" },
    { label: "London", id: "2643743" },
    { label: "Paris", id: "2988507" },
    { label: "Berlin", id: "2950159" },
    { label: "Madrid", id: "3117735" }
];

export function SelectWeather(props: SelectProps): JSX.Element {
    const { clickHandler } = props;

    return (
        <Box sx={{display: 'flex', mb: 2, justifyContent: 'center'}}>
            <Autocomplete
                disableClearable
                id="combo-box-demo"
                options={citiesOption}
                onChange={(event, value) => clickHandler(event, value)}
                sx={{width: 300, mt: 5}}
                renderInput={(params) => <TextField {...params} label="Choose city" />}
            />
        </Box>
    );
}