import React, { useState } from 'react';
import { Formik } from 'formik';
import { useGoogleLogin } from '@react-oauth/google';
import { object, string } from 'yup';

import * as S from './ModalLogin.styled';
import {
  bgColorGradientBtn,
  black,
  gray,
  grayStroke,
  white,
} from '../../../utils/variables.styled';
import { BtnRegistration } from '../../Hero/modals/BtnRegistration';
import { IconSvg } from '../../common/IconSvg';
import { BtnEye } from '../../common/BtnEye';
import { BtnClose } from '../../common/BtnClose';
import { useHubContext } from '../../../redux/Context';
import { InputField } from '../../modalElements/InputField';

export const ModalLogin = ( { onActiveModal } ) => {
  const [ showPassword, setSowPassword ] = useState( true );
  const { setShowModalLogin, setShowModalRegister, setShowModalLastStep }
    = useHubContext();

  const schema = object( {
    email: string()
      .email( 'Невірно вказано e-mail' )
      .required( 'Вкажіть ваш e-mail' ),
    password: string().required( 'Вкажіть ваш пароль' ),
    accept: string(),
  } );

  const initialValues = {
    email: '',
    password: '',
    accept: '',
  };

  const handleSubmit = ( values, { resetForm } ) => {
    console.log( '💙💛 send Data Login to Backend  :>> ', values );
    resetForm();
    onActiveModal();
    setShowModalLastStep( prev => !prev );
  };

  const loginWithGoogle = useGoogleLogin( {
    onSuccess: tokenResponse => console.log( 'Success', tokenResponse ),
    onError: onError => console.log( 'Error', onError ),
  } );

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
          <p>Вхід</p>
        </S.Title>

        <Formik
          initialValues={ initialValues }
          validationSchema={ schema }
          onSubmit={ handleSubmit }
        >
          {formik => {
            const {
              errors: { email, password },
              touched,
            } = formik;

            const errPassword = password && touched.password;
            const errEmail = email && touched.email;

            return (
              <S.FormLogin autoComplete="on">
                <S.LabelFormUser>
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Введіть ваш e-mail"
                    isStar={ true }
                    error={ errEmail }
                  />
                </S.LabelFormUser>

                <S.LabelFormUser>
                  <InputField
                    type={ showPassword ? 'password' : 'text' }
                    name="password"
                    placeholder="Введіть пароль"
                    isStar={ true }
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
                </S.LabelFormUser>

                <S.WrappCheckPass>
                  {/* <S.LabelCheckbox>
                    <S.InputCheckbox type="checkbox" name="accept" />
                    <span></span>

                    <S.TextCheckbox>Залишитись в системі</S.TextCheckbox>
                  </S.LabelCheckbox> */}

                  <S.LinkForget>Забули пароль?</S.LinkForget>
                </S.WrappCheckPass>

                <BtnRegistration
                  xlMarginBottom="16px"
                  mdMarginBottom="20px"
                  color={ white }
                  xlHeight="60px"
                  smHeight="45px"
                  bgColorGradient={ bgColorGradientBtn }
                  // onRegister={ toggleModalLastStep }
                >
                  <S.BtnText $color={ white }> Увійти</S.BtnText>
                </BtnRegistration>

                <S.Text>або</S.Text>

                <S.BtnGoogleOne>
                  <BtnRegistration
                    mdMarginBottom="22px"
                    smMarginBottom="30px"
                    bgColor={ gray }
                    strokeColor={ grayStroke }
                    xlHeight="60px"
                    smHeight="45px"
                    onRegister={ () => {
                      loginWithGoogle(), setShowModalLogin( prev => !prev );
                    } }
                    // onRegister={ () => autoRegistr() }
                  >
                    <IconSvg
                      xlWidth="24px"
                      xlHeight="24px"
                      icon="icon-google"
                    />
                    <S.BtnTextGoogle $color={ black }>
                      Продовжити з Google
                    </S.BtnTextGoogle>
                  </BtnRegistration>
                </S.BtnGoogleOne>
              </S.FormLogin>
            );
          }}
        </Formik>

        <S.WrappTextRegistr>
          <S.TextRegistr>Я ще не зареєстрований</S.TextRegistr>

          <S.LinkRegistr
            type="button"
            onClick={ () => {
              setShowModalRegister( prev => !prev );
              setShowModalLogin( prev => !prev );
            } }
          >
            Зареєструватись
          </S.LinkRegistr>
        </S.WrappTextRegistr>
      </S.Article>

      <S.BtnGoogleTwo>
        <p>або</p>
        <p>Увійти за допомогою</p>
        <BtnRegistration
          mdMarginBottom="22px"
          smMarginBottom="30px"
          bgColor={ gray }
          strokeColor={ grayStroke }
          xlHeight="60px"
          smHeight="45px"
          onRegister={ () => {
            loginWithGoogle(), setShowModalLogin( prev => !prev );
          } }
        >
          <IconSvg xlWidth="32px" xlHeight="32px" icon="icon-google" />
        </BtnRegistration>
      </S.BtnGoogleTwo>
    </S.Modal>
  );
};
