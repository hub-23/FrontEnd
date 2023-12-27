import styled from 'styled-components';
import { accent, black, grayText, white } from '../../utils/variables.styled';
import { Field, Form } from 'formik';
import { device } from '../../styles/device';

export const Modal = styled.div`
    position: relative;

    width: 775px;
    margin: 0 20px;
    padding: 64px 50px 50px 50px;

    border-radius: 20px 0px;
    background-color: ${white};

    @media ${device.md} {
        padding: 50px;
    }

    @media ${device.sm} {
        margin: 0 15px;
        padding: 40px 23px 46px 23px;
    }
`;

export const Article = styled.article`
    /* outline: 1px solid salmon; */

    margin: 0 auto;
    max-width: 420px;

    @media ${device.sm} {
        max-width: initial;
    }
`;

export const Title = styled.p`
    text-align: center;
    margin-bottom: 37px;

    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.26px;

    color: ${black};

    @media ${device.md} {
        margin-bottom: 42px;
    }

    @media ${device.sm} {
        margin-bottom: 40px;
    }
`;

export const FormRigistration = styled( Form )`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RadioBtn = styled.div`
    display: flex;
    gap: 100px;
    margin-bottom: 32px;

    @media ${device.md} {
        margin-bottom: 42px;
    }

    @media ${device.sm} {
        gap: 30px;
        margin-bottom: 28px;
    }
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 20px;
    font-weight: 400;

    color: ${black};
    cursor: pointer;

    @media ${device.sm} {
        font-size: 18px;
    }
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

export const BtnText = styled.p`
    font-size: 20px;
    font-weight: 400;

    color: ${black};

    @media ${device.sm} {
        font-size: 16px;
    }
`;

export const Login = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    font-size: 20px;
    font-weight: 600;

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

    @media ${device.sm} {
        flex-direction: column;
        gap: 12px;

        font-size: 16px;
    }
`;
