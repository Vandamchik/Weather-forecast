import React, { Fragment } from 'react';
import { useAppSelector } from "../hooks/redux";
import { FavoritesCard } from "../components/FavoritesCard";
import { Box, Typography } from "@mui/material";


export function  Favorites(): JSX.Element {
    const {  favStorageData } = useAppSelector(state => state.favorites)


    return (
        <Fragment>
            { favStorageData.length === 0 ?
                ( <Typography variant="h4"  sx={{textAlign: 'center', mt: 2 }}>
                No weather forecast in favorites
                </Typography> )
            :
            ( <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                { favStorageData?.map(el =>
                    <FavoritesCard
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        country={el.country}
                        temp={el.temp}
                        feelsLike={el.feelsLike!}
                        humidity={el.humidity!}
                    />)
                }
            </Box> )
            }
        </Fragment>
    );
}