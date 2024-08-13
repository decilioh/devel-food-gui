import styled from "styled-components";
interface ImageProps {
    $image: string;
}

export const Main = styled.main<ImageProps>`
    display:flex;
    width:100vw;
    height:100vh;
    overflow: hidden;

    @media (max-width: 828px) {
        background-image: url(${(props) => props.$image});
    }
`

export const FigureIMG = styled.div<ImageProps>`
    flex: 1;
    background-image: url(${(props) => props.$image});
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        display:none;
    }
`

export const FormContainer = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    width:30%;

    @media (max-width: 1720px) {
        width: 45%;
    }

    @media (max-width: 1280px) {
        width: 45%;
    }

    @media (max-width: 828px) {
        width: 100%;
    }

`

export const Box = styled.div`
    width:80%;
    height:90%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:23px;
    box-shadow: 2px 2px 20px 0px ${({ theme }) => theme.colors.blackColor};
    background-color:${({ theme }) => theme.colors.backgroundColor};
    figure{
        margin-bottom:1rem;
    }

    a{
        font-weight:400;
        font-size:1rem;
        text-decoration:none;
        color:${({ theme }) => theme.colors.primary}
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }

    @media (max-width: 480px) {
        width: 90%;
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

    @media (max-width: 768px) {
        gap: 20px;
    }

    @media (max-width: 480px) {
        gap: 15px;
    }

`