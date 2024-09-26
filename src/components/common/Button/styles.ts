import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color:${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.textButtonColor};
    padding:.401rem;
    font-size:2rem;
    border-radius:10px;
    font-weight:500;
    line-height:3.076rem;

    &:disabled{
        opacity:0.9;
    }
`