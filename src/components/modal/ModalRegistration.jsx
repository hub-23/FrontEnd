import React from 'react';
import { Formik } from 'formik';

import {
  Article,
  BtnText,
  FormRigistration,
  Input,
  Label,
  Login,
  Modal,
  RadioBtn,
  Title,
} from './ModalRegistration.styled';
import { BtnRegistration } from './BtnRegistration';
import { black, gray, grayStroke, white } from '../../utils/variables.styled';
import { BtnClose } from '../common/BtnClose';
import { IconSvg } from '../common/IconSvg';
import { useGoogleLogin } from '@react-oauth/google';
import { useHubContext } from '../../redux/Context';

export const ModalRegistration = ( { onActiveModal, onActiveModalEmail, status } ) => {
  const { showModalRegister, setShowModalRegister, showModalLogin, setShowModalLogin } = useHubContext();

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

  const goToLogin = () => {
    setShowModalLogin( !showModalLogin );
    setShowModalRegister( !showModalRegister );
  };

  const loginWithGoogle = useGoogleLogin( {
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
    <Modal>
      <BtnClose
        xlRight="30px"
        xlTop="30px"
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
        <Title>Реєстрація</Title>

        <Formik initialValues={ initialValues } onSubmit={ handleSubmit }>
          <FormRigistration>
            <RadioBtn>
              <Label>
                <Input type="radio" name="statusUser" value="teacher" />
Я викладач
              </Label>
              <Label>
                <Input type="radio" name="statusUser" value="student" />
Я учень
              </Label>
            </RadioBtn>

            <BtnRegistration
              xlMarginBottom="30px"
              mdMarginBottom="20px"
              smMarginBottom="15px"
              bgColor={ white }
              strokeColor={ black }
              xlHeight="60px"
              smHeight="45px"
              onRegister={ registerWithEmail }
            >
              <IconSvg
                xlWidth="24px"
                xlHeight="24px"
                smWidth="26px"
                smHeight="26px"
                icon="icon-mail"
              />
              <BtnText> Продовжити з e-mail</BtnText>
            </BtnRegistration>

            <BtnRegistration
              xlMarginBottom="50px"
              mdMarginBottom="40px"
              smMarginBottom="31px"
              bgColor={ gray }
              strokeColor={ grayStroke }
              xlHeight="60px"
              smHeight="45px"
              onRegister={ loginWithGoogle }
              // onRegister={ () => autoRegistr() }
            >
              <IconSvg xlWidth="24px" xlHeight="24px" icon="icon-google" />
              <BtnText>Продовжити з Google</BtnText>
            </BtnRegistration>
          </FormRigistration>
        </Formik>

        <Login>
          <p>Я вже зареєстрваний</p>
          <button type="button" onClick={ goToLogin }>
                        Увійти
          </button>
        </Login>
      </Article>
    </Modal>
  );
};
