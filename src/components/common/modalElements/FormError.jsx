import React from 'react';
import { ErrorMessage } from 'formik';
import { ErrorText } from './FormError.styled';

export const FormError = ( { name, ...props } ) => {
  return (
    <ErrorMessage
      name={ name }
      render={ ( message ) => <ErrorText { ...props }>{message}</ErrorText>
      }
    />
  )
};
