import styled from 'styled-components';
import { Field } from 'formik';
import { device } from '../../../../styles/device';
import {
  borderBlue,
  borderError,
  borderGreen,
  grayStroke,
  grayText,
  white,
  transition,
} from '../../../../utils/variables.styled';


export const InputWrapper = styled.div`
    position: relative;

    border-width: 1px;
    border-style: solid;
    border-color: ${( { $error, $value } ) => $value
      ? borderGreen
      : ( $error ? borderError : grayStroke )};
    
    background-color: ${white};
    border-radius: 16px 0px;
    transition: caret-color ${transition}, border-color ${transition};
    
    &:focus-within {
        outline: none;
        border-color: ${( props ) => props.$error ? props.theme.colors.accent : borderBlue };
    }
`;

export const Textarea = styled( Field )`
    width: 100%;
    min-height: 60px;
    overflow-y: auto; 
    resize: vertical;
    padding: 16px 56px 16px 32px;
    border-radius: 16px 0px;
    border: none;
    outline: none;

    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: calc(28 / 20);
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.black};
    caret-color: ${( props ) => props.$error ? props.theme.colors.accent : props.theme.colors.black };
    
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(18, 20, 23, 0.05); 
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: rgba(18, 20, 23, 0.1); 
    }

    &::placeholder {
        color: transparent;
    }
    &:not(:placeholder-shown) + label {
        display: none;
    }
    &:focus + label {
        display: none;
    }

    @media ${device.sm} {
        font-size: 16px;
        padding: 20px 56px 16px 24px;
    }
`;

export const Label = styled.label`
    position: absolute;
    left: 32px;
    top: 15px;
    color: ${grayText};
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: calc(28 / 20);
    letter-spacing: 0.2px;

    @media ${device.sm} {
        left: 24px;
        font-size: 16px;
    }
`;

export const ClipBtn = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-width: 1px;
    border-style: solid;
    border-radius: 4px 0 4px 0;
    border-color: ${( props ) => props.color || props.theme.colors.white};
    background-color: ${( props ) => props.color || props.theme.colors.white};
    transition: border-color ${transition}, background-color ${transition};
    &:hover,
    &:focus,
    &:active {
        border-radius: 4px 0 4px 0;
        border-color: ${( props ) => props.color || props.theme.colors.primary};
        background-color: ${( props ) => props.color || props.theme.colors.primary};
        > svg {
          fill: ${( props ) => props.color || props.theme.colors.white};
          stroke: ${( props ) => props.color || props.theme.colors.white};
          transition: stroke ${transition};
        }
    }
    > svg {
      fill: ${( props ) => props.color || props.theme.colors.black};
      stroke: ${( props ) => props.color || props.theme.colors.black};
      transition: stroke ${transition};
    }
`;
