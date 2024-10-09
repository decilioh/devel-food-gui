import { apiRestaurantRegister } from "./backend"


export const getDishById = async (id: number) => {
    try {
        const response = await apiRestaurantRegister.get(`/dish/${id}`)
        return response.data
    } catch (error) {
        throw new Error('Erro ao buscar o prato')
    }
}