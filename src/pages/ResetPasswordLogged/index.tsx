import styled from "styled-components";
import { ResetPassword } from "../../components/ResetPassword";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { apiRestaurantRegister } from "../../services/backend";
import { AuthContext } from "../../context/AuthContext";

export const Main = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`


export const ResetPasswordLogged = () => {
    const [userEmail, setUserEmail] = useState('');
    const { user } = useContext(AuthContext)
    const fetchUserData = async (id: number | null | undefined) => {
        try {
            const response = await apiRestaurantRegister.get(`/restaurant/${id}`);


            setUserEmail(response.data.email)

        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
        }
    };

    useEffect(() => {
        fetchUserData(user?.id);
    }, []);


    const handlePassWordReset = () => {
        console.log('Senha redefinida com sucesso!');
    }


    const navigatePage = useNavigate()
    return (
        <Main>
            <ResetPassword
                onSubmitPassword={handlePassWordReset}
                navigate={() => navigatePage('/admin/perfil')}
                email={userEmail}
            />
        </Main>
    )
}
