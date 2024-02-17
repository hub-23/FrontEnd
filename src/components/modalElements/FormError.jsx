import React from 'react';
import { ErrorMessage } from 'formik';
import { ErrorText } from './FormError.styled';

export const FormError = ( { name, $marginLeft } ) => {
  return (
    <ErrorMessage
      name={ name }
      render={ ( message ) => <ErrorText $marginLeft={ $marginLeft }>{message}</ErrorText>
      }
    />
  )
};
