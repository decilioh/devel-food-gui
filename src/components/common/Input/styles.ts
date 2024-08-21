import styled from "styled-components";

export const Container = styled.div`
    background-color:${({ theme }) => theme.colors.whiteColor};
    border-radius: 8px;
    height:100%;
`

export const InputWrapper = styled.div<{ $hasError: boolean }>`
    padding: 8px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${({ $hasError, theme }) => ($hasError ? theme.colors.redColor : theme.colors.colorInputBorder)};
    color:${({ theme }) => theme.colors.darkGray};
    transition: border-color 0.3s;

    &:focus-within {
        border-color: ${({ $hasError, theme }) => ($hasError ? theme.colors.redColor : theme.colors.sucessInput)};
    }
`;

export const StyledInput = styled.input`
    border: none;
    outline: none;
    border-radius: 8px;
    flex: 1;
    padding: .7rem;
    width:100%;
    color:${({ theme }) => theme.colors.darkGray};

    &::placeholder{
        color:${({ theme }) => theme.colors.darkGray};
    }
`;

export const IconWrapper = styled.div`
    margin-right: 8px;
    color:${({ theme }) => theme.colors.darkGray};
`;

export const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.redColor};
    font-size: .8rem;
    text-align:left;
    background-color:${({ theme }) => theme.colors.backgroundColor};
`;