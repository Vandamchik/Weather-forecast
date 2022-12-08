import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { Card, CardActions, CardContent, Button, Typography, Box } from '@mui/material';
import { ForcastProps } from "../modules/modules";
import {useGetWeatherIconByTokenQuery} from "../store/services/weatherIconApi";


export function ForecastCard(props : ForcastProps):JSX.Element  {
    const {  addFavData, removeFavData } = useActions()
    const {  favStorageData } = useAppSelector(state => state.favorites)
    const { id, name, country, temp, humidity, feelsLike, weather } = props;
    const [isFav, setIsFav] = useState<boolean | null>(null)
    const [icon, setIcon] = useState(weather?.[0].icon);
    // const { data } = useGetWeatherIconByTokenQuery(icon!.toString())
    // console.log(icon)
    // console.log("props",props)



    useEffect(() => {
        const find = favStorageData.find(el => el.id === id)
        setIsFav(favStorageData.includes(find))
    },[id])

    const addHandler = (event: React.MouseEvent<HTMLButtonElement>):void => {
        event.preventDefault()
        addFavData(props)
        setIsFav(true)
    }

    const removeHandler = (event: React.MouseEvent<HTMLButtonElement>):void => {
        event.preventDefault()
        removeFavData(props)
        setIsFav(false)
    }

    return (
        <Box sx={{display: 'flex'}}>
            <Card sx={{minWidth: 400}}>
                <CardContent>
                    <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                         {name} / {country}
                    </Typography>
                    <Typography variant="h3" component="div">
                        { temp }{'\u00b0'}C
                    </Typography>
                    <Typography variant="h5" component="div">
                        Feels Like { feelsLike }{'\u00b0'}C
                     </Typography>
                     <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Humidity { humidity }
                     </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <Link to={`/${id}`} style={{ textDecoration: "none" }} >
                        <Button size="small">Learn More</Button>
                    </Link>
                    { !isFav ? <Button
                        value={id}
                        size="small"
                        onClick={(event) => addHandler(event)}
                    >Add to Favorites</Button>
                        :
                        <Button
                            value={id}
                            size="small"
                            onClick={(event) => removeHandler(event)}
                        >Remove from Favorites</Button>
                    }
                </CardActions>
            </Card>
        </Box>
    );
}