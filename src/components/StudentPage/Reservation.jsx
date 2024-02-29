import React from 'react';
import * as S from './Reservation.styled';

export const Reservation = () => {

	return (
        <S.Container>
            <S.Title>У Вас ще немає бронювань</S.Title> 
            <S.Text>Коли з’явиться нове бронювання, тут буде відображено інформацію про нього.</S.Text> 
        </S.Container>
	)
}
