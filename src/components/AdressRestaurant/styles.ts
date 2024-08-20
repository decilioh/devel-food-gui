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

    @media (max-width: 768px) {
        padding: 1rem;
    }

    @media (max-width: 480px) {
        gap: 10px;
    }
`

export const LogoContainer = styled.div`
    margin: -10px 0 1rem 0;
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
    max-width:456px;
    margin-top:1.5rem;
    
    button{
        width:100%;
    }
`

export const FieldsetFlex = styled.fieldset`
    background-color:transparent;
    display:flex;
    width:100%;
    gap:4px;
    height:100%;
    
`

export const SpaceDiv = styled.div`
    height:100%;
    width:70%;
    background-color:transparent;
`
export const SpaceDivName = styled.div`
    height:100%;
    width:60%;
    background-color:transparent;
`

export const SpaceNumberAdress = styled.div`
    width:30%;
    max-width:187px;
`