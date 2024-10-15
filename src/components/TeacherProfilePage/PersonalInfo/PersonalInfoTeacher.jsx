import React, { useState } from 'react';
import { Formik } from 'formik';
import { object, string, ref } from 'yup';
import * as S from './PersonalInfoTeacher.styled';
import { useDispatch } from 'react-redux';
import { GeneralInfo } from './GeneralInfo/GeneralInfo';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { ChangePassword } from './ChangePassword/ChangePassword';
import { passwordExp } from 'utils/variables.styled';
import { Modal } from 'components/common/modalElements/Modal';
import { DeleteProfile } from 'components/StudentPage/modals/DeleteProfile';
import { Notification } from 'components/common/modalElements/Notification';
import { useAuth } from 'hooks/useAuth';
import {
  updateStudentDetails,
  changePassword,
  deleteAccountStudent } from '../../../redux/auth/operations';
import { AboutMe } from './AboutMe/AboutMe';
import { Expertise } from './Expertise/Expertise';
import { Adress } from './Address/Adress';
import { SocialNetwork } from './SocialNetwork/SocialNetwork';

export const PersonalInfoTeacher = () => {
  const [ isSendNotificationShown, setIsSendNotificationShown ] = useState( false );
  const [ deleteProfileModalShown, setDeleteProfileModalShown ] = useState( false );
  const [ isNotificationShown, setIsNotificationShown ] = useState( false );
  const [ success, setSuccess ] = useState( null ); // для Notification - залежно від status code з бекенду

  const { user } = useAuth();

  const dispatch = useDispatch();

  const splitFullName = fullName => {
    const [ name, surname ] = fullName.split( ' ' );
    return { name: name || '', surname: surname || '' };
  };

  const { name, surname } = splitFullName( user?.name || '' );

  const getUpdatedFullName = () => {
    const name = localStorage.getItem( 'student-name' ) || '';
    const surname = localStorage.getItem( 'student-surname' ) || '';
    return `${name} ${surname}`.trim();
  };

  const schema = object( {
    surname: string()
      .min( 2, 'Вкажіть мінімум 2 літери, але не більше 30' )
      .max( 30, 'Вкажіть мінімум 2 літери, але не більше 30' )
      .matches( /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]*$/, 'Прізвище не може містити цифри' )
      .required( 'Вкажіть ваше прізвище' ),
    name: string()
      .min( 2, 'Вкажіть мінімум 2 літери, але не більше 30' )
      .max( 30, 'Вкажіть мінімум 2 літери, але не більше 30' )
      .matches( /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]*$/, 'Ім’я не може містити цифри' )
      .required( 'Вкажіть ваше ім’я' ),
    email: string()
      .email( 'Невірно вказано e-mail' )
      .trim()
      .required( 'Вкажіть ваш e-mail' ),
    currentPassword: string().required( 'Введіть поточний пароль' ),
    newPassword: string().matches( passwordExp, ' ' ),
    repeatNewPassword: string().oneOf(
      [ ref( 'newPassword' ), null ],
      'Пароль не співпадає з вище вказаним'
    ),
  } );

  const initialValues = {
    surname: surname || localStorage.getItem( 'student-surname' ) || '',
    name: name || localStorage.getItem( 'student-name' ),
    email: localStorage.getItem( 'student-email' ) || user?.email,
    phone: localStorage.getItem( 'student-phone' ) || user?.phone,
    currentPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  };

  const handleSubmit = async () => {
    const updatedPassword = localStorage.getItem( 'student-newPassword' );
    const updatedPhone = localStorage.getItem( 'student-phone' );

    const updatedFullname = getUpdatedFullName();

    const updatedUser = {
      ...user,
      username: updatedFullname,
      phone: updatedPhone,
    };

    try {
      const updateResponse = await dispatch( updateStudentDetails( updatedUser ) );
      let passwordResponse;
      if ( updatedPassword ) {
        const params = new URLSearchParams();
        params.append( 'new_password', updatedPassword );

        passwordResponse = await dispatch( changePassword( params ) );
      }

      if (
        updateResponse?.meta?.requestStatus === 'fulfilled'
        && ( !updatedPassword
          || passwordResponse?.meta?.requestStatus === 'fulfilled' )
      ) {
        setSuccess( true );
      } else {
        setSuccess( false );
      }
    } catch ( error ) {
      setSuccess( false );
    }

    const formFieldKeys = [ 'newPassword', 'repeatNewPassword' ];

    formFieldKeys.forEach( key => {
      localStorage.removeItem( `student-${key}` );
    } );

    setIsSendNotificationShown( true );
  };

  const handleDeleteAccount = async () => {
    try {
      const deleteResponse = await dispatch( deleteAccountStudent() );

      if ( deleteResponse?.meta?.requestStatus === 'fulfilled' ) {
        localStorage.clear();
        setSuccess( true );
      } else {
        setSuccess( false );
      }
    } catch ( error ) {
      setSuccess( false );
    }

    setIsNotificationShown( true );
  };

  return (
    <>
      <Formik
        initialValues={ initialValues }
        validationSchema={ schema }
        onSubmit={ handleSubmit }
      >
        {formik => {
          const {
            errors: {
              surname,
              name,
              email,
              phone,
              currentPassword,
              newPassword,
              repeatNewPassword,
            },
            touched,
            values,
            // setValues,
            // setTouched,
            isSubmitting,
            dirty,
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
          const errCurrentPassword = currentPassword && touched.currentPassword;
          const errNewPassword = newPassword && touched.newPassword;
          const errRepeatNewPassword
            = repeatNewPassword && touched.repeatNewPassword;

          const handleGetPhone = values => {
            if ( values !== null ) {
              localStorage.setItem( 'student-phone', values );
            }
          }; // значення з ContactInfi.jsx

          const isFormChanged = dirty;

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
                <S.Title>Про мене</S.Title>
                <AboutMe
                  // errSurname={ errSurname }
                  // errName={ errName }
                  values={ values }
                />
              </S.Section>

              <S.Section>
                <S.Title>Предмет викладання</S.Title>
                <Expertise

                />
              </S.Section>

              <S.Section>
                <S.Title>Адреси</S.Title>
                <Adress
                  // valueInput={ values.phone }
                  getPhone={ handleGetPhone }
                  isDataUser={ isDataUser }
                  error={ errPhone }
                />
              </S.Section>

              <S.Section>
                <S.Title>Фотогалерея</S.Title>
                <ChangePassword
                  errCurrentPassword={ errCurrentPassword }
                  errNewPassword={ errNewPassword }
                  errRepeatNewPassword={ errRepeatNewPassword }
                  values={ values }
                />
              </S.Section>

              <S.Section>
                <S.Title>Соціальні мережі</S.Title>
                <SocialNetwork

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
                <ChangePassword
                  errCurrentPassword={ errCurrentPassword }
                  errNewPassword={ errNewPassword }
                  errRepeatNewPassword={ errRepeatNewPassword }
                  values={ values }
                />
              </S.Section>

              <S.SaveBtn
                type="submit"
                variant="blueGradientedBorder"
                onActiveModal={ () => {
                  console.log( 'click' );
                } }
                onClick={ handleSubmit }
                disabled={ !isFormChanged || isSubmitting } // Disabled if no changes or submitting
              >
                Зберегти зміни
              </S.SaveBtn>

              <S.DelAccauntSec>
                <button
                  type="button"
                  onClick={ () => setDeleteProfileModalShown( true ) }
                >
                  Видалити аккаунт
                </button>
                <p>Ви не зможете відновити профіль після його видалення</p>
              </S.DelAccauntSec>
            </S.FormFild>
          );
        }}
      </Formik>
      {isSendNotificationShown && (
        <Modal onActiveModal={ () => setIsSendNotificationShown( false ) }>
          <Notification
            onNotificationClose={ () => setIsSendNotificationShown( false ) }
            success={ success }
            title={ success ? 'Зміни успішно збережено' : 'Сталась помилка' }
            description={
              success // eslint-disable-next-line max-len
                ? 'Оновлено особисту інформацію. Будьте уважні, при оновленні пароля автоматично відбудеться вихід із профілю з усіх пристроїв на яких відкрито сторінку.'
                : 'Щось пішло не так, тому спробуйте ще раз або виконайте цю дію пізніше'
            }
          />
        </Modal>
      )}
      {deleteProfileModalShown && (
        <Modal onActiveModal={ () => setDeleteProfileModalShown( false ) }>
          <DeleteProfile
            onDeleteProfileModalClose={ () => setDeleteProfileModalShown( false ) }
            onNotificationShow={ () => handleDeleteAccount() }
          />
        </Modal>
      )}
      {isNotificationShown && (
        <Modal onActiveModal={ () => setIsNotificationShown( false ) }>
          <Notification
            onNotificationClose={ () => setIsNotificationShown( false ) }
            success={ success }
            title={ success ? 'Ваш профіль успішно видалено' : 'Сталась помилка' }
            description={
              success // eslint-disable-next-line max-len
                ? 'Ви можете користуватися послугами HUB23, які доступні для незареєстрованих користувачів сайту'
                : 'Щось пішло не так, тому спробуйте ще раз або виконайте цю дію пізніше'
            }
          />
        </Modal>
      )}
    </>
  );
};
