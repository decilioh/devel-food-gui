import styled from "styled-components";

export const Container = styled.main`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media(max-height:820px){
        margin-top:100px;
    }

    @media(max-height:740px){
        margin-top:200px;
    }

    @media(max-height:630px){
        margin-top:300px;
    }

`

export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    max-width:590px;
    gap:20px;
    padding:1rem;
`

export const LogoView = styled.figure`
    margin: 0px 0px 1.2rem 0px;
`

export const InputsContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:10px;
    width:100%;
`

export const InputFieldset = styled.fieldset`
    width:100%;
`


export const FieldButton = styled.fieldset`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:40px;
    width:100%;
    max-width:558px;
    margin-top:3rem;

    flex-direction: row-reverse;

    button{
        width:100%;
    }

    @media(max-width:380px){
            gap:20px
        }
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