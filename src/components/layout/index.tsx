import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { Header } from "../Header"


const ContentWrapper = styled.div`
  margin-left: 250px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px;
`

export const LayoutLogged = () => {
    return (
        <>
            <Header />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
        </>
    )
}