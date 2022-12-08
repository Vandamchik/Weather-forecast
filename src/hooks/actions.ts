import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit"
import { favoritesActions } from "../store/services/favoritesSlice";


const actions = {
    ...favoritesActions
}

export function useActions() {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}