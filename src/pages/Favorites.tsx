import React, { Fragment } from 'react';
import { useAppSelector } from "../hooks/redux";
import { FavoritesCard } from "../components/FavoritesCard";
import { Typography } from "@mui/material";


export function  Favorites(): JSX.Element {
    const {  favStorageData } = useAppSelector(state => state.favorites)

    return (
        <Fragment>
            { favStorageData.length === 0 ?
                ( <Typography variant="h4"  sx={{textAlign: 'center', mt: 2 }}>
                No weather forecast in favorites
                </Typography>)
            :
                ( favStorageData?.map(el =>
                <FavoritesCard
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    country={el.country}
                    temp={el.temp}
                    feelsLike={el.feels_like!}
                    humidity={el.feels_like!}
                />))
            }
        </Fragment>
    );
}