import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { DetailsProps } from "../modules/modules";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";


export function DetailsCard(props: DetailsProps): JSX.Element {
    const [detailInfo, setDetailInfo] = useState<{}>({})
    const {  addFavData, removeFavData } = useActions()
    const [ buttonOption, setButtonOption ] = useState<boolean | null>(null)
    const {  favStorageData } = useAppSelector(state => state.favorites)
    const { name, temp, humidity, lat, id, feelsLike, lon, tempMax, tempMin, pressure, country, infoData } = props;

    useEffect(() => {
        const find = favStorageData.find(el => el.id === +id!)
        setButtonOption(favStorageData.includes(find))
        const arr = [];
        arr.push(infoData)
        const setObj = arr.reduce((obj: {}, item: any): {} => {
            if(item) {
                obj = {
                    id: item.id,
                    name: item.name,
                    country: item.sys.country,
                    temp: item.main.temp,
                    feelsLike: item.main.feels_like,
                    humidity: item.main.humidity,
                    pressure: item.main.pressure,
                    tempMax: item.main.temp_max,
                    tempMin: item.main.temp_min,
                    lat: item.coord.lat,
                    lon: item.coord.lon
                }
            }
            return obj;
        },{})
        setDetailInfo(setObj)
    },[infoData, id])

    const addHandler = (event: React.MouseEvent<HTMLButtonElement>):void => {
        event.preventDefault()
        addFavData(detailInfo)
        setButtonOption(true)
    }

    const removeHandler = (event: React.MouseEvent<HTMLButtonElement>):void => {
        event.preventDefault()
        removeFavData(detailInfo)
        setButtonOption(false)
    }

    return (
        <Box>
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275, mt: 2}}>
                    <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant="h1" sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                            City:  { name } / Country: { country }
                        </Typography>
                        <Typography variant="h3" component="div" sx={{display: 'flex', justifyContent:'space-between'}}>
                            { temp }{'\u00b0'}C
                        </Typography>
                        <Typography variant="h5" component="div">
                            Feels Like { feelsLike }{'\u00b0'}C
                        </Typography>
                        <Typography sx={{ mt: 1.5 }} color="text.secondary">
                            Humidity { humidity }
                        </Typography>
                        <Typography color="text.secondary">
                            Pressure { pressure }
                        </Typography>
                        <Typography color="text.secondary">
                            Max-tempreture { tempMax }{'\u00b0'}C
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}  color="text.secondary">
                            Min-tempreture { tempMin }{'\u00b0'}C
                        </Typography>
                        <Typography variant="h6"
                                    component="div"
                                    sx={{display: 'flex',
                                        justifyContent: 'space-between',
                                        maxWidth: '400px'}
                                    }
                        >
                            <Typography component="div">
                                Latitude: { lat }
                            </Typography>
                            <Typography component="div">
                                Longitude: { lon }
                            </Typography>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={"/"} style={{ textDecoration: "none" }} >
                            <Button size="small">Back</Button>
                        </Link>
                        { !buttonOption ? <Button
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
            </Container>
        </Box>
    );
}