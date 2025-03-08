import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    category: null,
    subcategory: null,
    publisher: null,
    anchor: null,
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        homeData: (state, action) => {

            state.category = null;
            state.subcategory = null;
            state.publisher = null;
            state.anchor = null;
            // Set new values
            state.category = action.payload.category;
            state.subcategory = action.payload.subcategory;
        }
    }
})


export const { homeData } = homeSlice.actions;

export default homeSlice.reducer