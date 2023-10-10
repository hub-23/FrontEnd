/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { Controller } from 'react-hook-form';

import Button from '../common/button/Button';
import Input from '../common/input/Input';
import Segment from '../common/segment/Segment';
import GoogleLoginButton from './components/googleLoginButton/GoogleLoginButton';
import RadioButton from './components/RadioButton/RadioButton';
import { useAppForm } from '../../hooks/hooks.js';

import cross from '../../assets/registration-form/cross.png';

import DEFAULT_REGISTRATION_PAYLOAD from './common/constants.js';
// eslint-disable-next-line max-len
import { registration as registrationValidationSchema } from '../../validation-schemas/validation-schemas.js';
import { UserPayloadKey } from '../../common/emuns/enums.js';

import * as S from './RegistrationForm.style.js';

const options = [
  { value: 'student', label: 'Я учень' },
  { value: 'teacher', label: 'Я викладач' },
];

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
    <S.Overlay className='overlay'>
      <S.Modal className="form-content">
        <S.Flex align='start' gap='100px'>
          <Segment maxWidth='705px'>
            <S.Flex>
              <Button primary >Вхід</Button>
              <Button secondary >Реєстрація</Button>
            </S.Flex>
            <form className=""
              action=''
              name='registrationForm'
              onSubmit=
                { handleSubmit( handleRegister ) }>

              <S.Flex justify='center' gap='30px'>

                <Controller
                  control={ control }
                  name='role'
                  render={ ( { field: { onChange, ...props } } ) =>
                    options.map( ( option, index ) => (

                      <RadioButton
                        key={ index }
                        { ...props }
                        onChange={ onChange }
                        value={ option.value }
                        label={ option.label }
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
              {/* <Input
              type='password'
              name={ UserPayloadKey.CONFIRMPASSWORD }
              placeholder='Повторіть пароль'
              control={ control }
              errors={ errors }
            /> */}

              <ReCAPTCHA style={ { marginBottom: '30px' } }
                sitekey={ process.env.REACT_APP_SITE_KEY || 'wweew' }
                ref={ captchaRef }
              />
              <S.StyledBox htmlFor='confidentPolicy'>
                <input
                  type='checkbox'
                  name='confidentPolicy'
                  id='confidentPolicy'
                />
              Я приймаю
                {' '}
                <Link href="/" target='_blank'>Політика конфіденційності</Link>
                {' '}
              та
                {' '}
                <Link href="/node_modules" target='_blank'>Умови використання</Link>
              </S.StyledBox>
              <S.Flex>
                <Button blue width='100%' type='submit'>Зареєструватись</Button>
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
          </Segment>
          <Segment>
            <Button transparent align='end' onClick={ onClose }>
              <img src={ cross } alt="cross" />
            </Button>
            < S.GoogleRegistration>
              <S.Typography size='20px'>
                або
                <span>
                  Увійти за допомогою
                </span>
              </S.Typography>
              <GoogleLoginButton />
            </S.GoogleRegistration>

          </Segment>
        </S.Flex>
      </S.Modal>
    </S.Overlay >
  );
};

export default RegistrationForm;
