/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { Controller } from 'react-hook-form';

import Button from '../common/button/Button';
import Input from '../common/input/Input';
import RadioButton from './components/radioButton/RadioButton';
import { useAppForm } from '../../hooks/hooks.js';

import { DEFAULT_REGISTRATION_PAYLOAD, RADIO_OPTIONS } from './common/constants.js';
// eslint-disable-next-line max-len
import { registration as registrationValidationSchema } from '../../validation-schemas/validation-schemas.js';
import { UserPayloadKey } from '../../common/emuns/enums.js';

import * as S from './RegistrationForm.style.js';
import Checkbox from './components/checkbox/CheckBox';


const RegistrationForm = ( { onClose } ) => {
  const captchaRef = useRef( null );
  // const [ isLoading, setIsLoading ] = useState( false );
  const { control, errors, handleSubmit } = useAppForm( {
    defaultValues: DEFAULT_REGISTRATION_PAYLOAD,
    validationSchema: registrationValidationSchema,
  } );

  const handleRegister = ( data ) => {
    const token = captchaRef.current.getValue();

    captchaRef.current.reset();

    console.log( 'onSubmit' );
    console.log( 'token', token );
    console.log( 'data', data );
    onClose();
  };


  return (
    <form
      autoComplete='off'
      action=''
      name='registrationForm'
      onSubmit=
        { handleSubmit( handleRegister ) }>

      <S.Flex justify='center' gap='100px'>
        <Controller
          control={ control }
          name='role'
          render={ ( { field: { onChange, value, ...props } } ) =>
            RADIO_OPTIONS?.map( ( option, index ) => (

              <RadioButton
                key={ index }
                { ...props }
                onChange={ onChange }
                value={ option.value }
                label={ option.label }
                selected={ value }
              />
            ) )
          }
        />
      </S.Flex>
      <Input
        type='email'
        name={ UserPayloadKey.EMAIL }
        placeholder='Ваш e-mail'
        control={ control }
        errors={ errors }
      />
      <Input
        type='password'
        name={ UserPayloadKey.PASSWORD }
        placeholder='Придумайте пароль'
        control={ control }
        errors={ errors }
      />
      <Input
        type='password'
        name={ UserPayloadKey.CONFIRMPASSWORD }
        placeholder='Повторіть пароль'
        control={ control }
        errors={ errors }
      />

      <ReCAPTCHA style={ { marginBottom: '30px' } }
        sitekey={ process.env.REACT_APP_SITE_KEY || 'wweew' }
        ref={ captchaRef }
      />
      <S.StyledBox htmlFor='confidentPolicy'>
        <Checkbox
          name={ UserPayloadKey.CONFIDENTPOLICY }
          errors={ errors }
          control={ control }
        />

      </S.StyledBox>
      <S.Flex>
        <Button blue='true' width='100%' type='submit'>Зареєструватись</Button>
      </S.Flex>
      <S.Typography>
              Цей сайт захищено технологією reCAPTCHA, до нього застосовуються
        {' '}
        <Link href="/" target='_blank'>Політика конфіденційност</Link>
              і та
        {' '}
        <Link href="/node_modules" target='_blank'>Умови використання</Link>
        {' '}
              Google.
      </S.Typography>
    </form>

  );
};

export default RegistrationForm;
