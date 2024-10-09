import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Login } from "../services/auth";
import Cookies from 'js-cookie';

export interface AuthContextProps {
    SignIn: ({ email, password }: SignInCredentials) => Promise<void>;
    SignOut: () => void;
    user: UserProps | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export interface UserProps {
    id: number | null;
}

export interface SignInCredentials {
    email: string;
    password: string;
}

export interface ContextProvider {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: ContextProvider) => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const isAuthenticated = !!user;

    const decodeToken = (token: string): { sub: number } | null => {
        try {
            const tokenParts = token.split('.');
            if (tokenParts.length !== 3) {
                throw new Error('Token JWT inválido');
            }

            const base64Url = tokenParts[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const decodedPayload = JSON.parse(atob(base64));

            return decodedPayload;
        } catch (error) {
            console.error('Erro ao decodificar o token:', error);
            return null;
        }
    };

    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
            const decoded = decodeToken(token);
            if (decoded?.sub) {
                setUser({ id: decoded.sub });
                console.log(user?.id)
            } else {
                SignOut();
            }
        } else {
            Cookies.remove('authToken');
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            SignOut();
            toast.info("Sessão expirada, faça login para continuar")
            window.location.href = '/';
        }, 59 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    const SignIn = async (userCredentials: SignInCredentials) => {
        try {
            const userData = await Login(userCredentials);

            if (userData) {
                const decoded = decodeToken(userData);
                if (decoded?.sub) {
                    setUser({ id: decoded.sub });
                    Cookies.set('authToken', userData);
                    toast.success('Login realizado com sucesso!');
                } else {
                    throw new Error("Usuário não existe");
                }
            }
        } catch (error) {
            toast.error('Email ou senha inválidos');
        }
    };

    const SignOut = () => {
        setUser(null);
        Cookies.remove('authToken');
    };

    const contextValue = useMemo(() => ({
        user,
        isAuthenticated: !isLoading && isAuthenticated,
        SignIn,
        SignOut,
        isLoading,
    }), [user, isAuthenticated, isLoading]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
