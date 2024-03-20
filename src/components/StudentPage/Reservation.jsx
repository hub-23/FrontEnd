import React, { useState } from 'react';
import  { backendDataNotActive } from './ReservationCard/dataNotActive';
import  { backendDataActive } from './ReservationCard/dataActive';
import { Card } from './ReservationCard/Card';
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

          <S.CardList>
            { tabStatus === 'notActive' && backendDataNotActive.map( data => (
              <Card key={ data.id } data={ data } status='notActive' /> 
            ) )}
            { tabStatus === 'active' && backendDataActive.map( data => (
              <Card key={ data.id } data={ data } status='active' /> 
            ) )}
          </S.CardList>
        </>
      )}
    </S.Container>
  );
};
