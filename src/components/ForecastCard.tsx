import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { Card, CardActions, CardContent, Button, Typography, Box } from '@mui/material';
import { ForecastProps } from "../modules/modules";


export function ForecastCard(props : ForecastProps):JSX.Element  {
    const {  addFavData, removeFavData } = useActions()
    const {  favStorageData } = useAppSelector(state => state.favorites)
    const { id, name, country, temp, humidity, feelsLike, update } = props;
    const [isFav, setIsFav] = useState<boolean | null>(null)

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
                <Link to={`/${id}`} style={{ textDecoration: "none", color: 'inherit' }} >
                    <CardContent>
                        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                             {name} / {country}
                        </Typography>
                        <Typography variant="h3" component="div">
                            { temp?.toFixed(1) }{'\u00b0'}C
                        </Typography>
                        <Typography variant="h5" component="div">
                            Feels Like { feelsLike?.toFixed(1) }{'\u00b0'}C
                         </Typography>
                         <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Humidity { humidity }
                         </Typography>
                    </CardContent>
                </Link>
                <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
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
                    <Button
                        size="small"
                        onClick={() => update()}
                    >Update</Button>
                </CardActions>
            </Card>
        </Box>
    );
}