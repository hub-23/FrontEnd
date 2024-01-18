import React, { useState } from 'react';
import { BtnClose } from '../../common/BtnClose';
import { IconSvg } from '../../common/IconSvg';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { PhoneSelect } from '../../common/PhoneSelect';
import countries from '../../../assets/countries.json';
import * as S from './QuestionForm.styled';


export const QuestionForm = ( { onActiveModal } ) => {
  const [ codeCountry, setCodeCountry ] = useState( '+380' );

  const schema = object( {
    name: string()
        .min( 2, 'Вкажіть мініімум 2 літери, але не більше 30' )
        .max( 30, 'Вкажіть мініімум 2 літери, але не більше 30' )
        .matches(
            /^[А-яЁёЇїІіЄєҐґ'\s/A-z\s/\-/_/.]+$/,
            'Ім’я має містити українські або англійські літери',
        )
        .required( 'Вкажіть ваше ім’я' ),
    email: string().email( 'Невірно вказано e-mail' ),
    // .required( 'Вкажіть ваш e-mail' ),
    phone: string()
        .matches(
            /^\d{3}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
            'Невірно вказаний номер',
        ),
    // .required( 'Вкажіть ваш номер телефону' ),
  } );

  const initialValues = {
    name: '',
    email: '',
    phone: '',
  };

  const FormError = ( { name, isMarginLeft } ) => {
    return (
      <ErrorMessage
        name={ name }
        render={ ( message ) => <S.ErrorText $isMarginLeft={ isMarginLeft }>{message}</S.ErrorText> }
      />
    );
  };

  const handleSubmit = ( values, { resetForm } ) => {
    const phone = { phone: `${codeCountry}${values.phone.replaceAll( ' ', '' )}` };
    const questionFormData = { ...values, ...phone };

    console.log( 'Data from QuestionForm to Backend  :>> ', questionFormData );

    resetForm();
    onActiveModal();
  };

  const handleGetSelected = ( values ) => {
    setCodeCountry( values );
  };

  return (
    <S.QuestionFormContainer>
      <BtnClose
        xlRight="16px"
        xlTop="16px"
        mdRight="15px"
        mdTop="15px"
        smRight="12px"
        smTop="12px"
        aria-label='select country'
        click={ onActiveModal }
      >
        <IconSvg
          xlWidth="36px"
          xlHeight="36px"
          mdWidth="36px"
          mdHeight="36px"
          smWidth="24px"
          smHeight="24px"
          icon="icon-close"
        />
      </BtnClose>

      <S.Title>Залишились запитання?</S.Title>
      <S.Text>
        Напишіть своє повідомлення використовуючи форму або зверніться напряму за електронною адресою
      </S.Text>
      {/* <S.InputWrapper> */}
      <div>
        <Formik initialValues={ initialValues } validationSchema={ schema } onSubmit={ handleSubmit }>
          {( formik ) => {
            const {
              errors: { name, email, phone },
              touched,
            } = formik;
            const isDataUser = formik.initialValues.phone === formik.values.phone;

            const errName = name && touched.name;
            const errEmail = email && touched.email;
            const errPhone = phone && touched.phone;

            return (
              <S.FormFild autoComplete="on">
                <S.LabelFormUser htmlFor="name">
                  <S.Input
                    type="text"
                    name="name"
                    placeholder="Ім’я"
                    $error={ errName }
                  />
                  <FormError name="name" isMarginLeft={ true } />
                </S.LabelFormUser>

                <S.LabelFormUser htmlFor="email">
                  <S.Input
                    type="email"
                    name="email"
                    placeholder="Електронна адреса"
                    $error={ errEmail }
                  />
                  <FormError name="email" isMarginLeft={ true } />
                </S.LabelFormUser>

                <S.LabelFormUser htmlFor="phone" style={ { paddingTop: '2px' } }>
                  <S.Input
                    type="tel"
                    name="phone"
                    $isDataUser={ isDataUser }
                    $error={ errPhone }
                    style={ { paddingLeft: '160px' } }
                  />

                  <FormError name="phone" isMarginLeft={ true } />

                  <PhoneSelect
                    data={ countries }
                    valueSelect={ handleGetSelected }
                    xlHeightList="275px"
                    smHeightList="245px"
                  />
                </S.LabelFormUser>
                <input type="text" placeholder='Тема повідомлення' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Повідомлення'></textarea>
                <S.WrappWarningText>
                  <IconSvg width="24px" height="24px" icon="icon-star-marker" />

                  <S.WarningText $color={ errName }>
                        Ці поля є обов&apos;язковими до заповнення
                  </S.WarningText>
                </S.WrappWarningText>

                <S.SubmitBtn
                  type='submit'
                  variant='blue'
                  width='100%'
                  height='60px'
                  smHeight='50px'
                  borderRadius='16px 0'
                  smBorderRadius='20px 0'
                  onClick={ onActiveModal }
                >
                Надіслати
                </S.SubmitBtn>
              </S.FormFild>
            );
          }}
        </Formik>
      </div>
      {/* </S.InputWrapper> */}
    </S.QuestionFormContainer>
  );
};
