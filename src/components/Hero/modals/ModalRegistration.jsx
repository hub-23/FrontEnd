import React from 'react';
import { Formik } from 'formik';
import { useGoogleLogin } from '@react-oauth/google';

import {
  black,
  gray,
  grayStroke,
  white,
} from '../../../utils/variables.styled';
import * as S from './ModalRegistration.styled';
import { useHubContext } from '../../../redux/Context';
import { BtnRegistration } from './BtnRegistration';
import { BtnClose } from '../../common/BtnClose';
import { IconSvg } from '../../common/IconSvg';
import { InputСircle } from '../../../utils/common.styled';

export const ModalRegistration = ( {
  onActiveModal,
  onActiveModalEmail,
  status,
} ) => {
  const {
    showModalRegister,
    setShowModalRegister,
    showModalLogin,
    setShowModalLogin,
  } = useHubContext();

  console.log( 'status :>> ', status );
  const initialValues = {
    statusUser: `${status}`,
  };

  const handleSubmit = values => {
    console.log( 'sent statusUser ::>>>', values );
    onActiveModal();
    onActiveModalEmail();
  };

  const goToLogin = () => {
    setShowModalLogin( !showModalLogin );
    setShowModalRegister( !showModalRegister );
  };

  const loginWithGoogle = useGoogleLogin( {
    onSuccess: tokenResponse => console.log( 'Success', tokenResponse ),
    onError: onError => console.log( 'Error', onError ),
  } );

  // const autoRegistr = useGoogleOneTapLogin( {
  //   onSuccess: ( credentialResponse ) => {
  //     console.log( credentialResponse );
  //   },
  //   onError: () => {
  //     console.log( 'S.Login Failed' );
  //   },
  // } );

  return (
    <S.Modal>
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

      <S.Article>
        <S.Title>Реєстрація</S.Title>

        <Formik initialValues={ initialValues } onSubmit={ handleSubmit }>
          <S.FormRigistration>
            <S.RadioBtn>
              <S.Label>
                <InputСircle type="radio" name="statusUser" value="teacher" />
Я
                викладач
</S.Label>
              <S.Label>
                <InputСircle type="radio" name="statusUser" value="student" />
Я
                учень
</S.Label>
            </S.RadioBtn>

            <BtnRegistration
              xlMarginBottom="30px"
              mdMarginBottom="20px"
              smMarginBottom="15px"
              bgColor={ white }
              strokeColor={ black }
              xlHeight="60px"
              smHeight="45px"
            >
              <IconSvg
                xlWidth="24px"
                xlHeight="24px"
                smWidth="26px"
                smHeight="26px"
                icon="icon-mail"
              />
              <S.BtnText> Продовжити з e-mail</S.BtnText>
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
              <S.BtnText>Продовжити з Google</S.BtnText>
            </BtnRegistration>
          </S.FormRigistration>
        </Formik>

        <S.Login>
          <p>Я вже зареєстрований</p>
          <button type="button" onClick={ goToLogin }>
            Увійти
          </button>
        </S.Login>
      </S.Article>
    </S.Modal>
  );
};
