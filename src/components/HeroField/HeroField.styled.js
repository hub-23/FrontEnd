import styled from 'styled-components';
import { Field, Form } from 'formik';
import { device } from '../../styles/device';
import { accent, black, borderBlue, grayStroke, grayText, white } from '../../utils/variables.styled';
import { InputСircle } from '../../utils/common.styled';
// import { InputСircle } from '../../utils/common.styled';

export const FormSearch = styled( Form )`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    padding: 12px 31px;
    width: 100%;
    /* height: 80px; */

    border-radius: 20px 0px;
    border: 1px solid ${grayStroke};
    background-color: ${white};
    backdrop-filter: blur(4px);

    @media ${device.md} {
        flex-direction: column;
        padding: 40px 32px;
        border-radius: 32px 0px;
    }
    @media ${device.sm} {
        padding: 25px 20px 20px 20px;
        border-radius: 32px 0px;
    }
`;

export const Label = styled.label`
    display: flex;
    align-items: center;

    padding: 14px 0;

    font-size: 20px;
    font-weight: 400;
    line-height: calc(28 / 20);
    letter-spacing: 0.2px;

    color: ${black};

    &:not(:first-child) {
        border-left: 1px solid ${grayStroke};
    }

    @media ${device.md} {
        width: 100%;
        padding: 14px 0 16px 0;
        padding: 0;

        &:not(:first-child) {
            border-left: none;
            border-top: 1px solid ${grayStroke};
            padding-left: 0;
            padding-top: 20px;
        }
        &:not(:nth-child(3)) {
            padding-bottom: 16px;
        }
        &:nth-child(3) {
            padding-bottom: 20px;
        }
    }

    @media ${device.sm} {
        &:not(:first-child) {
            padding-top: 21px;
        }
        &:not(:nth-child(3)) {
            padding-bottom: 21px;
        }
        &:nth-child(3) {
            padding-bottom: 25px;
        }
    }
`;

export const Input = styled( Field )`
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;

    color: inherit;

    border: none;

    @media ${device.md} {
    }
    @media ${device.sm} {
    }

    &:focus {
        outline: 1px solid ${borderBlue};
    }

    &:placeholder-shown {
        color: ${grayText};
    }
`;

export const InputSearch = styled( Input )`
    margin-left: 12px;
`;

export const InputCheckbox = styled( InputСircle )`
    margin-right: 12px;
`;

export const ErrorText = styled.p`
    position: absolute;
    left: 30px;
    bottom: 0;

    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: (15.82px / 14px);

    color: ${accent};
`;

export const BtnSubmit = styled.button`
    padding: 10px 32px;

    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.2px;

    border: none;
    border-radius: 20px 0px;

    color: ${white};
    background: ${black};

    @media ${device.md} {
        width: 280px;
    }
    @media ${device.sm} {
        width: 100%;
    }
`;
