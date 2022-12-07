import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IWeatherData } from "../../modules/modules";


const BASE_URL: string = "https://api.openweathermap.org/";
const ACCESS_TOKEN: string = "25cc8d3021b4e27659d7715a4e819275";

export const weatherAPI = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${ BASE_URL }`
    }),
    endpoints: (builder) => ({
        getWeatherByToken: builder.query<IWeatherData, string>({
            query: (cityID ) =>({
                url: `data/2.5/weather?id=${ cityID }&units=metric&APPID=${ ACCESS_TOKEN }`
            })
        }),
    })
})

export const { useGetWeatherByTokenQuery  } = weatherAPI;