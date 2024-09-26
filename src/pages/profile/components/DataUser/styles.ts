import styled from "styled-components";

export const FormContainer = styled.form`
    display:flex;
    flex-direction:column;
    gap:11px;
`

export const FileContainer = styled.label<{ $hasError: boolean, $backgroundImage?: string }>`
    width:230px;
    height:200px;
    position:relative;
    cursor: pointer;
    border: 1px solid ${({ $hasError, theme }) => ($hasError ? theme.colors.redColor : theme.colors.colorInputBorder)};
    border-radius:24px;

    background: ${({ $backgroundImage, theme }) =>
        $backgroundImage ? `url(${$backgroundImage})` : theme.colors.backgroundFile};

    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
        
    
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    svg{
        margin-bottom:1.4375rem;
        display:${({ $backgroundImage }) => $backgroundImage ? 'none' : 'block'}
    }

    input{
        opacity:0%;
        position:absolute;
    }

    span{
        font-size: 18px;
        font-weight: 400;
        line-height: 21.09px;
        text-align: center;
        color:#383838;

        display:${({ $backgroundImage }) => $backgroundImage ? 'none' : 'block'}
    }

    &:focus-within{
        border: 1px solid ${({ $hasError, theme }) => ($hasError ? theme.colors.redColor : theme.colors.sucessInput)};
    }
`

export const File = styled.div`
    display:flex;
    justify-content:center;
    span{
        &:last-child{
            color:${({ theme }) => theme.colors.redColor};
            text-align:center;
            display:flex;
            justify-content:center;
            margin-top:10px;
            letter-spacing:0.04rem;
            font-size:.8rem
        }
    }
`