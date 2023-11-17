import React, { useState } from 'react';
import { useController } from 'react-hook-form';

import { ErrorMessage } from '../errorMessage/ErrorMessage.jsx';
import { UserPayloadKey } from '../../common/enums/enums';

import showEye from '../../../../assets/registration-form/sow-eye.png';
import hideEye from '../../../../assets/registration-form/hide-password.png';

import * as S from './Input.styled.js';


export const Input = ( {
  name,
  type,
  errors,
  control,
  disabled,
  placeholder,
} ) => {
  const { field } = useController( { name, control } );
  const [ showPassword, setShowPassword ] = useState( false );

  const error = errors[ name ]?.message;
  const hasError = Boolean( error );
  const togglePasswordVisibility = () => {
    setShowPassword( !showPassword );
  };
  return (
    <S.Flex >
      <S.StyledInput
        { ...field }
        type={
           type === UserPayloadKey.PASSWORD
           && name === UserPayloadKey.PASSWORD
           ? showPassword ? 'text' : 'password' : type
        }
        disabled={ disabled }
        placeholder={ placeholder }
        aria-invalid={ errors[ name ]?.message ? 'true' : 'false' }
      />


      { type === UserPayloadKey.PASSWORD
           && name === UserPayloadKey.PASSWORD
      && <S.StyledButton onClick={ togglePasswordVisibility }>
        {showPassword
        ? <img src={ hideEye } alt="hide-eye" />
        : <img src={ showEye } alt="show-eye" />}
      </S.StyledButton>}

      { hasError
          && (
            <ErrorMessage error={ error }/>
          )
      }
    </S.Flex >

  );
};
