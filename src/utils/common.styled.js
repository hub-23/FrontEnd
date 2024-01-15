import { Field } from 'formik';
import styled from 'styled-components';
import { accent } from './variables.styled';
import { device } from '../styles/device';

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

export const Container = styled.section`
    outline: 1px solid salmon;

    width: 100%;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding: 120px 160px;

    @media ${device.xl} {
        padding: 100px 80px;
    }

    @media ${device.md} {
        padding: 80px 40px;
    }

    @media ${device.sm} {
        padding: 80px 20px;
    }
`;
