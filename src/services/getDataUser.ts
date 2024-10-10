import { apiRestaurantRegister } from "./backend"

export const getUserData = async (id: number | null | undefined) => {
    const response = await apiRestaurantRegister.get(`/restaurant/${id}`)
    return response.data
}