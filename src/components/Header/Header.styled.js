import styled from 'styled-components';
import { device } from '../../utils/device';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/home/logo.svg';
import { Button } from '../common/button/Button';
import { transition } from '../../utils/variables.styled';

export const Header = styled.header`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${props => props.color || props.theme.colors.white};
  box-shadow: 0 4px 4px rgba(45, 45, 45, 0.2);

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
    stroke: ${props => props.color || props.theme.colors.black};
    transition: fill ${transition};
    &:hover,
    &:focus {
      fill: ${props => props.color || props.theme.colors.black};
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

export const SignInBtn = styled( Button )`
  width: 107px;
  font-size: 20px;
  font-weight: 600;
  line-height: calc(20 / 20);

  @media ${device.md} {
    display: none;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${ ( { $dropdown } ) => $dropdown ? '64px' : '32px' }; 
  height: ${ ( { $dropdown } ) => $dropdown ? '64px' : '32px' };
  margin-right: ${ ( { $dropdown } ) => $dropdown ? '12px' : '8px' };
  border: 1px solid ${props => props.color || props.theme.colors.accent};
  border-radius: 50%;
  p { 
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: ${ ( { $dropdown } ) => $dropdown ? '20px' : '14px' };
    font-weight: 500;
    line-height: calc( 19.6 / 14 );
    color: ${props => props.color || props.theme.colors.accent};
  }
`;

export const DropdownBtn = styled.button`
  position: relative;
  width: 24px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  fill: ${props => props.color || props.theme.colors.black};
  -webkit-transition: rotate ${transition};
  transition: rotate ${transition};
  > div {
    width: fit-content;
    transform: ${props => ( props.$rotate ? 'rotate(180deg)' : '' )};
  }
`;
