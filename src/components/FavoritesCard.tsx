import React from 'react';
import { Button, Card, CardActions, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ForecastProps } from "../modules/modules";
import { useActions } from "../hooks/actions";

export function FavoritesCard(props: ForecastProps): JSX.Element {
    const { removeFavData } = useActions()
    const { country, name, temp, humidity, feelsLike, id } = props;

    return (
        <Box>
            <Card sx={{ minWidth: 350, m: 2}}>
                <Link to={`/${id}`} style={{ textDecoration: "none", color: 'inherit' }}>
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
                <CardActions>
                    <Button
                        value={id}
                        size="small"
                        onClick={() => removeFavData(props)}
                    >Remove from Favorites</Button>
                </CardActions>
            </Card>
        </Box>
    );
}