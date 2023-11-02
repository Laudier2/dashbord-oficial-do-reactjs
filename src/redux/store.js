import { configureStore } from "@reduxjs/toolkit";

import carttReducer from './cart/cart'


export default configureStore({
    reducer: {
        cart: carttReducer
    }
})