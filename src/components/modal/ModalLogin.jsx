import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import {
  ErrorText,
  FormLogin,
  Input,
  Title,
  Article,
  LabelFormUser,
  TextCheckbox,
  LinkForget,
  InputCheckbox,
  LabelCheckbox,
  WrappCheckPass,
  Modal,
  BtnText,
  Text,
  LinkRegistr,
  TextRegistr,
  WrappTextRegistr,
  BtnTextGoogle,
  BtnGoogleOne,
  BtnGoogleTwo,
} from './ModalLogin.styled';
import { BtnRegistration } from './BtnRegistration';
import { bgColorGradientBtn, black, gray, grayStroke, white } from '../../utils/variables.styled';
import { IconSvg } from '../common/IconSvg';
import { BtnEye } from '../common/BtnEye';
import { BtnClose } from '../common/BtnClose';

export const ModalLogin = ( { onActiveModal } ) => {
  const [ showPassword, setSowPassword ] = useState( true );

  const schema = object( {
    email: string().email( 'Невірно вказано e-mail' ).required( 'Вкажіть ваш e-mail' ),
    password: string().required( 'Вкажіть ваш пароль' ),
    accept: string(),
  } );

  const initialValues = {
    email: '',
    password: '',
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
    console.log( 'Data Login to Backend  :>> ', values );

    resetForm();
    onActiveModal();
  };

  // const handleGetSelected = ( values ) => {
  //   setCodeCountry( values );
  // };

  return (
    <Modal>
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

      <Article>
        <Title>
          <p>Вхід</p>
        </Title>

        <Formik initialValues={ initialValues } validationSchema={ schema } onSubmit={ handleSubmit }>
          {( formik ) => {
            const {
              errors: { email, password },
              touched,
            } = formik;

            const errPassword = password && touched.password;
            const errEmail = email && touched.email;

            return (
              <FormLogin autoComplete="on">
                <LabelFormUser htmlFor="email">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Введіть ваш e-mail"
                    $error={ errEmail }
                  />
                  <FormError name="email" isMarginLeft={ true } />
                </LabelFormUser>

                <LabelFormUser htmlFor="password">
                  <Input
                    type={ showPassword ? 'password' : 'text' }
                    name="password"
                    placeholder="Введіть пароль"
                    $error={ errPassword }
                  />
                  <BtnEye
                    xlRight="36px"
                    xlTop="16px"
                    smRight="20px"
                    smTop="13px"
                    click={ () => setSowPassword( !showPassword ) }
                  >
                    {showPassword ? (
                                            <IconSvg
                                              xlWidth="24px"
                                              xlHeight="24px"
                                              smWidth="20px"
                                              smHeight="20px"
                                              icon="icon-eye-slash"
                                            />
                                        ) : (
                                            <IconSvg
                                              xlWidth="24px"
                                              xlHeight="24px"
                                              smWidth="20px"
                                              smHeight="20px"
                                              icon="icon-eye"
                                            />
                                        )}
                  </BtnEye>

                  <FormError name="password" isMarginLeft={ true } />
                </LabelFormUser>

                <WrappCheckPass>
                  <LabelCheckbox>
                    <InputCheckbox type="checkbox" name="accept" />
                    <span></span>

                    <TextCheckbox>Залишитись в системі</TextCheckbox>
                  </LabelCheckbox>

                  <LinkForget>Забули пароль?</LinkForget>
                </WrappCheckPass>

                <BtnRegistration
                  xlMarginBottom="16px"
                  mdMarginBottom="20px"
                  color={ white }
                  xlHeight="60px"
                  smHeight="45px"
                  bgColorGradient={ bgColorGradientBtn }
                  // onRegister={ 'callback' }
                >
                  <BtnText $color={ white }> Увійти</BtnText>
                </BtnRegistration>

                <Text>або</Text>

                <BtnGoogleOne>
                  <BtnRegistration
                    // xlMarginBottom="50px"
                    mdMarginBottom="22px"
                    smMarginBottom="30px"
                    bgColor={ gray }
                    strokeColor={ grayStroke }
                    xlHeight="60px"
                    smHeight="45px"
                    onRegister={ () => console.log( 'loginWithGoogle()' ) }
                    // onRegister={ () => autoRegistr() }
                  >
                    <IconSvg xlWidth="24px" xlHeight="24px" icon="icon-google" />
                    <BtnTextGoogle $color={ black }>Продовжити з Google</BtnTextGoogle>
                  </BtnRegistration>
                </BtnGoogleOne>
              </FormLogin>
            );
          }}
        </Formik>

        <WrappTextRegistr>
          <TextRegistr>Я ще не зареєстрваний</TextRegistr>
          <LinkRegistr>Зареєструватись</LinkRegistr>
        </WrappTextRegistr>
      </Article>

      <BtnGoogleTwo>
        <p>або</p>
        <p>Увійти за допомогою</p>
        <BtnRegistration
          mdMarginBottom="22px"
          smMarginBottom="30px"
          bgColor={ gray }
          strokeColor={ grayStroke }
          xlHeight="60px"
          smHeight="45px"
          onRegister={ () => console.log( 'loginWithGoogle()' ) }
          // onRegister={ () => autoRegistr() }
        >
          <IconSvg xlWidth="32px" xlHeight="32px" icon="icon-google" />
        </BtnRegistration>
      </BtnGoogleTwo>
    </Modal>
  );
};
