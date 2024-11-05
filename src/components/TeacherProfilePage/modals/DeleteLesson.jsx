import React from 'react';
import { Formik } from 'formik';
import { BtnClose } from '../../common/modalElements/BtnClose';
import * as S from './DeleteLesson.styled';

export const DeleteLesson = ( {
  onDeleteLessonModalClose,
  onDeleteLesson,
} ) => {

  const handleLessonDelete = ( ) => {
    onDeleteLesson();
    // onNotificationShow();
  };

  return (
    <S.Container>
      <BtnClose onActiveModal={ onDeleteLessonModalClose } />
      <S.Title>Бажаєте видалити?</S.Title>
      <p>Підтвердіть, якщо дійсно бажаєте видалити цей предмет викладання</p>
      <Formik
        onSubmit={ handleLessonDelete }
      >
        {() => (
            <S.FormField autoComplete="off">
              <div>
                <S.DeleteBtn type="submit" variant="blue">
                  Видалити
                </S.DeleteBtn>
                <S.CancelBtn
                  variant="blueGradientedBorder"
                  onClick={ onDeleteLessonModalClose }
                >
                  Скасувати
                </S.CancelBtn>
              </div>
            </S.FormField>
          )}
      </Formik>
    </S.Container>
  );
};
