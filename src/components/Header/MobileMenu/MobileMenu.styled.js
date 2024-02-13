import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { grayText, transition } from '../../../utils/variables.styled';
import { ReactComponent as LogoSvg } from '../../../assets/home/logo.svg';
import { device } from '../../../styles/device';


export const BurgerBtn = styled.button`
    display: none;
    @media ${device.md} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        fill: ${( props ) => props.color || props.theme.colors.black};
        background-color: transparent;
        border: none;
        &:hover,
        &:focus {
            fill: ${( props ) => props.color || grayText };
        }
    }
`;

export const MobileMenuContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 456px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 40px 24px 40px;
    background: rgba(255, 255, 255, 0.80);
    backdrop-filter: blur(6px);

    @media ${device.sm} {
        width: 100%;
        padding: 16px 20px;
    }
`;

export const MobileMenuHeder = styled.div`
    display: flex;
    justify-content: end;
    @media ${device.sm} {
        justify-content: space-between;
    }
`;

export const LogoLink = styled( Link )`
    display: none;
    @media ${device.sm} {
        display: flex;
        align-items: center;
        width: 93px;
        height: 23px;
    }
`;

export const Logo = styled( LogoSvg )`
    width: 93px;
    height: 23px;
`;

export const CrossBtn = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    fill: ${( props ) => props.color || props.theme.colors.black};
    &:hover,
    &:focus {
        fill: ${( props ) => props.color || '#797979'};
    }
`;

export const NavWrapper = styled.div`
    margin-bottom: 80px;
    > nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
        > a {
            font-size: 16px;
            letter-spacing: 0.16px;
        }
        > button {
            display: none;
        }
    }
`;

export const SignInBtn = styled( Link )`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 200px;
  height: 50px;
  padding: 14px 32px;
  color: ${( props ) => props.color || props.theme.colors.primary};
  position: relative;
  background: linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)) padding-box,
              linear-gradient(87.92deg, #09194D 0%, #234890 100%) border-box;
  border: 4px solid transparent;
  border-radius: 20px 0;
  font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.16px;
  transition: background ${transition}, border-color ${transition}, color ${transition};
  &:hover,
  &:focus {
    background: ${( props ) => props.color || props.theme.colors.primary};
    border-color: ${( props ) => props.color || props.theme.colors.primary};
    color: ${( props ) => props.color || props.theme.colors.white};
  }
  @media screen and (max-width: 360px) {
    width: 100%;
  }
`;

export const LanguageWrapper = styled.div`
    > div > button {
        font-size: 16px;
        letter-spacing: 0.16px;
    }
`;
