import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import { useController } from 'react-hook-form';
import * as S from './Recaptcha.styled.js';

export const Recaptcha = ( { captchaRef, name, control, errors } ) => {
  const { field } = useController( { name, control } );

  const error = errors[ name ]?.message;
  const hasError = Boolean( error );
  return (
    <S.Flex>
      <ReCAPTCHA
        { ...field }
        sitekey={ process.env.REACT_APP_SITE_KEY || 'wweew' }
        ref={ captchaRef }
      />
      { hasError
          && (
            <ErrorMessage error={ error }/>
          )
      }
    </S.Flex>
  );
};
