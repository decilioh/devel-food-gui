import { useContext, useState, memo } from "react";
import { FaDollarSign, FaPhoneAlt, FaUser, FaUtensils } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { TbLogout2 } from "react-icons/tb";
import { Icon, IconContainer, LineDivisor, MenuArrow, MenuArrowRight, MenuIcon, NavItem, NavItemSubMenu, NavMenu, SidebarContainer, SidebarHeader, SideItem, Text } from "./styles";
import { SidebarContext } from "../../../context/SiderbarContext";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { AuthContext } from "../../../context/AuthContext";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { width } = useWindowSize();
    const { SignOut } = useContext(AuthContext);
    const { sideBarVisible } = useContext(SidebarContext);

    const sizeIcon = width < 680;

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
                <NavItemSubMenu $isSubMenu={true} $isOpenItem={isOpen} to='/admin/menu/prato' id="sidebar-menu-novo-prato">
                    <Icon><FaUtensils /></Icon>
                    <Text $isOpen={isOpen}>+ Cadastrar Prato</Text>
                </NavItemSubMenu>
                <NavItem to='/admin/pedidos' id="sidebar-orders">
                    <Icon><FaPhoneAlt /></Icon>
                    <Text $isOpen={isOpen}>Pedidos</Text>
                </NavItem>
                <NavItem to='/admin/promocoes' id="sidebar-promotions">
                    <Icon><FaDollarSign /></Icon>
                    <Text $isOpen={isOpen}>Promoções</Text>
                </NavItem>
                <NavItemSubMenu $isSubMenu={true} $isOpenItem={isOpen} to='/admin/promocoes/cadastrar' id="sidebar-menu-nova-promo">
                    <Icon><FaDollarSign /></Icon>
                    <Text $isOpen={isOpen}>+ Cadastrar promoção</Text>
                </NavItemSubMenu>
                <SideItem id="sidebar-logout" onClick={() => SignOut()}>
                    <Icon><TbLogout2 /></Icon>
                    <Text $isOpen={isOpen}>Sair</Text>
                </SideItem>
            </NavMenu>
        </SidebarContainer>
    );
};

export default memo(Sidebar);
