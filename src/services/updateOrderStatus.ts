import { apiRestaurantRegister } from "./backend";

export const updateOrderStatus = async (orderId: number, statusOrder: string) => {
    try {
        const response = await apiRestaurantRegister.put(`/orders/${orderId}/status`, {
            status: statusOrder
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar o status do pedido:", error);
    }
};
