import React, {Fragment} from 'react';
import {Link, useParams} from 'react-router-dom'
import { useGetWeatherByTokenQuery } from "../store/services/weatherApi";
import {Box, Button, Card, CardActions, CardContent, Container, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";


export function DetailInformation():JSX.Element {
    const { id } = useParams()
    const { data: infoData, isLoading,  } = useGetWeatherByTokenQuery(id!);

console.log(infoData)
    return (
        <Fragment>
            {isLoading ?
                 <CircularProgress/>
                :
                <div>
                    <Container maxWidth="sm">
                        <Card sx={{ minWidth: 275, mt: 2}}>
                            <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                                <Typography variant="h1" sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                                    City:  {infoData?.name}
                                </Typography>
                                <Typography variant="h3" component="div" sx={{display: 'flex', justifyContent:'space-between'}}>
                                    { infoData?.main?.temp }{'\u00b0'}C
                                </Typography>
                                <Typography variant="h5" component="div">
                                    Feels Like { infoData?.main?.feels_like }{'\u00b0'}C
                                </Typography>
                                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                    Humidity { infoData?.main?.humidity }
                                </Typography>
                                <Typography color="text.secondary">
                                    Pressure {infoData?.main?.pressure}
                                </Typography>
                                <Typography color="text.secondary">
                                    Max-tempreture {infoData?.main?.temp_max}{'\u00b0'}C
                                </Typography>
                                <Typography sx={{ mb: 1.5 }}  color="text.secondary">
                                    Min-tempreture {infoData?.main?.temp_min}{'\u00b0'}C
                                </Typography>
                                <Typography variant="h6"
                                            component="div"
                                            sx={{display: 'flex',
                                                justifyContent: 'space-between',
                                                maxWidth: '400px'}
                                            }
                                >
                                   <Typography component="div">
                                       Latitude: { infoData?.coord?.lat }
                                   </Typography>
                                    <Typography component="div">
                                        Longitude: { infoData?.coord?.lon }
                                    </Typography>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={"/"} >
                                    <Button size="small">Back</Button>
                                </Link>
                                <Button size="small">Add to Favorites</Button>
                            </CardActions>
                        </Card>
                    </Container>

                </div>
            }

        </Fragment>
    );
}