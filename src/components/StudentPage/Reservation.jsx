import React, { useState } from 'react';
import  { backendData } from './ReservationTypes/data';
import { NotActiveReservations } from './ReservationTypes/NotActiveReservations';
import { ActiveReservations } from './ReservationTypes/ActiveReservations';
import { Card } from './ReservationTypes/Card';
import * as S from './Reservation.styled';

export const Reservation = () => {
  const [ tabStatus, setTabStatus ] = useState( 'notActive' );
  const reservation = true;
  // const reservation = false;

  return (
    <S.Container>
      {!reservation ? (
        <>
          <S.Title>У Вас ще немає бронювань</S.Title>
          <S.Text>
            Коли з’явиться нове бронювання, тут буде відображено інформацію про
            нього.
          </S.Text>
        </>
      ) : (
        <>
          <S.NavList>
            <li>
              <button
                type='button'
                className={ tabStatus === 'active' ? 'nav_list--btn current' : 'nav_list--btn' }
                onClick={ () => setTabStatus( 'active' ) }
              >
                Активні
              </button>
            </li>
            <li>
              <button
                type='button'
                className={ tabStatus === 'notActive' ? 'nav_list--btn current' : 'nav_list--btn' }
                onClick={ () => setTabStatus( 'notActive' ) }
              >
                Неактивні
              </button>
            </li>
          </S.NavList>

          { tabStatus === 'notActive' && <NotActiveReservations /> }
          { tabStatus === 'active' && <ActiveReservations /> }

          <S.CardList>
            { backendData.map( data => (
              <Card key={ data.id } data={ data } /> 
            ) )}
          </S.CardList>
        </>
      )}
    </S.Container>
  );
};
