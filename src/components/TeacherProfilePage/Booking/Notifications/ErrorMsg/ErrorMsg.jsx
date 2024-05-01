import React from 'react'
import sprite from '../../../../../assets/sprite.svg';
import { useNavigate } from 'react-router-dom';
import * as S from './ErrorMsg.styled'

const ErrorMsg = () => {
    const navigate = useNavigate();

    const backHome = () => {
      navigate( '/teacher/profile' );
    }
  
  return (
    <S.ErrorBox>
      <S.ErrorIcon width="80px" height="80px">
            <use href={ `${sprite}#icon-close-circle` }></use>
      </S.ErrorIcon>
      <S.ErrorTitle>Сталась помилка</S.ErrorTitle>
      <S.ErrorDescr>Щось пішло не так, тому спробуйте ще раз або виконайте цю дію пізніше</S.ErrorDescr>
      <S.BackHomeBtn type='button' variant='blue' onActiveModal={ backHome }>
        На головну сторінку
      </S.BackHomeBtn>    
    </S.ErrorBox>
  )
}

export default ErrorMsg
