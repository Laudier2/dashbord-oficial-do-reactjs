import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import { toast } from "react-toastify";

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
            const res = await api.get("/user/")
            return res?.data
        } catch (error) {
            return error
        }
    }
)


export const userLogin = createAsyncThunk (
	'user/userLogin',
	async (userCreatials) => {
			const result = await api.post('/login', userCreatials)
			//console.log(result.data.token)
			if(result.data.token){
				localStorage.setItem("token", result.data.token)
				toast.success("Login efetuado com sucesso!")
				window.location.reload()
			}
			
			if(!result.data.token){
				toast.error("Erro ao efetuar login!")
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
        },
        [userLogin.pending]: (state) => {
            state.status = "pending";
        },
        [userLogin.fulfilled]: (state, action) => {
            state.status = "success";
            state.users = action.payload;
        },
        [userLogin.rejected]: (state) => {
            state.status = "rejected";
        }
    }
})

export default userSlice.reducer;
