import { apiRestaurantRegister } from "./backend"

export const getAllOrders = async (id: number | null | undefined) => {
    const response = await apiRestaurantRegister(`/orders/${id}`)
    return response.data
}