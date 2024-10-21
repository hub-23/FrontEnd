// Для використання в формах створених в Formik

import React, { useEffect, useState } from 'react';
import { PhoneSelect } from './PhoneSelect';
import * as S from './InputFieldPhone.styled';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { FormError } from './FormError';
import { useAuth } from 'hooks/useAuth';
import { IconBtn } from '../IconBtn';
import { IconSvg } from '../IconSvg';
import { black } from 'utils/variables.styled';

const validateNumber = number => {
  if ( Number( number.replaceAll( ' ', '' ) ) ) return true;
  return false;
};

export const InputFieldPhone = ( {
  name,
  valueInput,
  isDataUser,
  error,
  submitPhone,
  customIcon,
  ...props
} ) => {
  const { user } = useAuth();

  const [ codeLetter, setCodeLetter ] = useState( { code: '', dialCode: '' } );

  const [ value, setValue ] = useState( '+380' );
  const [ valid, setValid ] = useState();
  const [ dataPhone, setDataPhone ] = useState( { value: '', touched: false } );
  const [ codeLength, setCodeLength ] = useState( 4 );

  useEffect( () => {
    if ( user.phone ) {
      const userPhone = parsePhoneNumber( user.phone ).formatInternational();
      setValue( userPhone );
    }
  }, [ user.phone ] ); // додає тел. з backend

  useEffect( () => {
    setValid( isValidPhoneNumber( `${value}` ) );
  }, [ value ] );

  useEffect( () => {
    if ( value.length >= 7 ) {
      const phone = parsePhoneNumber( value, codeLetter.code );
      setDataPhone( prev => ( { ...prev, value: valid ? phone.number : '' } ) );
    }
  }, [ valid ] );

  useEffect( () => {
    submitPhone( dataPhone );
  }, [ dataPhone ] ); // Відправляємо Phone на верх, до батька

  const handleGhange = evt => {
    const { value } = evt.target;

    if ( value.length >= 7 && validateNumber( value ) ) {
      const phone = parsePhoneNumber( value, codeLetter.code );
      return setValue( phone.formatInternational() );
    }

    if ( !validateNumber( value ) ) return;

    if ( value.replaceAll( ' ', '' ).length >= codeLength ) setValue( value );
  };

  const handleGetSelected = values => {
    setCodeLetter( values );
    setValue( values.dialCode );
    setCodeLength( values.dialCode.length );
  };

  return (
    <div style={ { position: 'relative' } }>
      <S.Input
        type="tel"
        value={ value }
        onChange={ handleGhange }
        placeholder=" +380 xx xxx xxxx"
        maxLength={ valid ? value.length : 16 }
        onBlur={ () => {
          setDataPhone( prev => ( { ...prev, touched: true } ) );
        } }
        { ...props }
        style={ { paddilgLeft: '90px' } }
      />
      { customIcon && (
        <IconBtn xlRight="36px" xlTop="18px" smRight="20px" smTop="13px">
          <IconSvg
            xlWidth="24px"
            xlHeight="24px"
            $fill={ black }
            icon={ customIcon }
            { ...props }
          />
        </IconBtn>
      )}

      <FormError name={ name } />

      <PhoneSelect valueSelect={ handleGetSelected } { ...props } />
    </div>
  );
};
