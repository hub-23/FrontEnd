import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import {
  BtnSubmit,
  ErrorText,
  FormSearch,
  InputCheckbox,
  InputSearch,
  Label,
} from './HeroField.styled';
import { IconSvg } from '../../common/IconSvg';
import { black } from '../../../utils/variables.styled';
import dataSubject from '../../../assets/dataTemp/dataSubject';
import { HeroFieldSelect } from './HeroFieldSelect';
import { useHubContext } from '../../../redux/Context';

export const HeroField = () => {
  const { isHeroFilterShown } = useHubContext();

  const schema = object( {
    subject_or_occupation: string()
      .max( 30, 'Вкажіть не більше 30 літер' )
      .matches(
        /^[А-яЁёЇїІіЄєҐґ'\s/A-z\s/\-/_/.]+$/,
        'Пошук ведеться українською або англійською та не може містити спеціальні символи чи цифри'
      ),
    sity: string()
      .max( 30, 'Вкажіть не більше 30 літер' )
      .matches(
        /^[А-яЁёЇїІіЄєҐґ'\s/A-z\s/\-/_/.]+$/,
        'Пошук ведеться українською або англійською та не може містити спеціальні символи чи цифри'
      ),
  } );

  const initialValues = {
    subject_or_occupation: '',
    sity: '',
    is_online: false,
  };

  const handleSubmit = ( values, { resetForm } ) => {
    console.log( '💙💛 Sent Form search >>>', values );

    resetForm();
  };

  const FormError = ( { name, isMarginLeft } ) => {
    return (
      <ErrorMessage
        name={ name }
        render={ message => (
          <ErrorText $isMarginLeft={ isMarginLeft }>{message}</ErrorText>
        ) }
      />
    );
  };

  return (
    <Formik
      initialValues={ initialValues }
      validationSchema={ schema }
      onSubmit={ handleSubmit }
    >
      {formik => {
        const { subject_or_occupation: subjectValue, sity: sityValue }
          = formik.values;
        const { setFieldValue } = formik;

        const handleGetValueSelected = value => {
          const { nameLesson, sity } = value;
          const keys = Object.keys( value )[ 0 ];

          if ( keys === 'nameLesson' )
            setFieldValue( 'subject_or_occupation', nameLesson );
          if ( keys === 'sity' ) setFieldValue( 'sity', sity );
        };

        return (
          <FormSearch $heroFilterShown={ isHeroFilterShown }>
            <Label>
              <IconSvg
                xlWidth="24px"
                xlHeight="24px"
                $fill="none"
                $stroke={ black }
                icon="icon-search"
              />
              <InputSearch
                type="text"
                name="subject_or_occupation"
                autoComplete="off"
                placeholder="Предмет або заняття"
                onBlur={ () => {
                  console.log( 'BLUR' );
                } }
              />
              <FormError name="subject_or_occupation" />

              <HeroFieldSelect
                data={ dataSubject }
                valueInput={ subjectValue }
                filterProperty="nameLesson"
                submit={ handleGetValueSelected }
              />
            </Label>

            <Label>
              <IconSvg
                xlWidth="24px"
                xlHeight="24px"
                $fill="none"
                $stroke={ black }
                icon="icon-location"
              />
              <InputSearch
                type="text"
                name="sity"
                autoComplete="off"
                placeholder="Місто"
              />
              <FormError name="sity" />

              <HeroFieldSelect
                data={ dataSubject }
                valueInput={ sityValue }
                filterProperty="sity"
                submit={ handleGetValueSelected }
              />
            </Label>

            <Label>
              <InputCheckbox type="checkbox" name="is_online" />
              Онлайн
            </Label>

            <BtnSubmit type="submit">Знайти</BtnSubmit>
          </FormSearch>
        );
      }}
    </Formik>
  );
};
