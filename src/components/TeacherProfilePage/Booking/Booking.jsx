import React, { useState } from 'react';
import bookingData from './placeholderData';
import { isArray } from 'lodash';
import BookingList from './BookingList/BookingList';
import BookinControls from './BookinControls/BookinControls ';

const Booking = () => {
  const [ bookingList, setBookingList ] = useState( bookingData.active );
  const [ selectedType, setSelectedType ] = useState( 'active' ); 
  
  const chooseLessonList = ( type ) => {
    setSelectedType( type ); 
    return type === 'active' ? setBookingList( bookingData.active ) :  setBookingList( bookingData.inactive );
  };

  return (
    <div>
      <BookinControls chooseLessonList={ chooseLessonList } selectedType={ selectedType } />
      {isArray( bookingList ) && bookingList.length !== 0 ? (
        <ul>
          <BookingList data={ bookingList } />
        </ul>
      ) : (
        <div>
          <h4>У Вас ще немає бронювань</h4>
          <p>Коли з’явиться нове бронювання, тут буде відображено інформацію про нього.</p>
        </div>
      )}
    </div>
  );
};

export default Booking;
