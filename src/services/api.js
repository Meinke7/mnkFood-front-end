import axios from "axios";

export const api = axios.create({
    baseURL: "https://mnkfood-back-end-api.onrender.com"

});