import React from 'react'
import sprite from '../../../../assets/sprite.svg';
import * as S from './Notification.styled'
import { useNavigate } from 'react-router-dom';

const Notification = ( { result } ) => {
    const navigate = useNavigate();

    const backHome = () => {
      navigate( '/teacher/profile' );
    }

  return (
   <S.NotifyContainer>
           <S.NotifyIcon width="80px" height="80px">
              {result === 'error' || result === 'decline'
                  ? <use href={ `${sprite}#icon-close-circle` }></use>
                  : <use href={ `${sprite}#icon-tick-circle` }></use>
              }
          </S.NotifyIcon>
          <S.NotifyTitle>
                {result === 'success' ? 'Заняття успішно скасовано'
                  : result === 'decline' ? 'Цю дію виконати не можливо'
                      : 'Сталась помилка'}
          </S.NotifyTitle>
          <S.NotifyDescription>
              {result === 'success'
                  ?'Дякуємо за використання наших послуг.Ми сподіваємося Вас бачити знову найближчим часом!'
                  : result === 'decline'
                      ?'Скасувати заняття не можливо, пізніше ніж за 3 години до його початку.'
                      : 'Щось пішло не так, тому спробуйте ще раз або виконайте цю дію пізніше'}
      
      </S.NotifyDescription>
         <S.BackHomeBtn type='button' variant='blue' onActiveModal={ backHome }>
        На головну сторінку
      </S.BackHomeBtn> 
    </S.NotifyContainer>
  )
}

export default Notification
