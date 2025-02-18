import { createSlice } from "@reduxjs/toolkit"
import { login } from "../../actions/AuthAction";


const initialState = {
    user: null,
    token: null,
    isAuthentictaed: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthentictaed = true
        }
    }
})

export const { login } = authSlice.actions;
export default authSlice.reducer;