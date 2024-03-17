import { configureStore } from "@reduxjs/toolkit";
import citesReducer, { initialState } from "./slices/citesSlice";

const createStore = (preloadedState = initialState) => {
    return configureStore({
        preloadedState,
        reducer: {
            cites: citesReducer
        }
    })
}

export const store = createStore()
export default createStore