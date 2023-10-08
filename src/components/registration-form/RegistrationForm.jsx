/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

import Button from '../common/button/Button';
import Input from '../common/input/Input';
import Segment from '../common/segment/Segment';
import GoogleLoginButton from './components/GoogleLoginButton';

import cross from '../../assets/registration-form/cross.png';

import * as S from './RegistrationForm.style.js';

const RegistrationForm = ( { onClose } ) => {
  const captchaRef = useRef( null );
  const handleFormSubmit = ( e ) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();

    captchaRef.current.reset();

    console.log( 'onSubmit' );
    console.log( 'token', token );
  };


  return (
    <S.Overlay className='overlay'>
      <S.Modal className="form-content">
        <S.StyledForm
          action=''
          name='registrationForm'
          onSubmit={ handleFormSubmit }
        >
          <Segment >
            <S.Flex>
              <Button primary >Вхід</Button>
              <Button secondary >Реєстрація</Button>
            </S.Flex>

            <S.Flex justify='center' gap='30px'>
              <S.RadioButton>
                <label htmlFor="student">
                  <input type="radio" name="role" id="student" checked/>
                Я учень
                </label>
              </S.RadioButton>
              <S.RadioButton>
                <label htmlFor="teacher">
                  <input type="radio" name="role" id="teacher" />
                Я викладач
                </label>
              </S.RadioButton>
            </S.Flex>

            <Input
              type='email'
              name='userEmail'
              placeholder='Ваш e-mail'
            // errors=' Більше 8 символів, велика літера, цифри і спеціальний знак'
            />
            <Input
              type='email'
              name='userEmail'
              placeholder='Ваш e-mail'
              errors='Email є обовязковим поле'
            />
            <Input
              type='password'
              name='userPassword'
              placeholder='Придумайте пароль'
              errors='Password є обовязковим полем'
            />
            <Input
              type='password'
              name='confirmUserPassword'
              placeholder='Повторіть пароль'
              errors='Password не співпадає'
            />

            <ReCAPTCHA style={ { backgroundColor: 'red' } }
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
              <GoogleLoginButton/>
            </S.GoogleRegistration>

          </Segment>
        </S.StyledForm>
      </S.Modal>
    </S.Overlay >
  );
};

export default RegistrationForm;
