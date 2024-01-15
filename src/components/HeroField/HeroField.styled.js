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

    padding: 0 31px;
    width: 100%;
    height: 80px;

    border-radius: 20px 0px;
    border: 1px solid ${grayStroke};
    background-color: ${white};
    backdrop-filter: blur(4px);
`;

export const Label = styled.label`
    display: flex;
    align-items: center;

    font-size: 20px;
    font-weight: 400;
    line-height: calc(28 / 20);
    letter-spacing: 0.2px;

    color: ${black};
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

export const Stroke = styled.div`
    margin-right: 20px;
    height: 56px;
    border-left: 1px solid ${grayStroke};
`;

export const ErrorText = styled.p`
    /* display: inline; */
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
    display: inline-flex;
    padding: 10px 32px;

    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.2px;

    border: none;
    border-radius: 20px 0px;

    color: ${white};
    background: ${black};
`;
