import React, { useEffect, useState } from 'react';
import { IconSvg } from 'components/common/IconSvg';
import { grayText } from 'utils/variables.styled';
import { white } from 'utils/variables.styled';
import { ImgDeleteBtn } from 'components/common/modalElements/ImageWithDeleteBtn.styled';
import { UploadPopup } from 'components/Footer/modals/QuestionForm/UploadPopup/UploadPopup';
import { Modal } from 'components/common/modalElements/Modal';
import { Notification } from 'components/common/modalElements/Notification';

import * as S from './Expertise.styled';
import { DeleteLesson } from '../../modals/DeleteLesson';

export const Expertise = ( { props } ) => {
  const [ uploadPopupVisible, setUploadPopupVisible ] = useState( false );
  const [ isSendNotificationShown, setIsSendNotificationShown ] = useState( false );
  const [ deleteLessonModalShown, setDeleteLessonModalShown ] = useState( false );
  const [ lessonToDelete, setLessonToDelete ] = useState( null );

  const fakeLessons = [
    { name: 'Німецька мова', price: '300 грн' },
    { name: 'Французька мова', price: '300 грн' },
    { name: 'Українська мова', price: '500 грн' },
  ];

  const storedLessons
    // = JSON.parse( localStorage.getItem( 'question-form-attachments' ) ) || fakelesson;
    = fakeLessons;

  const [ lessons, setLessons ] = useState( storedLessons );

  const handleLessonSelect = value => {
    if ( !lessons.some( lesson => lesson.name === value.name ) ) {
      setLessons( prev => [ ...prev, value ] );
    } else {
      alert( 'Поточне зображення вже додано.' );
    }
  };

  const handleLessonDelete = value => {
    if ( lessonToDelete ) {
      const updatedLessons = lessons.filter( lesson => lesson.name !== value.name );
      setLessons( updatedLessons );
      setDeleteLessonModalShown ( true )
      setIsSendNotificationShown ( true )
    }
  };

  useEffect( () => {
    // handleAttachmentsSelect( lesson );
    localStorage.setItem( 'question-form-attachments', JSON.stringify( lessons ) );
  }, [ lessons ] );

  return (
    <S.Container>
      {lessons?.length > 0 && (
        <S.LessonsList>
          {lessons.map( lesson => (
            <S.SubjectTeaching color={ white } key={ lesson.name }>
              <p>{lesson.name}</p>
              <p>{lesson.price}</p>
              <IconSvg
                xlWidth="24px"
                xlHeight="24px"
                icon="icon-rose_dot"
              />
              <ImgDeleteBtn
                type="button"
                aria-label="delete"
                onClick={ () => { setLessonToDelete( lesson );
                  setDeleteLessonModalShown( true );
                }
                 }
                { ...props }
              >
                <IconSvg
                  xlWidth="16px"
                  xlHeight="16px"
                  icon="icon-image-delete"
                  { ...props }
                />
              </ImgDeleteBtn>
            </S.SubjectTeaching>
          ) )}
        </S.LessonsList>
      )}
      <S.AddButton
        type="button"
        aria-label="paper-clip"
        onClick={ () => setUploadPopupVisible( !uploadPopupVisible ) }
      >
        <IconSvg
          xlWidth="22px"
          xlHeight="22px"
          $fill={ grayText }
          $transformRotate="rotate(45deg)"
          icon="icon-cross"
          { ...props }
        />
        Додати новий
      </S.AddButton>
      {uploadPopupVisible && (
        <UploadPopup handleLessonSelect={ handleLessonSelect } />
      )}
            {deleteLessonModalShown && (
        <Modal onActiveModal={ () => setDeleteLessonModalShown( false ) }>
          <DeleteLesson
            onDeleteLessonModalClose={ () => setDeleteLessonModalShown( false ) }
            // onNotificationShow={ () => handleLessonDelete() }
            onDeleteLesson={ handleLessonDelete }
          />
        </Modal>
      )}
            {isSendNotificationShown && (
        <Modal onActiveModal={ () => setIsSendNotificationShown( false ) }>
          <Notification
            onNotificationClose={ () => setIsSendNotificationShown( false ) }
            // success={ success }
            // title={ success ? 'Зміни успішно збережено' : 'Сталась помилка' }
            // description={
            // success
            // eslint-disable-next-line max-len
            //     ? 'Оновлено особисту інформацію. Будьте уважні, при оновленні пароля автоматично відбудеться вихід із профілю з усіх пристроїв на яких відкрито сторінку.'
            //     : 'Щось пішло не так, тому спробуйте ще раз або виконайте цю дію пізніше'
            // }
          />
        </Modal>
      )}
    </S.Container>
  );
};
