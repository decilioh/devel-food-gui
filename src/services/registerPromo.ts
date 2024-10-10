import { apiRestaurantRegister } from "./backend"

interface NewPromoDataProps {
    id: number | null | undefined;
    name: string;
    discountPercentage: string;
    imageUrl: string;
    startDate: string;
    endDate: string;
}
export const newPromo = async (NewPromoData: NewPromoDataProps) => {
    const response = await apiRestaurantRegister.post(`/promotions/restaurant/${NewPromoData.id}`, NewPromoData)
    return response.data
} 