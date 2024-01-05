import styled, { css } from 'styled-components';
import { device } from '../../styles/device';
import { transition } from '../../utils/variables.styled';
import { ReactComponent as LogoSvg } from '../../assets/home/logo.svg';
import { Link } from 'react-router-dom';

export const FooterSection = styled.footer`
    padding-top: 64px;
    padding-bottom: 22px;
    background-color:  ${( props ) => props.color || props.theme.colors.primary};
    @media ${device.sm} {
        padding-top: 40px;
        padding-bottom: 20px;
    }
`;

export const FooterContainer = styled.div`
    border: 1px solid yellow;
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 160px;
    padding-right: 158px;
    @media ${device.sm} {
        background-color: darkblue;
        max-width: 576px;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const ContentOrganizer = styled.div`
    display: flex;
    @media ${device.sm} {
        display: block;
    }
`;

export const Logo = styled( LogoSvg )`
  margin-right: 127px;
  path.text-path {
    fill: #fff;
  }
  @media ${device.sm} {
    margin-right: 0;
    margin-bottom: 40px;
    width: 93px;
    height: 24px;
  }
`;

export const NavWrapper = styled.div`
  margin-right: 97px;
  @media ${device.sm} {
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

export const Header = styled.h4`
    margin-bottom: 16px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.2px;
    text-align: left;
    color: ${( props ) => props.color || props.theme.colors.white};
    @media ${device.sm} {
      font-size: 16px;
      letter-spacing: 0.16px;
    }
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
    @media ${device.sm} {
        font-size: 14px;
    }
`;

export const ContactsWrapper = styled.div`
    margin-right: 145px;
    margin-bottom: 32px;
    @media ${device.sm} {
        font-size: 14px;
        margin-right: 0;
        margin-bottom: 40px;
    }
`;

export const ContactsItem = styled.div`
    display: flex;
    gap: 8px;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
`;

export const Schedule = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};
    @media ${device.sm} {
        font-size: 14px;
    }
`;

export const Email = styled.a`
    display: flex;
    gap: 8px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};
    fill: ${( props ) => props.color || props.theme.colors.primary};
    stroke: ${( props ) => props.color || props.theme.colors.white};
    -webkit-transition: fill ${transition}, stroke ${transition};
    transition: fill ${transition}, stroke ${transition};
    &:not(:last-child) {
      margin-bottom: 12px;
    }
    @media ${device.sm} {
        font-size: 14px;
    }
    &:hover > svg {   
        fill: ${( props ) => props.color || props.theme.colors.white};
        stroke: ${( props ) => props.color || props.theme.colors.primary}; 
        -webkit-transition: fill ${transition}, stroke ${transition};
        transition: fill ${transition}, stroke ${transition};
    }
    &:active {
    text-decoration: underline;
  }
`;

export const SocList = styled.ul`
    display: flex;
    gap: 12px;
    margin-right: 145px;
    @media ${device.sm} {
        margin-right: 0;
        margin-bottom: 40px;
    }
    & svg {
        cursor: pointer;
        fill: ${( props ) => props.color || props.theme.colors.primary};
        stroke: ${( props ) => props.color || props.theme.colors.white};
        stroke-width: 2;
        -webkit-transition: fill ${transition}, stroke ${transition};
        transition: fill ${transition}, stroke ${transition};
        &:hover {   
            fill: ${( props ) => props.color || props.theme.colors.white};
            stroke: ${( props ) => props.color || props.theme.colors.primary}; 
            stroke-width: 0;
            -webkit-transition: fill ${transition}, stroke ${transition};
            transition: fill ${transition}, stroke ${transition};
        }        
    }
`;

export const FormBtnWrapper = styled.div`
    text-align: center;
`;

export const FormBtn = styled.button`
    width: 224px;
    border: 4px solid ${( props ) => props.color || props.theme.colors.white};
    border-radius: 16px 0;
    padding: 10px 16px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.black};
    @media ${device.sm} {
        width: 320px;
        font-size: 16px;
        font-weight: 500;
        margin: 0 auto;
    }
    -webkit-transition: background-color ${transition}, border-color ${transition};
    transition: background-color ${transition}, border-color ${transition}, color ${transition};
    &:hover,
     :focus {
        background-color: ${( props ) => props.color || props.theme.colors.primary}; 
        border: 4px solid ${( props ) => props.color || props.theme.colors.white};
        color: ${( props ) => props.color || props.theme.colors.white};
    }
`;

export const TermsRightsWrapper = styled.div`
    margin-top: 126px;
    text-align: center;
    @media ${device.sm} {
        margin-top: 66px;
    }
    & > div {
        width: 390px;
        margin: 0 auto 12px auto;
        position: relative;
        @media ${device.sm} {
            margin-top: 66px;
            margin: 0 auto 9px auto
        }
        & > svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 170px;
            @media ${device.sm} {
                right: 176px;
        }
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
        @media ${device.sm} {
            margin-right: 15px; 
        }
    `};
    @media ${device.sm} {
        font-size: 12px;
        letter-spacing: 0.12px;
    }
`;

export const Rights = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.white}; 
    @media ${device.sm} {
        font-size: 12px;
        letter-spacing: 0.12px;
    }
`;
