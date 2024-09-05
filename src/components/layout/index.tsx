import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { Header } from "../Header"
import { Sidebar } from "../common/SideBar"


const ContentWrapper = styled.div`
  margin-left: 250px;
  width: 100%;
  max-width: 1740px;
  height:calc(100vh - 80px);
  flex:1;
  margin: 0 auto;
  padding: 16px;

  @media(max-width:630px){
    margin-top:84px;
  }

  @media(max-height:1000px){
        height:auto;
    }
`

const ContentFlexWrapper = styled.div`
    display:flex;
    height:auto;
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