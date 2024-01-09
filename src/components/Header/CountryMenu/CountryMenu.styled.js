import styled, { css } from 'styled-components';
import { transition } from '../../../utils/variables.styled';

export const CountryMenu = styled.div`
    display: flex;
    align-items: center;
    > p {
        font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
        font-weight: 400;
        color: ${( props ) => props.color || props.theme.colors.black};        
    }
`;

export const CountryMenuBtn = styled.button`
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
