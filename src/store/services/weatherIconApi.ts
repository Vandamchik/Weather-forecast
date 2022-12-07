import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


const BASE_URL: string = "http://openweathermap.org/img/wn/";

export const weatherIconAPI = createApi({
    reducerPath: "weatherIconApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${ BASE_URL }`
    }),
    endpoints: (builder) => ({
        getWeatherIconByToken: builder.query<any, any>({
            query: (iconID ) =>({
                url: `${iconID}@2x.png`
            })
        }),
    })
})

export const { useGetWeatherIconByTokenQuery } = weatherIconAPI;