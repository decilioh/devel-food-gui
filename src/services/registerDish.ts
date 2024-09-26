import { apiRestaurantRegister } from "./backend";

interface RegisterDish {
    dishName: string;
    description: string;
    price: string;
    photo: string;
    foodType: string;
    restaurant: {
        id: number
    };
}

export const registerDish = async (restaurantData: RegisterDish) => {
    try {
        const response = await apiRestaurantRegister.post('/dish', restaurantData);
        return response.data;
    } catch (error) {
        console.error('Erro ao registrar o restaurante:', error);
        throw error;
    }
};