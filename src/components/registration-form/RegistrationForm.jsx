import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../common/button/Button';
import Input from '../common/input/Input';
import Segment from '../common/segment/Segment';

import cross from '../../assets/registration-form/cross.png';
import google from '../../assets/registration-form/google.png';

import * as S from './RegistrationForm.style.js';

const RegistrationForm = ( { onClose } ) => {
  const handleFormSubmit = ( e ) => {
    e.preventDefault();
    console.log( 'onSubmit' );
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
            <S.StyledCheckBox>
              <input
                type='checkbox'
                name='isRobotCheckbox'
                id='isRobotCheckbox'
              />
              <label htmlFor='isRobotCheckbox'>
                I’m not robot
              </label>
            </S.StyledCheckBox>


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
            <p>
              або
              <span>
                Увійти за допомогою
              </span>
            </p>
            <Button grey>
              <img src={ google } alt="google" />
            </Button>
          </Segment>
        </S.StyledForm>
      </S.Modal>
    </S.Overlay >
  );
};

export default RegistrationForm;
