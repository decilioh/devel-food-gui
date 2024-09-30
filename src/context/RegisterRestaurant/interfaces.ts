import { Dispatch, SetStateAction } from "react";

export interface RestaurantDataRegister {
    email: string;
    cnpj: string;
    password: string;
}

export interface RestaurantTypeDataProps {
    name: string;
    telefone: string;
    restaurantType: string;
    photoURL: string;
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

export interface RestaurantData {
    email: string;
    cnpj: string;
    password: string;
    name: string;
    phoneNumber: string;
    foodType: string;
    restaurantAddress: {
        addressLabel: string;
        postalCode: string;
        street: string;
        neighborhood: string;
        city: string;
        number: string;
        state: string;
    };
}

export interface RestaurantRegisterContextProps {
    restaurantData: RestaurantDataRegister;
    setRestaurantData: (data: RestaurantDataRegister) => void;
    setRestaurantTypeData: (data: RestaurantTypeDataProps) => void;
    setRestaurantAddressData: (data: RestaurantAdreesDataProps) => void;
    submitAllData: () => Promise<void>;
    setStep: Dispatch<SetStateAction<number>>,
    step: number,
}