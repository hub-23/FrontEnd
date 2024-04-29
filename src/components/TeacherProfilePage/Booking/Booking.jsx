import React, { useState } from 'react';
import bookingData from './placeholderData';
import { isArray } from 'lodash';
import BookingList from './BookingList/BookingList';
import BookinControls from './BookinControls/BookinControls ';
import * as S from './Booking.styled'

const Booking = () => {
  const [ bookingList, setBookingList ] = useState( [] );
  const [ selectedType, setSelectedType ] = useState( 'active' ); 
  
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
            <BookingList data={ bookingList } />
          </ul>
      </>
      ) : (
        <S.EmptyBookingMessageBox>
          <S.EmptyBookingMessageTitle>У Вас ще немає бронювань</S.EmptyBookingMessageTitle>
            <p> Коли з’явиться нове бронювання, тут буде відображено інформацію про нього.</p>
        </S.EmptyBookingMessageBox>
      )}
    </div>
  );
};

export default Booking;
