import React, { useRef, useState, useLayoutEffect } from 'react';
import _ from 'lodash';
import { Rating } from './Rating';
import sprite from '../../assets/sprite.svg';
import * as S from './Feedback.styled';


export const FeedbackCard = ( { feedback } ) => {
  const { studentName, photo, rating, teacherName, feedbackText, date } = feedback;
  const pRef = useRef();
  const [ isOverflowing, setIsOverflowing ] = useState( false );

  useLayoutEffect( () => {
    const checkOverflow = () => {
      const feedbackTextElement = pRef.current;
      const isContentOverflowing = feedbackTextElement.scrollHeight > feedbackTextElement.clientHeight;
      setIsOverflowing( isContentOverflowing );
    };

    setTimeout( checkOverflow, 0 );

    const handleResize = () => checkOverflow();
    window.addEventListener( 'resize', _.debounce( handleResize, 1000 ) );

    return () => {
      window.removeEventListener( 'resize', handleResize );
    };
  }, [] );

  return (
    <S.Card>
      <S.StudentName>{studentName}</S.StudentName>
      <S.Photo src={ photo } alt={ studentName } />
      <Rating rating={ rating } />
      <S.TeacherNameWrapper>
        <S.HatIcon width="24px" height="24px">
          <use href={ `${sprite}#icon-hat-graduation` }></use>
        </S.HatIcon>
        <S.TeacherName>{teacherName}</S.TeacherName>
      </S.TeacherNameWrapper>
      <S.Feedback ref={ pRef } $overflow={ isOverflowing }>{feedbackText}</S.Feedback>
      {isOverflowing
        ? <S.CardFooter>
          <S.Date>{date}</S.Date>
          <S.Detailed>Детальніше</S.Detailed>
        </S.CardFooter>
        : <S.Date>{date}</S.Date>
      }
    </S.Card>
  );
};
