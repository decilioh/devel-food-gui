import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import Cookies from 'js-cookie';
import { mockUsers } from "../mocks/UserMock";

export interface AuthContextProps {
    SignIn: ({ email, password }: SignInCredentials) => Promise<void>;
    SignOut: () => void;
    user: UserProps | null;
    isAuthenticated: boolean;
    isLoading: boolean
}

export interface UserProps {
    email: string | null;
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
    const [isLoading, setIsLoading] = useState(true)

    const isAuthenticated = !!user


    useEffect(() => {
        const token = Cookies.get('authToken');
        console.log('Token from cookies:', token);
        if (token) {
            const mockUser = mockUsers.find(user => user.token === token);
            console.log('Mock user found:', mockUser);
            if (mockUser) {
                setUser({ email: mockUser.email });
            } else {
                console.warn('No user found for token');
                Cookies.remove('authToken');
            }
        }
        setIsLoading(false)
    }, []);



    const SignIn = async ({ email, password }: SignInCredentials) => {
        const user = mockUsers.find(user => user.email === email && user.password === password);

        if (user) {
            setUser({ email: user.email });
            Cookies.set('authToken', user.token);
        } else {
            console.log('Invalid credentials');
        }
    }

    const SignOut = () => {
        setUser(null);
        Cookies.remove('authToken');
    }

    const contextValue = useMemo(() => ({
        user,
        isAuthenticated: !isLoading && isAuthenticated,
        SignIn,
        SignOut,
        isLoading
    }), [user, isAuthenticated, isLoading]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}