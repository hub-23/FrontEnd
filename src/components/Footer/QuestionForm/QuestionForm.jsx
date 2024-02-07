import React, { useState } from 'react';
import { Formik } from 'formik';
import { object, string, array } from 'yup';
import { FormError } from './FormError/FormError';
import { BtnClose } from './BtnClose/BtnClose';
import { IconSvg } from '../../common/IconSvg';
import { PhoneSelect } from '../../common/PhoneSelect';
import { DropdownTopic } from './DropdownTopic/DropdownTopic';
import { Message } from './Message/Message';
import { Modal } from '../../modal/Modal';
import { Notification } from './Notification/Notification';
import { SaveToLocalStorage } from './SaveToLocalStorage';
import { grayText, deepAccent } from '../../../utils/variables.styled';
import * as S from './QuestionForm.styled';


export const QuestionForm = ( { onActiveModal } ) => {
  const [ codeCountry, setCodeCountry ] = useState( '+380' );
  const [ isDropdownShown, setIsDropdownShown ] = useState( false );
  const [ images, setImages ] = useState( [] );
  const [ isNotificationShown, setIsNotificationShown ] = useState( false );

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
    attachments: images || [],
  };

  const handleSubmit = ( values, { resetForm } ) => {
    const phone = `${codeCountry}${values.phone.replaceAll( ' ', '' )}`;
    const attachments = images;
    const questionFormData = { ...values, phone, attachments };

    console.log( 'Data from QuestionForm to Backend  :>> ', questionFormData );

    const formData = new FormData;
    formData.append( 'name', values.name );
    formData.append( 'email', values.email );
    formData.append( 'phone', phone.phone );
    formData.append( 'topic', values.topic );
    formData.append( 'message', values.message );
    for ( let i = 0; i < images.length; i += 1 ) {
      formData.append( 'attachments[]', images[ i ] );
    }
    // console.log( ...formData );

    const formFieldKeys = [ 'name', 'email', 'phone', 'topic', 'message', 'attachments' ];
    formFieldKeys.forEach( ( key ) => {
      localStorage.removeItem( `question-form-${key}` );
    } );

    resetForm();
    setIsNotificationShown( true );
  };

  const handleGetSelected = ( values ) => {
    setCodeCountry( values );
  };

  const handleTopicSelect = ( formik, value ) => {
    formik.setFieldValue( 'topic', value );
    setIsDropdownShown( !isDropdownShown );
  };

  const handleCloseForm = () => {
    onActiveModal();
    setIsNotificationShown( !isNotificationShown );
    document.body.style.overflow = 'visible';
  };

  return (
    <S.QuestionFormContainer $isNotificationShown={ isNotificationShown }>
      <BtnClose onActiveModal={ onActiveModal } />
      <S.Title>Залишились питання?</S.Title>
      <S.Text>
        Напишіть своє повідомлення, використовуючи форму, або зверніться напряму за електронною адресою
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
                <S.InputWrapper >
                  <S.InputLableBox>
                    <S.Input
                      type="text"
                      name="name"
                      placeholder="Ім’я"
                      $error={ errName }
                      $value={ values.name }
                      id="name"
                    />
                    <S.Label htmlFor="name">
                      Ім’я
                      <S.IconContainer >
                        <IconSvg
                          xlWidth="10px"
                          xlHeight="10px"
                          $fill={ grayText }
                          icon="icon-star-marker"
                        />
                      </S.IconContainer>
                    </S.Label>
                  </S.InputLableBox>
                  <SaveToLocalStorage fieldName="name" />
                  <FormError name="name" isMarginLeft={ true } />
                </S.InputWrapper>

                <S.InputWrapper>
                  <S.InputLableBox>
                    <S.Input
                      type="email"
                      name="email"
                      placeholder="Електронна адреса"
                      $error={ errEmail }
                      $value={ values.email }
                      id="email"
                    />
                    <S.Label htmlFor="email">
                      Електронна адреса
                      <S.IconContainer >
                        <IconSvg
                          xlWidth="10px"
                          xlHeight="10px"
                          $fill={ grayText }
                          icon="icon-star-marker"
                        />
                      </S.IconContainer>
                    </S.Label>
                  </S.InputLableBox>
                  <SaveToLocalStorage fieldName="email" />
                  <FormError name="email" isMarginLeft={ true } />
                </S.InputWrapper>

                <S.InputWrapper>
                  <div>
                    <S.Input
                      type="tel"
                      name="phone"
                      $value={ values.phone }
                      $error={ errPhone }
                      style={ { paddingLeft: '160px' } }
                    />
                    <PhoneSelect
                      valueSelect={ handleGetSelected }
                      xlHeightList="240px"
                      mdHeightList="245px"
                      $positionTop="13px"
                      $positionLeft="32px"
                      $xlFontSizeList="20px"
                      $mdFontSizeList="16px"
                      // $smFontSizeList=""
                    />
                  </div>
                  <SaveToLocalStorage fieldName="phone" />
                  <FormError name="phone" isMarginLeft={ true } />
                </S.InputWrapper>

                <S.InputWrapper style={ { position: 'relative' } }>
                  <S.InputLableBox>
                    <S.Input
                      type="text"
                      name="topic"
                      placeholder="Тема повідомлення"
                      $error={ errTopic }
                      $value={ values.topic }
                      $topic
                      readOnly
                      id="topic"
                    />
                    <S.Label htmlFor="topic">
                      Тема повідомлення
                      <S.IconContainer >
                        <IconSvg
                          xlWidth="10px"
                          xlHeight="10px"
                          $fill={ grayText }
                          icon="icon-star-marker"
                        />
                      </S.IconContainer>
                    </S.Label>
                  </S.InputLableBox>
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
                  handleAttachmentsSelect={ setImages }
                  errMessage={ errMessage }
                  values={ values }
                />

                <S.WrappWarningText>
                  <IconSvg
                    xlWidth="24px"
                    xlHeight="24px"
                    $fill={ deepAccent }
                    icon="icon-star-marker"
                  />
                  <S.WarningText $color={ errName }>
                        Ці поля є обов&apos;язковими до заповнення
                  </S.WarningText>
                </S.WrappWarningText>

                <S.SubmitBtn
                  type='submit'
                  variant='blue'
                >
                Надіслати
                </S.SubmitBtn>
              </S.FormFild>
            );
          }}
        </Formik>
      </div>
      { isNotificationShown && (
        <Modal onActiveModal={ handleCloseForm }>
          <Notification onActiveModal={ handleCloseForm } />
        </Modal>
      ) }
    </S.QuestionFormContainer>
  );
};
