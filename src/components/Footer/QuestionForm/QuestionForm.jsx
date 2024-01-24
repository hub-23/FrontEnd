import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { object, string, mixed } from 'yup';
import { BtnClose } from '../../common/BtnClose';
import { IconSvg } from '../../common/IconSvg';
import { PhoneSelect } from '../../common/PhoneSelect';
import countries from '../../../assets/countries.json';
import { DropdownTopic } from './DropdownTopic';
import { UploadNotice } from './UploadNotice/UploadNotice';
import * as S from './QuestionForm.styled';


export const QuestionForm = ( { onActiveModal } ) => {
  const [ codeCountry, setCodeCountry ] = useState( '+380' );
  const [ isDropdownShown, setIsDropdownShown ] = useState( false );
  const [ isUploadNoticeShown, setIsUploadNoticeShown ] = useState( false );
  const [ images, setImages ] = useState( [] );

  const notificationTopics = [
    'Технічна підтримка', 'Співпраця і пропозиції', 'Реклама', 'Проблема з оплатою', 'Інше',
  ];

  const allowedFileFormats = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
  ];

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
        .oneOf( notificationTopics )
        .required( 'Вкажіть тему повідомлення' ),
    message: string()
        .required( 'Опишіть проблему' ),
    // file: string(),
    file: mixed(),
  } );

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    file: '',
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

  const handleTopicSelect = ( formik, value ) => {
    formik.setFieldValue( 'topic', value );
    setIsDropdownShown( !isDropdownShown );
  };

  const handleUploadNoticeShown = () => {
    setIsUploadNoticeShown( !isUploadNoticeShown );
  };

  const handleImageSelect = ( value ) => {
    // formik.setFieldValue( 'file', value );
    setImages( value );
  };

  const handleImageDelete = ( image ) => {
    if ( images.includes( image ) ) {
      const idxToDelete = images.indexOf( image );
      images.splice( idxToDelete, 1 );
      setImages( [ ...images ] );
    }
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
            } = formik;
            const isDataUser = formik.initialValues.phone === formik.values.phone;

            const errName = name && touched.name; // при розфокусуванні поля touched.name = true
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
                  />
                  <FormError name="name" isMarginLeft={ true } />
                </S.InputWrapper>

                <S.InputWrapper>
                  <S.Input
                    type="email"
                    name="email"
                    placeholder="Електронна адреса"
                    $error={ errEmail }
                  />
                  <FormError name="email" isMarginLeft={ true } />
                </S.InputWrapper>

                <S.InputWrapper htmlFor="phone" style={ { paddingTop: '2px' } }>
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
                </S.InputWrapper>

                <S.InputWrapper>
                  <S.Input
                    type="text"
                    name="topic"
                    placeholder="Тема повідомлення"
                    $error={ errTopic }
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
                  <FormError name="topic" isMarginLeft={ true } />
                </S.InputWrapper>
                {isDropdownShown
                  && <DropdownTopic
                    data={ notificationTopics }
                    handleTopicSelect={ ( formik, value ) => handleTopicSelect( formik, value ) }
                    formik={ formik }
                  />
                }

                <S.TextareaWrapper>
                  <S.InputWrapper>
                    <S.Textarea
                      name="message"
                      component="textarea"
                      rows="10"
                      placeholder="Повідомлення"
                      $error={ errMessage }
                    />
                    <FormError name="message" isMarginLeft={ true } />
                  </S.InputWrapper>

                  <S.ClipBtn
                    type='button'
                    aria-label='paper-clip'
                    onClick={ handleUploadNoticeShown }
                  >
                    <IconSvg
                      xlWidth="24px"
                      xlHeight="24px"
                      mdWidth="24px"
                      mdHeight="24px"
                      smWidth="24px"
                      smHeight="24px"
                      icon="icon-paper-clip"
                    />
                  </S.ClipBtn>
                  {isUploadNoticeShown
                    && <UploadNotice
                      allowedFileFormats={ allowedFileFormats }
                      handleImageSelect={ handleImageSelect }
                      formik={ formik }
                    />
                  }
                  { images && (
                    <S.ImagesList>
                      {images.map( ( image ) => (
                        <li key={ image } style={ { position: 'relative' } }>
                          <S.Image
                            src={ image }
                            alt="uploaded file"
                          />
                          <S.ImgDeleteBtn
                            type='button'
                            aria-label='image-delete'
                            onClick={ () => handleImageDelete( image ) }
                          >
                            <IconSvg
                              xlWidth="16px"
                              xlHeight="16px"
                              mdWidth="16px"
                              mdHeight="16px"
                              smWidth="16px"
                              smHeight="16px"
                              icon="icon-image-delete"
                            />
                          </S.ImgDeleteBtn>
                        </li>
                      ) )}
                    </S.ImagesList>
                  )}
                </S.TextareaWrapper>


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
