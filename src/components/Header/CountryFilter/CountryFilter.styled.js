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
    position: fixed;
    top: 0;
    right: 0;
    width: 456px;
    height: 100%;
    padding: 24px 40px;
    background: ${( props ) => props.color || props.theme.colors.white};
    @media screen and (max-width: 455px) {
        width: 100%;
    }
    @media screen and (max-width: 370px) {
        padding: 16px 20px;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const Title = styled.p`
    align-items: center;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.black};
    @media screen and (max-width: 455px) {
        font-size: 16px;
        margin-right: 15px;
    }
    @media screen and (max-width: 330px) {
        font-size: 14px;
        margin-right: 10px;
    }
`;

export const Input = styled.input`
    border-radius: 8px 0px;
    border: none;
    outline: 1px solid #D5D5D5;
    padding: 8px 12px;
    width: 100%;
    margin-bottom: 20px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    color: ${( props ) => props.color || '#797979' };
    @media screen and (max-width: 360px) {
        margin-bottom: 24px;
        font-size: 14px;
    }
`;

export const CountriesList = styled.ul`
    column-count: 3;
    column-gap: 20px;
    margin-bottom: 20px;
    > li {
        margin-bottom: 12px;
        font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
        letter-spacing: 0.14px;
        color: ${( props ) => props.color || props.theme.colors.black};
        cursor: pointer;
        @media screen and (max-width: 360px) {
            font-size: 14px;
            font-weight: 500;
        }
    }
    @media screen and (max-width: 360px) {
        column-count: 2;
    }
`;

export const NoteWrapper = styled.div`
    width: 100%;
    @media screen and (max-width: 360px) {
        position: absolute;
        bottom: 20px;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #D5D5D5;
    margin-bottom: 8px;
    @media screen and (max-width: 360px) { 
        width: 300px;
    }
    @media screen and (max-width: 340px) { 
        width: 280px;
    }
`;

export const Note = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.12px;
    color: #797979;
    @media screen and (max-width: 360px) { 
        width: 320px;
        font-size: 12px;
        line-height: 1.4;
    }
    @media screen and (max-width: 320px) { 
        max-width: 280px;
    }
    @media screen and (max-width: 300px) { 
        max-width: 260px;
    }
`;
