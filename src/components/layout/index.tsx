import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { Header } from "../Header"
import Sidebar from "../common/SideBar"


const ContentFlexWrapper = styled.div`
    display:flex;
    height:100vh;
    overflow-y: hidden;
`

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  overflow-y: auto; 

`


export const LayoutLogged = () => {

    return (
        <>
            <ContentFlexWrapper>
                <Sidebar />
                <ContentWrapper>
                    <Header />
                    <Outlet />
                </ContentWrapper>
            </ContentFlexWrapper>
        </>
    )
}