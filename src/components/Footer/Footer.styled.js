import styled, { css } from 'styled-components';
import { transition } from '../../utils/variables.styled';
import { ReactComponent as LogoSvg } from '../../assets/home/logo.svg';
import { Link } from 'react-router-dom';
import { grayText } from '../../utils/variables.styled';

export const FooterSection = styled.footer`
    background-color:  ${( props ) => props.color || props.theme.colors.primary};
    padding-top: 40px;
    padding-bottom: 20px;
    
    @media screen and (min-width: 768px) {
        padding-top: 64px;
        padding-bottom: 20px;
    }
`;

export const FooterContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (min-width: 360px) {
        width: 360px;
    }
    @media screen and (min-width: 400px) {
        width: 400px;
    }
    @media screen and (min-width: 576px) {
        width: 576px;
    }
    @media screen and (min-width: 768px) { 
        width: 768px;
        padding-left: 40px;
        padding-right: 40px; 
    }
    @media screen and (min-width: 992px) { 
        width: 992px;
        padding-left: 30px;
        padding-right: 30px; 
    }
    @media screen and (min-width: 1200px) {
        width: 1200px;
        padding-left: 100px;
        padding-right: 100px;
    }
    @media screen and (min-width: 1440px) {
        width: 1440px;
        padding-left: 160px;
        padding-right: 158px;
    }
`;

export const ContentOrganizer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 400px) {
        flex-direction: row;
        flex-wrap: wrap; 
        justify-content: space-between; 
    }
    @media screen and (min-width: 768px) { // з 768 - 991 - планшет
        justify-content: end; 
    }
    @media screen and (min-width: 992px) { // з 992 - десктоп
        justify-content: space-between; 
    }
    @media screen and (min-width: 1440px) {
        justify-content: start;
    }
`;

export const Logo = styled( LogoSvg )`
    width: 93px;
    height: 24px;
    margin-bottom: 40px;

    @media screen and (min-width: 400px) {
        margin-right: 200px;
    }
    @media screen and (min-width: 576px) {
        margin-right: auto;
    }
    @media screen and (min-width: 768px) {
        width: 152px;
        height: 40px;
        margin-right: 76px;
    }
    @media screen and (min-width: 992px) {
        margin-right: 20px;
    }
    @media screen and (min-width: 1200px) {
        margin-right: 70px;
    }
    @media screen and (min-width: 1440px) {
        margin-right: 127px;
    }
    path.text-path {
        fill: #fff;
    }
`;

export const NavWrapper = styled.div`
    margin-right: 0;
    margin-bottom: 40px;

    @media screen and (min-width: 400px) {
        margin-bottom: 0;
        height: fit-content;
    }
    @media screen and (min-width: 768px) {
        margin-right: 80px;
    }
    @media screen and (min-width: 992px) { // -----------------------------------------------
        margin-right: 20px;
    }
    @media screen and (min-width: 1200px) {
        margin-right: 70px;
    }
    @media screen and (min-width: 1440px) {
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

    @media screen and (min-width: 768px) {
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
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`;

export const ContactsWrapper = styled.div`
    margin-right: 0;
    margin-bottom: 40px;
    font-size: 14px;

    @media screen and (min-width: 400px) {
        margin-bottom: 30px;
    }
    @media screen and (min-width: 576px) {
        margin-bottom: 0;
        height: fit-content;
    }
    @media screen and (min-width: 992px) {  // -----------------------------------------------
        margin-right: 20px;
    }
    @media screen and (min-width: 1200px) {
        margin-right: 100px;
    }
    @media screen and (min-width: 1440px) {
        margin-right: 143px;
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
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.white};

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`;

export const Email = styled.a`
    display: flex;
    gap: 8px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
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
    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
    &:active {
        text-decoration: underline;
    }
    > svg {
        &:hover,
        &:focus,
        &:active {
            fill: ${( props ) => props.color || props.theme.colors.white};
            stroke: ${( props ) => props.color || props.theme.colors.primary}; 
            -webkit-transition: fill ${transition}, stroke ${transition};
            transition: fill ${transition}, stroke ${transition};            
        }
        &:disabled {
            fill: ${( props ) => props.color || props.theme.colors.primary};
            stroke: ${( props ) => props.color || grayText };
        }
    } 
`;

