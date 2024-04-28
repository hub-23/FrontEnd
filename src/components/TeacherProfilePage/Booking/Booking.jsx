import React, { useState } from 'react'
import bookingData from './placeholderData';
import { isArray } from 'lodash';
import BookingList from './BookingList/BookingList';

const Booking = () => {
  const [ bookingList  ] = useState( bookingData );
  const [ activeClasses  ] = useState( bookingList.active );
  
  return (
    <div>
      { isArray ( activeClasses ) && activeClasses.length !== 0
        ? <ul>
          <BookingList data={ activeClasses } />
        </ul> : <div>
        <h4>У Вас ще немає бронювань</h4>
        <p>Коли з’явиться нове бронювання, тут буде відображено інформацію про нього.</p>
      </div>
      }
    
     </div>
  )
}

export default Booking
