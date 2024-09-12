import { TbMoodSadDizzy } from 'react-icons/tb'
import { Button } from '../../components/common/Button'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { Helmet } from 'react-helmet-async';

const MainContainer = styled.main`
    display:flex;
    align-items:center;
    flex-direction:column;
    padding:1rem;

    button{
        width:100%;
        max-width:361px;
        height:100%;
        max-height:73px;
        a{
            color:${({ theme }) => theme.colors.textCardColor}
        }
    }

    @media(max-width:1900px){
        margin-right:0px;
    }

    @media(min-width:1900px){
        margin-top:70px;
        
    }

    @media(max-height:1000px){
        height:calc(100vh - 182px);
    }

    @media(max-width:630px){
        margin-top:6rem;
    }

    @media(max-height:592px){
        height:100vh;
        height:600px;
        overflow-y:auto;
    }

`
export const LogoContainer = styled.div`
    margin-bottom:-12px;
`

const MessageError = styled.div`
    width:100%;
    max-width:472px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-bottom:26px;
    span{
        font-size:128px;
        line-height:150px;
        font-weight:700;
        color:${({ theme }) => theme.colors.primary}
    }
    p{
        font-size:1.5rem;
        text-align:center;
        margin-top:-8px;
    }
`



export const ErrorUserLogged = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    const colorIcon = theme.title === 'light' ? '#071A40' : '#07D9D9';
    return (
        <MainContainer>
            <Helmet title="Não encontrado" />
            <LogoContainer>
                <TbMoodSadDizzy size={230} color={colorIcon} id="icon-error" />
            </LogoContainer>

            <MessageError>
                <span id="error-404">404</span>
                <p id="message-error">
                    Você entrou em alguma página não existente ou ocorreu algum
                    erro por parte do nosso sistema, retorne para a página inicial
                </p>
            </MessageError>

            <Button onClick={() => navigate('/admin/home')} id="button-link-home">
                Home
            </Button>
        </MainContainer>
    )
}
