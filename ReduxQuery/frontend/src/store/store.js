import {configureStore } from "@reduxjs/toolkit"
import {userApiAuth} from "../Api/auth.api.js"

const store = configureStore({
    reducer:{
        userApiAuth :userApiAuth.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(userApiAuth.middleware),
});

export default store