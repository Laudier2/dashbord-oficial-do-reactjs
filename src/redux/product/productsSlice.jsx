import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";
import api from "../../api/api";

const initialState = {
    items: [],
    status: null,
}

//const url_heroku = "https://api-store-1ce9da7c9ae6.herokuapp.com/product"
//const url_local = "http://localhost:3003/product"

export const productFatch = createAsyncThunk(
    "products/productFatch",
    // eslint-disable-next-line no-unused-vars
    async () => {
        try {
            const res = await api.get("/product")
            return res?.data
        } catch (error) {
            return error
        }
    }
)

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: [],
    extraReducers: {
        [productFatch.pending]: (state) => {
            state.status = "pending";
        },
        [productFatch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [productFatch.rejected]: (state) => {
            state.status = "rejected";
        }
    }
})

export default productSlice.reducer;
