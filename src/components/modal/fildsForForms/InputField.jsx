import React from 'react';
import * as S from './InputField.styled';
import { FormError } from '../FormError';

export const InputField = ( { type, name, placeholder, error, isStar, ...props } ) => (
  <>
    <S.Input
      type={ type }
      name={ name }
      placeholder={ `${placeholder} ${isStar ? '\u{002A}' : ''}` }
      $error={ error }
      { ...props }
    />

    <FormError name={ name } />
  </>
);
