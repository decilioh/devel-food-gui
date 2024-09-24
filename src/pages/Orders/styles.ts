import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export const Main = styled.main`
    margin-top: 5.58rem;
    text-align:center;

    h1{
        font-size: 3rem;
        font-weight: 500;
        line-height: 3.5156rem;
        text-align: center;
        margin-bottom: 6.25rem;
    }
`

export const OrdersSections = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 1.25rem;
`

export const TitleOrder = styled.span`
    color: ${({ theme }) => theme.colors.TitleOrder};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.465rem;
    text-align: center;
`

export const OrderContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:86px;
`

export const OrderContent = styled.div<{ $isLast?: boolean }>`
    display:flex;
    align-items:center;
    flex-direction:column;
    border-left: 1px solid ${({ theme }) => theme.colors.borderOrder};
    border-right: ${({ $isLast, theme }) => $isLast ? `1px solid ${theme.colors.borderOrder}` : `none`};
    width:363px;
    height: auto;
    height: 32vw;
    padding:0.4rem;
    padding-top:1rem;
    gap:20px;
    overflow-y: auto;

    &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;
`


