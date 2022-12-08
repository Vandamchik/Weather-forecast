import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { DetailsProps } from "../modules/modules";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";


export function DetailsCard(props: DetailsProps): JSX.Element {
    const [detailInfo, setDetailInfo] = useState<{}>({})
    const {  addFavData, removeFavData } = useActions()
    const {  favStorageData } = useAppSelector(state => state.favorites)
    const navigate = useNavigate()
    const [ buttonOption, setButtonOption ] = useState<boolean | null>(null)
    const { name, temp, humidity, lat, id, feelsLike, lon, tempMax, tempMin, pressure, country, infoData, update } = props;

    useEffect(() => {
        const find = favStorageData.find(el => el.id === +id!)
        setButtonOption(favStorageData.includes(find))
        const temporaryDataArr = [];
        temporaryDataArr.push(infoData)
        const setObj = temporaryDataArr.reduce((obj: {}, item: any): {} => {
            if(item) {
                obj = {
                    id: item.id,
                    name: item.name,
                    country: item.sys.country,
                    temp: item.main.temp,
                    feelsLike: item.main.feels_like,
                    humidity: item.main.humidity,
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
            <Typography
                variant="h1"
                sx={{ fontSize: 30, mt: 2, textAlign: 'center'}}
            >Detailed weather forecast</Typography>
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275, mt: 2}}>
                    <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant="h2" sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                            City:  { name } / Country: { country }
                        </Typography>
                        <Typography variant="h3" component="div" sx={{display: 'flex', justifyContent:'space-between'}}>
                            { temp?.toFixed(1) }{'\u00b0'}C
                        </Typography>
                        <Typography variant="h5" component="div">
                            Feels Like { feelsLike?.toFixed(1) }{'\u00b0'}C
                        </Typography>
                        <Typography sx={{ mt: 1.5 }} color="text.secondary">
                            Humidity { humidity }
                        </Typography>
                        <Typography color="text.secondary">
                            Pressure { pressure }
                        </Typography>
                        <Typography color="text.secondary">
                            Max-temperature { tempMax?.toFixed(1) }{'\u00b0'}C
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}  color="text.secondary">
                            Min-temperature { tempMin?.toFixed(1) }{'\u00b0'}C
                        </Typography>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{display: 'flex',
                                justifyContent: 'space-between',
                                maxWidth: '400px'}}
                        >
                            <Typography component="div">
                                Latitude: { lat }
                            </Typography>
                            <Typography component="div">
                                Longitude: { lon }
                            </Typography>
                        </Typography>
                    </CardContent>
                    <CardActions sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <Button onClick={() => navigate(-1)} size="small">Back</Button>
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
                        <Button
                            size="small"
                            onClick={() => update()}
                        >Update</Button>
                    </CardActions>
                </Card>
            </Container>
        </Box>
    );
}