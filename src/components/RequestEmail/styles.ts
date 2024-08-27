import styled from "styled-components";

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:40px;
    width:100%;
    max-width:1018px;
    padding:1rem;


    fieldset{
        width:100%;
    }

    button{
        width:80%;
    }
`

export const FieldsetButton = styled.fieldset`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:40px;
    width:100%;
    max-width:1028px;

    button{
        width:100%;
        max-width:259px;
        height:100%;
        max-height:62px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:10px;
    }
`

export const FieldsetInput = styled.fieldset`
    max-width:558px;
    height:100%;
    max-height:52px;
`