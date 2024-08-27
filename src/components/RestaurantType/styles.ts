import styled from "styled-components";

export const Container = styled.main`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    max-width:590px;
    gap:60px;
    padding:1rem;
`

export const LogoView = styled.figure`
    margin: 0px 0px 1.2rem 0px;
`

export const InputsContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:10px;
    width:100%;
`

export const InputFieldset = styled.fieldset`
    width:100%;

        input{
            padding:.7rem;
        }
`


export const FieldButton = styled.fieldset`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:40px;
    width:100%;
    max-width:558px;
    margin-top:.6rem;

    button{
        width:100%;
        height:100%;
        max-height:62px;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    @media(max-width:380px){
            gap:20px
        }
`