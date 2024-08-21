import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:40px;
    padding:1rem;
    text-align:center;
`

export const CheckContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
    span{
        color:${({ theme }) => theme.colors.verifyCodeColor}
    }
`

export const ActionContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
    width:100%;
    max-width:361px;

    button{
        width:90%;
        max-width:361px;
    }
`

export const Message = styled.p`
    color:${({ theme }) => theme.colors.verifyCodeColor};
    text-align:left;
`