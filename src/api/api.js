import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3003" //https://api-store-1ce9da7c9ae6.herokuapp.com"
})

export default api;

export const createSession = async (email, password) => {
    return api.post("/login", { email, password })
}
