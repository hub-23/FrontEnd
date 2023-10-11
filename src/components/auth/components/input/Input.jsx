import React from 'react';
import { useController } from 'react-hook-form';

import * as S from './input.style.js';
import ErrorMessage from '../errorMessage/ErrorMessage.jsx';

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


      { hasError
          && (
            <ErrorMessage error={ error }/>
          )
      }
    </S.Flex >

  );
};

export default Input;
