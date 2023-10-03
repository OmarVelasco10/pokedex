import styled from "styled-components";
import { Link } from "react-router-dom";


export const Footer = styled.footer`
  padding: 10px;
  background:  ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

export const FooterLink = styled(Link)`
    text-decoration: none;
    color:  ${(props) => props.theme.colors.primaryColor};
    font-size: 12px;
`;

export const Span = styled.span`
    color:  ${(props) => props.theme.colors.primaryColor};
    font-size: 12px;
`;
