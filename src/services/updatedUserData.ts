import axios from "axios";
import { apiRestaurantRegister } from "./backend";

export interface UpdateUserProps {
    id: number | null | undefined;
    email?: string;
    name?: string;
    phoneNumber?: string;
    foodType?: string;
    photo?: string;

}

export const updateUserData = async (updatedUserData: UpdateUserProps) => {
    try {
        const response = await apiRestaurantRegister.put(`/restaurant/${updatedUserData.id}`, updatedUserData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Erro ao atualizar os dados. Verifique e tente novamente.');
        }
    }
};