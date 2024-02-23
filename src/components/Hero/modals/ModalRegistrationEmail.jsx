import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';

import {
  accent,
  bgColorGradientBtn,
  nameExp,
  passwordExp,
  white,
} from '../../../utils/variables.styled';
import { IconSvg } from '../../common/IconSvg';
import * as S from './ModalRegistrationEmail.styled';
import reCapcha from '../../../assets/home/modal/recapcha.png';
import { BtnRegistration } from './BtnRegistration';
import { BtnClose } from '../../common/BtnClose';
import { Input } from '../../modalElements/Input';
import { InputFieldPhone } from '../../modalElements/InputFieldPhone';
import { Note } from '../../modalElements/Note';

export const ModalRegistrationEmail = ( { onActiveModal } ) => {
  const scheme = object( {
    name: string()
      .min( 2, 'Вкажіть мініімум 2 літери, але не більше 30' )
      .max( 30, 'Вкажіть мініімум 2 літери, але не більше 30' )
      .matches( nameExp, 'Ім’я має містити українські або англійські літери' )
      .required( 'Вкажіть ваше ім’я' ),
    email: string()
      .email( 'Невірно вказано e-mail' )
      .required( 'Вкажіть ваш e-mail' ),
    phone: string().required( 'Вкажіть ваш номер телефону' ),
    password: string()
      .matches(
        passwordExp,
        'Пароль має містити більше 8 символів, велику та малу літеру латиницею, цифри і спеціальний знак'
      )
      .required( 'Пароль обов‘язковий' ),
    capcha: string().required( 'Виконайте перевірку reCAPTCHA' ),
    accept: string().required( 'Політики мають бути погоджені' ),
  } );

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    capcha: '',
    accept: '',
  };

  const handleSubmit = ( values, { resetForm } ) => {
    console.log( '💙💛 send Data registrationEmail to Backend :>> ', values );
    resetForm();
    onActiveModal();
  };

  return (
    <S.Modal>
      <BtnClose
        xlRight="50px"
        xlTop="40px"
        mdRight="15px"
        mdTop="15px"
        smRight="10px"
        smTop="10px"
        click={ onActiveModal }
      >
        <IconSvg
          xlWidth="60px"
          xlHeight="60px"
          mdWidth="36px"
          mdHeight="36px"
          smWidth="24px"
          smHeight="24px"
          icon="icon-close"
        />
      </BtnClose>

      <S.Article>
        <S.Title>
          <p>Реєстрація</p>
        </S.Title>

        <Formik
          initialValues={ initialValues }
          validationSchema={ scheme }
          onSubmit={ handleSubmit }
        >
          {formik => {
            const {
              errors: { name, email, phone, password, capcha },
              touched,
              values,
              setValues,
              setTouched,
            } = formik;

            const isCheckCapcha = formik.values.capcha;
            const isDataUser
              = formik.initialValues.phone === formik.values.phone;

            const errName = name && touched.name;
            const errPassword = password && touched.password;
            const errEmail = email && touched.email;
            const errPhone = phone && touched.phone;

            const errCapcha = capcha && touched.capcha;

            const handleGetPhone = values => {
              setValues( prev => ( {
                ...prev,
                phone: values.value,
              } ) );

              setTouched( {
                ...touched,
                phone: values.touched,
              } );
            }; // значення з InputFieldPhone

            return (
              <S.FormEmail autoComplete="on">
                <Input
                  type="text"
                  name="name"
                  placeholder="Ім’я"
                  isStar={ true }
                  error={ errName }
                  value={ values.name }
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Електронна адреса"
                  isStar={ true }
                  error={ errEmail }
                  value={ values.email }
                />

                <S.LabelFormUser>
                  <InputFieldPhone
                    name="phone"
                    valueInput={ formik.values.phone }
                    submitPhone={ handleGetPhone }
                    $isDataUser={ isDataUser }
                    $error={ errPhone }
                    // ----------- use for PhoneSelect
                    $xlPositionTopList="15px"
                    $smPositionTopList="7px"
                    $xlPositionLeftList="32px"
                    $xlHeightList="280px"
                    $mdHeightList=""
                    $smHeightList=""
                    $xlGapList="12px"
                    $mdGapList=""
                    $smGapList=""
                    $xlFontSizeList="16px"
                    $mdFontSizeList=""
                    $smFontSizeList=""
                  />
                </S.LabelFormUser>

                <Input
                  name="password"
                  placeholder="Придумайте пароль"
                  isStar={ true }
                  btnEye
                  $error={ errPassword }
                  value={ values.password }
                />
                <Note
                  $fill={ accent }
                  text='Більше 8 символів, велика літера, цифри і спеціальний знак'
                />

                <div>
                  <S.WrappCapcha $error={ errCapcha } $accept={ isCheckCapcha }>
                    <S.LabelCheckbox>
                      <S.InputCheckbox type="checkbox" name="capcha" />
                      <span></span>
                      I’m not robot
                    </S.LabelCheckbox>

                    <img
                      src={ reCapcha }
                      width="40"
                      height="38"
                      alt="re Capcha"
                    ></img>
                  </S.WrappCapcha>
                </div>

                <S.WrappPolicy>
                  <S.LabelCheckbox>
                    <S.InputCheckbox type="checkbox" name="accept" />
                    <span></span>

                    <S.TextPolicy>
                      {'Я приймаю '}
                      <span>
                        <S.LinkPolicy>Політика конфіденційності</S.LinkPolicy>
                      </span>
                      {' та '}
                      <span>
                        <S.LinkPolicy> Умови використання</S.LinkPolicy>
                      </span>
                    </S.TextPolicy>
                  </S.LabelCheckbox>
                </S.WrappPolicy>

                <BtnRegistration
                  xlMarginBottom="30px"
                  color={ white }
                  xlHeight="60px"
                  smHeight="45px"
                  bgColorGradient={ bgColorGradientBtn }
                  // onRegister={ 'callback' }
                >
                  <S.BtnText> Зареєструватись</S.BtnText>
                </BtnRegistration>
              </S.FormEmail>
            );
          }}
        </Formik>

        <S.TextPolicy>
          {'Цей сайт захищено технологією reCAPTCHA, до нього застосовуються '}
          <span>
            <S.LinkPolicy
              style={ {
                fontWeight: '600',
              } }
            >
              Політика конфіденційності
            </S.LinkPolicy>
          </span>
          {' та '}
          <span>
            <S.LinkPolicy
              style={ {
                fontWeight: '600',
              } }
            >
              Умови використання
            </S.LinkPolicy>
          </span>
          {' Google.'}
        </S.TextPolicy>
      </S.Article>
    </S.Modal>
  );
};
