import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
`;

export const ToggleDiv = styled.div<{ $hasError?: boolean }>`
    display: flex;
    align-items: center;
    border: 1px solid ${({ $hasError, theme }) => ($hasError ? theme.colors.redColor : theme.colors.colorInputBorder)};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    padding: 1.1rem;
    cursor: pointer;
    user-select: none;
    justify-content:space-between;
    color:${({ theme }) => theme.colors.darkGray};

    &:focus-within {
        border-color: ${({ $hasError, theme }) => ($hasError ? theme.colors.redColor : theme.colors.sucessInput)};
    }


    div{
        display:flex;
        gap:18px;

        span{
            font-size:.9rem;
            font-weight:400;
            color:${({ theme }) => theme.colors.darkGray};
        }
    }
`;

export const CheckboxContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    max-height: 120px;
    overflow-y: auto;
    z-index: 1000;
    padding: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CheckboxItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    input[type="checkbox"] {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 8px;
        width:18px;
        height:18px;
        appearance:none;
        border:1px solid ${({ theme }) => theme.colors.darkGray};
        border-radius:4px;
        background:#d9d9d9;
        cursor: pointer;
        position:relative;

        &:checked{
            background: ${({ theme }) => theme.colors.redColor};
            border-color: ${({ theme }) => theme.colors.darkGray};
        }

        &:checked::after{
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            border-radius:4px;
            content: 'V';
            position: absolute;
            width: 18px;
            height: 18px;
            border-width: 0 2px 2px 0;
            background-color:transparent;
            color:${({ theme }) => theme.colors.whiteColor};
            background: ${({ theme }) => theme.colors.redColor};
            font-weight:400;
        }
    }

    label {
        cursor: pointer;
        color:${({ theme }) => theme.colors.darkGray};
    }
`;

export const ErrorMessage = styled.span`
    color:${({ theme }) => theme.colors.redColor};
    margin-top: 5px;
    display: block;
`;
