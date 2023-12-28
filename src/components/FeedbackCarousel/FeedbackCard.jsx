import React, { useRef, useState, useLayoutEffect } from 'react';
import { Rating } from './Rating';
import sprite from '../../assets/sprite.svg';
import * as S from './Feedback.styled';


export const FeedbackCard = ( { feedback } ) => {
  const { studentName, photo, rating, teacherName, feedbackText, date } = feedback;
  const pRef = useRef();
  const [ isOverflowing, setIsOverflowing ] = useState( false );
  console.log( studentName, isOverflowing );
  const overflowStyles = {
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  };

  useLayoutEffect( () => {
    const checkOverflow = () => {
      const feedbackTextElement = pRef.current;
      const isContentOverflowing = feedbackTextElement.scrollHeight > feedbackTextElement.clientHeight;
      setIsOverflowing( isContentOverflowing );
    };

    setTimeout( checkOverflow, 0 );
  }, [] );

  return (
    <S.Card>
      <S.StudentName>{studentName}</S.StudentName>
      <S.Photo src={ photo } alt={ studentName } />
      <Rating rating={ rating } />
      <S.TeacherNameWrapper>
        <svg width="24px" height="24px">
          <use href={ `${sprite}#icon-hat-graduation` }></use>
        </svg>
        <S.TeacherName>{teacherName}</S.TeacherName>
      </S.TeacherNameWrapper>
      <S.Feedback
        ref={ pRef }
        style={ isOverflowing ? overflowStyles : {} }
      >
        {feedbackText}
      </S.Feedback>
      { isOverflowing
        ? <S.CardFooter>
          <S.Date>{date}</S.Date>
          <S.Detailed>Детальніше</S.Detailed>
        </S.CardFooter>
        : <S.Date>{date}</S.Date>
      }
    </S.Card>
  );
};
