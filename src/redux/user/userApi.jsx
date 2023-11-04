import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import api from "../../api/api";

export const userApi = createApi({
    reducerPath: "usersApi",
    //baseQuery: fetchBaseQuery({ baseUrl: "https://api-store-1ce9da7c9ae6.herokuapp.com/" }),
    baseQuery: fetchBaseQuery(api.get("/user")),
    endpoints: (builder) => ({
        getAllOroducts: builder.query({
            query: () => "user"
        })
    })
})

export const { useGetAllProductsQuery } = userApi;
 