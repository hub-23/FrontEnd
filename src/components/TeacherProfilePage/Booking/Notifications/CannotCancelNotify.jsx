import React from 'react';
import sprite from '../../../../assets/sprite.svg';
import * as S from './Notify.styled'
import BackHomeBtn from './BackHomeBtn';

const CannotCancelNotify = () => {
  return (
     <S.NotifyContainer>
      <S.NotifyIcon width="80px" height="80px">
            <use href={ `${sprite}#icon-close-circle` }></use>
      </S.NotifyIcon>
      <S.NotifyTitle>Цю дію виконати не можливо</S.NotifyTitle>
        <S.NotifyDescription>
          Скасувати заняття не можливо, пізніше ніж за 3 години 
          до його початку.
      </S.NotifyDescription>
      <BackHomeBtn/>
    </S.NotifyContainer>
  )
}

export default CannotCancelNotify
