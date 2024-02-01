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
    width: 516px;
    max-height: 95%;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    padding: 48px;
    background: ${( props ) => props.color || props.theme.colors.white};
    border-radius: 20px 0px;

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
    /* @media screen and (max-width: 455px) {
        width: 100%;
    }
    @media screen and (max-width: 370px) {
        padding: 16px 20px;
    } */
`;

export const Title = styled.h3`
    margin-bottom: 12px;
    align-items: center;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 24px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.16px;
    color: ${( props ) => props.color || props.theme.colors.black};
    /* @media screen and (max-width: 455px) {
        font-size: 16px;
        margin-right: 15px;
    }
    @media screen and (max-width: 330px) {
        font-size: 14px;
        margin-right: 10px;
    } */
`;

export const Text = styled.p`
    margin-bottom: 20px;
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: ${( props ) => props.color || props.theme.colors.black};
`;

export const FormFild = styled( Form )`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${device.sm} {
        /* gap: 25px; */
    }
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
    border-radius: 20px 0px;
    background-color: ${( props ) => props.color || props.theme.colors.white};
    caret-color: ${( props ) => props.$error ? props.theme.colors.accent : props.theme.colors.black };

    @media ${device.sm} {
        padding: 15px 20px;
        height: 45px;

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
        border-color: transparent;
        outline-width: 1px;
        outline-style: solid;
        outline-color: ${( props ) => props.$error ? props.theme.colors.accent : borderBlue };       
    }
    &:focus + label {
        display: ${( { $topic, $value } ) => $topic
        ? ( $value ? 'none' : 'block' )
        : 'none'};
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
`;

export const IconContainer = styled.span`
    position: absolute;
    top: -4px;
`;

export const DropdownBtn = styled.button`
    position: absolute;
    right: 16px;
    top: 17px;
    transform: ${( props ) => ( props.$rotate ? 'rotate(180deg)' : '' ) };
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    fill: ${( props ) => props.color || props.theme.colors.black};
    -webkit-transition: rotate ${transition};
    transition: rotate ${transition};
`;

export const WrappWarningText = styled.div`
    position: absolute;
    bottom: 85px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 5px;

    @media ${device.md} {
        padding-left: 0;
    }
`;

export const WarningText = styled.p`
    font-family: ${( props ) => props.fontFamily || props.theme.fontFamily.primary};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(15.82 / 14);
    color: ${( props ) => props.color || props.theme.colors.black};
`;

export const SubmitBtn = styled( Button )`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    margin-top: 32px;
    /* letter-spacing: 0.2px; */
`;
