import styled from "styled-components";

export const Container = styled.div`
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

    div{
        display:flex;
        flex-direction:column;
        gap:10px;
    }
    
    p, span{
        font-size:18px;
    }
`

export const ActionContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
    max-width:456px;
    width:100%;

    button{
        width:100%;
        max-width:456px;
    }
`

export const LogoContainer = styled.div`
    margin: -10px 0 2rem 0;
`