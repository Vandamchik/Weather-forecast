import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ForcastProps } from "../modules/modules";
import { useActions } from "../hooks/actions";

export function FavoritesCard(props: ForcastProps): JSX.Element {
    const { removeFavData } = useActions()
    const { country, name, temp, humidity, feelsLike, id } = props;

    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
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
                <CardActions>
                    <Link to={`/${id}`} style={{ textDecoration: "none" }}>
                        <Button size="small">Learn More</Button>
                    </Link>
                        <Button
                            value={id}
                            size="small"
                            onClick={() => removeFavData(props)}
                        >Remove from Favorites</Button>
                </CardActions>
            </Card>
        </div>
    );
}