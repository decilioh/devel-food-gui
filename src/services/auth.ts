import { apiRestaurantRegister } from "./backend";

interface LoginProps {
    email: string;
    password: string;
}

export const Login = async (authData: LoginProps) => {
    try {
        const response = await apiRestaurantRegister.post('/auth', authData);
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        if (error.response?.data?.message) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('Erro ao fazer login');
        }
    }
}
