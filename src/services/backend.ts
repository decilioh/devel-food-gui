import axios from "axios";

export const apiRestaurantRegister = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_BACKEND,
});