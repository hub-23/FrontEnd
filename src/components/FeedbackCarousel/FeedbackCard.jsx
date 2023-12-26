import React, { useRef, useState, useEffect } from 'react';
import { Rating } from './Rating';
import sprite from '../../assets/sprite.svg';
import {
  StyledCard,
  StyledStudentName,
  StyledPhoto,
  StyledTeacherNameWrapper,
  StyledTeacherName,
  StyledFeedback,
  StyledCardFooter,
  StyledDate,
  StyledDetailed,
} from './Feedback.styled';


export const FeedbackCard = ( { feedback } ) => {
  const { studentName, photo, rating, teacherName, feedbackText, date } = feedback;
  const pRef = useRef();
  const [ isOverflowing, setIsOverflowing ] = useState( false );

  const overflowStyles = {
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  };

  useEffect( () => {
    const feedbackTextElement = pRef.current;
    const isContentOverflowing = feedbackTextElement.scrollHeight > feedbackTextElement.clientHeight;
    // без переповнення: scrollHeight === clientHeight
    setIsOverflowing( isContentOverflowing );
  }, [] );

  return (
    <StyledCard>
      <StyledStudentName>{studentName}</StyledStudentName>
      <StyledPhoto src={ photo } alt={ studentName } />
      <Rating rating={ rating } />
      <StyledTeacherNameWrapper>
        <svg width="24px" height="24px">
          <use href={ `${sprite}#icon-hat-graduation` }></use>
        </svg>
        <StyledTeacherName>{teacherName}</StyledTeacherName>
      </StyledTeacherNameWrapper>
      <StyledFeedback
        ref={ pRef }
        style={ isOverflowing ? overflowStyles : {} }
      >
        {feedbackText}
      </StyledFeedback>
      { isOverflowing
        ? <StyledCardFooter>
          <StyledDate>{date}</StyledDate>
          <StyledDetailed>Детальніше</StyledDetailed>
        </StyledCardFooter>
        : <StyledDate>{date}</StyledDate>
      }
    </StyledCard>
  );
};
