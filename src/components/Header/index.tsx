import styled from 'styled-components'
import logoLight from '../../assets/images/HeaderLight.svg'
import logoDark from '../../assets/images/HeaderDark.svg'
import { useTheme } from '../../hooks/useTheme'
import { FaBars } from 'react-icons/fa'
import { useContext } from 'react'
import { SidebarContext } from '../../context/SiderbarContext'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

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
const Icon = styled.div`
    color:${({ theme }) => theme.colors.textColorSideBar};
    cursor:pointer;
    display:flex;
    justify-content:center;
    position:absolute;
    right:0;
    margin-right:2.5rem;
    transition: color 0.3s ease;

    &:hover{
        opacity:80%;
    }

    
`


export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { setSideBarVisible, sideBarVisible } = useContext(SidebarContext);
    const logo = theme.title === 'light' ? logoLight : logoDark;
    const isDarkTheme = theme.title === 'light'

    return (
        <HeaderStyle>
            <button onClick={() => setSideBarVisible(!sideBarVisible)}>
                <MenuIcon />
            </button>
            <LogoContainer>
                <img src={logo} alt="" />
            </LogoContainer>
            <Icon onClick={() => toggleTheme()}>
                {isDarkTheme ?
                    <MdDarkMode size={30} />
                    : <MdLightMode size={30} />
                }
            </Icon>
        </HeaderStyle>
    )
}