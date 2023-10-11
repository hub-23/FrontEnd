import React from 'react';
import star from '../../../../assets/registration-form/star.png';
import * as S from './errorMessage.style.js';

const ErrorMessage = ( { error } ) => {
  return (
    <S.Errors>

      <>
        <img src={ star } alt="star" />
        <span>{error}</span>
      </>

    </S.Errors>

  );
};

export default ErrorMessage;
