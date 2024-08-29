import styled from "styled-components";

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:38px;
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

export const FieldsetButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:40px;
    width:100%;
    max-width:1028px;
    flex-direction: row-reverse;

    button{
        width:100%;
        max-width:259px;
    }
`

export const FieldsetInput = styled.fieldset`
    max-width:558px;
`