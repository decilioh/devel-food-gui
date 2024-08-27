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
    margin-top:3.4rem;

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

    input{
        padding: .8rem;
    }
`

export const FieldButton = styled.fieldset`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:40px;
    max-width:578px;
    width:100%;
    margin-top:3.7rem;
    
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

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    max-width:1080px;
`