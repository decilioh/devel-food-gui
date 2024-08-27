import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:40px;
    padding:1rem;
    text-align:center;
    width:100%;
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
    gap:61px;
    width:100%;
    max-width:1018px;

    span{
        color:${({ theme }) => theme.colors.verifyCodeSpanColor};
    }

    div{
        display:flex;
        justify-content:center;
        width:100%;
        max-width:1018px;
        gap:40px;
        
    }

    button{
        width:100%;
        max-width:259px;
        height:100%;
        max-height:62px;
        border-radius:10px;

        display:flex;
        justify-content:center;
        align-items:center;
    }
`

export const Message = styled.p`
    color:${({ theme }) => theme.colors.verifyCodeColor};
    text-align:left;
`