import React from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { BtnClose } from '../../common/modalElements/BtnClose';
import { Input } from 'components/common/modalElements/Input';
import * as S from './DeleteProfile.styled';


export const DeleteProfile = ( { onDeleteProfileModalClose } ) => {
    // onDeleteProfileModalClose, errDeleteProfileReason, values, reasonsToDelete, formik
    const reasonsToDelete = [
        'Незадоволеність послугами',
        'Надмірний спам',
        'Зміни в умовах обслуговування',
        'Особисті причини',
        'Технічні проблеми',
        'Інше'
    ];
    
    const customErrorMessage = 'Оберіть причину видалення профілю';

    const schema = object( {
        reason: string()
          .test( 'is-valid-reason', customErrorMessage, value => {
            return reasonsToDelete.includes( value );
          } )
          .required( 'Вкажіть тему повідомлення' ),
    } );
    
    const initialValues = {
        reason: localStorage.getItem( 'delete-profile-reason' ) || '',
    };

    const handleSubmit = ( values, { resetForm } ) => {
        console.log( 'submit' );
    };

    return (
        <Formik
            initialValues={ initialValues }
            validationSchema={ schema }
            onSubmit={ handleSubmit }
        >
          {formik => {
            const {
                errors: { reason },
                touched,
                values,
                // setValues,
                // setTouched,
            } = formik;

            // eslint-disable-next-line no-unused-vars
            const errReason = reason && touched.reason;

            return (
                <S.FormFild autoComplete="off">
                    <S.Container>
                        <BtnClose onActiveModal={ onDeleteProfileModalClose } />
                        <S.Title>Видалення профілю</S.Title>
                        <Input
                            type="text"
                            name="reason"
                            placeholder="Причина видалення"
                            // isStar={ true }
                            error={ errReason }
                            value={ values.reason }
                            dropdown
                            data={ reasonsToDelete }
                            formik={ formik }
                            $topic
                            readOnly
                            component="delete-profile"
                        />
                        
                    </S.Container>
                </S.FormFild>
            );
          }}
        </Formik>
    )
};
