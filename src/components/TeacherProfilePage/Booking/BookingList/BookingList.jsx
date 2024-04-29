import React from 'react'
import * as S from './BookingList.styled';
import BookingCard from '../BookingCard/BookingCard';

const BookingList = ( { data, selectedType } ) => {
  return (
    <S.List>
      {data.map( ( item ) => {
        return <BookingCard classData={ item } key={ item.id } selectedType={ selectedType } />
          } ) }
    </S.List>
  )
}

export default BookingList
