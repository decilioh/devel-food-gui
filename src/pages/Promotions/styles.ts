import styled from "styled-components";

export const Container = styled.main`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-left:5.2rem;
    margin-top:3.6rem;


    h1{
      font-size: 3rem;
      font-weight: 500;
      line-height: 56.25px;
      text-align: center;
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
    max-width:340px;

    button{
        width:100%;
        letter-spacing:0.09rem;
        font-weight:500;
        line-height:49.22px;
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

    @media(max-width:630px){
      margin-top:6rem;
    }
`

export const TitleContainer = styled.div`
  @media(min-width:1900px){
    width:40%;
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
  margin-right:2rem;

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

  @media(max-width:1695px){
    margin-right:0;
    max-width:340px;
  }
`;

export const HeaderContent = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        max-width:1486px;
        flex-wrap:wrap;

        @media(max-width:1420px){
          width:100%;
        }

        @media(max-width:1494px){
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
export const NoItemsMessage = styled.div`
    text-align: center;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:-13rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 28.13px;
    color:#999090;

`;


export const SectionProductsList = styled.section`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:45px;    
    width:92%;
    height:700px;
    margin-top:79px;
    overflow-y:auto;

    &::-webkit-scrollbar{
        display:none;
    }

    @media(max-height:1000px){
        margin-top:67px;
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
