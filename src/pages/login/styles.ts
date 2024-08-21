import styled from "styled-components";
interface ImageProps {
    $image: string;
}

export const Main = styled.main<ImageProps>`
    display:flex;
    width:100vw;
    height:100vh;
    overflow: hidden;
    background-color:${({ theme }) => theme.colors.backgroundLogin};

    @media (max-width: 830px) {
        background-image: url(${(props) => props.$image});
        justify-content:center;
        align-items:center;
    }
`

export const FigureIMG = styled.div<ImageProps>`
    flex: 1;
    background-image: url(${(props) => props.$image});
    background-size: cover;
    background-position: center;

    @media (max-width: 830px) {
        display:none;
    }
`

export const FormContainer = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    max-width:715px;
    

    @media (max-width: 830px) {
        height:100%;
    }
`

export const Box = styled.div`
    width:100%;
    max-width:558px;
    height:90%;
    display:flex;
    align-items:center;
    flex-direction:column;
    border-radius:23px;
    box-shadow:4px 4px 20px 0px ${({ theme }) => theme.colors.darkGray};
    background-color:${({ theme }) => theme.colors.backgroundColor};
    figure{
        margin-top:4.5rem;
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
    width:100%;
    max-width:450px;
    gap:40px;
    margin:1rem 0px 0px 0px;

    fieldset{
        display:flex;
        flex-direction:column;
        gap:20px;
        width:100%;

        input{
            width:100%;
            max-width:450px;
        }
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

export const LinkContainer = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    gap:4px;
    margin-top:1.75rem;
`