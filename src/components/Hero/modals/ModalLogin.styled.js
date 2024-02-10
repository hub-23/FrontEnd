import styled from 'styled-components';
import {
  accent,
  black,
  borderBlue,
  borderError,
  borderGreen,
  grayStroke,
  grayText,
  white,
} from '../../../utils/variables.styled';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import checkbox0 from '../../../assets/home/modal/checkbox0.svg';
import checkbox1 from '../../../assets/home/modal/checkbox1.svg';
import { device } from '../../../styles/device';

export const Modal = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 72px;

    /* width: 869px; */
    margin: 0 20px;
    padding: 40px 50px;

    max-height: calc(100vh - 40px);

    overflow-y: auto;
    scroll-behavior: smooth;

    border-radius: 20px 0px;
    background-color: ${white};

    @media ${device.md} {
        display: initial;

        width: 520px;
        padding: 56px 50px 50px 50px;
    }

    @media ${device.sm} {
        margin: 0 15px;
        padding: 40px 23px 47px 23px;
        width: 430px;
        max-height: calc(100vh - 40px);

        overflow-y: auto;
        scroll-behavior: smooth;
    }
`;

export const Article = styled.article`
    margin: 0 auto;
    width: 480px;

    @media ${device.md} {
        width: initial;
        max-width: 419px;

        & > :last-child {
            text-align: center;
        }
    }

    @media ${device.sm} {
        max-width: initial;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 30px;
    width: 100%;
    height: 60px;

    border-radius: 20px 0px;
    border: 1px solid ${black};

    & p {
        font-size: 26px;
        font-weight: 600;
        letter-spacing: 0.26px;
        color: ${black};
    }

    @media ${device.md} {
        margin-bottom: 48px;
        height: initial;
        border-radius: initial;
        border: initial;
    }

    @media ${device.sm} {
        margin-bottom: 30px;
    }
`;

export const FormLogin = styled( Form )`
    display: flex;
    flex-direction: column;
`;

export const LabelFormUser = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;

    &:first-child {
        margin-bottom: 25px;

        @media ${device.md} {
            margin-bottom: 30px;
        }

        @media ${device.sm} {
            margin-bottom: 25px;
        }
    }

    &:nth-child(2) {
        margin-bottom: 24px;

        @media ${device.md} {
            margin-bottom: 22px;
        }

        @media ${device.sm} {
            margin-bottom: 24px;
        }
    }
`;

export const Input = styled( Field )`
    width: 100%;

    height: 60px;
    padding: 16px 32px;

    font-size: 20px;
    line-height: calc(28 / 20);
    letter-spacing: 0.2px;

    border-width: 1px;
    border-style: solid;

    border-radius: 20px 0px;
    border-color: ${( { $isDataUser } ) => ( $isDataUser ? grayStroke : borderGreen )};

    border-color: ${( { $error } ) => $error && borderError};

    color: ${black};
    background-color: ${white};

    @media ${device.md} {
        width: 100%;
    }

    @media ${device.sm} {
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

export const LabelCheckbox = styled.label`
    display: flex;
    align-items: center;
    /* gap: 3px; */

    font-size: 20px;
    letter-spacing: 0.2px;

    @media ${device.sm} {
        font-size: 16px;
    }
`;

export const InputCheckbox = styled( Field )`
    appearance: none;
    position: absolute;

    & + span {
        width: 24px;
        height: 24px;
        background-image: url(${checkbox0});
    }

    &:checked + span {
        background-image: url(${checkbox1});
    }

    @media ${device.sm} {
        & + span {
            padding-right: 15px;
        }
    }
`;

export const WrappCheckPass = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    margin-bottom: 22px;

    @media ${device.md} {
        margin-bottom: 32px;
    }

    @media ${device.sm} {
        margin-bottom: 35px;
    }
`;

export const TextCheckbox = styled.p`
    margin-left: 2px;

    font-weight: 500;
    line-height: calc(19.6 / 14);

    color: ${black};
`;

export const LinkForget = styled( Link )`
    font-weight: 500;
    line-height: (15.82 / 14);
    text-decoration-line: underline;

    color: ${black};
`;

export const ErrorText = styled.p`
    display: inline;
    line-height: calc(15.82 / 14);
    color: ${accent};

    @media ${device.sm} {
        margin-left: 32px;
    }
`;

export const BtnText = styled.p`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.24px;

    color: ${( { $color } ) => $color};

    @media ${device.sm} {
        font-size: 18px;
        letter-spacing: 0.18px;
    }
`;

export const BtnGoogleOne = styled.div`
    display: none;

    @media ${device.md} {
        display: initial;
    }
`;

export const BtnGoogleTwo = styled.div`
    max-width: 217px;

    & p {
        font-size: 20px;
        font-weight: 600;

        &:first-child {
            margin-bottom: 20px;
            color: ${grayText};
        }
        &:nth-child(2) {
            margin-bottom: 40px;
            color: ${black};
        }
    }

    @media ${device.md} {
        display: none;
    }
`;

export const BtnTextGoogle = styled.p`
    font-size: 20px;
    letter-spacing: 0.24px;

    color: ${( { $color } ) => $color};

    @media ${device.sm} {
        font-size: 18px;
        letter-spacing: 0.18px;
    }
`;

export const Text = styled.p`
    display: none;

    @media ${device.md} {
        display: initial;
        margin-bottom: 15px;

        font-size: 20px;
        text-align: center;
        font-weight: 600;

        color: ${grayText};
    }

    @media ${device.sm} {
        margin-bottom: 13px;
    }
`;

export const WrappTextRegistr = styled.div`
    display: flex;
    justify-content: center;
    gap: 11px;

    @media ${device.sm} {
        flex-direction: column;
        gap: initial;
    }
`;

export const TextRegistr = styled.p`
    font-size: 16px;
    font-weight: 600;

    color: ${grayText};

    @media ${device.sm} {
        margin-bottom: 15px;
    }
`;

export const LinkRegistr = styled.button`
    border: none;
    background: initial;

    font-size: 16px;
    font-weight: 600;

    color: ${black};
`;
