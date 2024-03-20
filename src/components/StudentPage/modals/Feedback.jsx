// import { Message } from 'components/Footer/modals/QuestionForm/Message/Message';
import { Form, Formik } from 'formik';
import React from 'react';
import { object, string } from 'yup';
import * as S from './Feedback.styled';
import { BtnClose } from 'components/common/BtnClose';
import { IconSvg } from 'components/common/IconSvg';

export const Feedback = ( { onFormClose, onShownSentModal } ) => {
  const initialValues = {
    rating: '',
    lessonTitle: '',
    teachersName: '',
    feedback: '',
  };

  const scheme = object( {
    rating: string(),
    lessonTitle: string(),
    teachersName: string(),
    feedback: string(),
  } );

  const handleSubmit = ( values, { resetForm } ) => {
    const { rating, lessonTitle, teachersName, feedback } = values;
    console.log( rating, lessonTitle, teachersName, feedback );
    // dispatch( reviewStudent( { rating, lessonTitle, teachersName, feedback } ) );

    resetForm();
    onFormClose();
    // onShownSentModal( prev => !prev ); // відкрити модалку /Відгук успішно надіслано/
    onShownSentModal();
  };

  const formikForm = formik => {
    const {
      errors: { message },
      touched,
      // eslint-disable-next-line no-unused-vars
      values,
    } = formik;

    // eslint-disable-next-line no-unused-vars
    const errMessage = message && touched.message;

    return (
      <Form style={ { outline: '1px solid salmon' } }>
        <p>*** STARS ***</p>
        <div>Німецька мова</div>
        <div>Повідомлення</div>
        <button type="submit">submit</button>
      </Form>
    );
  };

  return (
    <S.Modal>
      <BtnClose
        xlRight="50px"
        xlTop="40px"
        mdRight="15px"
        mdTop="15px"
        smRight="10px"
        smTop="10px"
        click={ onFormClose }
      >
        <IconSvg
          xlWidth="60px"
          xlHeight="60px"
          mdWidth="36px"
          mdHeight="36px"
          smWidth="24px"
          smHeight="24px"
          icon="icon-close"
        />
      </BtnClose>

      <S.Article>
        <S.Title>Бажаєте залишити відгук?</S.Title>
        <S.Text>Ваш відгук допоможе нам ставати кращими</S.Text>

        <Formik
          initialValues={ initialValues }
          validationSchema={ scheme }
          onSubmit={ handleSubmit }
        >
          {formikForm}
        </Formik>
      </S.Article>
    </S.Modal>
  );
};
