import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface SidebarProps {
  $isOpen?: boolean;
  $visible?: boolean;
}

interface TextProps {
  $isOpen?: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
  width: 100%;
  max-width: ${({ $isOpen }) => ($isOpen ? '270px' : '60px')};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.whiteColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: max-width 0.4s;
  @media(max-width:1776px){
    height:auto;
    margin-bottom:-5rem;
  }

  @media(max-width:1160px){
    height:auto;
  }

  @media(max-width:630px){
    transform: ${({ $visible }) => ($visible ? "translateX(-100%)" : "translateX(0%)")};
    transition: transform 1s ease-in-out;
    width:230px;
    position:fixed;
    z-index:9999;
    height:100%;
    margin-top:79px;
  }
`;

export const SidebarHeader = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3{
    font-size:1.7rem;
    font-weight:400;
    color:${({ theme }) => theme.colors.textColorSideBar};
    letter-spacing:0.1rem;
  }
`;

export const LineDivisor = styled.div<SidebarProps>`
    display:flex;
    justify-content:center;
    width:100%;
    height:1px;

    hr{
        width:${({ $isOpen }) => ($isOpen ? '80%' : '40%')};
        height:1px;
        margin-left:12px;
        border: 1px solid black;
        opacity:20%;
    }
`

export const IconContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

export const MenuIcon = styled(FaBars)`
  font-size: 24px;
  cursor: pointer;
  color:${({ theme }) => theme.colors.textColorSideBar};
`;

export const MenuArrow = styled(MdKeyboardArrowLeft)`
  font-size: 24px;
  cursor: pointer;
  color:${({ theme }) => theme.colors.textColorSideBar};
`

export const MenuArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 24px;
  cursor: pointer;
  color:${({ theme }) => theme.colors.textColorSideBar};
`

export const NavMenu = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display:flex;
  flex-direction:column;
  gap:14px;
`;

export const NavItem = styled(Link) <{ $isSubMenu?: boolean; $isOpenItem?: boolean }>`
  width: 100%;
  padding: 10px 20px;
  display:flex;
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

export const NavItemSubMenu = styled(Link) <{ $isSubMenu?: boolean; $isOpenItem?: boolean }>`
  width: 100%;
  padding: 10px 20px;
  display: ${({ $isOpenItem }) => $isOpenItem ? 'flex' : 'none'};
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration:none;
  margin-left:${({ $isSubMenu, $isOpenItem }) => $isSubMenu && $isOpenItem ? '2rem' : 'none'};



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

export const ItemSeparator = styled.div`
  display:flex;
`

export const SideItem = styled.div`
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

export const Icon = styled.div`
  font-size: 20px;
  color:${({ theme }) => theme.colors.textColorSideBar};
`;

export const Text = styled.li<TextProps>`
  margin-left: 20px;
  display: ${({ $isOpen }) => ($isOpen ? 'inline' : 'none')};
  color:${({ theme }) => theme.colors.textColorSideBar};
  font-size:1.2rem;
  letter-spacing:0.04rem;

  &:hover {
    color:${({ theme }) => theme.colors.textColorSideBarHover};
  }
`;

export const UserContainer = styled.div`
  margin-top: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const UserName = styled.span<TextProps>`
  margin-left: 10px;
  display: ${({ $isOpen }) => ($isOpen ? 'inline' : 'none')};
`;