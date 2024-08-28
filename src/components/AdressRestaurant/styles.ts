import styled from "styled-components";

export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    max-width:606px;
    gap:18px;
    padding:1.5rem;

    input{
        padding:.72rem;
    }

    @media (max-width: 768px) {
        padding: 1.6rem;
    }

    @media (max-width: 480px) {
        gap: 10px;
    }
`

export const LogoContainer = styled.div`
    margin: 0px 0px 0.2rem 0px;
    @media (max-height: 760px) {
        margin-top:1rem;
  }

  @media (max-height: 720px) {
        margin-top:2rem;
  }
`

export const ContainerRestaurant = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:center;
    align-items:center;
    padding:1.5rem;
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
    gap:40px;
    width:100%;
    max-width:558px;
    margin-top:2.9rem;
    
    button{
        width:100%;
        max-width:259px;
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
    height:100%;
`