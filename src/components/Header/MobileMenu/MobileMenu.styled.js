import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { transition } from '../../../utils/variables.styled';

export const BurgerBtn = styled.button`
    display: none;
    @media screen and (max-width: 834px) { // до - моб меню
        display: block;
        fill: ${( props ) => props.color || props.theme.colors.black};
        background-color: transparent;
        border: none;
        &:hover,
        &:focus {
            fill: ${( props ) => props.color || '#797979'};
        }
    }
`;

export const MobileMenuContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 456px;
    height: 100%;
    padding: 50px 128px;
    background: rgba(255, 255, 255, 0.80);
    backdrop-filter: blur(6px);
`;

export const CrossBtn = styled.button`
    position: absolute;
    top: 24px;
    right: 40px;
    background-color: transparent;
    border: none;
    fill: ${( props ) => props.color || props.theme.colors.black};
    &:hover,
    &:focus {
        fill: ${( props ) => props.color || '#797979'};
    }
`;

export const Content = styled.div`
    /* max-width: 360px; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const CountryFilterWrapper = styled.div`
    margin-bottom: 102px;
    display: flex;
    justify-content: center;
    > div {
        gap: 2px;
    }
    > div > p {
        font-size: 16px;
        line-height: 1.15;
        letter-spacing: 0.16px;  
    }
    > div > button {
        width: 24px;
        height: 24px;
        padding-bottom: 4px;
    }
`;

export const NavWrapper = styled.div`
    margin-bottom: 64px;
    > nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
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
  width: 100%;
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
`;

export const LanguageWrapper = styled.div`
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    > div > button {
        font-size: 16px;
        letter-spacing: 0.16px;
    }
`;
