import { apiRestaurantRegister } from "./backend"

export const getPromotions = async (id: number) => {
    try {
        const response = await apiRestaurantRegister.get(`/promotions/restaurant/${id}`)
        return response.data
    } catch (error) {
        throw new Error('Erro ao buscar promoções')
    }
}