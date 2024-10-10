import { apiRestaurantRegister } from "./backend"


export const getPromoById = async (id?: number) => {
    try {
        const response = await apiRestaurantRegister.get(`/promotions`)
        return response.data
    } catch (error) {
        throw new Error('Erro ao buscar o promoção')
    }
}