import { configureStore } from "@reduxjs/toolkit";

import carttReducer from './cart/cart'
import useReducer from './user/userSlice'


export default configureStore({
    reducer: {
        cart: carttReducer,
        user: useReducer
    }
})