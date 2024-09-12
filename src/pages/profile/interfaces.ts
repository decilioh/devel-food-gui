export interface UserProfileProps {
    email: string;
    cnpj: string;
    restaurantName: string;
    telefone: string;
    restaurantType: string[];
}

export interface AdressProfileProps {
    nameAdress: string;
    numberRestaurant: string;
    cep: string;
    road: string;
    city: string;
    neighborhood: string;
    state: string;
}