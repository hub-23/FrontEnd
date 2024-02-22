import { Field } from 'formik';
import styled from 'styled-components';


export const Input = styled( Field )`
    display: ${( { $display } ) => $display || 'none' }; // зазвичай ховають під іконкою скрепки
`;
