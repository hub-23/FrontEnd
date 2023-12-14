import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import {
  WrappCapcha,
  ErrorText,
  FormEmail,
  Input,
  ModalWrapp,
  Title,
  Article,
  LabelFormUser,
  ErrorPassword,
  ErrorPasswordWrapp,
  TextPolicy,
  LinkPolicy,
  InputCheckbox,
  LabelCheckbox,
  WrappPolicy,
} from './ModalRegistrationEmail.styled';
import sprite from '../../assets/sprite.svg';
import reCapcha from '../../assets/home/modal/recapcha.png';
import { BtnRegistration } from './BtnRegistration';
import { bgColorGradientBtn, white } from '../../utils/variables.styled';

export const ModalRegistrationEmail = ( { onActiveModal } ) => {
  const schema = object( {
    name: string()
        .min( 2, 'Вкажіть мініімум 2 літери, але не більше 30' )
        .max( 30, 'Вкажіть мініімум 2 літери, але не більше 30' )
        .matches( /^[А-я\s/A-z\s/\-/_/.]+$/, 'Ім’я має містити українські або англійскі літери' )
        .required( 'Вкажіть ваше ім’я' ),
    email: string().email( 'Невірно вказано e-mail' ).required( 'Вкажіть ваш e-mail' ),
    phone: string()
        .matches(
            /^\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
            'Невірно вказаний номер',
        )
        .required( 'Вкажіть ваш номер телефону' ),
    password: string()
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[A-z]){1}).*$/,
            'Пароль має містити більше 8 символів, велику літеру, цифри і спеціальний знак',
        )
        .required( 'Більше 8 символів, велика літера, цифри і спеціальний знак' ),
    capcha: string().required( 'Виконайте перевірку reCAPTCHA' ),
    accept: string().required( 'Політики мають бути погоджені' ),
  } );

  const initialValues = {
    name: '',
    email: '',
    phone: '+38 ',
    password: '',
    capcha: '',
    accept: '',
  };

  const FormError = ( { name } ) => {
    return <ErrorMessage name={ name } render={ ( message ) => <ErrorText>{message}</ErrorText> } />;
  };

  const handleSubmit = ( values, { resetForm } ) => {
    const phone = { phone: values.phone.replaceAll( ' ', '' ) }; // Чистим пробіли в рядку
    const dataUserRegister = { ...values, ...phone };
    console.log( 'values from dataUserRegister :>> ', dataUserRegister );

    resetForm();
    onActiveModal();
  };

  return (
    <ModalWrapp>
      <svg width="60px" height="60px" onClick={ onActiveModal }>
        <use href={ `${sprite}#icon-close` }></use>
      </svg>

      <Article>
        <Title>
          <p>Реєстрація</p>
        </Title>
        <Formik initialValues={ initialValues } validationSchema={ schema } onSubmit={ handleSubmit }>
          {( formik ) => {
            const {
              errors: { name, email, phone, password, capcha },
              touched,
            } = formik;
            const isCheckCapcha = formik.values.capcha;
            const isDataUser = formik.initialValues.phone === formik.values.phone;

            return (
              <FormEmail autoComplete="on">
                <LabelFormUser htmlFor="name">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ім’я та прізвище"
                    $error={ name && touched.name }
                  />
                  <FormError name="name" />
                </LabelFormUser>

                <LabelFormUser htmlFor="email">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Електронна адреса"
                    $error={ email && touched.email }
                  />
                  <FormError name="email" />
                </LabelFormUser>

                <LabelFormUser htmlFor="phone">
                  <Input
                    type="tel"
                    name="phone"
                    $isDataUser={ isDataUser }
                    $error={ phone && touched.phone }
                  />
                  <FormError name="phone" />
                </LabelFormUser>

                <LabelFormUser htmlFor="password" style={ { gap: '11px' } }>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Придумайте пароль"
                    $error={ password && touched.password }
                  />
                  <ErrorPasswordWrapp>
                    <svg width="24px" height="24px" onClick={ onActiveModal }>
                      <use href={ `${sprite}#icon-star-marker` }></use>
                    </svg>
                    <ErrorPassword $color={ password && touched.password }>
                                            Більше 8 символів, велика літера, цифри і спеціальний знак
                    </ErrorPassword>
                  </ErrorPasswordWrapp>
                </LabelFormUser>

                <div>
                  <WrappCapcha $error={ capcha && touched.capcha } $accept={ isCheckCapcha }>
                    <LabelCheckbox>
                      <InputCheckbox type="checkbox" name="capcha" />
                      <span></span>
                                            I’m not robot
                    </LabelCheckbox>

                    <img src={ reCapcha } width="40" height="38" alt="re Capcha"></img>
                  </WrappCapcha>
                  <FormError name="capcha" />
                </div>

                <WrappPolicy>
                  <LabelCheckbox>
                    <InputCheckbox type="checkbox" name="accept" />
                    <span></span>

                    <TextPolicy>
                                            Я приймаю
                      {' '}
                      <span>
                        <LinkPolicy>Політика конфіденційності </LinkPolicy>
                      </span>
                                            та
                      <span>
                        <LinkPolicy> Умови використання</LinkPolicy>
                      </span>
                    </TextPolicy>
                  </LabelCheckbox>

                  <FormError name="accept" />
                </WrappPolicy>

                <BtnRegistration
                  marginBottom="30px"
                  color={ white }
                  width="480px"
                  height="56px"
                  // onRegister={ 'callback' }
                  bgColorGradient={ bgColorGradientBtn }
                >
                  <p> Зареєструватись</p>
                </BtnRegistration>
              </FormEmail>
            );
          }}
        </Formik>

        <TextPolicy>
                    Цей сайт захищено технологією reCAPTCHA, до нього застосовуються
          {' '}
          <span>
            <LinkPolicy style={ { fontWeight: '600' } }>Політика конфіденційності </LinkPolicy>
          </span>
                    та
          <span>
            <LinkPolicy style={ { fontWeight: '600' } }> Умови використання</LinkPolicy>
          </span>
          {' '}
                    Google.
        </TextPolicy>
      </Article>
    </ModalWrapp>
  );
};
