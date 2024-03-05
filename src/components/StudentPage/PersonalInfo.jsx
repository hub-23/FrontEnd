import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
// import { selectUser } from '../../redux/auth/selectors';
import { GeneralInfo } from './GeneralInfo/GeneralInfo';
import { nameExp, passwordExp } from '../../utils/variables.styled';
import * as S from './PersonalInfo.styled';
import { ContactInfo } from './ContactInfo/ContactInfo';

export const PersonalInfo = () => {
  const schema = object( {
    surname: string()
      .min( 2, 'Вкажіть мінімум 2 літери, але не більше 30' )
      .max( 30, 'Вкажіть мінімум 2 літери, але не більше 30' )
      .matches( nameExp, 'Прізвище має містити українські або англійські літери' )
      .required( 'Вкажіть ваше прізвище' ),
    name: string()
      .min( 2, 'Вкажіть мінімум 2 літери, але не більше 30' )
      .max( 30, 'Вкажіть мінімум 2 літери, але не більше 30' )
      .matches( nameExp, 'Ім’я має містити українські або англійські літери' )
      .required( 'Вкажіть ваше ім’я' ),
    email: string()
      .email( 'Невірно вказано e-mail' )
      .trim()
      .required( 'Вкажіть ваш e-mail' ),
    phone: string().required( 'Вкажіть ваш номер телефону' ),
    password: string()
      .matches(
        passwordExp,
        'Пароль має містити більше 8 символів, велику та малу літеру латиницею, цифри і спеціальний знак'
      )
      .required( 'Пароль обов‘язковий' ),
  } );

  const initialValues = {
    surname: localStorage.getItem( 'student-surname' ) || 'Бондар',
    name: localStorage.getItem( 'student-name' ) || 'Сергій',
    email: '',
    phone: '',
    password: '',
  };

  const handleSubmit = ( values, { resetForm } ) => {
    console.log( 'submit' );
  };

  // console.log( selectUser );
  return (
    <>
      <Formik
        initialValues={ initialValues }
        validationSchema={ schema }
        onSubmit={ handleSubmit }
      >
        {formik => {
          const {
            errors: { surname, name, email, phone, password },
            touched,
            values,
            setValues,
            setTouched,
          } = formik;

          // eslint-disable-next-line no-unused-vars
          const isDataUser = formik.initialValues.phone === formik.values.phone;
          // eslint-disable-next-line no-unused-vars
          const errSurname = surname && touched.surname;
          // eslint-disable-next-line no-unused-vars
          const errName = name && touched.name;
          // eslint-disable-next-line no-unused-vars
          const errEmail = email && touched.email; // !!!!!!!! it's not necessary
          // eslint-disable-next-line no-unused-vars
          const errPhone = phone && touched.phone;
          // eslint-disable-next-line no-unused-vars
          const errPassword = password && touched.password;

          const handleGetPhone = values => {
            const { value, touched } = values;
            setValues( prev => ( { ...prev, phone: value } ) );
            setTouched( { ...touched, phone: touched } );
          }; // значення з ContactInfi.jsx

          return (
            <S.FormFild autoComplete="off">
              <S.Section>
                <S.Title>Основна інформація</S.Title>
                <GeneralInfo
                  errSurname={ errSurname }
                  errName={ errName }
                  values={ values }
                />
              </S.Section>
              <S.Section>
                <S.Title>Контактна інформація</S.Title>
                <ContactInfo
                  valueInput={ values.phone }
                  getPhone={ handleGetPhone }
                  isDataUser={ isDataUser }
                  error={ errPhone }
                />
              </S.Section>
              <S.Section>
                <S.Title>Зміна пароля</S.Title>
              </S.Section>

              <S.SaveBtn
                type="submit"
                variant="blueGradientedBorder"
                onActiveModal={ () => {
                  console.log( 'click' );
                } }
              >
                Зберегти зміни
              </S.SaveBtn>
            </S.FormFild>
          );
        }}
      </Formik>
      <S.DelAccauntSec>
        <button
          type="button"
          onClick={ () => {
            console.log( 'click' );
          } }
        >
          Видалити аккаунт
        </button>
        <p>Ви не зможете відновити профіль після його видалення</p>
      </S.DelAccauntSec>
    </>
  );
};
