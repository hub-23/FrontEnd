import styled from 'styled-components';
import { device } from '../../styles/device';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/home/logo.svg';
import { transition } from '../../utils/variables.styled';

export const Header = styled.header`
    position: absolute;
    z-index: 1;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: ${( props ) => props.color || props.theme.colors.white};
    box-shadow: 0 4px 4px rgba(45, 45, 45, 0.20);

    @media ${device.md} {
        background-color: transparent;
        box-shadow: none;
    }
`;

export const HeaderContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 160px;
    padding-right: 160px; 

    @media ${device.xl} {
        padding-left: 40px;
        padding-right: 40px;
    }
    @media ${device.md} {
        max-width: 768px;
    }
    @media ${device.sm} {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
`;

export const LogoLink = styled( Link )`
    @media ${device.md} {
        margin-right: auto;
    }
`;

export const Logo = styled( LogoSvg )`
    display: flex;
    align-items: center;
    width: 152px;
    height: 40px;
    @media ${device.sm} {
        width: 93px;
        height: 23px;
    }
`;

export const SearchBtn = styled.button`
    display: none;
    @media ${device.sm} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        margin-right: 17px;
        background-color: transparent;
        border: none;
        fill: none;
        stroke: ${( props ) => props.color || props.theme.colors.black};
        transition: fill ${transition};
        &:hover,
        &:focus {
            fill: ${( props ) => props.color || props.theme.colors.black};
        }
    }
`;

export const NavWrapper = styled.div`
    > nav {
        display: flex;
        align-items: center;
        gap: 48px;

        @media ${device.xl} {
            gap: 25px;
        }
        > a {
            font-size: 20px;
            letter-spacing: 0.2px;
            white-space: nowrap;
            @media ${device.sm} {
                font-size: 16px;
            }
            @media ${device.md} {
                display: none;
            }
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LanguageWrapper = styled.div`
    margin-right: 40px;
    > div > button {
        font-size: 20px;
        letter-spacing: 0.2px;
    }
    @media ${device.xl} {
        margin-right: 25px;
    }
    @media ${device.md} {
        display: none;
    }
`;

export const SignInBtn = styled( Link )`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 107px;
  height: 48px;
  padding: 14px 32px;
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
  @media ${device.md} {
    display: none;
  }
`;
