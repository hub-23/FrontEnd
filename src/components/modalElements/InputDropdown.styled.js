import styled from 'styled-components';
import { transition } from '../../utils/variables.styled';

export const DropdownBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: transparent;
    padding-right: 23px;
    border: none;
    border-radius: 16px 0px;
    fill: ${( props ) => props.color || props.theme.colors.black};
    -webkit-transition: rotate ${transition};
    transition: rotate ${transition};
    > div {
        width: fit-content;
        transform: ${( props ) => ( props.$rotate ? 'rotate(180deg)' : '' ) };        
    }
`;
