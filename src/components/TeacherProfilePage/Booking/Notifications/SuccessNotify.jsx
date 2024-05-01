import React from 'react';
import sprite from '../../../../assets/sprite.svg';
import * as S from './Notify.styled'
import BackHomeBtn from './BackHomeBtn';

const SuccessNotify = () => {
  return (
   <S.NotifyContainer>
      <S.NotifyIcon width="80px" height="80px">
            <use href={ `${sprite}#icon-tick-circle` }></use>
      </S.NotifyIcon>
      <S.NotifyTitle>Заняття успішно скасовано</S.NotifyTitle>
      <S.NotifyDescription>
        Дякуємо за використання наших послуг.
        Ми сподіваємося Вас бачити знову найближчим часом!
      </S.NotifyDescription>
      <BackHomeBtn/>
    </S.NotifyContainer>
  )
}

export default SuccessNotify
