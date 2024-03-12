import React from 'react';
import { ErrorMessage } from 'formik';
import { ErrorText } from './FormError.styled';

export const FormError = ( { name, ...props } ) => {
  return (
    <ErrorMessage
      name={ name }
      render={ ( message ) => <ErrorText { ...props }>{message}</ErrorText> }
    />
  )
};
// With render: will only be called when the field has been touched and an error exists.
// Not for checkboxes
