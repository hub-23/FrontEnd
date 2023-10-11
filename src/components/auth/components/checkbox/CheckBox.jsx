import React from 'react';
import { Link } from 'react-router-dom';
import { useController } from 'react-hook-form';

import ErrorMessage from '../errorMessage/ErrorMessage';

import * as S from './checkbox.style.js';
// eslint-disable-next-line react/display-name
const Checkbox = ( { name, control, errors } ) => {
  const { field } = useController( { name, control } );
  const error = errors[ name ]?.message;
  const hasError = Boolean( error );
  return (
    <>
      <S.StyledLabel htmlFor={ name }>
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
    </>
  );
};

export default Checkbox;
