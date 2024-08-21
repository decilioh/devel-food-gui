import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color:${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.textCardColor};
    padding:.7rem;
    font-size:2.2rem;
    border-radius:17px;
    font-weight:500;
`