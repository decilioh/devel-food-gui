import { Link } from "react-router-dom"
import { LogoDevelFood } from "../../components/common/Logo"
import styled from "styled-components"
import { Button } from "../../components/common/Button"

const MainContainer = styled.main`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
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
`
export const LogoContainer = styled.div`
    margin-bottom:72px;
`

const MessageError = styled.div`
    width:100%;
    max-width:472px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-bottom:66px;
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

export const Error404WithoutUser = () => {

    return (
        <MainContainer>
            <LogoContainer>
                <LogoDevelFood />
            </LogoContainer>

            <MessageError>
                <span>404</span>
                <p>
                    Você entrou em alguma página não existente ou ocorreu algum
                    erro por parte do nosso sistema, retorne para a página inicial
                </p>
            </MessageError>

            <Button>
                <Link to="/login">Home</Link>
            </Button>
        </MainContainer>
    )
}
