import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { object, string, boolean } from 'yup';
import { useAuth } from '../../../hooks/useAuth';
import { BtnClose } from '../../common/modalElements/BtnClose';
import { Input } from '../../common/modalElements/Input';
import sprite from '../../../assets/sprite.svg';
import * as S from './DeleteProfile.styled';

export const DeleteProfile = ( {
  onDeleteProfileModalClose,
  onNotificationShow,
} ) => {
  const { user } = useAuth();

  const reasonsToDelete = [
    'Незадоволеність послугами',
    'Надмірний спам',
    'Зміни в умовах обслуговування',
    'Особисті причини',
    'Технічні проблеми',
    'Інше',
  ];

  const customErrorMessage = 'Оберіть причину видалення профілю';

  const schema = object( {
    reason: string()
      .test( 'is-valid-reason', customErrorMessage, value => {
        return reasonsToDelete.includes( value );
      } )
      .required( 'Вкажіть тему повідомлення' ),
    accept: boolean()
      .oneOf( [ true ], 'Підтвердіть, що ви згодні з умовами видалення' )
      .required( 'Підтвердіть, що ви згодні з умовами видалення' ),
  } );

  const initialValues = {
    reason: localStorage.getItem( 'delete-profile-reason' ) || '',
    accept: false,
  };

  const handleAccountDelete = ( values, { resetForm } ) => {
    console.log( 'submit - values:', { email: user.email, ...values } ); // відправка на бек

    localStorage.removeItem( 'delete-profile-reason' );
    resetForm();
    onDeleteProfileModalClose();
    onNotificationShow();
  };

  return (
    <S.Container>
      <BtnClose onActiveModal={ onDeleteProfileModalClose } />
      <S.Title>Видалення профілю</S.Title>
      <Formik
        initialValues={ initialValues }
        validationSchema={ schema }
        onSubmit={ handleAccountDelete }
      >
        {formik => {
          const {
            errors: { reason },
            touched,
            values,
          } = formik;

          const errReason = reason && touched.reason;

          return (
            <S.FormField autoComplete="off">
              <div>
                <Input
                  type="text"
                  name="reason"
                  placeholder="Причина видалення"
                  error={ errReason }
                  value={ values.reason }
                  dropdown
                  data={ reasonsToDelete }
                  formik={ formik }
                  $topic
                  $left="12px"
                  readOnly
                  component="delete-profile"
                />
                <S.CheckboxLabel>
                  <div>
                    <Field type="checkbox" name="accept" />
                    <svg aria-label="mark" width="20px" height="20px">
                      <use href={ `${sprite}#icon-check-mark` }></use>
                    </svg>
                  </div>
                  <div>
                    <p>
                      Видаляючи свій обліковий запис, я розумію, що втрачу
                      доступ до контактних данних вчителів, можливості писати
                      коментарі та інших розширених функцій сайту
                    </p>
                    <ErrorMessage name="accept" component="span" />
                  </div>
                </S.CheckboxLabel>
              </div>
              <div>
                <S.DeleteBtn type="submit" variant="blue">
                  Видалити профіль
                </S.DeleteBtn>
                <S.CancelBtn
                  variant="blueGradientedBorder"
                  onClick={ onDeleteProfileModalClose }
                >
                  Скасувати
                </S.CancelBtn>
              </div>
            </S.FormField>
          );
        }}
      </Formik>
    </S.Container>
  );
};
