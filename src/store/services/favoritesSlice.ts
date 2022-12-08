import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeatherFavoritesSlice } from "../../modules/modules";


const FAV_KEY = "favweather";


const initialState: IWeatherFavoritesSlice = {
    favStorageData: JSON.parse(localStorage.getItem(FAV_KEY) ?? "[]"),
}

export const favoritesSlice = createSlice({
    name: "favoritesWeather",
    initialState,
    reducers: {
        addFavData(state, action: PayloadAction<any>) {
            state.favStorageData.push(action.payload)
            localStorage.setItem(FAV_KEY, JSON.stringify(state.favStorageData))
        },
        removeFavData(state, action: PayloadAction<any>) {
            state.favStorageData = state.favStorageData.filter(f => f.id !== action.payload.id)
            localStorage.setItem(FAV_KEY, JSON.stringify(state.favStorageData))
        }
    }
})

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;