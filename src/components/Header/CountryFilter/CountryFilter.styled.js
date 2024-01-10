import styled, { css } from 'styled-components';
import { transition } from '../../../utils/variables.styled';

export const CountryFilterWrapper = styled.div`
    display: flex;
    align-items: center;
    > p {
        font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
        font-weight: 400;
        color: ${( props ) => props.color || props.theme.colors.black};        
    }
`;

export const CountryFilterBtn = styled.button`
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

export const CountrySelectContainer = styled.div`
    position: relative;
    width: 360px;
    height: 528px;
    padding: 15px 20px 20px 20px;
    background-color: ${( props ) => props.color || props.theme.colors.white};
    border-radius: 4px;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const Title = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.black};
`;

export const Input = styled.input`
    border-radius: 8px 0px;
    border: none;
    outline: 1px solid #D5D5D5;
    padding: 8px 12px;
    width: 100%;
    margin-bottom: 24px;
`;

export const CountriesList = styled.ul`
    column-count: 2;
    column-gap: 20px; 
    > li {
        margin-bottom: 12px;
    }
`;

export const NoteWrapper = styled.div`
    position: absolute;
    bottom: 20px;
`;

export const Divider = styled.div`
    width: 320px;
    height: 1px;
    background-color: #D5D5D5;
    margin-bottom: 8px;
    @media screen and (max-width: 330px) { 
        width: 280px;
    }
`;

export const Note = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 12px;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0.12px;
    color: #797979;
    max-width: 320px;
`;
