import { apiRestaurantRegister } from "./backend"

export const getAddressData = async (id: number | null | undefined) => {
    const response = await apiRestaurantRegister.get(`/restaurant/address/${id}`)
    return response.data
}