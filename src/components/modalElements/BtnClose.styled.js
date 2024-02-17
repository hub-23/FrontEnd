import styled from 'styled-components';
import { device } from '../../styles/device';
import { transition } from '../../utils/variables.styled';

export const BtnClose = styled.button`
    position: absolute;
    top: 50px;
    right: 40px;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-width: 1px;
    border-style: solid;
    border-radius: 20px 0;
    border-color: ${( props ) => props.color || props.theme.colors.accent};
    background-color: ${( props ) => props.color || props.theme.colors.white};
    transition: border-color ${transition}, background-color ${transition};
    &:hover,
    &:focus,
    &:active {
        border-color: ${( props ) => props.color || props.theme.colors.accent};
        background-color: ${( props ) => props.color || props.theme.colors.accent};
        > svg {
          stroke: ${( props ) => props.color || props.theme.colors.white};
          transition: stroke ${transition};
        }
    }
    > svg {
      stroke: ${( props ) => props.color || props.theme.colors.black};
      transition: stroke ${transition};
    }

    @media ${device.md} {
        top: 16px;
        right: 16px;
        width: 36px;
        height: 36px;
        border-radius: 10px 0;
    }
    @media ${device.sm} {
        top: 12px;
        right: 20px;
        width: 24px;
        height: 24px;
        border-radius: 8px 0;
    }
`;
