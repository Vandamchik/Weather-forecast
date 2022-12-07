import React, { useState } from 'react';
import { useGetWeatherByTokenQuery } from '../store/services/weatherApi'


export function HomePage():JSX.Element {
    const [cityId, setCityId] = useState<string>("703448");
    const { data } = useGetWeatherByTokenQuery(cityId);
    console.log( data )

    return (
        <div>
            Home
        </div>
    );
}