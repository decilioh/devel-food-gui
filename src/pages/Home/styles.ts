import styled from "styled-components";

export const MainContainer = styled.main`
    display:flex;
    width:100%;
    padding:1rem;
    gap:120px;
    margin-top:6rem;


    @media(max-width:1765px){
        gap:80px;
        margin-left:0rem;
    }


    @media(max-width:1440px){
        margin-top:2rem;
    }


    @media(max-width:1161px){
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        gap:200px;
    }

    @media(max-width:1000px){
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        gap:200px;
    }

    @media(max-width:840px){
        gap:0x;
    }

    @media(max-width:1162px){
        height:calc(100vh - 84px);
        overflow-y:auto;
    }

    @media(max-height:1000px){
        margin-top:1.52rem;
    }

`

export const SectionReviewsAndPromotions = styled.section`
    width:100%;
    max-width:845px;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    gap:58px;

    hr{
        width:100%;
        max-width:1001px;
        font-size:1px;
        color:${({ theme }) => theme.colors.darkGray}
    }

    @media(max-width:1163px){
        width:100%;
    }
`

export const ReviewsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    gap:31px;


    h2{
        font-size:3rem;
        font-weight:500;
        line-height:56.25px;
    }
`

export const PromotionsImages = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    gap:25px;

    figure{
        width:100%;
        max-width:300px;
    }

    @media(max-width:1161px){
        flex-wrap:nowrap;
    }

    @media(max-width:1000px){
        flex-wrap:wrap;
    }
`

export const PromotionsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap: 66px;

    h3{
        font-size: 3rem;
        font-weight: 500;
        line-height: 56.25px;
        text-align: center;
    }
`

export const DividerBottom = styled.hr`
    width:100%;
    max-width:801px;
    display:none;
    margin-top:4rem;
    margin-bottom:-4rem;
    border-bottom:1px solid ${({ theme }) => theme.colors.darkGray};

        @media(max-width:800px){
            display:block;
    }
`

export const Divider = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.colors.darkGray};
  height: 770px;
  margin-left:-4rem;

  @media(max-width:1480px){
        display:none;
    }
`;

export const SectionFeedback = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:1.5rem;
    gap:70px;
    width:100%;
    max-width:609px;

    @media(max-width:1440px){
        margin-top:-10rem;
    }
    @media(max-width:1162px){
        margin-top:0rem;
    }

    h4{
        font-size: 48px;
        font-weight: 500;
        line-height: 56.25px;
        text-align: center;
    }

`
