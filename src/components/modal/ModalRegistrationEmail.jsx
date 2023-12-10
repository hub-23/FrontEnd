import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import { object, string } from 'yup';

import {
  WrappCapcha,
  ErrorText,
  FormEmail,
  Input,
  LabelCapcha,
  ModalWrapp,
  Title,
  LabelAccept,
} from './ModalRegistrationEmail.styled';
import sprite from '../../assets/sprite.svg';
import reCapcha from '../../assets/home/modal/recapcha.png';
import { Link } from 'react-router-dom';
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
  } );

  const initialValues = {
    name: '',
    email: '',
    phone: '+38 ',
    password: '',
    capcha: '',
    accepr: '',
  };

  // Функція повертає помилку
  const FormError = ( { name } ) => {
    return <ErrorMessage name={ name } render={ ( message ) => <ErrorText>{message}</ErrorText> } />;
  };

  const handleSubmit = ( values, { resetForm } ) => {
    const phone = { phone: values.phone.replaceAll( ' ', '' ) }; // Чистим пробіли в рядку
    const dataUserRegister = { ...values, ...phone };
    console.log( 'values from dataUserRegister :>> ', dataUserRegister );

    resetForm();
  };

  return (
    <ModalWrapp>
      <svg width="60px" height="60px" onClick={ onActiveModal }>
        <use href={ `${sprite}#icon-close` }></use>
      </svg>

      <article>
        <Title>
          <p>Реєстрація</p>
        </Title>

        <Formik initialValues={ initialValues } validationSchema={ schema } onSubmit={ handleSubmit }>
          {( formik ) => {
            const {
              errors: { name, email, phone, password },
              touched,
            } = formik;

            return (
              <FormEmail autoComplete="on">
                <label
                  htmlFor="name"
                  style={ { display: 'flex', flexDirection: 'column', gap: '15px' } }
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ім’я та прізвище"
                    $error={ name && touched.name }
                  />
                  <FormError name="name" />
                </label>
                <label htmlFor="email">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Електронна адреса"
                    $error={ email && touched.email }
                  />
                  <FormError name="email" />
                </label>
                <label htmlFor="phone">
                  <Input type="tel" name="phone" $error={ phone && touched.phone } />
                  <FormError name="phone" />
                </label>
                <label htmlFor="password">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Придумайте пароль"
                    $error={ password && touched.password }
                  />
                  <FormError name="password" />
                </label>

                <WrappCapcha>
                  <LabelCapcha htmlFor="capcha">
                    <Field type="checkbox" name="capcha" />
                                        I’m not robot
                    <FormError name="capcha" />
                  </LabelCapcha>
                  <img src={ reCapcha } width="40" height="38" alt="re Capcha"></img>
                </WrappCapcha>

                <LabelAccept htmlFor="accept">
                  <Field type="checkbox" name="accept" />
                  <p>
                                        Я приймаю
                    {' '}
                    <span>
                      <Link>Політика конфіденційності </Link>
                    </span>
                                        та
                    <span>
                      <Link> Умови використання</Link>
                    </span>
                  </p>
                  <FormError name="accept" />
                </LabelAccept>

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
      </article>
    </ModalWrapp>
  );
};
