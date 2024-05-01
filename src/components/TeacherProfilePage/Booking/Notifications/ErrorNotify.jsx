import React from 'react'
import sprite from '../../../../assets/sprite.svg';
import * as S from './Notify.styled'
import BackHomeBtn from './BackHomeBtn';

const ErrorNotify = () => {
  return (
    <S.NotifyContainer>
      <S.NotifyIcon width="80px" height="80px">
            <use href={ `${sprite}#icon-close-circle` }></use>
      </S.NotifyIcon>
      <S.NotifyTitle>Сталась помилка</S.NotifyTitle>
      <S.NotifyDescription>
        Щось пішло не так, тому спробуйте ще раз або виконайте цю дію пізніше
      </S.NotifyDescription>
      <BackHomeBtn/>
    </S.NotifyContainer>
  )
}

export default ErrorNotify
