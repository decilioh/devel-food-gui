import React from 'react';
import { render, act } from '@testing-library/react';
import { RestaurantRegisterProvider, useRestaurantRegister } from './RegisterRestaurantContext';
import { registerRestaurant } from '../../services/registerRestaurant';
import { ReactNode } from 'react';

interface RestaurantRegisterHook {
    setRestaurantData: (data: {
        email: string;
        cnpj: string;
        password: string;
    }) => void;
    setRestaurantTypeData: (data: {
        name: string;
        telefone: string;
        restaurantType: string;
        photoURL: string;
    }) => void;
    setRestaurantAddressData: (data: {
        nameAdress: string;
        numberRestaurant: string;
        cep: string;
        road: string;
        city: string;
        neighborhood: string;
        state: string;
    }) => void;
    submitAllData: () => Promise<void>;
    step: number;
}


jest.mock('../../services/registerRestaurant', () => ({
    registerRestaurant: jest.fn(),
}));

type wrapperProps = {
    children: ReactNode
}

const Wrapper = ({ children }: wrapperProps) => (
    <RestaurantRegisterProvider>{children}</RestaurantRegisterProvider>
);

describe('RestaurantRegisterContext', () => {
    it('deve chamar a API com os dados corretos quando submitAllData é chamado', async () => {
        (registerRestaurant as jest.Mock).mockResolvedValueOnce({ message: 'Restaurante registrado com sucesso' });

        let hookResult: RestaurantRegisterHook;

        const TestComponent = () => {
            hookResult = useRestaurantRegister();
            return null;
        };

        render(
            <Wrapper>
                <TestComponent />
            </Wrapper>
        );

        act(() => {
            hookResult.setRestaurantData({
                email: 'teste@restaurante.com',
                cnpj: '76931734000156',
                password: 'senha123!',
            });
            hookResult.setRestaurantTypeData({
                name: 'Restaurante Teste',
                telefone: '11943232328',
                restaurantType: 'Brasileira,Churrasco',
                photoURL: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
            });
            hookResult.setRestaurantAddressData({
                nameAdress: 'Rua Teste',
                numberRestaurant: '123',
                cep: '12345000',
                road: 'Rua Teste',
                city: 'São Paulo',
                neighborhood: 'Centro',
                state: 'SP',
            });
        });

        await act(async () => {
            await hookResult.submitAllData();
        });

        expect(registerRestaurant).toHaveBeenCalledWith({
            email: 'teste@restaurante.com',
            cnpj: '76931734000156',
            password: 'senha123!',
            name: 'Restaurante Teste',
            phoneNumber: '11943232328',
            foodType: 'Brasileira,Churrasco',
            photoURL: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            restaurantAddress: {
                addressLabel: 'Rua Teste',
                postalCode: '12345000',
                street: 'Rua Teste',
                neighborhood: 'Centro',
                city: 'São Paulo',
                number: '123',
                state: 'SP',
            },
        });

        expect(hookResult!.step).toBe(4);
    });


    it('deve lidar com o erro ao chamar submitAllData', async () => {
        (registerRestaurant as jest.Mock).mockRejectedValueOnce(new Error('Falha ao registrar o restaurante'));

        let hookResult: RestaurantRegisterHook;

        const TestComponent = () => {
            hookResult = useRestaurantRegister();
            return null;
        };

        render(
            <Wrapper>
                <TestComponent />
            </Wrapper>
        );

        act(() => {
            hookResult.setRestaurantData({
                email: 'teste@restaurante.com',
                cnpj: '12345678901234',
                password: 'senha123!',
            });
            hookResult.setRestaurantTypeData({
                name: 'Restaurante Teste',
                telefone: '11999999999',
                restaurantType: 'Italiana, Japonesa',
                photoURL: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
            });
            hookResult.setRestaurantAddressData({
                nameAdress: 'Rua Teste',
                numberRestaurant: '123',
                cep: '12345000',
                road: 'Rua Teste',
                city: 'São Paulo',
                neighborhood: 'Centro',
                state: 'SP',
            });
        });

        await act(async () => {
            await hookResult.submitAllData();
        });

        expect(registerRestaurant).toHaveBeenCalled();
        expect(hookResult!.step).toBe(5);
    });
});
