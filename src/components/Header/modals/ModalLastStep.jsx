import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';

import { bgColorGradientBtn, white } from '../../../utils/variables.styled';
import { useHubContext } from '../../../redux/Context';
import { IconSvg } from '../../common/IconSvg';
import * as S from './ModalLastStep.staled';
import { BtnClose } from '../../common/BtnClose';
import { BtnRegistration } from '../../HomePage/Hero/modals/BtnRegistration';
import { InputFieldPhone } from '../../common/modalElements/InputFieldPhone';

export const ModalLastStep = ( { onActiveModal } ) => {
  const { setShowModalLastStep, setShowModalConfirmEmail } = useHubContext();

  const scheme = object( {
    phone: string().required( 'Вкажіть ваш номер телефону' ),
    accept: string().required( 'Політики мають бути погоджені' ),
  } );

  const initialValues = {
    phone: '',
    accept: '',
  };

  const handleSubmit = ( values, { resetForm } ) => {
    console.log( '💙💛 send Data LastStep to Backend  :>> ', values );
    resetForm();
    onActiveModal();
    setShowModalConfirmEmail( prev => !prev ); // відкрити модалку /Підтвердіть ваш E-mail/
  };

  return (
    <S.Modal>
      <BtnClose
        xlRight="30px"
        xlTop="30px"
        mdRight="15px"
        mdTop="15px"
        smRight="10px"
        smTop="10px"
        click={ () => setShowModalLastStep( prev => !prev ) }
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
        <S.Title>Остaнній крок</S.Title>

        <Formik
          initialValues={ initialValues }
          validationSchema={ scheme }
          onSubmit={ handleSubmit }
        >
          {formik => {
            const {
              errors: { phone },
              touched,
              setValues,
              setTouched,
            } = formik;

            const isDataUser
              = formik.initialValues.phone === formik.values.phone;
            const errPhone = phone && touched.phone;

            const handleGetPhone = values => {
              setValues( prev => ( {
                ...prev,
                phone: values.value,
              } ) );

              setTouched( { ...touched, phone: values.touched } );

              /* console.log( '💙💛 handleGetPhone', values ); */
            }; // значення з InputFieldPhone

            return (
              <S.FormLastStep autoComplete="on">
                <S.LabelFormUser htmlFor="phone" style={ { paddingTop: '2px' } }>
                  <InputFieldPhone
                    name="phone"
                    valueInput={ formik.values.phone }
                    submitPhone={ handleGetPhone }
                    $isDataUser={ isDataUser }
                    $error={ errPhone }
                    // ----------- use for PhoneSelect
                    $xlPositionTopList="20px"
                    $smPositionTopList="7px"
                    $xlPositionLeftList="32px"
                    $xlHeightList="300px"
                    $mdHeightList=""
                    $smHeightList=""
                    $xlGapList="12px"
                    $mdGapList=""
                    $smGapList=""
                    $xlFontSizeList="16px"
                    $mdFontSizeList=""
                    $smFontSizeList=""
                  />
                </S.LabelFormUser>

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
                  xlMarginBottom="63px"
                  mdMarginBottom="40px"
                  smMarginBottom="30px"
                  color={ white }
                  xlHeight="60px"
                  smHeight="45px"
                  bgColorGradient={ bgColorGradientBtn }
                  // onRegister={ 'callback' }
                >
                  <S.BtnText> Зареєструватись</S.BtnText>
                </BtnRegistration>
              </S.FormLastStep>
            );
          }}
        </Formik>

        <S.WrappRegister>
          <S.RegisterText>Я вже зареєстрваний</S.RegisterText>
          <S.BtnLogin>Увійти</S.BtnLogin>
        </S.WrappRegister>
      </S.Article>
    </S.Modal>
  );
};
