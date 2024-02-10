import React, { useEffect, useState } from 'react';
import { PhoneSelect } from './PhoneSelect';
import * as S from './InputFieldPhone.styled';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { FormError } from '../FormError';

export const InputFieldPhone = ( { name, valueInput, isDataUser, error, submitPhone, ...props } ) => {
  const [ codeLetter, setCodeLetter ] = useState( { code: '', dialCode: '' } );

  const [ value, setValue ] = useState( '+380' );
  const [ valid, setValid ] = useState();
  const [ dataPhone, setDataPhone ] = useState( { value: '', touched: false } );

  useEffect( () => {
    setValid( isValidPhoneNumber( `${value}` ) );
  }, [ value ] );

  useEffect( () => {
    if ( value.length >= 7 ) {
      const phone = parsePhoneNumber( value, codeLetter.code );
      setDataPhone( ( prev ) => ( { ...prev, value: valid ? phone.number : '' } ) );
    }
  }, [ valid ] );

  useEffect( () => {
    submitPhone( dataPhone );
  }, [ dataPhone ] ); // Відправляємо Phone на верх, до батька

  const handleGhange = ( evt ) => {
    const { value } = evt.target;

    if ( value.length >= 7 ) {
      const phone = parsePhoneNumber( value, codeLetter.code );
      return setValue( phone.formatInternational() );
    }

    setValue( value );
  };

  const handleGetSelected = ( values ) => {
    setCodeLetter( values );
    setValue( values.dialCode );
  };

  return (
    <>
      <S.Input
        value={ value }
        onChange={ handleGhange }
        placeholder=" xx xxx xxxx"
        onBlur={ () => {
          setDataPhone( ( prev ) => ( { ...prev, touched: true } ) );
        } }
        { ...props }
        style={ { paddilgLeft: '90px' } }
      />

      <FormError name={ name } />

      <PhoneSelect valueSelect={ handleGetSelected } { ...props } />
    </>
  );
};
