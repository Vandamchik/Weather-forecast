import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { ForcastProps } from "../modules/modules";
import {useGetWeatherIconByTokenQuery} from "../store/services/weatherIconApi";


export function ForcastCard({cityData}: ForcastProps):JSX.Element  {
    const [icon, setIcon] = useState(`${cityData?.weather?.[0].icon}`)
    // const { data } = useGetWeatherIconByTokenQuery(icon!)
    // console.log(icon)

    // const [iconID, setIconId] = useState<undefined | string>()
// console.log(cityData)

    // console.log(data);

    // console.log(imageHandler?.join(""))

    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                         {cityData?.name} / {cityData?.sys?.country}
                    </Typography>
                    <Typography variant="h3" component="div">
                        { cityData?.main?.temp }{'\u00b0'}C
                    </Typography>
                    <Typography variant="h5" component="div">
                        Feels Like { cityData?.main?.feels_like }{'\u00b0'}C
                     </Typography>
                     <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Humidity { cityData?.main?.humidity }
                     </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/${cityData?.id}`} >
                        <Button size="small">Learn More</Button>
                    </Link>
                    <Button size="small">Add to Favorites</Button>
                </CardActions>
            </Card>
        </div>
    );
}