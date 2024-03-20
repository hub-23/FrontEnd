// import { Message } from 'components/Footer/modals/QuestionForm/Message/Message';
import { Form, Formik } from 'formik';
import React from 'react';
import { object, string } from 'yup';
import * as S from './Feedback.styled';
import { BtnClose } from 'components/common/BtnClose';
import { IconSvg } from 'components/common/IconSvg';
import { Note } from 'components/common/modalElements/Note';
import { deepAccent } from 'utils/variables.styled';

const tempBackend = {
  lesson: 'Німецька мова',
  teachersName: 'Белла Микифорівна',
};

export const Feedback = ( { onFormClose, onShownSentModal } ) => {
  const initialValues = {
    rating: '',
    feedback: '',
  };

  const scheme = object( {
    rating: string(),
    lessonTitle: string(),
    teachersName: string(),
    feedback: string().min( 5 ).max( 1000 ).required(),
  } );

  const handleSubmit = ( values, { resetForm } ) => {
    // eslint-disable-next-line no-unused-vars
    const { rating, feedback } = values;
    // dispatch( reviewStudent( { rating,  feedback } ) );

    resetForm();
    onFormClose();
    onShownSentModal(); // відкрити модалку /Відгук успішно надіслано/
  };

  const formikForm = formik => {
    const {
      errors: { feedback },
      touched,
      // eslint-disable-next-line no-unused-vars
      values,
    } = formik;

    // eslint-disable-next-line no-unused-vars
    const errfeedback = feedback && touched.feedback;

    return (
      <Form style={ { position: 'relative' } }>
        <p>*** STARS *** в розробці &#128512;</p>

        <S.Classes>{tempBackend.lesson}</S.Classes>
        <S.Classes>{tempBackend.teachersName}</S.Classes>

        <S.FeedbackFild
          name="feedback"
          component="textarea"
          placeholder="Повідомлення"
          $error={ errfeedback }
        >
          Повідомлення
        </S.FeedbackFild>

        <Note
          text="Введіть не більше 1000 символів"
          $position="initial"
          $fill={ deepAccent }
          $xlFontSize="14px"
          $xlLineHeight="15.82"
        />

        <S.Btn type="submit" variant="blue">
          Надіслати
        </S.Btn>
      </Form>
    );
  };

  return (
    <S.Modal>
      <BtnClose
        xlRight="48px"
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
