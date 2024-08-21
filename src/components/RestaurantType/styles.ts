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
    max-width:558px;
    gap:20px;
    padding:1rem;
`

export const LogoView = styled.figure`
    margin: 0px 0px 5rem 0px;
`

export const InputsContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:10px;
    width:100%;
    
    fieldset{
        width:100%;
    }
`

export const FieldButton = styled.fieldset`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
    width:100%;
    max-width:456px;
    margin-top:1.5rem;
    
    button{
        width:100%;
    }
`