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
    border-color: ${borderGreen};

    border-radius: 20px 0px;
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

export const WrappCapcha = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 26px;
    margin-bottom: 3px;

    width: 480px;
    height: 60px;
    padding: 16px 32px;

    border-width: 1px;
    border-style: solid;
    border-color: ${borderGreen};

    border-radius: 20px 0px;
    border-color: ${( { $error } ) => $error && `${borderError}`};
    color: ${grayText};
    background-color: ${white};

    &:focus {
        outline: 1px solid ${borderBlue};
    }
`;

export const LabelCapcha = styled.label`
    display: flex;
    gap: 9px;

    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: (28px / 20px);
    letter-spacing: 0.2px;
`;

export const LabelAccept = styled.label`
    display: flex;
    gap: 9px;
    margin-bottom: 5px;

    & > p {
        color: ${black};
    }

    & > p,
    :link {
        font-family: Nunito;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: (15.82px / 14px);

        /* color: ${black}; */
    }

    & > p :link {
        font-weight: 500;
        text-decoration-line: underline;
        text-decoration-color: ${black};
    }

    & > p :visited {
        color: ${black};
    }
`;

export const ErrorText = styled.p`
    display: inline;

    color: ${accent};
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 113%; /* 15.82px */
`;
