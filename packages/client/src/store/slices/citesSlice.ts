import { createSlice } from "@reduxjs/toolkit";

export const initialState: Array<object> | unknown = {
    cites: []
}

const citesSlice = createSlice({
    name: 'cites',
    initialState,
    reducers: {}
})

export default citesSlice.reducer