import { TbMoodSadDizzy } from 'react-icons/tb'
import { Button } from '../../components/common/Button'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';

const MainContainer = styled.main`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:1rem;
    margin-top:70px;
    margin-right:16.5rem;

    button{
        width:100%;
        max-width:361px;
        height:100%;
        max-height:73px;
        a{
            color:${({ theme }) => theme.colors.textCardColor}
        }
    }

    @media(max-width:1163px){
        height:calc(100vh - 24px);
        margin-top:-4rem;
        align-items:none;
        margin-right:.5rem;
    }
`
export const LogoContainer = styled.div`
    margin-bottom:13px;
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
