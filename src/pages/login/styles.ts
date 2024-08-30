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

    @media (max-width: 900px) {
        background-image: url(${(props) => props.$image});
        justify-content:center;
        align-items:center;
    }

    @media (max-width: 600px) {
        background-image: none;
    }


`

export const FigureIMG = styled.div<ImageProps>`
    flex: 1;
    background-image: url(${(props) => props.$image});
    background-size: cover;
    background-position: center;

    @media (max-width: 900px) {
        display:none;
    }
`

export const FormContainer = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    width:37.24vw;
    
    @media (max-width: 1178px) {
        height:100%;
        width:50%;
    }

    @media (max-width: 900px) {
        height:100%;
        width:70%;
    }

    @media (max-width: 600px) {
        width: 100%;   
    }
`

export const Box = styled.div`
    width:82.24%;
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

    @media (max-width: 900px) {
        width:100%;
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }

    @media (max-width: 480px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        width: 100%;
        height:100%;
        justify-content:center;
        gap:4rem;
    }
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:76.53%;
    gap:56px;
    margin:1rem 0px 0px 0px;

    fieldset{
        display:flex;
        flex-direction:column;
        gap:20px;
        width:100%;

        input{
            width:100%;
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

    @media (max-width: 600px) {
        width:90%;
    }

    

`

export const LinkContainer = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    gap:4px;
    margin-top:3.75rem;

    a{
        font-size:18px;
        letter-spacing:0.04rem;
    }

    @media (max-height:740px) {
        margin-top:3rem;
    }

    @media (max-height:670px) {
        margin-top:.8rem;
    }

    @media (max-height:620px) {
        margin-top:.5rem;
        flex-direction:row;
        gap:40px;
    }

    @media (max-height:668px) {
        margin-top:-3rem;
    }
`