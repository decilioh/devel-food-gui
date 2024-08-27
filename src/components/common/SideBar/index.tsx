import { useState } from "react";
import { Icon, IconContainer, LineDivisor, MenuArrow, MenuIcon, NavItem, NavMenu, SidebarContainer, SidebarHeader, Text, UserContainer, UserImage, UserName } from "./styles";
import { FaDollarSign, FaPhoneAlt, FaUser, FaUtensils } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";


export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SidebarContainer $isOpen={isOpen}>
            <SidebarHeader>
                <h3>{isOpen ? 'DEVELFOOD' : ''}</h3>
                <IconContainer>
                    {isOpen ? <MenuArrow onClick={() => setIsOpen(!isOpen)} />
                        : <MenuIcon onClick={() => setIsOpen(!isOpen)} />}
                </IconContainer>
            </SidebarHeader>
            <LineDivisor $isOpen={isOpen}>
                <hr />
            </LineDivisor>
            <NavMenu>
                <NavItem to='/home'>
                    <Icon><AiFillHome /></Icon>
                    <Text $isOpen={isOpen}>Home</Text>
                </NavItem>
                <NavItem to='/as'>
                    <Icon><FaUser /></Icon>
                    <Text $isOpen={isOpen}>Perfil</Text>
                </NavItem>
                <NavItem to='/sa'>
                    <Icon><FaUtensils /></Icon>
                    <Text $isOpen={isOpen}>Menu</Text>
                </NavItem>
                <NavItem to='/as'>
                    <Icon><FaPhoneAlt /></Icon>
                    <Text $isOpen={isOpen}>Pedidos</Text>
                </NavItem>
                <NavItem to='/sa'>
                    <Icon><FaDollarSign /></Icon>
                    <Text $isOpen={isOpen}>Promoções</Text>
                </NavItem>
            </NavMenu>
        </SidebarContainer>
    );
};