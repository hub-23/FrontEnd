import React from 'react';
import * as S from './AboutMe.styled';
import { FeedbackFild } from 'components/StudentPage/modals/Feedback.styled';

export const AboutMe = () => {
  return (
    <S.Container>
      <FeedbackFild
        component="textarea"
        name="about"
        rows="5"
        placeholder="Опишіть свій досвід..."
      />
    </S.Container>
  );
};
