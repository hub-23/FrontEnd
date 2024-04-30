import React, { useEffect, useState } from 'react';
import bookingData from './placeholderData';
import { isArray } from 'lodash';
import BookingList from './BookingList/BookingList';
import BookinControls from './BookinControls/BookinControls ';
import sprite from '../../../assets/sprite.svg';
import * as S from './Booking.styled'

const Booking = () => {
  const [ bookingList, setBookingList ] = useState( bookingData.active );
  const [ viewMore, setViewMore ] = useState( false );
  const [ selectedType, setSelectedType ] = useState( 'active' ); 

  
  const handleViewMore = () => {
    setViewMore( !viewMore )
  }
  
  const chooseLessonList = ( type ) => {
    setSelectedType( type ); 
    return type === 'active' ? setBookingList( bookingData.active ) :  setBookingList( bookingData.inactive );
  };

  return (
    <div>
      {isArray( bookingList ) && bookingList.length !== 0 ? (
      <>
        <BookinControls chooseLessonList={ chooseLessonList } selectedType={ selectedType } />
          <ul>
            <BookingList data={ bookingList } selectedType={ selectedType } />
          </ul>
      </>
      ) : (
        <S.EmptyBookingMessageBox>
          <S.EmptyBookingMessageTitle>У Вас ще немає бронювань</S.EmptyBookingMessageTitle>
            <p> Коли з’явиться нове бронювання, тут буде відображено інформацію про нього.</p>
        </S.EmptyBookingMessageBox>
      )}
      <>
        <p>Дивитися більше</p>
        <button type="button" onClick={ handleViewMore }>
          <svg width="24px" height="24px">
              <use href={ `${sprite}#icon-arow_down` }></use>
            </svg>
        </button>
      </>
    </div>
  );
};

export default Booking;
