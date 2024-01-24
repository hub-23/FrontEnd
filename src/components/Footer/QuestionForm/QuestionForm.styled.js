import styled from 'styled-components';
import { Field, Form } from 'formik';
import { device } from '../../../styles/device';
import { Button } from '../../common/button/Button';
import {
  accent,
  black,
  borderBlue,
  borderError,
  borderGreen,
  grayStroke,
  grayText,
  white,
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
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${device.sm} {
        gap: 25px;
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
`;

export const TextareaWrapper = styled.div`
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
    border-color: ${( props ) =>
    ( props.$error ? `${borderError}` : props.$isDataUser ? grayStroke : borderGreen )};
    background-color: ${white};

    @media ${device.sm} {
        padding: 15px 20px;
        height: 45px;

        font-size: 16px;
        line-height: calc(22.4 / 16);
        letter-spacing: 0.16px;
    }

    &:focus {
        outline: 1px solid ${borderBlue};
    }

    &:placeholder-shown {
        color: ${grayText};
        border-color: ${( { $error } ) => ( $error ? borderError : grayStroke )};
    }
`;

export const Textarea = styled( Input )`
    min-height: 120px;
    overflow-y: auto;
    /* max-height: 270px; */
    resize: vertical;
    padding-right: 56px;
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
`;

export const ErrorText = styled.p`
    display: inline;
    margin-left: ${( { $isMarginLeft } ) => ( $isMarginLeft ? '19px' : '0' )};

    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: (15.82px / 14px);

    color: ${accent};
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
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 23px;

    @media ${device.md} {
        margin-left: 0;
    }
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

export const ImagesList = styled.ul`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

export const Image = styled.img`
    width: 77px;
    height: 48px;
    object-fit: cover;
    border-radius: 8px 0px;
`;

export const ImgDeleteBtn = styled.button`
    position: absolute;
    top: -8px;
    right: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: initial;
`;

export const WarningText = styled.p`
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(15.82 / 14);

    color: ${( { $color } ) => ( $color ? accent : black )};
`;

export const SubmitBtn = styled( Button )`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    /* letter-spacing: 0.2px; */
`;
