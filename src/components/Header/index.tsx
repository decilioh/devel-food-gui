import styled from 'styled-components'
import logoLight from '../../assets/images/HeaderLight.svg'
import logoDark from '../../assets/images/HeaderDark.svg'
import { useTheme } from '../../hooks/useTheme'
import { FaBars } from 'react-icons/fa'
import { useContext } from 'react'
import { SidebarContext } from '../../context/SiderbarContext'

const HeaderStyle = styled.header`
    background-color:${({ theme }) => theme.colors.primary};
    display:flex;
    justify-content:center;
    align-items:center;
    padding:.813rem;

    button{
        background-color:transparent;
        border:none;
    }

    @media(max-width:630px){
        justify-content:space-between;
        width:100%;
        position:fixed;
        z-index:9999;
    }

`
const MenuIcon = styled(FaBars)`
  font-size: 24px;
  cursor: pointer;
  color:${({ theme }) => theme.colors.textColorSideBar};
  display:none;
  width:30px;

  @media(max-width:630px){
    display:block
  }
`;

const LogoContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex:1;
`


export const Header = () => {
    const { theme } = useTheme();
    const { setSideBarVisible, sideBarVisible } = useContext(SidebarContext);
    const logo = theme.title === 'light' ? logoLight : logoDark;

    return (
        <HeaderStyle>
            <button onClick={() => setSideBarVisible(!sideBarVisible)}>
                <MenuIcon />
            </button>
            <LogoContainer>
                <img src={logo} alt="" />
            </LogoContainer>
        </HeaderStyle>
    )
}