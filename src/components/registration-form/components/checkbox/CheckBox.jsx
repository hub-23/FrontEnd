import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './checkbox.style.js';
import { useController } from 'react-hook-form';

import star from '../../../../assets/registration-form/star.png';
// eslint-disable-next-line react/display-name
const Checkbox = ( { name, control, errors } ) => {
  const { field } = useController( { name, control } );
  const error = errors[ name ]?.message;
  const hasError = Boolean( error );

  return (
    <>

      <label htmlFor={ name }>
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
      </label>


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
    </>
  );
};

export default Checkbox;
