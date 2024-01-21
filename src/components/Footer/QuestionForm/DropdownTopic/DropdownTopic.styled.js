import styled from 'styled-components';
import { transition } from '../../../../utils/variables.styled';


export const InputWrapper = styled.div`
    position: relative;
    height: 60px;
`;

export const DropdownBtn = styled.button`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%) ${ ( props ) => ( props.$rotate ? 'rotate(180deg)' : '' ) };
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    fill: ${( props ) => props.color || props.theme.colors.black};
    -webkit-transition: rotate ${transition};
    transition: rotate ${transition};
`;

export const Dropdown = styled.div`
    background-color: ${( props ) => props.color || props.theme.colors.white};
    position: absolute;
    margin-top: 4px;
    padding: 15px 0;
    width: 420px;
    border-radius: 16px 0px;
    /* box-shadow: 4px 4px 4px 0px rgba(45, 45, 45, 0.20); */
    box-shadow: 0px -1px 4px 0px rgba(45, 45, 45, 0.05),
                 4px 4px 4px 0px rgba(45, 45, 45, 0.20),
                 -2px 0px 4px 0px rgba(45, 45, 45, 0.05);                 
    & > ul > li {
        padding: 5px 36px;
        font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
        color: ${( props ) => props.color || props.theme.colors.black};
        &:not(:last-child) {
           margin-bottom: 2px; 
        }
    }
`;

export const DropdownItem = styled.li`
    cursor: pointer;
    &:hover,
     :focus {
        background-color: #F9F9F9;
    }
`;
