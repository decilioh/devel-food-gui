import axios from "axios";
import { apiRestaurantRegister } from "./backend";

interface UpdateAddressProps {
    id: number | null | undefined;
    addressLabel: string;
    postalCode: string;
    street: string;
    neighborhood: string;
    city: string;
    number: string;
    state: string;
}

export const updateAddressData = async (updatedAddressData: UpdateAddressProps) => {
    try {
        const response = await apiRestaurantRegister.put(`/restaurant/address/${updatedAddressData.id}`, updatedAddressData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Erro ao atualizar os dados. Verifique e tente novamente.');
        }
    }
};