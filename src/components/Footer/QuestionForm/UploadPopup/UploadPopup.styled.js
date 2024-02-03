import { Field } from 'formik';
import styled, { keyframes } from 'styled-components';
import { transition } from '../../../../utils/variables.styled';

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 48px;
    right: 16px;
    width: 284px;
    height: 52px;
    display: flex;
    gap: 8px;
    animation: ${ show } 0.45s cubic-bezier(0, 0.1, 0.2, 1) 1;
    padding: 14px 24px;
    border-radius: 12px 0px;
    box-shadow: 4px 4px 4px 0px rgba(45, 45, 45, 0.20), 0px 2px 4px 0px rgba(45, 45, 45, 0.20);
    background-color: ${( props ) => props.color || props.theme.colors.white};
    z-index: 1;

    @media screen and (max-width: 768px) {
      top: 44px;
      width: 276px;
      height: 48px;
      padding: 13px 20px;
    }
`;

export const UploadBtn = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border-width: 1px;
    border-style: solid;
    border-radius: 4px 0 4px 0;
    border-color: ${( props ) => props.color || props.theme.colors.white};
    background-color: ${( props ) => props.color || props.theme.colors.white};
    transition: border-color ${transition}, background-color ${transition};
    &:hover,
    &:focus,
    &:focus-within,
    &:active {
        border-radius: 4px 0 4px 0;
        border-color: ${( props ) => props.color || props.theme.colors.primary};
        background-color: ${( props ) => props.color || props.theme.colors.primary};
        > svg {
          stroke: ${( props ) => props.color || props.theme.colors.white};
          transition: stroke ${transition};
        }
    }
    > svg {
      fill: none;
      stroke: ${( props ) => props.color || props.theme.colors.black};
      transition: stroke ${transition};
    }
`;

export const Text = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    line-height: 1.4;
    color: ${( props ) => props.color || props.theme.colors.black};
`;

export const Input = styled( Field )`
    display: none;
`;
