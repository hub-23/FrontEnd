import styled, { css } from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/home/logo.svg';
import { Link } from 'react-router-dom';

export const FooterSection = styled.footer`
    padding-top: 64px;
    padding-bottom: 22px;
    background-color:  ${( props ) => props.color || props.theme.colors.primary};
`;

export const FooterContainer = styled.div`
    border: 1px solid yellow;
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 160px;
    padding-right: 158px;
`;

export const ContentOrganizer = styled.div`
    display: flex;
`;

export const Logo = styled( LogoSvg )`
  margin-right: 127px;
  path.text-path {
    fill: #fff;
  }
`;

export const NavWrapper = styled.div`
  margin-right: 97px;
`;

export const Header = styled.h4`
    margin-bottom: 16px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};
`;

export const NavItem = styled.li`
    &:not(:last-child) {
       margin-bottom: 12px;  
    }     
`;

export const NavLink = styled( Link )`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};     
`;

export const ContactsWrapper = styled.div`
    margin-right: 145px;
    margin-bottom: 32px;
`;

export const ContactsItem = styled.div`
    display: flex;
    gap: 8px;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
`;

export const Contacts = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};
`;

export const Email = styled.a`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};
`;

export const SocList = styled.ul`
    display: flex;
    gap: 12px;
    margin-right: 145px;
`;

export const FormBtn = styled.button`
    width: 224px;
    border: none;
    border-radius: 16px 0;
    padding: 14px 24px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.black};
`;

export const TermsRightsWrapper = styled.div`
    margin-top: 126px;
    text-align: center;
    & > div {
        width: 390px;
        margin: 0 auto 12px auto;
        position: relative;
        & > svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 164px;
        }
    }
`;

export const Terms = styled.a`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.white};
    ${( props ) => props.$first && css`
        margin-right: 17px; 
    `};
`;

export const Rights = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.white}; 
    
`;
