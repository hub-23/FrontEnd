/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { Controller } from 'react-hook-form';

import { Button } from '../../common/button/Button';
import { Input } from '../components/input/Input';
import { Checkbox } from '../components/checkbox/CheckBox';
import { RadioButton } from '../components/radioButton/RadioButton';

import { useAppForm } from '../hooks/hooks.js';

import { DEFAULT_REGISTRATION_PAYLOAD, RADIO_OPTIONS } from '../common/constants/constants.js';
// eslint-disable-next-line max-len
import { registration as registrationValidationSchema } from '../validation-schemas/validation-schemas.js';
import { UserPayloadKey } from '../common/enums/enums.js';

import * as S from './RegistrationForm.styled.js';
import { Recaptcha } from '../components/recaptcha/Recaptcha';

export const RegistrationForm = ( { onClose, setIsRegistration } ) => {
  const captchaRef = useRef( null );
  // const [ isLoading, setIsLoading ] = useState( false );
  const { control, errors, handleSubmit, reset } = useAppForm( {
    defaultValues: DEFAULT_REGISTRATION_PAYLOAD,
    validationSchema: registrationValidationSchema,
  } );

  const handleRegister = ( data ) => {
    const token = captchaRef.current.getValue();

    captchaRef.current.reset();

    console.log( 'onSubmit' );
    console.log( 'token', token );
    console.log( 'data', data );
    reset();
    setIsRegistration( false );
    // onClose();
  };

  return (
    <form styles={ { maxWidth: '100%' } }
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
                onChange={ onChange }
                value={ option.value }
                label={ option.label }
                { ...props }
                defaultChecked
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
      <Recaptcha
        captchaRef={ captchaRef }
        name={ UserPayloadKey.RECAPTCHA }
        control={ control }
        errors={ errors }
      />
      <Checkbox
        name={ UserPayloadKey.CONFIDENTPOLICY }
        errors={ errors }
        control={ control }
      >
            Я приймаю
        {' '}
        <Link href="/" target='_blank'>Політика конфіденційності</Link>
        {' '}
              та
        {' '}
        <Link href="/node_modules" target='_blank'>Умови використання</Link>
      </Checkbox>
      <S.Flex>
        <Button
          variant='blue'
          size='large'
          type='submit'>
          Зареєструватись
        </Button>
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

