import React, { useRef, useState, useLayoutEffect } from 'react';
import _ from 'lodash';
import { Rating } from './Rating';
import sprite from '../../../assets/sprite.svg';
import * as S from './Feedback.styled';

export const FeedbackCard = ( { feedback } ) => {
  const { studentName, photo, rating, teacherName, feedbackText, date }
    = feedback;
  const pRef = useRef();
  const [ isOverflowing, setIsOverflowing ] = useState( false );

  useLayoutEffect( () => {
    const checkOverflow = () => {
      const feedbackTextElement = pRef.current;
      if ( feedbackTextElement ) {
        const isContentOverflowing
          = feedbackTextElement.scrollHeight > feedbackTextElement.clientHeight;
        setIsOverflowing( isContentOverflowing );
      }
    };

    setTimeout( checkOverflow, 0 );

    const handleResize = () => checkOverflow();
    window.addEventListener( 'resize', _.debounce( handleResize, 800 ) );

    return () => {
      window.removeEventListener( 'resize', handleResize );
    };
  }, [] );

  return (
    <S.Card>
      <S.StudentName>{studentName}</S.StudentName>
      <S.Photo src={ photo } alt={ studentName } />
      <Rating rating={ rating } />
      <S.TeacherNameWrapper to="/teacher">
        <svg width="24px" height="24px" className="default">
          <use href={ `${sprite}#icon-hat-graduation` }></use>
        </svg>
        <svg width="24px" height="24px" className="active">
          <use href={ `${sprite}#icon-hat-graduation-hover` }></use>
        </svg>
        <S.TeacherName>{teacherName}</S.TeacherName>
      </S.TeacherNameWrapper>
      <S.Feedback ref={ pRef } $overflow={ isOverflowing }>
        {feedbackText}
      </S.Feedback>
      {isOverflowing ? (
        <S.CardFooter>
          <S.Date>{date}</S.Date>
          <S.Detailed to="/teacher">Детальніше</S.Detailed>
        </S.CardFooter>
      ) : (
        <S.Date>{date}</S.Date>
      )}
    </S.Card>
  );
};
