import React, { Fragment } from 'react';
import {  useParams } from 'react-router-dom'
import { useGetWeatherByTokenQuery } from "../store/services/weatherApi";
import { DetailsCard } from "../components/DetailsCard";
import { ErrorBlock } from "../UI/ErrorBlock";
import { LoadingSpiner } from "../UI/LoadingSpiner";


export function DetailsInformation():JSX.Element {
    const { id: currentCardId } = useParams()
    const { data: infoData, isLoading, error, refetch } = useGetWeatherByTokenQuery(currentCardId!);


    return (
        <Fragment>
            { error &&  <ErrorBlock /> }
            { isLoading ?
                <LoadingSpiner />
                :
                <DetailsCard
                    id={ currentCardId! }
                    name={ infoData?.name! }
                    temp={ infoData?.main?.temp! }
                    feelsLike={ infoData?.main?.feels_like! }
                    humidity={ infoData?.main?.humidity! }
                    pressure={ infoData?.main?.pressure! }
                    tempMax={ infoData?.main?.temp_max! }
                    tempMin={ infoData?.main?.temp_min! }
                    lat={ infoData?.coord?.lat! }
                    lon={ infoData?.coord?.lon!}
                    country={ infoData?.sys?.country! }
                    infoData={ infoData! }
                    update={ refetch }
                />
            }
        </Fragment>
    );
}