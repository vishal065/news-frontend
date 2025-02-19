import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    role: null,
    email: null,
    token: null,
    isAuthentictaed: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authLogin: (state, action) => {
            state.role = action.payload.user;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthentictaed = true
        }
    }
})

export const { authLogin } = authSlice.actions;
export default authSlice.reducer;