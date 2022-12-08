import React, { Fragment, useState} from 'react';
import { useGetWeatherByTokenQuery } from '../store/services/weatherApi';
import { ForecastCard } from "../components/ForecastCard";
import { SelectWeather } from "../components/SelectWeather";
import { ErrorBlock } from "../components/ErrorBlock";
import { LoadingSpiner } from "../components/LoadingSpiner";
import { Box }  from '@mui/material';



export function HomePage():JSX.Element {
    const [cityId, setCityId] = useState<string>("703448");
    const { data, isLoading, error } = useGetWeatherByTokenQuery(cityId);

    const clickHandler = (event: any, value: any): void => {
        setCityId(value.id!)
    }

    return (
        <Fragment>
            { error &&  <ErrorBlock /> }
            { isLoading ? <LoadingSpiner />
                :
                ( <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <SelectWeather clickHandler={ clickHandler }/>
                    <ForecastCard
                        id={ data?.id! }
                        name={ data?.name! }
                        country={ data?.sys?.country! }
                        temp={ data?.main?.temp! }
                        feelsLike={ data?.main?.feels_like! }
                        humidity={ data?.main?.feels_like! }
                        weather={ data?.weather! }
                    />
                </Box> )
            }
        </Fragment>
    );
}