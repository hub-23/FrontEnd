import styled from 'styled-components';
import { Field } from 'formik';
import { device } from '../../styles/device';
import {
  black,
  borderBlue,
  borderError,
  borderGreen,
  grayStroke,
  grayText,
  white,
} from '../../utils/variables.styled';

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
    border-color: ${( { $isDataUser } ) => ( $isDataUser ? grayStroke : borderGreen )};
    border-color: ${( { $error } ) => $error && `${borderError}`};
    color: ${black};
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

    &:not(:placeholder-shown) + span {
        display: none;
    }
`;
