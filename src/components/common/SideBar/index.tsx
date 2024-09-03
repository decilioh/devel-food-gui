import { useContext, useState } from "react";
import { FaDollarSign, FaPhoneAlt, FaUser, FaUtensils } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { useTheme } from "../../../hooks/useTheme";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { Icon, IconContainer, LineDivisor, MenuArrow, MenuArrowRight, MenuIcon, NavItem, NavMenu, SidebarContainer, SidebarHeader, SideItem, Text } from "./styles";
import { SidebarContext } from "../../../context/SiderbarContext";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { AuthContext } from "../../../context/AuthContext";


export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { width } = useWindowSize();
    const { SignOut } = useContext(AuthContext);
    const { sideBarVisible } = useContext(SidebarContext);

    const sizeIcon = width < 680;

    const icon = theme.title === 'light'

    return (
        <SidebarContainer $isOpen={isOpen} $visible={sideBarVisible} id="sidebar-container">
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
            <NavMenu id="sidebar-itens-container">
                <NavItem to='/admin/home' id="sidebar-home">
                    <Icon><AiFillHome /></Icon>
                    <Text $isOpen={isOpen}>Home</Text>
                </NavItem>
                <NavItem to='/admin/perfil' id="sidebar-profile">
                    <Icon><FaUser /></Icon>
                    <Text $isOpen={isOpen}>Perfil</Text>
                </NavItem>
                <NavItem to='/admin/menu' id="sidebar-menu">
                    <Icon><FaUtensils /></Icon>
                    <Text $isOpen={isOpen}>Menu</Text>
                </NavItem>
                <NavItem to='/admin/pedidos' id="sidebar-orders">
                    <Icon><FaPhoneAlt /></Icon>
                    <Text $isOpen={isOpen}>Pedidos</Text>
                </NavItem>
                <NavItem to='/admin/promocoes' id="sidebar-promotions">
                    <Icon><FaDollarSign /></Icon>
                    <Text $isOpen={isOpen}>Promoções</Text>
                </NavItem>
                <SideItem onClick={() => toggleTheme()} id="sidebar-theme">
                    <Icon>{icon ? <MdDarkMode /> : <MdLightMode />}</Icon>
                    <Text $isOpen={isOpen}>Tema</Text>
                </SideItem>
                <SideItem id="sidebar-logout" onClick={() => SignOut()}>
                    <Icon><TbLogout2 /></Icon>
                    <Text $isOpen={isOpen}>Sair</Text>
                </SideItem>
            </NavMenu>
        </SidebarContainer>
    );
};