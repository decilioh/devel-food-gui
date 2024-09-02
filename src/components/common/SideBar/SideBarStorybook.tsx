import { useContext, useState } from "react";
import { FaDollarSign, FaPhoneAlt, FaUser, FaUtensils } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { useTheme } from "../../../hooks/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { Icon, IconContainer, LineDivisor, MenuArrow, MenuArrowRight, MenuIcon, NavMenu, SidebarContainer, SidebarHeader, SideItem, Text } from "./styles";
import { SidebarContext } from "../../../context/SiderbarContext";
import { useWindowSize } from "../../../hooks/useWindowSize";
import styled from "styled-components";


export const NavItem = styled.li`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration:none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    transform: translateY(-2px);
    border-radius:14px 0px 0px 14px;
    margin-left:10px;


    div, li{
        color:${({ theme }) => theme.colors.textColorSideBarHover};
    }
  }

`;

export const SidebarStoryBook = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const { width } = useWindowSize();
    const { sideBarVisible } = useContext(SidebarContext);

    const sizeIcon = width < 680;

    const icon = theme.title === 'light'

    return (
        <SidebarContainer $isOpen={isOpen} $visible={sideBarVisible}>
            <SidebarHeader>
                <h3>{isOpen ? 'DEVELFOOD' : ''}</h3>
                <IconContainer id="open-side-bar">
                    {isOpen ? (
                        <MenuArrow onClick={() => setIsOpen(!isOpen)} />
                    ) : (
                        sizeIcon ? (
                            <MenuArrowRight onClick={() => setIsOpen(!isOpen)} />
                        ) : (
                            <MenuIcon onClick={() => setIsOpen(!isOpen)} />
                        )
                    )}
                </IconContainer>
            </SidebarHeader>
            <LineDivisor $isOpen={isOpen}>
                <hr />
            </LineDivisor>
            <NavMenu >
                <NavItem >
                    <Icon><AiFillHome /></Icon>
                    <Text $isOpen={isOpen}>Home</Text>
                </NavItem>
                <NavItem  >
                    <Icon><FaUser /></Icon>
                    <Text $isOpen={isOpen}>Perfil</Text>
                </NavItem>
                <NavItem >
                    <Icon><FaUtensils /></Icon>
                    <Text $isOpen={isOpen}>Menu</Text>
                </NavItem>
                <NavItem >
                    <Icon><FaPhoneAlt /></Icon>
                    <Text $isOpen={isOpen}>Pedidos</Text>
                </NavItem>
                <NavItem >
                    <Icon><FaDollarSign /></Icon>
                    <Text $isOpen={isOpen}>Promoções</Text>
                </NavItem>
                <SideItem>
                    <Icon>{icon ? <MdDarkMode /> : <MdLightMode />}</Icon>
                    <Text $isOpen={isOpen}>Tema</Text>
                </SideItem>
                <SideItem>
                    <Icon><TbLogout2 /></Icon>
                    <Text $isOpen={isOpen}>Sair</Text>
                </SideItem>
            </NavMenu>
        </SidebarContainer>
    );
};