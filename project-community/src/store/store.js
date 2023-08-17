import { configureStore } from "@reduxjs/toolkit";
import SigninReducer from "./reducers/SignInReducer"
const store= configureStore({
    reducer:({
        Signin:SigninReducer
        
    })
})
export default store;