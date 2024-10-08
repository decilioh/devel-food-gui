import styled from "styled-components";

export const MenuItemContainer = styled.div`
  display: inline-block;
  margin: 10px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  position:relative;
  width:271px !important;
  height:271px !important;
`

export const Image = styled.img`
  width:271px !important;
  height:271px !important;
  border-radius: 24px;
  position:relative;
  background-position:center;
  background-size:cover;
  object-position:center;
  object-fit:cover;
`;

export const Overlay = styled.div`
  position: absolute;
  left:0;
  bottom:0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin-left:0.7125rem;
`;

export const OverlayContent = styled.div`
  display:flex;
  flex-direction:column;
  gap:2px;
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 2px;

  background-color:${({ theme }) => theme.colors.whiteColor};
  border-radius:50%;
  width:50px;
  height:50px;

  &:last-child {
      margin-bottom:1.5625rem;
    }

`;

export const Title = styled.p`
  margin-top: 10px;
  font-size: 1.25rem;

  font-weight:500;
  line-height:23.44px;
  letter-spacing:0.03rem;
`;