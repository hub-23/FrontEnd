import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';

const ButtonsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1.25rem;
`;

const RegistrationForm = () => {
  return (
    <div className='overlay'>
      <div className="orm-content">
        <form
          action=''
          name='registrationForm'
        >
          <div className='left-content'>
            <ButtonsWrapper>
              <Button primary >Вхід</Button>
              <Button secondary >Реєстрація</Button>
            </ButtonsWrapper>

            <input
              type='email'
              name='userEmail'
              placeholder='Ваш e-mail'
            />
            <p className='input-error_message'>
              Більше 8 символів, велика літера, цифри і спеціальний знак
            </p>
            <input
              type='email'
              name='userEmail'
              placeholder='Ваш e-mail'
            />
            <p className='input-error_message'>Email є обовязковим полем</p>
            <input
              type='password'
              name='userPassword'
              placeholder='Придумайте пароль'
            />
            <p className='input-error_message'>Password є обовязковим полем</p>
            <input
              type='password'
              name='confirmUserPassword'
              placeholder='Повторіть пароль'
            />
            <p className='input-error_message'>Password не співпадає</p>
            <label htmlFor='isRobotCheckbox'>
              <input
                type='checkbox'
                name='isRobotCheckbox'
                id='isRobotCheckbox'
              />
              I’m not robot
              <span className='capta'></span>
            </label>

            <label htmlFor='confidentPolicy'>
              <input
                type='checkbox'
                name='confidentPolicy'
                id='confidentPolicy'
              />
              Я приймаю Політика конфіденційності та Умови використання
            </label>
            <ButtonsWrapper>
              <Button pink>Стати викладачем</Button>
              <Button blue>Стати учнем</Button>
              <Button grey>Стати учнем</Button>
              <Button blue width='705px'>Стати учнем</Button>
            </ButtonsWrapper>
            <p className='form-description'>
              Цей сайт захищено технологією reCAPTCHA, до нього застосовуються
              Політика конфіденційності та Умови використання Google.
            </p>
          </div>
          <div className='right-content'></div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
