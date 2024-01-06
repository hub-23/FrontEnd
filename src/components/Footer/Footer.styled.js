import styled, { css } from 'styled-components';
// import { device } from '../../styles/device';
import { transition } from '../../utils/variables.styled';
import { ReactComponent as LogoSvg } from '../../assets/home/logo.svg';
import { Link } from 'react-router-dom';

export const FooterSection = styled.footer`
    background-color:  ${( props ) => props.color || props.theme.colors.primary};
    padding-top: 40px;
    padding-bottom: 20px;
    @media screen and (min-width: 360px) {
        padding-top: 64px;
        padding-bottom: 22px;
    }
`;

export const FooterContainer = styled.div`
    border: 1px solid yellow;
    width: 100%;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;    
    @media screen and (min-width: 360px) {
        background-color: goldenrod;
        width: 360px;
    }
    @media screen and (min-width: 576px) {
        background-color: firebrick;
        width: 576px;
    }
    @media screen and (min-width: 768px) {
        background-color: blueviolet;
        width: 768px;
        padding-left: 160px;
        padding-right: 158px;
    }
    @media screen and (min-width: 992px) {
        background-color: red;
        width: 992px;
    }
    @media screen and (min-width: 1200px) {
        background-color: blue;
        width: 1200px;
    }
    @media screen and (min-width: 1440px) {
        background-color: yellowgreen;
        width: 1440px;
    }
`;

export const ContentOrganizer = styled.div`
    display: block;
    @media screen and (min-width: 360px) {
        display: flex;
    }
`;

export const Logo = styled( LogoSvg )`
    width: 93px;
    height: 24px;
    margin-right: 0;
    margin-bottom: 40px;
  path.text-path {
    fill: #fff;
  }
  @media screen and (min-width: 360px) {
    margin-right: 127px;
  }
`;

export const NavWrapper = styled.div`
  margin-right: 0;
  margin-bottom: 40px;
  @media screen and (min-width: 360px) {
    margin-right: 97px;
  }
`;

export const Header = styled.h4`
    margin-bottom: 16px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    text-align: left;
    color: ${( props ) => props.color || props.theme.colors.white};
    @media screen and (min-width: 360px) {
      font-size: 20px;
      letter-spacing: 0.2px;
    }
`;

export const NavItem = styled.li`
    &:not(:last-child) {
       margin-bottom: 12px;
    }     
`;

export const NavLink = styled( Link )`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};     
    @media screen and (min-width: 360px) {
        font-size: 20px;
    }
`;

export const ContactsWrapper = styled.div`
    margin-right: 0;
    margin-bottom: 40px;
    font-size: 14px;
    @media screen and (min-width: 360px) {
        margin-right: 145px;
        margin-bottom: 32px;
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
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};
    @media screen and (min-width: 360px) {
        font-size: 20px;
    }
`;

export const Email = styled.a`
    display: flex;
    gap: 8px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 14px;
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
    @media screen and (min-width: 360px) {
        font-size: 20px;
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
    margin-right: 0;
    margin-bottom: 40px;
    @media screen and (min-width: 360px) {
        margin-right: 145px;
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
    /* width: 320px; */
    width: 100%;
    margin: 0 auto;
    border: 4px solid ${( props ) => props.color || props.theme.colors.white};
    border-radius: 16px 0;
    padding: 10px 16px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 500;  
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.black};
    @media screen and (min-width: 360px) {
        width: 222px;
        font-size: 20px;
        font-weight: 600;
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
    margin-top: 66px;
    text-align: center;
    @media screen and (min-width: 360px) {
        margin-top: 126px;
    }
    & > div {
        width: 100%;
        margin-top: 66px;
        margin: 0 auto 9px auto;
        position: relative;
        @media screen and (min-width: 360px) {
            margin: 0 auto 12px auto;
            width: 360px;
        }
        & > svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 176px;
            @media screen and (min-width: 360px) {
                right: 170px;
        }
        }
    }
`;

export const Terms = styled.a`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.12px;
    color: ${( props ) => props.color || props.theme.colors.white};
    ${( props ) => props.$first && css` 
        margin-right: 15px;
        @media screen and (min-width: 360px) {
            margin-right: 17px;
        }
    `};
    @media screen and (min-width: 360px) {
        font-size: 16px;
        letter-spacing: 0.16px;
    }
`;

export const Rights = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 12px;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0.12px;
    color: ${( props ) => props.color || props.theme.colors.white}; 
    @media screen and (min-width: 360px) {
        font-size: 16px;
        letter-spacing: 0.16px;
    }
`;
