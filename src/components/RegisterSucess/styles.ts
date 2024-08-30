import styled from "styled-components";

export const Container = styled.main`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:100px;
    padding:1rem;
    text-align:center;
`

export const CheckContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
    

    span, p{
        font-size:18px;
    }
`

export const ActionContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
    width:100%;
    font-size:18px;
    max-width:456px;

    button{
        width:100%;
    }
`

export const LogoContainer = styled.div`
    margin: -10px 0 2rem 0;
`