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
    background-color: pink;
    position: absolute;
    margin-top: 4px;
    padding: 15px 0;
    width: 420px;
    border-radius: 16px 0px;
    & > ul > li {
        padding: 5px 36px;
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
