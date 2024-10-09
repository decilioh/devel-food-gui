import axios from "axios";
import { apiRestaurantRegister } from "./backend";

interface UpdatePromoProps {
    id: number | null | undefined;
    name: string;
    discountPercentage: string;
    imageUrl: string;
    startDate: string;
    endDate: string;
}

export const updatePromo = async (updatedPromoData: UpdatePromoProps) => {
    try {
        const response = await apiRestaurantRegister.put(`/promotions/${updatedPromoData.id}`, updatedPromoData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Erro ao atualizar o prato. Verifique os dados e tente novamente.');
        }
    }
};