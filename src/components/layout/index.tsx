import { Outlet, useLocation } from "react-router-dom"
import styled from "styled-components"
import { Header } from "../Header"
import { Sidebar } from "../common/SideBar"


const ContentWrapper = styled.div`
  margin-left: 250px;
  width: 100%;
  max-width: 1740px;
  margin: 0 auto;
  padding: 16px;

  @media(max-width:630px){
    margin-top:84px;
  }
`

const ContentFlexWrapper = styled.div`
    display:flex;
`

export const LayoutLogged = () => {

    const { pathname } = useLocation();

    pathname === '*'

    return (
        <>
            <Header />
            <ContentFlexWrapper>
                <Sidebar $locationError={pathname ? true : false} />
                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
            </ContentFlexWrapper>
        </>
    )
}