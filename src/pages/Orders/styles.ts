import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    overflow-x: auto;
`;

export const Main = styled.main`
    margin-top: 5.58rem;
    text-align: center;

    h1 {
        font-size: 3rem;
        font-weight: 500;
        line-height: 3.5156rem;
        text-align: center;
        margin-bottom: 6.25rem;

        @media (max-width: 768px) {
            font-size: 2.5rem; 
            margin-bottom: 4rem;
        }

        @media (max-width: 630px) {
            margin-top:4rem;
        }


        @media (max-width: 480px) {
            font-size: 2rem;
            margin-bottom: 3rem;
        }

        @media (max-height: 1000px) {
            margin-bottom: 3.58rem;
        }


    }

    @media (max-height: 1000px) {
            margin-top: 1.58rem;
        }
    
`;

export const OrdersSections = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;

    @media (max-width: 1579px) {
        margin-left: 10rem;
    }

    @media (max-width: 1434px) {
        margin-left: 22rem;
    }

    @media (max-width: 1240px) {
        margin-left: 35rem;
    }

    @media (max-width: 1022px) {
        margin-left: 45rem;
    }

    @media (max-width: 865px) {
        margin-left: 55rem;
    }

    @media (max-width: 720px) {
        margin-left: 65rem;
    }

    @media (max-width: 768px) {
        gap: 0.5rem;
    }

    @media (max-width: 630px) {
        margin-left:65rem;
    }

    @media (max-width: 457px) {
        margin-left:69rem;
    }

    @media (max-width: 327px) {
        margin-left:74rem;
    }


`;

export const TitleOrder = styled.span`
    color: ${({ theme }) => theme.colors.TitleOrder};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.465rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const OrderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 56px;

    @media (max-height: 1000px) {
        gap: 40px;
    }

    @media (max-width: 768px) {
        gap: 40px;
    }
`;

export const OrderContent = styled.div<{ $isLast?: boolean }>`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-left: 1px solid ${({ theme }) => theme.colors.borderOrder};
    border-right: ${({ $isLast, theme }) => ($isLast ? `1px solid ${theme.colors.borderOrder}` : `none`)};
    width: 363px;
    height: 56vh;
    padding: 1rem;
    padding-top: 1rem;
    gap: 20px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;

    @media (max-height: 1000px) {
        height: 64vh;
    }

    @media (max-height: 720px) {
        height: 54vh;
    }
`;
