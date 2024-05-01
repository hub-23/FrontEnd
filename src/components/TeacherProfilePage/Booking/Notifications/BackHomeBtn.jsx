import React from 'react'
import * as S from './Notify.styled'
import { useNavigate } from 'react-router-dom';

const BackHomeBtn = () => {
     const navigate = useNavigate();

    const backHome = () => {
      navigate( '/teacher/profile' );
    }
  
  return (
    <S.BackHomeBtn type='button' variant='blue' onActiveModal={ backHome }>
        На головну сторінку
      </S.BackHomeBtn>   
  )
}

export default BackHomeBtn
