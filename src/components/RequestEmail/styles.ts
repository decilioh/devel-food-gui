import styled from "styled-components";

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:40px;
    width:100%;
    max-width:558px;
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
`