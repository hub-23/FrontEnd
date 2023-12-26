import styled from 'styled-components';
import { accent, black, grayText, white } from '../../utils/variables.styled';
import { Field, Form } from 'formik';

export const ModalWrapp = styled.div`
    position: relative;

    width: 775px;
    /* min-height: 449px; */
    padding: 64px 30px 50px 30px;

    border-radius: 20px 0px;
    background-color: ${white};
`;

export const Title = styled.p`
    text-align: center;
    margin-bottom: 37px;

    font-family: Nunito;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: calc(26px / 26px);
    letter-spacing: 0.26px;

    color: ${black};
`;

export const FormRadio = styled( Form )`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LabelWrapp = styled.div`
    display: flex;
    gap: 100px;
    margin-bottom: 34px;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;

    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: calc(20px / 20px);

    color: ${black};
    cursor: pointer;
`;

export const Input = styled( Field )`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 10px;
    width: 24px;
    height: 24px;

    position: relative;

    /* -webkit-appearance: none; */
    appearance: none;
    background-color: #ffffff;
    margin: 0;
    color: currentColor;

    border: 1px solid ${accent};
    border-radius: 50%;
    transform: translateY(-0.075em);

    &:before {
        content: '';
        width: 12px;
        height: 12px;

        transform: translate(50%, 50%);
        transform: scale(0);
        transition: 120ms transform ease-in-out;

        border-radius: 50%;
        background-color: ${accent};
    }
    &:checked::before {
        transform: scale(1);
    }
`;

export const Login = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: calc(20px / 20px);

    & > p {
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        line-height: inherit;

        color: ${grayText};
    }

    & > button {
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        line-height: inherit;

        border: none;
        color: ${black};
        background-color: initial;
    }
`;
