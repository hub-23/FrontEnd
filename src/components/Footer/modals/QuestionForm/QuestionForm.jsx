import React, { useState } from 'react';
import { Formik } from 'formik';
import { object, string, array } from 'yup';
import { BtnClose } from '../../../modalElements/BtnClose';
import { Input } from '../../../modalElements/Input';
import { InputFieldPhone } from '../../../modalElements/InputFieldPhone';
import { Message } from './Message/Message';
import { Note } from '../../../modalElements/Note';
import { nameExp, deepAccent } from '../../../../utils/variables.styled';
import * as S from './QuestionForm.styled';

export const QuestionForm = ( { onFormClose, onNotificationShow } ) => {
  const [ images, setImages ] = useState( [] );

  const notificationTopics = [
    'Технічна підтримка',
    'Співпраця і пропозиції',
    'Реклама',
    'Проблема з оплатою',
    'Інше',
  ];
  const customErrorMessage = 'Оберіть одну із запропонованих тем';

  const schema = object( {
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
    topic: string()
      .test( 'is-valid-topic', customErrorMessage, value => {
        return notificationTopics.includes( value );
      } )
      .required( 'Вкажіть тему повідомлення' ),
    message: string().required( 'Опишіть проблему' ),
    attachments: array(),
  } );

  const initialValues = {
    name: localStorage.getItem( 'question-form-name' ) || '',
    email: localStorage.getItem( 'question-form-email' ) || '',
    phone: localStorage.getItem( 'question-form-phone' ) || '',
    topic: localStorage.getItem( 'question-form-topic' ) || '',
    message: localStorage.getItem( 'question-form-message' ) || '',
    attachments: images || [],
  };

  const handleSubmit = ( values, { resetForm } ) => {
    const attachments = images;
    const questionFormData = { ...values, attachments };

    console.log( 'Data from QuestionForm to Backend  :>> ', questionFormData );

    const formData = new FormData();
    formData.append( 'name', values.name );
    formData.append( 'email', values.email );
    formData.append( 'phone', values.phone );
    formData.append( 'topic', values.topic );
    formData.append( 'message', values.message );
    for ( let i = 0; i < images.length; i += 1 ) {
      formData.append( 'attachments[]', images[ i ] );
    }
    // console.log( ...formData );

    const formFieldKeys = [
      'name',
      'email',
      'phone',
      'topic',
      'message',
      'attachments',
    ];
    formFieldKeys.forEach( key => {
      localStorage.removeItem( `question-form-${key}` );
    } );

    resetForm();
    onFormClose();
    onNotificationShow();
  };

  return (
    <S.QuestionFormContainer>
      <BtnClose onActiveModal={ onFormClose } />
      <S.Title>Залишились питання?</S.Title>
      <S.Text>
        Напишіть своє повідомлення, використовуючи форму, або зверніться напряму
        за електронною адресою
      </S.Text>
      <div>
        <Formik
          initialValues={ initialValues }
          validationSchema={ schema }
          onSubmit={ handleSubmit }
        >
          {formik => {
            const {
              errors: { name, email, phone, topic, message }, // повідомлення про помилки зі схеми
              touched,
              values,
              setValues,
              setTouched,
            } = formik;

            const isDataUser
              = formik.initialValues.phone === formik.values.phone;

            const errName = name && touched.name;
            // при розфокусуванні поля touched.name = true; коли є вміст - undefined
            const errEmail = email && touched.email;
            const errPhone = phone && touched.phone;
            const errTopic = topic && touched.topic;
            const errMessage = message && touched.message;

            const handleGetPhone = values => {
              setValues( prev => ( {
                ...prev,
                phone: values.value,
              } ) );

              setTouched( {
                ...touched,
                phone: values.touched,
              } );

              // console.log( 'handleGetPhone:', values );
            };

            return (
              <S.FormFild autoComplete="off">
                <Input
                  type="text"
                  name="name"
                  placeholder="Ім’я"
                  isStar={ true }
                  error={ errName }
                  value={ values.name }
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Електронна адреса"
                  isStar={ true }
                  error={ errEmail }
                  value={ values.email }
                />

                <>
                  <div style={ { position: 'relative' } }>
                    <InputFieldPhone
                      name="phone"
                      valueInput={ formik.values.phone }
                      submitPhone={ handleGetPhone }
                      $isDataUser={ isDataUser }
                      $error={ errPhone }
                      // for PhoneSelect
                      $xlPositionTopList="18px"
                      $smPositionTopList="11px"
                      $xlPositionLeftList="32px"
                      $xlHeightList="240px"
                      $smHeightList="220px"
                      $xlGapList="12px"
                      $xlFontSizeList="16px"
                    />
                  </div>
                </>

                <Input
                  type="text"
                  name="topic"
                  placeholder="Тема повідомлення"
                  isStar={ true }
                  error={ errTopic }
                  value={ values.topic }
                  dropdown
                  data={ notificationTopics }
                  formik={ formik }
                  $topic
                  readOnly
                />

                <Message
                  handleAttachmentsSelect={ setImages }
                  errMessage={ errMessage }
                  values={ values }
                />

                <Note
                  $fill={ deepAccent }
                  text='Ці поля є обов&apos;язковими до заповнення'
                />

                <S.SubmitBtn type="submit" variant="blue">
                  Надіслати
                </S.SubmitBtn>
              </S.FormFild>
            );
          }}
        </Formik>
      </div>
    </S.QuestionFormContainer>
  );
};
