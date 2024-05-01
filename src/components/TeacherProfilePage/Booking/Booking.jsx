import React, { useEffect, useState } from 'react';
import bookingData from './placeholderData';
import { isArray } from 'lodash';
import BookingList from './BookingList/BookingList';
import BookingControls from './BookingControls/BookingControls';
import sprite from '../../../assets/sprite.svg';
import * as S from './Booking.styled';

const Booking = () => {
  const [ bookingList, setBookingList ] = useState( [] );
  const [ viewMore, setViewMore ] = useState( true );
  const [ selectedType, setSelectedType ] = useState( 'active' );
  const [ increaseCount, setIncreaseCount ] = useState( 3 );

  const isIncreserMore = increaseCount >= bookingData[ selectedType ].length;
  const updateViewMore = () => setViewMore( isIncreserMore ? false : true ); 
  
  useEffect( () => {
   updateViewMore()
    const updatedBookingList = [ ...bookingData[ selectedType ] ].splice( 0, increaseCount );
    setBookingList( updatedBookingList );
  }, [ viewMore, selectedType, increaseCount ] );

  const handleViewMore = () => {
    updateViewMore()
    setIncreaseCount( !viewMore ? 3 : increaseCount + 3 );
  };

  const chooseLessonList = ( type ) => {
    setSelectedType( type );
    setIncreaseCount( 3 ); 
    setViewMore( false );
  };

  return (
    <div>
      {isArray( bookingList ) && bookingList.length !== 0 ? (
        <>
          <BookingControls chooseLessonList={ chooseLessonList } selectedType={ selectedType } />
          <ul>
            <BookingList data={ bookingList } selectedType={ selectedType } />
          </ul>
        </>
      ) : (
        <S.EmptyBookingMessageBox>
          <S.EmptyBookingMessageTitle>У Вас ще немає бронювань</S.EmptyBookingMessageTitle>
          <p>Коли з’явиться нове бронювання, тут буде відображено інформацію про нього.</p>
        </S.EmptyBookingMessageBox>
      )}
      <S.ViewMoreBox>
        {viewMore ? <S.ViewMoreMessage>Дивитися більше</S.ViewMoreMessage>
          : <S.ViewMoreMessage>Дивитися менше</S.ViewMoreMessage>}
        <S.ViewMoreButton type="button" onClick={ handleViewMore } viewMore={ viewMore }>
          <svg width="24px" height="24px">
            <use href={ `${sprite}#icon-arow_down` }></use>
          </svg>
        </S.ViewMoreButton>
      </S.ViewMoreBox>
    </div>
  );
};

export default Booking;
