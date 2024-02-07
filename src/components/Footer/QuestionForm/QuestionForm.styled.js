import styled from 'styled-components';
import { Field, Form } from 'formik';
import { device } from '../../../styles/device';
import { Button } from '../../common/button/Button';
import {
  borderBlue,
  borderError,
  borderGreen,
  grayStroke,
  grayText,
  transition,
} from '../../../utils/variables.styled';


export const QuestionFormContainer = styled.div`
    position: absolute;
    display: ${( props ) => props.$isNotificationShown && 'none' }; 
    max-width: 800px;
    margin: 0 20px;
    max-height: 95%;
    padding: 48px 160px 50px 160px;
    border-radius: 20px 0px;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background: ${( props ) => props.color || props.theme.colors.white};  

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
    @media ${device.md} {  
        max-width: 516px;
        padding: 48px;
    }
    @media ${device.sm} {  
        max-width: 360px;
        max-height: 100%;
        padding: 32px 20px;
    }
`;

export const Title = styled.h3`
    margin-bottom: 12px;
    text-align: center;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 24px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.black};

    @media ${device.sm} {
        font-size: 20px;
    }
`;

export const Text = styled.p`
    margin-bottom: 20px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.black};

    @media ${device.sm} {
        font-size: 16px;
    }
`;

export const FormFild = styled( Form )`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const InputLableBox = styled.div`
    position: relative;
`;

export const Input = styled( Field )`
    width: 100%;
    height: 60px;
    padding: 16px 32px;

    font-size: 20px;
    font-weight: 400;
    line-height: calc(28 / 20);
    letter-spacing: 0.2px;

    border-width: 1px;
    border-style: solid;
    border-radius: 16px 0px;
    background-color: ${( props ) => props.color || props.theme.colors.white};
    caret-color: ${( props ) => props.$error ? props.theme.colors.accent : props.theme.colors.black };
    transition: caret-color ${transition}, border-color ${transition};

    @media ${device.sm} {
        height: 48px;
        padding: 13px 24px;

        font-size: 16px;
        line-height: calc(22.4 / 16);
        letter-spacing: 0.16px;
    }

    &::placeholder {
        color: transparent;
    }
    &:placeholder-shown {
        border-color: ${( { $error } ) => $error ? borderError : grayStroke };
    }
    &:not(:placeholder-shown) {
        border-color: ${( { $error, $value } ) => $value
        ? ( $error ? borderError : borderGreen )
        : ( $error ? borderError : grayStroke )};
    }
    &:not(:placeholder-shown) + label {
        display: none;
    }
    &:focus {
        outline: none;
        border-color: ${( props ) => props.$error ? props.theme.colors.accent : borderBlue };  
    }
    &:focus + label {
        display: ${( { $topic, $value } ) => $topic ? ( $value ? 'none' : 'block' ) : 'none' };
    }
`;

export const Label = styled.label`
    position: absolute;
    left: 32px;
    top: 50%;
    transform: translateY(-50%);
    color: ${grayText};
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: calc(28 / 20);
    letter-spacing: 0.2px;

    @media ${device.sm} {
        left: 24px;
        font-size: 16px;
        letter-spacing: 0%;
    }
`;

export const IconContainer = styled.span`
    position: absolute;
    top: -4px;
`;

export const DropdownBtn = styled.button`
    position: absolute;
    right: 16px;
    top: 17px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${( props ) => ( props.$rotate ? 'rotate(180deg)' : '' ) };
    background-color: transparent;
    border: none;
    fill: ${( props ) => props.color || props.theme.colors.black};
    -webkit-transition: rotate ${transition};
    transition: rotate ${transition};

    @media ${device.sm} {
        top: 12px;
    }
`;

export const WrappWarningText = styled.div`
    position: absolute;
    bottom: 75px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 4px;

    @media ${device.sm} {
        bottom: 65px;
        padding-left: 0;
    }
`;

export const WarningText = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 16px;
    line-height: calc(15.82 / 14);
    color: ${( props ) => props.color || props.theme.colors.black};

    @media ${device.sm} {
        font-size: 14px;
    }
`;

export const SubmitBtn = styled( Button )`
    width: 100%;
    height: 60px;
    margin-top: 32px;
    border-radius: 16px 0;
    
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 1%;

    @media ${device.sm} {
        height: 50px;
        border-radius: 20px 0;

        font-size: 16px;
        font-weight: 500;
    }
`;
