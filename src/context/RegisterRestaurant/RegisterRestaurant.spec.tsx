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
        photo: string;
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
                password: '$2a$10$44PGlvxaFaAyqMZlKK4u2.WNP74eFpO2POYZAohTaxqGdH9q5woRm',
            });
            hookResult.setRestaurantTypeData({
                name: 'Restaurante Teste',
                telefone: '11943232328',
                restaurantType: 'Brasileira,Churrasco',
                photo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
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

        expect(registerRestaurant).toHaveBeenCalledWith(expect.objectContaining({
            email: 'teste@restaurante.com',
            cnpj: '76931734000156',
            password: expect.any(String),
            phoneNumber: '11943232328',
            photo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            restaurantAddress: expect.any(Object),
        }));

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
                password: '$2a$10$44PGlvxaFaAyqMZlKK4u2.WNP74eFpO2POYZAohTaxqGdH9q5woRm',
            });
            hookResult.setRestaurantTypeData({
                name: 'Restaurante Teste',
                telefone: '11999999999',
                restaurantType: 'Italiana, Japonesa',
                photo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
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
