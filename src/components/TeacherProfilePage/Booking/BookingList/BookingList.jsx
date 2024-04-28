import React from 'react'
import * as S from './BookingList.styled';
import BookingCard from '../BookingCard/BookingCard';

const BookingList = ( { data } ) => {
  return (
    <S.List>
      {data.map( ( item ) => {
            return <BookingCard classData={ item }  key={ item.id }/>
          } ) }
    </S.List>
  )
}

export default BookingList
