import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    role: null,
    email: null,
    accessToken: null,
    refreshToken: null,
    isAuthentictaed: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authLogin: (state, action) => {
            state.role = action.payload.role;
            state.email = action.payload.email;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthentictaed = true
        },
        authLogout: (state) => {
            state.role = null;
            state.email = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthentictaed = false
            console.log(state);
            


        }
    }
})

export const { authLogin, authLogout } = authSlice.actions;
export default authSlice.reducer;