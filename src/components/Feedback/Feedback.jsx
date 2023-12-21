import React from 'react';
import { feedbackData } from './data';
import { Rating } from './Rating';
import {
  StyledSection,
  StyledContainer,
  StyledTitle,
  StyledCardsList,
  StyledCard,
  StyledStudentName,
  StyledPhoto,
  StyledTeacherName,
  StyledFeedback,
  StyledDate,
} from './Feedback.styled';

export const Feedback = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>Ваші відгуки</StyledTitle>
        <StyledCardsList>
          {feedbackData.map( ( { id, studentName, photo, rating, teacherName, feedback, date } ) => (
            <StyledCard key={ id }>
              <StyledStudentName>{studentName}</StyledStudentName>
              <StyledPhoto src={ photo } alt={ studentName } />
              <Rating rating={ rating } />
              <StyledTeacherName>{teacherName}</StyledTeacherName>
              <StyledFeedback>{feedback}</StyledFeedback>
              <StyledDate>{date}</StyledDate>
            </StyledCard>
          ) ) }
        </StyledCardsList>
      </StyledContainer>
    </StyledSection>

  );
};
