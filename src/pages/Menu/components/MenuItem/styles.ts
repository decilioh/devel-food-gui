import styled from "styled-components";

export const MenuItemContainer = styled.div`
  display: inline-block;
  margin: 10px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  position:relative;
`

export const Image = styled.img`
  width:100%;
  height:100%;
  max-width:271px;
  max-height:271px;
  border-radius: 8px;
  position:relative;
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
  font-size: 1.125rem;

  font-weight:600;
  line-height:21.09px;
  letter-spacing:0.03rem;
`;