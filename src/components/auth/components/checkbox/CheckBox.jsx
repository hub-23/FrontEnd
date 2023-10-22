import React from 'react';
import { useController } from 'react-hook-form';

import { ErrorMessage } from '../errorMessage/ErrorMessage';

import * as S from './Checkbox.styled.js';
// eslint-disable-next-line react/display-name
export const Checkbox = ( { name, control, errors, children, size='' } ) => {
  const { field } = useController( { name, control } );
  const error = errors[ name ]?.message;
  const hasError = Boolean( error );

  return (
    <>
      <S.Flex size={ size }>
        <S.StyledLabel>
          <input
            { ...field }
            name={ name }
            type="checkbox"
          />
          {children}
        </S.StyledLabel>
        { hasError
          && (
            <ErrorMessage error={ error }/>
          )
        }
      </S.Flex>

    </>
  );
};
