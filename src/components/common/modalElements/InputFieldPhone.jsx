// Для використання в формах створених в Formik

import React, { useEffect, useState } from 'react';
import { PhoneSelect } from './PhoneSelect';
import * as S from './InputFieldPhone.styled';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { FormError } from './FormError';

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
  ...props
} ) => {
  const [ codeLetter, setCodeLetter ] = useState( { code: '', dialCode: '' } );

  const [ value, setValue ] = useState( '+380' );
  const [ valid, setValid ] = useState();
  const [ dataPhone, setDataPhone ] = useState( { value: '', touched: false } );
  const [ codeLength, setCodeLength ] = useState( 4 );

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

      <FormError name={ name } />

      <PhoneSelect valueSelect={ handleGetSelected } { ...props } />
    </div>
  );
};
