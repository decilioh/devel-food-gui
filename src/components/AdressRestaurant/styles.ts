import styled from "styled-components";

export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    max-width:558px;
    gap:20px;
    padding:1.5rem;
`

export const InputsContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:14px;
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
    margin-top:1.5rem;
    
    button{
        width:50%;
    }
`

export const FieldsetFlex = styled.fieldset`
    background-color:transparent;
    display:flex;
    width:100%;
    gap:20px;
`

export const SpaceDiv = styled.div`
    height:100%;
    width:100%;
    background-color:transparent;
`

export const SpaceNumberAdress = styled.div`
    width:100%;
    max-width:187px;
`