export interface IWeatherData {
    base?: string,
    clouds?: {
        all?: number
    }
    cod?: number,
    coord?: {
        lat?: number,
        lon?: number
    }
    dt?: number,
    id?: number,
    main?: {
        feels_like?: number,
        humidity?: number,
        pressure?: number,
        temp?: number,
        temp_max?: number,
        temp_min?: number
    }
    name?: string,
    sys?: {
        country?: string,
        id?: number,
        sunrise?: number,
        sunset?: number,
        type?: number
    }
    timezone?: number,
    visibility?: number,
    weather?: any[],
    wind?: {
        deg?: number,
        gust?: number,
        speed?: number
    }
}

export interface ForcastProps {
    id?: number,
    name?: string,
    country?: string,
    temp?: number,
    feelsLike?: number,
    humidity?: number,
    update?: any
}

export interface DetailsProps {
    id?: string,
    name?: string,
    country?: string,
    temp?: number,
    feelsLike?: number,
    humidity?: number,
    pressure?: number,
    tempMax?: number,
    tempMin?: number,
    lat?: number,
    lon?: number,
    infoData?: {},
    update: any
}

export interface IWeatherFavoritesSlice {
    favStorageData: any[],
}

export interface SelectProps {
    clickHandler: (event: any, value: any) => void
}




