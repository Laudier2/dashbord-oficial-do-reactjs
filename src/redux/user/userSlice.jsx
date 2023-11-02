import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";
import api from "../../api/api";

const initialState = {
    users: [],
    status: null,
}

//const url_heroku = "https://api-store-1ce9da7c9ae6.herokuapp.com/product"
//const url_local = "http://localhost:3003/product"

export const userFatch = createAsyncThunk(
    "users/userFatch",
    // eslint-disable-next-line no-unused-vars
    async () => {
        try {
            const res = await api.get("/")
            return res?.data
        } catch (error) {
            return error
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: [],
    extraReducers: {
        [userFatch.pending]: (state) => {
            state.status = "pending";
        },
        [userFatch.fulfilled]: (state, action) => {
            state.status = "success";
            state.users = action.payload;
        },
        [userFatch.rejected]: (state) => {
            state.status = "rejected";
        }
    }
})

export default userSlice.reducer;
