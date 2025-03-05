import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import AxiosHandler from "../actions/AxiosHandler";


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, authReducer)


const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types if needed
                ignoredActions: ['persist/PERSIST'],
            },
        }),
})


store.subscribe(() => {
    const state = store.getState()
    const token = state.auth.accessToken
    if (token) {
        AxiosHandler.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
        delete AxiosHandler.defaults.headers.common["Authorization"]
    }
})

export default store;
export const persistor = persistStore(store)