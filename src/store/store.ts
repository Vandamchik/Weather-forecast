import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { weatherAPI } from "./services/weatherApi";
import { weatherIconAPI } from "./services/weatherIconApi";


const rootReducer = combineReducers({
    [weatherAPI.reducerPath]: weatherAPI.reducer,
    [weatherIconAPI.reducerPath]: weatherIconAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(weatherAPI.middleware, weatherIconAPI.middleware),
    })
}

// setupListeners()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']