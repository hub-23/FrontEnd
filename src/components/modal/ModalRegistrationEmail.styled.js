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

export const ModalWrapp = styled.div`
    position: relative;

    width: 720px;
    padding: 40px 50px;

    border-radius: 20px 0px;
    background-color: ${white};

    & > svg {
        position: absolute;
        top: 40px;
        right: 50px;

        cursor: pointer;
    }
`;

export const Article = styled.article`
    width: 480px;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 30px;
    width: 480px;
    height: 60px;

    border-radius: 20px 0px;
    background: ${black};

    & p {
        font-family: Nunito;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0.26px;
        color: ${white};
    }
`;

export const FormEmail = styled( Form )`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const LabelFormUser = styled.label`
    display: flex;
    flex-direction: column;
    gap: 7px;
`;

export const Input = styled( Field )`
    width: 480px;
    height: 60px;
    padding: 16px 32px;

    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: (28px / 20px);
    letter-spacing: 0.2px;

    border-width: 1px;
    border-style: solid;
    /* border-color: ${borderGreen}; */

    border-radius: 20px 0px;
    border-color: ${( { $isDataUser } ) => ( $isDataUser ? grayStroke : borderGreen )};
    border-color: ${( { $error } ) => $error && `${borderError}`};
    color: ${black};
    background-color: ${white};

    &:focus {
        outline: 1px solid ${borderBlue};
    }

    &:placeholder-shown {
        color: ${grayText};
        border-color: ${grayStroke};
    }
`;

export const ErrorPasswordWrapp = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 23px;
`;

export const ErrorPassword = styled.p`
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(15.82px / 14px);

    color: ${( { $color } ) => ( $color ? accent : black )};
`;

export const WrappCapcha = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 26px;
    margin-bottom: 7px;

    width: 480px;
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
`;

export const LabelCheckbox = styled.label`
    display: flex;
    align-items: center;
    gap: 9px;

    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: (28px / 20px);
    letter-spacing: 0.2px;
`;

export const InputCheckbox = styled( Field )`
    appearance: none;
    position: absolute;
    border-color: yellow;

    & + span {
        width: 24px;
        height: 24px;
        background-image: url(${checkbox0});
    }

    &:checked + span {
        background-image: url(${checkbox1});
    }
`;

export const WrappPolicy = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`;

export const TextPolicy = styled.p`
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: (15.82px / 14px);

    color: ${black};
`;

export const LinkPolicy = styled( Link )`
    font-weight: 500;
    text-decoration-line: underline;

    color: ${black};
`;

export const ErrorText = styled.p`
    display: inline;
    margin-left: 19px;

    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: (15.82px / 14px);

    color: ${accent};
`;
