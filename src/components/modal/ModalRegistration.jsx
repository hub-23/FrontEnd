import React from 'react';
import { Formik } from 'formik';

import { FormRadio, Input, Label, LabelWrapp, Login, ModalWrapp, Title } from './ModalRegistration.styled';
import sprite from '../../assets/sprite.svg';
import { BtnRegistration } from './BtnRegistration';
import { black, gray, grayStroke, white } from '../../utils/variables.styled';

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
    console.log( 'Go to Register with E-Mail' );
    onActiveModalEmail();
  };

  const registerWithGoogle = () => {
    console.log( 'Go to Register with Google' );
  };

  const goToLogin = () => console.log( 'Go to Login' );

  return (
    <ModalWrapp>
      <svg width="60px" height="60px" onClick={ onActiveModal }>
        <use href={ `${sprite}#icon-close` }></use>
      </svg>

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
              <svg width="24px" height="24px">
                <use href={ `${sprite}#icon-mail` }></use>
              </svg>
              <p> Продовжити з e-mail</p>
            </BtnRegistration>

            <BtnRegistration
              marginBottom="50px"
              color={ black }
              bgColor={ gray }
              strokeColor={ grayStroke }
              width="420px"
              height="60px"
              onRegister={ registerWithGoogle }
            >
              <svg width="24px" height="24px">
                <use href={ `${sprite}#icon-google` }></use>
              </svg>
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
