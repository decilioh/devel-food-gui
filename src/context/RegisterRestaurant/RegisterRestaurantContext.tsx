import React, { createContext, useState, ReactNode, useMemo } from 'react';
import { RestaurantAdreesDataProps, RestaurantDataRegister, RestaurantRegisterContextProps, RestaurantTypeDataProps } from './interfaces';
import { registerRestaurant } from '../../services/registerRestaurant';
import { toast } from 'react-toastify';

const RestaurantRegisterContext = createContext<RestaurantRegisterContextProps | undefined>(undefined);

export const RestaurantRegisterProvider = ({ children }: { children: ReactNode }) => {
    const [step, setStep] = useState(1);
    const [restaurantData, setRestaurantData] = useState<RestaurantDataRegister>({
        email: '',
        cnpj: '',
        password: '',
    });

    const [restaurantTypeData, setRestaurantTypeData] = useState<RestaurantTypeDataProps>({
        name: '',
        telefone: '',
        restaurantType: '',
        photoURL: '',
    });

    const [restaurantAddressData, setRestaurantAddressData] = useState<RestaurantAdreesDataProps>({
        nameAdress: '',
        numberRestaurant: '',
        cep: '',
        road: '',
        city: '',
        neighborhood: '',
        state: '',
    });

    const submitAllData = async () => {

        const fullRestaurantData = {
            email: restaurantData.email,
            cnpj: restaurantData.cnpj.replace(/\D/g, ''),
            password: restaurantData.password,
            name: restaurantTypeData.name,
            phoneNumber: restaurantTypeData.telefone.replace(/\D/g, ''),
            foodType: restaurantTypeData.restaurantType,
            photoURL: restaurantTypeData.photoURL,
            restaurantAddress: {
                addressLabel: restaurantAddressData.nameAdress,
                postalCode: restaurantAddressData.cep.replace(/\D/g, ''),
                street: restaurantAddressData.road,
                neighborhood: restaurantAddressData.neighborhood,
                city: restaurantAddressData.city,
                number: restaurantAddressData.numberRestaurant,
                state: restaurantAddressData.state,
            },
        };

        try {
            const response = await registerRestaurant(fullRestaurantData);
            console.log('Restaurante registrado com sucesso:', response);
            console.log(fullRestaurantData)
            setStep(4)

        } catch (error) {
            console.error('Falha ao registrar o restaurante:', error);
            setStep(5);
        }
    };

    const contextValue = useMemo(() => ({
        restaurantData,
        setRestaurantData,
        setRestaurantTypeData,
        setRestaurantAddressData,
        submitAllData,
        setStep,
        step
    }), [restaurantData, setRestaurantData, setRestaurantTypeData, setRestaurantAddressData, submitAllData, setStep, step]);

    return (
        <RestaurantRegisterContext.Provider value={contextValue}>
            {children}
        </RestaurantRegisterContext.Provider>
    );
};

export const useRestaurantRegister = () => {
    const context = React.useContext(RestaurantRegisterContext);
    if (!context) {
        throw new Error('useRestaurantRegister deve ser utilizado somente no provedor "RestaurantRegisterProvider" ');
    }
    return context;
};
