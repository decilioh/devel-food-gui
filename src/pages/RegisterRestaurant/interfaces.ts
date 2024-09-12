export interface RestaurantDataRegister {
    email: string,
    cnpj: string,
    password: string
}

export interface RestaurantTypeDataProps {
    name: string;
    telefone: string;
    restaurantType: string[];
}

export interface RestaurantAdreesDataProps {
    nameAdress: string;
    numberRestaurant: string;
    cep: string;
    road: string;
    city: string;
    neighborhood: string;
    state: string;
}