import styled from "styled-components";
import { ResetPassword } from "../../components/ResetPassword";
import { useNavigate } from "react-router-dom";

export const Main = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`


export const ResetPasswordLogged = () => {

    const handlePassWordReset = () => {
        console.log('Senha redefinida com sucesso!');
    }

    const navigatePage = useNavigate()
    return (
        <Main>
            <ResetPassword
                onSubmit={handlePassWordReset}
                navigate={() => navigatePage('/admin/perfil')}
            />
        </Main>
    )
}
