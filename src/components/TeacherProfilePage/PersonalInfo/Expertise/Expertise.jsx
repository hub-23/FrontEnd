import React, { useEffect, useState } from 'react';
import * as S from './Expertise.styled';
import { IconSvg } from 'components/common/IconSvg';
import { grayText } from 'utils/variables.styled';
import { white } from 'utils/variables.styled';
import { ImgDeleteBtn } from 'components/common/modalElements/ImageWithDeleteBtn.styled';
import { UploadPopup } from 'components/Footer/modals/QuestionForm/UploadPopup/UploadPopup';

export const Expertise = ( { props } ) => {
  const [ uploadPopupVisible, setUploadPopupVisible ] = useState( false );

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
    if ( !lessons.includes( value ) ) {
      setLessons( prev => [ ...prev, value ] );
    } else {
      alert( 'Поточне зображення вже додано.' );
    }
  };

  const handleLessonDelete = value => {
    const updatedLessons = lessons.filter( lesson => lesson.name !== value.name );
    setLessons( updatedLessons );
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
                onClick={ () => handleLessonDelete( lesson ) }
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
    </S.Container>
  );
};
