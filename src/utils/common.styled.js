import { Field } from 'formik';
import styled from 'styled-components';
import { accent } from './variables.styled';

export const InputСircle = styled( Field )`
    display: flex;
    justify-content: center;
    align-items: center;

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
