import styled from "styled-components"

export const CardContainer = styled.div<{ $isExpanded?: boolean }>`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    gap:26px;
    width:329px;
    height:${({ $isExpanded }) => $isExpanded ? '100%' : '179px'};
    transition: height 0.3s;
    padding:1.5rem .75rem 1.5rem .95rem;
    border-radius:0.5rem;
    background-color:${({ theme }) => theme.colors.backgroundCard};
    color:${({ theme }) => theme.colors.textCardColor};
    box-shadow: 4px 3px 5.7px 0px #00000070;

    ${({ $isExpanded }) => $isExpanded && `
        &:only-child {
            height: 280px;
            transition: height 0.3s;
        }
    `}
    
    hr{
        width:100%;
        display:${({ $isExpanded }) => $isExpanded ? 'none' : 'block'};
        border-color:${({ theme }) => theme.colors.borderCard};
    }
`

export const CardContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:44px;
    margin-top:0.5rem;

    svg{
        transition: transform 0.3s;
    }
`

export const OrderItens = styled.div`
    text-align:left;
    transition: all 0.3s;
    display:flex;
    flex-direction:column;
    gap:4px;

    p{
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.3613rem;
        text-align: left;
    }

    span{
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.3613rem;
        text-align: left;
    }
`

export const CardContainerExpanded = styled.div<{ $isExpanded?: boolean }>`
    text-align: center;
    button{
        background-color:transparent;
        border:none;
        cursor: pointer;
    }
    span{
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.3181rem;
        color:${({ theme }) => theme.colors.textExpandCard};
        transition: color 0.3s;
    }
`

export const CardItensExpand = styled.div<{ $isExpanded?: boolean }>`
    display:${({ $isExpanded }) => $isExpanded ? 'flex' : 'none'};
    transition: all 0.3s;
    flex-direction:column;
    gap:4px;

    p:nth-child(2) {
        overflow-y: auto;
    }
`

export const Observation = styled.p`
    overflow: autp;
`