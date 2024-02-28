import { Field } from 'formik';
import styled from 'styled-components';


export const Input = styled( Field )`
    display: ${( { $display } ) => $display }; // зазвичай ховають під іконкою скрепки

    position: absolute;
    opacity: 0;
    top: -14px;
    left: 0;
    width: 100%;
    height: 48px;
    cursor: pointer;
`;
