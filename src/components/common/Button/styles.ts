import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color:${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.textCardColor};
    padding:.7rem;
    font-size:1.5rem;
    border-radius:8px;
    font-weight:500;
`