import styled from "styled-components";

export const Container = styled.main`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-left:5.2rem;
    margin-top:2.5rem;


    h1{
        font-size:3.3rem;
        text-align:center;
    }

    @media(min-width:1900px){
      margin-top:4rem;
    }

    @media(max-width:1699px){
      margin-top:1rem;
        }

    @media(max-height:1000px){
      margin-top:3px;
    }

    @media(max-width:1474px){
      margin-left:0;
      margin-top:.7rem;
  
    }

    @media(max-width:1693px){
          height:auto
    }

`

export const ButtonContainer = styled.div`
    width:100%;
    max-width:215px;

    button{
        width:100%;
}

@media(max-width:1474px){
        max-width:310px;
    }
`

export const Header = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`

export const TitleContainer = styled.div`
  @media(min-width:1900px){
    width:53%;
    margin-left:2.9125rem;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden; 
  background-color:${({ theme }) => theme.colors.whiteColor};
  width:100%;
  max-width:311px;

  div{
    display: flex;
    align-items: center;
  }

  &:focus-within {
        border-color: ${({ theme }) => theme.colors.sucessInput};
    }

    @media(min-width:1900px){
      margin-left:10px;
  }
`;

export const HeaderContent = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:83.6%;
        flex-wrap:wrap;

        @media(max-width:1420px){
          width:100%;
        }

        @media(max-width:1694px){
          flex-direction:column;
          gap:30px;
          justify-content:center;

          ${ButtonContainer} {
                order: 2;
            }

        ${Form} {
              order: 3;
          }
        }
`



export const SectionProductsList = styled.section`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:48px;    
    width:100%;
    height:700px;
    margin-top:79px;
    overflow-y:auto;

    &::-webkit-scrollbar{
        display:none;
    }
`



export const InputSearch = styled.input`
  border: none;
  outline: none;
  padding: 20px;
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.inputTextColor};
  width:100%;
  max-width:311px;


  &::placeholder {
   font-size:1.125rem;
   font-weight:400;
   line-height:21.09px;
   letter-spacing:0.04rem;

   color:${({ theme }) => theme.colors.darkGray}
  }
`;

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 16px;
  cursor: pointer;
  height:100%;
  border-left:1px solid ${({ theme }) => theme.colors.borderSearchButton};
  
  width:100%;
  max-width:60px;

  img{
    width:25px;
    height:25px;
  }
`;