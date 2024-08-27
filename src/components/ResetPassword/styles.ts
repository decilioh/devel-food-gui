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
`

export const InputsContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:10px;
    gap:14px;
    width:100%;
    
    fieldset{
        width:100%;
        max-width:558px;
        
    }
`

export const FieldButton = styled.fieldset`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:40px;
    width:100%;
    margin-top:2.75rem;
    
    button{
        width:100%;
        max-width:259px;
        height:100%;
        max-height:62px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:10px;
    }
`