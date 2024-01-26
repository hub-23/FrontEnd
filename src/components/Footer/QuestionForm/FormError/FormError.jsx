import React from 'react';
import { ErrorMessage } from 'formik';
import * as S from './FormError.styled';

export const FormError = ( { name, isMarginLeft } ) => {
  return (
    <ErrorMessage
      name={ name }
      render={ ( message ) =>
        <S.ErrorText $isMarginLeft={ isMarginLeft }>
          {message}
        </S.ErrorText>
      }
    />
  );
};
