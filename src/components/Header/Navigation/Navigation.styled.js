import styled from 'styled-components';
import { device } from '../../../styles/device';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
    /* display: flex;
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
    } */
`;

export const NavItem = styled( NavLink )`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    /* font-size: 20px; // 16 */
    font-weight: 400;
    line-height: 1.4;
    /* letter-spacing: 0.2px; // 0.16px; */
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
`;
