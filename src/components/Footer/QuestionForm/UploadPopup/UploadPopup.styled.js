import { Field } from 'formik';
import styled, { keyframes } from 'styled-components';

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
`;

export const UploadBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: initial;
    fill: none;
`;

export const Text = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: ${( props ) => props.color || props.theme.colors.black};
`;

export const Input = styled( Field )`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
`;
