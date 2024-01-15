import React from 'react';

import { ErrorMessage, Formik } from 'formik';
import {
  BtnSubmit,
  ErrorText,
  FormSearch,
  InputCheckbox,
  InputSearch,
  Label,
  Stroke,
} from './HeroField.styled';
import { object, string } from 'yup';
import { IconSvg } from '../common/IconSvg';
import { black } from '../../utils/variables.styled';

export const HeroField = () => {
  const schema = object( {
    subject_or_occupation: string()
        .max( 30, 'Вкажіть не більше 30 літер' )
        .matches(
            /^[А-яЁёЇїІіЄєҐґ'\s/A-z\s/\-/_/.]+$/,
            'Пошук ведеться українською або англійською та не може містити спеціальні символи чи цифри',
        ),
    sity: string()
        .max( 30, 'Вкажіть не більше 30 літер' )
        .matches(
            /^[А-яЁёЇїІіЄєҐґ'\s/A-z\s/\-/_/.]+$/,
            'Пошук ведеться українською або англійською та не може містити спеціальні символи чи цифри',
        ),
  } );

  const initialValues = {
    subject_or_occupation: '',
    sity: '',
    is_online: false,
  };

  const handleSubmit = ( values, { resetForm } ) => {
    console.log( 'sent onLine ::>>>', values );
    resetForm();
  };

  const FormError = ( { name, isMarginLeft } ) => {
    return (
      <ErrorMessage
        name={ name }
        render={ ( message ) => <ErrorText $isMarginLeft={ isMarginLeft }>{message}</ErrorText> }
      />
    );
  };

  return (
    <>
      <Formik initialValues={ initialValues } validationSchema={ schema } onSubmit={ handleSubmit }>
        {( formik ) => {
          return (
            <FormSearch>
              <Label>
                <IconSvg
                  xlWidth="24px"
                  xlHeight="24px"
                  // mdWidth="36px"
                  // mdHeight="36px"
                  // smWidth="24px"
                  // smHeight="24px"
                  $fill="none"
                  $stroke={ black }
                  icon="icon-search"
                />

                <InputSearch
                  type="text"
                  name="subject_or_occupation"
                  placeholder="Предмет або заняття"
                />
                <FormError name="subject_or_occupation" />
              </Label>

              <Label>
                <Stroke></Stroke>
                <IconSvg
                  xlWidth="24px"
                  xlHeight="24px"
                  // mdWidth="36px"
                  // mdHeight="36px"
                  // smWidth="24px"
                  // smHeight="24px"
                  $fill="none"
                  $stroke={ black }
                  icon="icon-location"
                />

                <InputSearch type="text" name="sity" placeholder="Місто" />
                <FormError name="sity" />
              </Label>

              <Label>
                <Stroke></Stroke>
                <InputCheckbox type="checkbox" name="is_online" />
                                Онлайн
              </Label>

              <BtnSubmit type="submit">Знайти</BtnSubmit>
            </FormSearch>
          );
        }}
      </Formik>
    </>
  );
};
