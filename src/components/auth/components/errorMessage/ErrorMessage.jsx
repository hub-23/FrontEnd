import React from 'react';
import star from '../../../../assets/home/registration-form/star.png';
import * as S from './ErrorMessage.styled.js';

export const ErrorMessage = ( { error } ) => {
  return (
    <S.Errors>

      <>
        <img src={ star } alt="star" />
        <span>{error}</span>
      </>

    </S.Errors>

  );
};

