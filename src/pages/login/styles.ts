import styled from "styled-components";
interface ImageProps {
    $image: string;
}

export const Main = styled.main`
    display:flex;
    width:100vw;
    height:100vh;
`

export const FigureIMG = styled.div<ImageProps>`
    flex: 1;
    background-image: url(${(props) => props.$image});
    background-size: cover;
    background-position: center;
`

export const FormContainer = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    width:30%;
`

export const Box = styled.div`
    width:80%;
    height:80%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:23px;
    box-shadow: 2px 2px 20px 0px ${({ theme }) => theme.colors.blackColor};

    figure{
        margin-bottom:1rem;
    }

    a{
        font-weight:400;
        font-size:1rem;
        text-decoration:none;
        color:${({ theme }) => theme.colors.primary}
    }
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:70%;
    gap:40px;

    fieldset{
        display:flex;
        flex-direction:column;
        gap:20px;
        width:100%;
    }

    button{
        width:100%;
        margin-bottom:1.5rem;
    }

`