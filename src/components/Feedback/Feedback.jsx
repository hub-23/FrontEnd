import React from 'react';
import { feedbackData } from './data';
import { Rating } from './Rating';
import {
  StyledSection,
  StyledContainer,
  StyledContent,
  StyledTitle,
  StyledCardsList,
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
import sprite from '../../assets/sprite.svg';


export const Feedback = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledContent>
          <StyledTitle>Ваші відгуки</StyledTitle>
          <StyledCardsList>
            {feedbackData.map( ( { id, studentName, photo, rating, teacherName, feedback, date } ) => (
              <StyledCard key={ id }>
                <StyledStudentName>{studentName}</StyledStudentName>
                <StyledPhoto src={ photo } alt={ studentName } />
                <Rating rating={ rating } />
                <StyledTeacherNameWrapper>
                  <svg width="24px" height="24px">
                    <use href={ `${sprite}#icon-hat-graduation` }></use>
                  </svg>
                  <StyledTeacherName>{teacherName}</StyledTeacherName>
                </StyledTeacherNameWrapper>
                <StyledFeedback>{feedback}</StyledFeedback>
                <StyledCardFooter>
                  <StyledDate>{date}</StyledDate>
                  <StyledDetailed>Детальніше</StyledDetailed>
                </StyledCardFooter>
              </StyledCard>
            ) ) }
          </StyledCardsList>
        </StyledContent>
      </StyledContainer>
    </StyledSection>

  );
};
