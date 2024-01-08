import styled, { css } from 'styled-components';
import { device } from '../../styles/device';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/home/logo.svg';
import { transition } from '../../utils/variables.styled';

export const Header = styled.header`
    padding-bottom: 4px;
    @media ${device.lg} {
        padding-bottom: 0;
    }
`;

export const HeaderContainer = styled.div`
    padding: 16px 0;
    box-shadow: 0 4px 4px rgba(45, 45, 45, 0.20);
    @media ${device.lg} {
        padding: 15px 0 0 0;
        background-color: transparent;
        box-shadow: none;
    }
`;

export const Content = styled.div`
    width: 1440px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding-left: 160px;
    padding-right: 160px;  
    @media ${device.xxl} { // 1440
        width: 1200px;
        padding-left: 40px;
        padding-right: 40px;
    }
    @media ${device.xl} { // 1200
        width: 992px;
        padding-left: 20px;
        padding-right: 20px;
    }
    @media ${device.lg} { // 992  - до - моб меню
        width: 768px;
        justify-content: space-between;
    }
    @media ${device.md} { // 768
        width: 576px;
    }
    @media ${device.sm} { // 576
        width: 360px;
    }
    @media screen and (max-width: 360px) { // 360
        width: 100%;
    }
`;

export const LogoLink = styled( Link )`
    margin-right: 140px;
    @media ${device.xl} {
        margin-right: 50px;
    }
    @media ${device.lg} {
        margin-right: 0;
    }
`;

export const Logo = styled( LogoSvg )`
    width: 152px;
    height: 40px;
    @media ${device.lg} {
        width: 93px;
        height: 23px;
    }
`;

export const NavList = styled.nav`
    display: flex;
    align-items: center;
    gap: 46px;
    margin-right: 127px;
    @media ${device.xl} {
        gap: 40px;
        margin-right: 69px;
    }
    @media ${device.lg} {
        display: block;
        margin-right: 0;
    }
`;

export const NavItem = styled( NavLink )`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.black};
    padding-top: 0;
    padding-bottom: 0;
    &:hover,
    &:focus {
        color: #797979;
    }
    &:active {
        text-decoration: underline;
    }
    @media ${device.lg} {
        display: none;
    }
`;

export const CountryMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 23px;
    > p {
        font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};;
        font-size: 20px;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0.2px;
        color: ${( props ) => props.color || props.theme.colors.black};        
    }
    @media ${device.xl} {
        margin-right: 15px;
    }
    @media ${device.lg} {
        display: none;
    }
`;

export const CountryMenuBtn = styled.button`
    width: 40px;
    height: 40px;
    padding-bottom: 4px;
    background-color: transparent;
    border: none;
    fill: ${( props ) => props.color || props.theme.colors.black};
    -webkit-transition: rotate ${transition};
    transition: rotate ${transition};
    ${( props ) => props.$rotate && css` 
        transform: rotate(180deg); 
    `};
    &:hover,
    &:focus {
        stroke: #797979;
    }
`;

export const SignInBtn = styled( Link )`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 107px;
  height: 48px;
  padding: 14px 32px;
  margin-left: 40px; 
  color: ${( props ) => props.color || props.theme.colors.primary};
  background: linear-gradient(white, white) padding-box,
              linear-gradient(87.92deg, #09194D 0%, #234890 100%) border-box;
  border: 4px solid transparent;
  border-radius: 20px 0;
  font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.2px;
  transition: background ${transition}, border-color ${transition}, color ${transition};

  &:hover,
  &:focus {
    background: ${( props ) => props.color || props.theme.colors.primary};
    border-color: ${( props ) => props.color || props.theme.colors.primary};
    color: ${( props ) => props.color || props.theme.colors.white};
  }
  @media ${device.lg} {
    display: none;
  }
`;
