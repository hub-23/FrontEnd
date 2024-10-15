import React from 'react';
import * as S from '../AboutMe/AboutMe.styled';
import { FeedbackFild } from 'components/StudentPage/modals/Feedback.styled';
// import { Button } from 'components/common/button/Button';
import { IconSvg } from 'components/common/IconSvg';
import { grayText } from 'utils/variables.styled';
import { AddButton } from './Expertise.styled';

export const Expertise = ( { props } ) => {

  return (
    <S.Container>
        <FeedbackFild component="textarea" name="about" rows="2" placeholder="Додати новий"/>
        <AddButton>
          <IconSvg
                xlWidth="22px"
                xlHeight="22px"
                $fill={ grayText }
                $transformRotate="45deg"
                icon="icon-cross"
                { ...props }
              />
        Додати новий
        </AddButton>
    </S.Container>

  );
};
