import { RestaurantData } from "../context/RegisterRestaurant/interfaces";
import { apiRestaurantRegister } from "./backend";

export const registerRestaurant = async (restaurantData: RestaurantData) => {
    try {
        const response = await apiRestaurantRegister.post('/restaurant', restaurantData);
        return response.data;
    } catch (error) {
        console.error('Erro ao registrar o restaurante:', error);
        throw error;
    }
};