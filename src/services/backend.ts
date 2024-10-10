import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('authToken');
export const apiRestaurantRegister = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_BACKEND,
    headers: {
        Authorization: token ? `Bearer ${token}` : '',
        'ngrok-skip-browser-warning': true,
    },
});