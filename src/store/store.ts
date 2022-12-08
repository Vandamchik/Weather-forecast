import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { weatherAPI } from "./services/weatherApi";
import { weatherIconAPI } from "./services/weatherIconApi";
import { favoritesReducer } from "./services/favoritesSlice";


const rootReducer = combineReducers({
    [weatherAPI.reducerPath]: weatherAPI.reducer,
    [weatherIconAPI.reducerPath]: weatherIconAPI.reducer,
    favorites: favoritesReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(weatherAPI.middleware, weatherIconAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']