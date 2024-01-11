import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled( NavLink )`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-weight: 400;
    line-height: 1.4;
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
