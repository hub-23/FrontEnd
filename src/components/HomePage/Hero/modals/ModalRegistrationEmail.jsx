import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';

import {
  accent,
  bgColorGradientBtn,
  nameExp,
  passwordExp,
  white,
} from '../../../../utils/variables.styled';
import { IconSvg } from '../../../common/IconSvg';
import * as S from './ModalRegistrationEmail.styled';
import reCapcha from '../../../../assets/home/modal/recapcha.png';
import { BtnRegistration } from './BtnRegistration';
import { BtnClose } from '../../../common/BtnClose';
import { Input } from '../../../common/modalElements/Input';
import { InputFieldPhone } from '../../../common/modalElements/InputFieldPhone';
import { Note } from '../../../common/modalElements/Note';
import { useDispatch } from 'react-redux';
import { register } from '../../../../redux/auth/operations';
import { useHubContext } from '../../../../redux/Context';

export const ModalRegistrationEmail = ( { onActiveModal } ) => {
  const { setShowModalConfirmEmail, role } = useHubContext();
  const dispatch = useDispatch();
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
    name: localStorage.getItem( 'registrationEmail-name' ) || '',
    email: localStorage.getItem( 'registrationEmail-email' ) || '',
    phone: localStorage.getItem( 'registrationEmail-phone' ) || '',
    password: '',
    capcha: '',
    accept: '',
  };

  const handleSubmit = ( values, { resetForm } ) => {
    // console.log( '💙💛 submit :>> ', values );

    // sent to Backend: name, email, phone, password, role
    const { name: username, email, password, phone } = values;
    dispatch( register( { username, email, password, phone, role } ) );

    const formFieldKeys = [ 'name', 'email', 'phone' ];

    formFieldKeys.forEach( key => {
      localStorage.removeItem( `registrationEmail-${key}` );
    } );

    resetForm();
    onActiveModal();
    setShowModalConfirmEmail( prev => !prev ); // відкрити модалку /Підтвердіть ваш E-mail/
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
              const { value, touched } = values;
              setValues( prev => ( { ...prev, phone: value } ) );
              setTouched( { ...touched, phone: touched } );
            }; // значення з InputFieldPhone

            const noteShown
              = errPassword === 'undefined'
              || ( password && password.startsWith( 'Пароль обов‘язковий' ) );

            return (
              <S.FormEmail autoComplete="on">
                <Input
                  type="text"
                  name="name"
                  placeholder="Ім’я"
                  isStar={ true }
                  error={ errName }
                  value={ values.name }
                  component="registrationEmail"
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Електронна адреса"
                  isStar={ true }
                  error={ errEmail }
                  value={ values.email }
                  component="registrationEmail"
                />

                <S.LabelFormUser>
                  <InputFieldPhone
                    name="phone"
                    valueInput={ formik.values.phone }
                    submitPhone={ handleGetPhone }
                    $isDataUser={ isDataUser }
                    $error={ errPhone }
                    // ----------- use for PhoneSelect
                    $xlPositionTopList="18px"
                    $smPositionTopList="11px"
                    $xlPositionLeftList="32px"
                    $xlHeightList="270px"
                    $mdHeightList=""
                    $smHeightList="290px"
                    $xlGapList="12px"
                    $mdGapList=""
                    $smGapList=""
                    $xlFontSizeList="16px"
                    $mdFontSizeList=""
                    $smFontSizeList=""
                  />
                </S.LabelFormUser>

                <div style={ { position: 'relative' } }>
                  <Input
                    name="password"
                    placeholder="Придумайте пароль"
                    isStar={ true }
                    btnEye
                    $error={ errPassword }
                    $bottom={ password && password.startsWith( 'Пароль має' ) && '-40px' }
                    value={ values.password }
                  />
                  {noteShown && (
                    <Note
                      text="Більше 8 символів, велика літера, цифри і спеціальний знак"
                      $fill={ accent }
                      $xlBottom={ errPassword ? '-45px' : '-25px' }
                      $mdBottom={ errPassword ? '-55px' : '-45px' }
                      $smBottom={ errPassword ? '-40px' : '-40px' }
                      $xlLeft="12px"
                      $mdLeft="0"
                      $xlFontSize="14px"
                      $xlLineHeight="15.82"
                      $error={ errPassword }
                    />
                  )}
                </div>

                <div>
                  <S.WrappCapcha
                    $error={ errCapcha }
                    $accept={ isCheckCapcha }
                    $xlMarginTop={
                      noteShown && errPassword
                        ? '26px'
                        : ( noteShown && '5px' ) || ( errPassword && '20px' )
                    }
                    $mdMarginTop={
                      noteShown && errPassword
                        ? '35px'
                        : ( noteShown && '30px' ) || ( errPassword && '20px' )
                    }
                    $smMarginTop={
                      noteShown && errPassword
                        ? '15px'
                        : ( noteShown && '15px' ) || ( errPassword && '0' )
                    }
                  >
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