export const SocListWrapper = styled.div`
    margin-right: 0;
    margin-bottom: 40px;

    @media screen and (min-width: 400px) {
        margin-top: 20px;
        margin-bottom: 0; 
    }
    @media screen and (min-width: 576px) {
        margin-left: auto;
        margin-right: 39px;
        margin-top: 23px; 
    }
    @media screen and (min-width: 768px) {
        margin-top: 32px;        
        margin-right: 34px;
        margin-left: 0;
    }  
    @media screen and (min-width: 992px) {
        order: 2;
        margin-top: 0;
        margin-right: 0;
        margin-left: 380px;        
    }
    @media screen and (min-width: 1200px) {
        margin-left: 405px;
    }
    @media screen and (min-width: 1440px) {
        margin-left: 485px;
    }
`;

export const SocList = styled.ul`
    display: flex;
    gap: 12px;
    > li {
        width: 24px;
        height: 24px;
    }
`;

export const SocLink = styled.a`
    & svg {
        fill: ${( props ) => props.color || props.theme.colors.primary};
        stroke: ${( props ) => props.color || props.theme.colors.white};
        stroke-width: 2;
        -webkit-transition: fill ${transition}, stroke ${transition};
        transition: fill ${transition}, stroke ${transition};
        &:hover,
        &:focus,
        &:active {   
            fill: ${( props ) => props.color || props.theme.colors.white};
            stroke: ${( props ) => props.color || props.theme.colors.primary}; 
            stroke-width: 0;
        }
        &:disabled {
            fill: ${( props ) => props.color || props.theme.colors.primary};
            stroke: ${( props ) => props.color || grayText };
        }        
    }  
`;

export const FormBtnWrapper = styled.div`
    text-align: center;

    @media screen and (min-width: 400px) {
        padding-right: 20px;
    }
    @media screen and (min-width: 768px) {
        padding-right: 44px;
    }
    @media screen and (min-width: 992px) {
        padding-right: 0;
        height: fit-content;
    }
`;

export const FormBtn = styled.button`
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
    
    @media screen and (min-width: 768px) {
        width: 223px;
        font-size: 20px;
        font-weight: 600;
    }
    -webkit-transition: background-color ${transition}, border-color ${transition};
    transition: background-color ${transition}, border-color ${transition}, color ${transition};
    &:hover,
    &:focus {
        background-color: ${( props ) => props.color || props.theme.colors.primary}; 
        border: 4px solid ${( props ) => props.color || props.theme.colors.white};
        color: ${( props ) => props.color || props.theme.colors.white};
    }
`;

export const TermsRightsWrapper = styled.div`
    margin-top: 66px;
    text-align: center;

    @media screen and (min-width: 768px) {
        margin-top: 80px;
    }
    @media screen and (min-width: 1440px) {
        margin-top: 126px;
    }
    & > div {
        width: 100%;
        margin-top: 66px;
        margin: 0 auto 9px auto;
        position: relative;
        @media screen and (min-width: 576px) {
            margin: 0 auto 12px auto;
        }
        & > svg {
            display: none;
            @media screen and (min-width: 360px) {
                display: block;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 140px;
            }
            @media screen and (min-width: 400px) {
                right: 160px;
            }
            @media screen and (min-width: 576px) {
                right: 242px;
            }
            @media screen and (min-width: 768px) {
                right: 318px;
            }
            @media screen and (min-width: 992px) {
                right: 440px;
            }
            @media screen and (min-width: 1200px) {
                right: 475px;
            }
            @media screen and (min-width: 1440px) {
                right: 535px;
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
    &:hover,
    &:focus,
    &:active {
        text-decoration: underline;
    }
    ${( props ) => props.$first && css` 
        display: block;
        @media screen and (min-width: 360px) {
            display: inline;
            margin-right: 15px; 
        }
        @media screen and (min-width: 576px) {
            margin-right: 17px;
        }
    `};
    @media screen and (min-width: 576px) {
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
    @media screen and (min-width: 576px) {
        font-size: 16px;
        letter-spacing: 0.16px;
    }
`;
