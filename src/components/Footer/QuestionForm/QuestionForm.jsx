import React, { useState } from 'react';
import { Formik } from 'formik';
import { object, string, array } from 'yup';
import { FormError } from './FormError/FormError';
import { BtnClose } from '../../common/BtnClose';
import { IconSvg } from '../../common/IconSvg';
import { PhoneSelect } from '../../common/PhoneSelect';
import countries from '../../../assets/countries.json';
import { DropdownTopic } from './DropdownTopic/DropdownTopic';
import { Message } from './Message/Message';
import { SaveToLocalStorage } from './SaveToLocalStorage';
import * as S from './QuestionForm.styled';


export const QuestionForm = ( { onActiveModal } ) => {
  const [ codeCountry, setCodeCountry ] = useState( '+380' );
  const [ isDropdownShown, setIsDropdownShown ] = useState( false );


  const notificationTopics = [
    'Технічна підтримка', 'Співпраця і пропозиції', 'Реклама', 'Проблема з оплатою', 'Інше',
  ];
  const customErrorMessage = 'Оберіть одну із запропонованих тем';

  const schema = object( {
    name: string()
        .min( 2, 'Вкажіть мінімум 2 літери, але не більше 30' )
        .max( 30, 'Вкажіть мінімум 2 літери, але не більше 30' )
        .matches(
            /^[А-яЁёЇїІіЄєҐґ'\s/A-z\s/\-/_/.]+$/,
            'Ім’я має містити українські або англійські літери',
        )
        .required( 'Вкажіть ваше ім’я' ),
    email: string()
        .email( 'Невірно вказано e-mail' )
        .trim()
        .required( 'Вкажіть ваш e-mail' ),
    phone: string()
        .matches(
            /^\d{3}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
            'Невірно вказаний номер',
        )
        .required( 'Вкажіть ваш номер телефону' ),
    topic: string()
        .test( 'is-valid-topic', customErrorMessage, ( value ) => {
          return notificationTopics.includes( value );
        } )
        .required( 'Вкажіть тему повідомлення' ),
    message: string()
        .required( 'Опишіть проблему' ),
    attachments: array(),
  } );

  const initialValues = {
    name: localStorage.getItem( 'question-form-name' ) || '',
    email: localStorage.getItem( 'question-form-email' ) || '',
    phone: localStorage.getItem( 'question-form-phone' ) || '',
    topic: localStorage.getItem( 'question-form-topic' ) || '',
    message: localStorage.getItem( 'question-form-message' ) || '',
    attachments: JSON.parse( localStorage.getItem( 'question-form-attachments' ) ) || [],
  };


  const handleSubmit = ( values, { resetForm } ) => {
    const phone = { phone: `${codeCountry}${values.phone.replaceAll( ' ', '' )}` };
    const questionFormData = { ...values, ...phone };

    console.log( 'Data from QuestionForm to Backend  :>> ', questionFormData );

    const formData = new FormData;
    formData.append( 'name', values.name );
    formData.append( 'email', values.email );
    formData.append( 'phone', phone.phone );
    formData.append( 'topic', values.topic );
    formData.append( 'message', values.message );
    for ( let i = 0; i < values.attachments.length; i += 1 ) {
      formData.append( 'attachments[]', values.attachments[ i ] );
    }
    // console.log( ...formData );

    const formFieldKeys = [ 'name', 'email', 'phone', 'topic', 'message', 'attachments' ];
    formFieldKeys.forEach( ( key ) => {
      localStorage.removeItem( `question-form-${key}` );
    } );

    resetForm();
    onActiveModal();
  };

  const handleGetSelected = ( values ) => {
    setCodeCountry( values );
  };

  const handleTopicSelect = ( formik, value ) => {
    formik.setFieldValue( 'topic', value );
    setIsDropdownShown( !isDropdownShown );
  };

  const handleAttachmenValue = ( formik, value ) => {
    formik.setFieldValue( 'attachments', value );
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
      <div>
        <Formik initialValues={ initialValues } validationSchema={ schema } onSubmit={ handleSubmit } >
          {( formik ) => {
            const {
              errors: { name, email, phone, topic, message }, // повідомлення про помилки зі схеми
              touched,
              values,
            } = formik;

            const errName = name && touched.name;
            // при розфокусуванні поля touched.name = true; коли є вміст - undefined
            const errEmail = email && touched.email;
            const errPhone = phone && touched.phone;
            const errTopic = topic && touched.topic;
            const errMessage = message && touched.message;

            return (
              <S.FormFild autoComplete="off">
                <S.InputWrapper>
                  <S.Input
                    type="text"
                    name="name"
                    placeholder="Ім’я"
                    $error={ errName }
                    $value={ values.name }
                  />
                  <SaveToLocalStorage fieldName="name" />
                  <FormError name="name" isMarginLeft={ true } />
                </S.InputWrapper>

                <S.InputWrapper>
                  <S.Input
                    type="email"
                    name="email"
                    placeholder="Електронна адреса"
                    $error={ errEmail }
                    $value={ values.email }
                  />
                  <SaveToLocalStorage fieldName="email" />
                  <FormError name="email" isMarginLeft={ true } />
                </S.InputWrapper>

                <S.InputWrapper style={ { paddingTop: '2px' } }>
                  <S.Input
                    type="tel"
                    name="phone"
                    $value={ values.phone }
                    $error={ errPhone }
                    style={ { paddingLeft: '160px' } }
                  />
                  <SaveToLocalStorage fieldName="phone" />
                  <FormError name="phone" isMarginLeft={ true } />

                  <PhoneSelect
                    data={ countries }
                    valueSelect={ handleGetSelected }
                    xlHeightList="275px"
                    smHeightList="245px"
                  />
                </S.InputWrapper>

                <S.InputWrapper style={ { position: 'relative' } }>
                  <S.Input
                    type="text"
                    name="topic"
                    placeholder="Тема повідомлення"
                    $error={ errTopic }
                    $value={ values.topic }
                  />
                  <S.DropdownBtn
                    type='button'
                    aria-label='dropdown-menu'
                    onClick={ () => setIsDropdownShown( !isDropdownShown ) }
                    $rotate={ isDropdownShown }
                  >
                    <IconSvg
                      xlWidth='11px'
                      xlHeight='6px'
                      icon='icon-arrow-down'
                    />
                  </S.DropdownBtn>
                  <SaveToLocalStorage fieldName="topic" />
                  <FormError name="topic" isMarginLeft={ true } />
                  {isDropdownShown
                    && <DropdownTopic
                      data={ notificationTopics }
                      handleTopicSelect={ ( formik, value ) => handleTopicSelect( formik, value ) }
                      formik={ formik }
                    />
                  }
                </S.InputWrapper>

                <Message
                  handleAttachmenValue={ ( formik, value ) => handleAttachmenValue( formik, value ) }
                  formik={ formik }
                  errMessage={ errMessage }
                  values={ values }
                />

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
                  //   borderRadius='16px 0'
                  //   smBorderRadius='20px 0'
                >
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
