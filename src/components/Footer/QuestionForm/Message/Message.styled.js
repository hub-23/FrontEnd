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
} from '../../../../utils/variables.styled';


export const InputWrapper = styled.div`
    position: relative;

    border-width: 1px;
    border-style: solid;
    border-color: ${( { $error, $value } ) => $value
      ? borderGreen
      : ( $error ? borderError : grayStroke )};
    
    background-color: ${white};
    border-radius: 20px 0px;
    &:focus-within {
        border-color: transparent;
        outline-width: 1px;
        outline-style: solid;
        outline-color: ${( props ) => props.$error ? props.theme.colors.accent : borderBlue };  
    }
`;

export const Textarea = styled( Field )`
    width: 100%;
    min-height: 60px;
    overflow-y: auto; 
    resize: vertical;
    padding: 16px 56px 16px 32px;
    border-radius: 20px 0px;
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
`;

export const ClipBtn = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: initial;
`;
