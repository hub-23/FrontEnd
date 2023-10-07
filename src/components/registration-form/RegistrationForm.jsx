import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../common/button/Button';
import Input from '../common/input/Input';
import Segment from '../common/segment/Segment';

import * as S from './RegistrationForm.style.js';

const StyledCheckBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:start;
/* padding-bottom:30px; */
height: 90px;
width: 100%;
  height: 60px;
  border-radius: 20px 0px 20px 0px;
  border: 1px;
  border: 1px solid #2D2D2D33;
  /* font-family: ${(props) => props.fontFamily || props.theme.fontFamily.primary}; */
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 30px;
  background:  #FFFFFF;
  outline: none;
  gap: 10px;
  &:input {
  margin-left:10px;
  }
`;

const RegistrationForm = () => {
  return (
    <S.Overlay className='overlay'>
      <S.Modal className="form-content">
        <form
          action=''
          name='registrationForm'
        >
          <Segment >
            <S.ButtonsWrapper>
              <Button primary >Вхід</Button>
              <Button secondary >Реєстрація</Button>
            </S.ButtonsWrapper>

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
            <StyledCheckBox>
              <input
                type='checkbox'
                name='isRobotCheckbox'
                id='isRobotCheckbox'
              />
              <label htmlFor='isRobotCheckbox'>
                I’m not robot
              </label>
            </StyledCheckBox>


            <label htmlFor='confidentPolicy'>
              <input
                type='checkbox'
                name='confidentPolicy'
                id='confidentPolicy'
              />
              Я приймаю Політика конфіденційності та Умови використання
            </label>
            <S.ButtonsWrapper>
              <Button pink>Стати викладачем</Button>
              <Button blue>Стати учнем</Button>
            </S.ButtonsWrapper>
            <p className='form-description'>
              Цей сайт захищено технологією reCAPTCHA, до нього застосовуються
              {' '}
              <Link href="/" target='_blank'>Політика конфіденційност</Link>
              і та
              {' '}
              <Link href="/node_modules" target='_blank'>Умови використання</Link>
              {' '}
              Google.
            </p>
          </Segment>
          <div className='right-content'></div>
        </form>
      </S.Modal>
    </S.Overlay>
  );
};

export default RegistrationForm;
