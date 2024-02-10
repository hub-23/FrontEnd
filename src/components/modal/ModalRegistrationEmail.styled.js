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
} from '../../utils/variables.styled';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import checkbox0 from '../../assets/home/modal/checkbox0.svg';
import checkbox1 from '../../assets/home/modal/checkbox1.svg';
import { device } from '../../styles/device';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input';

export const Modal = styled.div`
    position: relative;

    max-width: 720px;
    margin: 0 20px;
    padding: 40px 190px 40px 50px;

    max-height: calc(100vh - 40px);

    overflow-y: auto;
    scroll-behavior: smooth;

    border-radius: 20px 0px;
    background-color: ${white};

    @media ${device.md} {
        max-height: calc(100vh - 50px);
        padding: 50px;
    }

    @media ${device.sm} {
        margin: 0 15px;
        padding: 40px 23px;
        /* max-height: calc(100vh - 40px); */
    }
`;

export const Article = styled.article`
    margin: 0 auto;
    max-width: 480px;

    @media ${device.md} {
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
    background: ${black};

    & p {
        font-size: 26px;
        font-weight: 600;
        letter-spacing: 0.26px;
        color: ${white};

        @media ${device.md} {
            color: ${black};
        }
    }

    @media ${device.md} {
        margin-bottom: 38px;
        height: initial;
        border-radius: initial;
        background: initial;
    }

    @media ${device.sm} {
        margin-bottom: 30px;
    }
`;

export const FormEmail = styled( Form )`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${device.sm} {
        gap: 25px;
    }
`;

export const LabelFormUser = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
`;

export const WrappErrTextPassword = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 23px;

    @media ${device.md} {
        margin-left: 0;
    }
`;

export const TextErrPassword = styled.p`
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(15.82 / 14);

    color: ${( { $color } ) => ( $color ? accent : black )};
`;

export const WrappCapcha = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 26px;
    margin-bottom: 7px;

    width: 100%;
    height: 60px;
    padding: 16px 32px;

    border-width: 1px;
    border-style: solid;

    border-radius: 20px 0px;
    border-color: ${( { $accept } ) => ( $accept ? borderGreen : grayStroke )};
    border-color: ${( { $error } ) => $error && `${borderError}`};
    color: ${grayText};
    background-color: ${white};

    &:focus {
        outline: 1px solid ${borderBlue};
    }

    @media ${device.md} {
        margin-top: 0px;
    }

    @media ${device.sm} {
        height: 45px;
        padding: 15px 20px;

        & img {
            display: none;
        }
    }
`;

export const LabelCheckbox = styled.label`
    display: flex;
    align-items: center;
    gap: 9px;

    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(28 / 20);
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

export const WrappPolicy = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;

    @media ${device.sm} {
        margin-top: 3px;
        margin-bottom: 5px;
    }
`;

export const TextPolicy = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: (15.82 / 14);

    color: ${black};
`;

export const LinkPolicy = styled( Link )`
    font-weight: 500;
    text-decoration-line: underline;

    color: ${black};
`;

export const BtnText = styled.p`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.24px;

    color: ${white};

    @media ${device.sm} {
        font-size: 18px;
        letter-spacing: 0.18px;
    }
`;

export const PhoneInputBasic = styled( PhoneInput )`
    /* padding-left: 32px; */
    padding: 0 32px;
    /* border: 2px solid salmon; */
    border-radius: 20px 0;
    border-color: ${( { $isDataUser } ) => ( $isDataUser ? grayStroke : borderGreen )};
    border-color: ${( { $error } ) => $error && `${borderError}`};
    color: ${black};
    background-color: ${white};

    & input {
        padding: 16px 0 16px 12px;
        border: none;
        /* outline: 1px solid green; */

        font-size: 20px;
        font-weight: 400;
        line-height: calc(28 / 20);
        letter-spacing: 0.2px;

        &:placeholder-shown {
            background-color: salmon;
        }

        &:focus {
            outline: none;
            outline: 2px solid green;
        }
    }
`;

export const PhoneInputNew = styled( PhoneInputWithCountrySelect )`
    border: 2px solid salmon;
    border-radius: 20px 0;
    padding: 15px;

    & input {
        border: none;
        outline: 1px solid gray;
        padding: 20px;

        &:placeholder-shown {
            background-color: salmon;
        }

        &:focus {
            outline: none;
            outline: 2px solid green;
        }
    }
`;
