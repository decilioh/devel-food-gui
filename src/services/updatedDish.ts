import axios from "axios";
import { apiRestaurantRegister } from "./backend";

interface UpdateDishProps {
    id: number;
    dishName: string;
    description: string;
    price: string;
    photo: string;
    foodType: string;
    restaurant: {
        id: number | null | undefined
    }
}

export const updateDish = async (updatedDishData: UpdateDishProps) => {
    try {
        const response = await apiRestaurantRegister.put(`/dish/${updatedDishData.id}`, updatedDishData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Erro ao atualizar o prato. Verifique os dados e tente novamente.');
        }
    }
};