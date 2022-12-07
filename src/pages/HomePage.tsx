import React, { Fragment, useState} from 'react';
import { useGetWeatherByTokenQuery } from '../store/services/weatherApi';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ForcastCard } from "../components/ForcastCard";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const citiesOption = [
    { label: "Kyiv", id: "703448" },
    { label: "London", id: "2643743" },
    { label: "Paris", id: "2988507" },
    { label: "Berlin", id: "2950159" },
    { label: "Madrid", id: "3117735" }
];

export function HomePage():JSX.Element {
    const [cityId, setCityId] = useState<string>("703448");
    const { data, isLoading } = useGetWeatherByTokenQuery(cityId);

    const clickHandler = (event: any, value: any): void => {
        setCityId(value.id!)
    }

    return (
        <Fragment>
            { isLoading ? (<Box sx={{display: 'flex'}} >
                <CircularProgress sx={{justifyContent: 'center', alignItem: 'center'}} />
            </Box>)
                :
                (<div>
                    <div>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={citiesOption}
                            onChange={(event, value) => clickHandler(event, value)}
                            sx={{width: 300, mt: 5}}
                            renderInput={(params) => <TextField {...params} label="Choose city" />}
                        />
                    </div>
                    <ForcastCard cityData={data!} />
                </div>)
            }
        </Fragment>
    );
}