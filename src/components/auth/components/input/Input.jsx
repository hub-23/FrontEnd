import React from 'react';
import { useController } from 'react-hook-form';

import * as S from './input.style.js';

import star from '../../../../assets/registration-form/star.png';

const Input = ( {
  name,
  type,
  errors,
  control,
  disabled,
  placeholder,
} ) => {
  const { field } = useController( { name, control } );

  const error = errors[ name ]?.message;
  const hasError = Boolean( error );
  return (
    <S.Flex >
      <S.StyledInput
        { ...field }
        type={ type }
        disabled={ disabled }
        placeholder={ placeholder }
        aria-invalid={ errors[ name ]?.message ? 'true' : 'false' }
      />

      <S.Errors>
        { hasError
          && (
            <>
              <img src={ star } alt="star" />
              <span>{error}</span>
            </>
          )
        }
      </S.Errors>
    </S.Flex >

  );
};

export default Input;
