import React from 'react';
import { Link } from 'react-router-dom';
import { useController } from 'react-hook-form';

import { ErrorMessage } from '../errorMessage/ErrorMessage';

import * as S from './Checkbox.styled.js';
// eslint-disable-next-line react/display-name
export const Checkbox = ( { name, control, errors } ) => {
  const { field } = useController( { name, control } );
  const error = errors[ name ]?.message;
  const hasError = Boolean( error );

  return (
    <>
      <S.Flex>
        <S.StyledLabel>
          <input
            { ...field }
            name={ name }
            type="checkbox"
          />
              Я приймаю
          {' '}
          <Link href="/" target='_blank'>Політика конфіденційності</Link>
          {' '}
              та
          {' '}
          <Link href="/node_modules" target='_blank'>Умови використання</Link>
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
