import styled from "styled-components";

export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    max-width:1018px;
    gap:20px;
    padding:1rem;
    margin-top:1.7rem;

    @media(max-width:400px){
        margin-top:1.3rem;
    }
`

export const InputsContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:8px;
    
    fieldset{
        width:100%;
        max-width:558px;
    }
`

export const InputFieldset = styled.fieldset`
    width:100%;
    max-width:558px;
`

export const FieldButton = styled.fieldset`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:40px;
    max-width:578px;
    width:100%;
    margin-top:3.7rem;

    flex-direction: row-reverse;
    
    button{
        width:100%;
        max-width:259px;
    }
`

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    max-width:1080px;
`