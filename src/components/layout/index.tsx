import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { Header } from "../Header"
import { Sidebar } from "../common/SideBar"


const ContentWrapper = styled.div`
  margin-left: 250px;
  width: 100%;
  max-width: 1540px;
  margin: 0 auto;
  padding: 16px;
`

const ContentFlexWrapper = styled.div`
    display:flex;
`

export const LayoutLogged = () => {
    return (
        <>
            <Header />
            <ContentFlexWrapper>
                <Sidebar />
                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
            </ContentFlexWrapper>
        </>
    )
}