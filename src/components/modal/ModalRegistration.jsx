import React from 'react';
import { Formik } from 'formik';

import { FormRadio, Input, Label, LabelWrapp, Login, ModalWrapp, Title } from './ModalRegistration.styled';
import { BtnRegistration } from './BtnRegistration';
import { black, gray, grayStroke, white } from '../../utils/variables.styled';
import { BtnClose } from '../common/BtnClose';
import { IconSvg } from '../common/IconSvg';
import { useGoogleLogin } from '@react-oauth/google';

export const ModalRegistration = ( { onActiveModal, onActiveModalEmail, status } ) => {
  console.log( 'status :>> ', status );
  const initialValues = {
    statusUser: `${status}`,
  };

  const handleSubmit = ( values ) => {
    console.log( 'sent statusUser ::>>>', values );
    onActiveModal();
  };

  const registerWithEmail = () => {
    onActiveModalEmail();
  };

  const goToLogin = () => console.log( 'Go to Login' );

  const login = useGoogleLogin( {
    onSuccess: ( tokenResponse ) => console.log( 'Success', tokenResponse ),
    onError: ( onError ) => console.log( 'Error', onError ),
  } );

  // const autoRegistr = useGoogleOneTapLogin( {
  //   onSuccess: ( credentialResponse ) => {
  //     console.log( credentialResponse );
  //   },
  //   onError: () => {
  //     console.log( 'Login Failed' );
  //   },
  // } );

  return (
    <ModalWrapp>
      <BtnClose right="30px" top="30px" click={ onActiveModal } />

      <article>
        <Title>Реєстрація</Title>

        <Formik initialValues={ initialValues } onSubmit={ handleSubmit }>
          <FormRadio>
            <LabelWrapp>
              <Label>
                <Input type="radio" name="statusUser" value="teacher" />
Я викладач
              </Label>
              <Label>
                <Input type="radio" name="statusUser" value="student" />
Я учень
              </Label>
            </LabelWrapp>
            <BtnRegistration
              marginBottom="30px"
              color={ black }
              bgColor={ white }
              strokeColor={ black }
              width="420px"
              height="60px"
              onRegister={ registerWithEmail }
            >
              <IconSvg width="24px" height="24px" icon="icon-mail" />
              <p> Продовжити з e-mail</p>
            </BtnRegistration>
            <BtnRegistration
              marginBottom="50px"
              color={ black }
              bgColor={ gray }
              strokeColor={ grayStroke }
              width="420px"
              height="60px"
              onRegister={ () => login() }
              // onRegister={ () => autoRegistr() }
            >
              <IconSvg width="24px" height="24px" icon="icon-google" />
              <p>Продовжити з Google</p>
            </BtnRegistration>
          </FormRadio>
        </Formik>

        <Login>
          <p>Я вже зареєстрваний</p>
          <button type="button" onClick={ goToLogin }>
                        Увійти
          </button>
        </Login>
      </article>
    </ModalWrapp>
  );
};
