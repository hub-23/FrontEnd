import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import countries from '../../assets/countries.json';

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
import reCapcha from '../../assets/home/modal/recapcha.png';
import { BtnRegistration } from './BtnRegistration';
import { bgColorGradientBtn, white } from '../../utils/variables.styled';
import { IconSvg } from '../common/IconSvg';
import { BtnEye } from '../common/BtnEye';
import { BtnClose } from '../common/BtnClose';
import { PhoneSelect } from '../common/PhoneSelect';

export const ModalRegistrationEmail = ( { onActiveModal } ) => {
  const [ showPassword, setSowPassword ] = useState( true );
  const [ codeCountry, setCodeCountry ] = useState( '' );

  const schema = object( {
    name: string()
        .min( 2, 'Вкажіть мініімум 2 літери, але не більше 30' )
        .max( 30, 'Вкажіть мініімум 2 літери, але не більше 30' )
        .matches(
            /^[А-яЁёЇїІіЄєҐґ'\s/A-z\s/\-/_/.]+$/,
            'Ім’я має містити українські або англійські літери',
        )
        .required( 'Вкажіть ваше ім’я' ),
    email: string().email( 'Невірно вказано e-mail' ).required( 'Вкажіть ваш e-mail' ),
    phone: string()
        .matches(
            // /^\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
            /^\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
            'Невірно вказаний номер',
        )
        .required( 'Вкажіть ваш номер телефону' ),
    password: string()
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[A-Z]){1})((?=.*[a-z]){1}).*$/,
            'Пароль має містити більше 8 символів, велику та малу літеру латиницею, цифри і спеціальний знак',
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

  const FormError = ( { name, isMarginLeft } ) => {
    return (
      <ErrorMessage
        name={ name }
        render={ ( message ) => <ErrorText $isMarginLeft={ isMarginLeft }>{message}</ErrorText> }
      />
    );
  };

  const handleSubmit = ( values, { resetForm } ) => {
    const phone = { phone: `${codeCountry}${values.phone.replaceAll( ' ', '' )}` };
    const dataUserRegister = { ...values, ...phone };

    console.log( 'registrationEmailData to Backend  :>> ', dataUserRegister );

    resetForm();
    onActiveModal();
  };

  const handleGetSelected = ( values ) => {
    setCodeCountry( values );
  };

  return (
    <ModalWrapp>
      <BtnClose right="50px" top="40px" click={ onActiveModal } />

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
                  <FormError name="name" isMarginLeft={ true } />
                </LabelFormUser>
                <LabelFormUser htmlFor="email">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Електронна адреса"
                    $error={ email && touched.email }
                  />
                  <FormError name="email" isMarginLeft={ true } />
                </LabelFormUser>
                <LabelFormUser htmlFor="phone" style={ { paddingTop: '2px' } }>
                  <Input
                    type="tel"
                    name="phone"
                    $isDataUser={ isDataUser }
                    $error={ phone && touched.phone }
                    style={ { paddingLeft: '160px' } }
                  />

                  <FormError name="phone" isMarginLeft={ true } />

                  <PhoneSelect
                    data={ countries }
                    valueSelect={ handleGetSelected }
                    widthList="480px"
                    heightList="280px"
                  />
                </LabelFormUser>
                <LabelFormUser htmlFor="password" style={ { gap: '11px' } }>
                  <Input
                    type={ showPassword ? 'password' : 'text' }
                    name="password"
                    placeholder="Придумайте пароль"
                    $error={ password && touched.password }
                  />

                  <BtnEye
                    right="36px"
                    top="16px"
                    click={ () => setSowPassword( !showPassword ) }
                  >
                    {showPassword ? (
                                            <IconSvg width="24px" height="24px" icon="icon-eye-slash" />
                                        ) : (
                                            <IconSvg width="24px" height="24px" icon="icon-eye" />
                                        )}
                    {' '}
                  </BtnEye>

                  <ErrorPasswordWrapp>
                    <IconSvg width="24px" height="24px" icon="icon-star-marker" />

                    {!password && (
                      <ErrorPassword $color={ password && touched.password }>
                                                Більше 8 символів, велика літера, цифри і спеціальний знак
                      </ErrorPassword>
                    )}

                    {password && <FormError name="password" />}
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
                  <FormError name="capcha" isMarginLeft={ true } />
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

                  <FormError name="accept" isMarginLeft={ true } />
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
