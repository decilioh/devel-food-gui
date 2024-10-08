import styled from "styled-components";

export const Main = styled.main`
    width:100%;

    @media(max-height:1000px){
        height:calc(100vh - 135px);
        margin-top:-3rem;
    }

    @media(max-height:790px){
        height:700px;
        overflow-y:auto;
    }
    
`

export const HeaderContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap:40px;
    width:auto;
    margin: 71px 0 69px 124px;

    h1{
        font-size:3rem;
        line-height:56.25px;
        font-weight:500;
        text-align:center;
    }

    button{
        width:73px;
        height:51px;
        cursor: pointer;
        border-radius:20px;

        display:flex;
        justify-content:center;
        align-items:center;
    }

    @media(min-width:1900px){
        width:57%;
        justify-content:space-between;
    }

    @media(max-width:1900px){
        div{
        &:first-child{
            width:73px;
        }

        &:last-child{
            flex:1;
        }
    }
    }

    @media(max-width:1774px){
        width:auto;
    }

    @media(max-width:880px){
        flex-direction:column;
        margin-right:8rem;
        gap:10px;
        margin-top:4rem;
        
        h1{
            font-size:2.5rem;
        }
    }
    

    @media(max-width:630px){
        width:100%;
        margin:8rem 4rem 0 0;
    }

    @media(max-width:809px){
          margin-bottom:30px;
    }

    @media(max-height:1000px){
        margin-bottom:40px;
    }
`

export const FileContainer = styled.label<{ $hasError: boolean, $backgroundImage?: string }>`
    width:271px;
    height:271px;
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

export const SectionContainer = styled.section`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:84px;
    width:100%;

    @media(min-width:1900px){
        width:77%;
    }

    @media(max-width:1029px){
        gap:20px;
        margin-top:-1rem;
    }

    @media(max-width:743px){
        gap:24px;
    }

    @media(max-width:630px){
        padding:1rem;
    }
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    max-width:361px;
    gap:15px;

    input{
        margin-left:-1.3rem;
    }

    button{
        margin-top:3rem;
    }
`

export const DivDate = styled.div`
    width:265px;
    display:flex;
    flex-direction:column;

    input{
        position:relative;
        margin-left:1rem;

        &::-webkit-calendar-picker-indicator {
        opacity: 0;
        width:200px;
        position: absolute;
        margin-left: 3rem;
        }

        &::-webkit-inner-spin-button,
        &::-webkit-clear-button,
        &::-ms-clear,
        &::-ms-expand {
        display: none;
        }
    }
`

export const NameDish = styled.div`
    input{
        margin-left:-25px;

    }
`


