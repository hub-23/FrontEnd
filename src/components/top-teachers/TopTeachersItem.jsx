// import React, { useEffect, useState } from 'react';
// import { FaStar } from 'react-icons/fa6';
import React from 'react';
// const createArray = ( length ) => [
//   ...Array( length ),
// ];

// function Star( { selected = false, onSelect } ) {
// 	return <FaStar color={ selected ? 'yellow' : 'grey' } onSelect={ onSelect } />;
// }

// function StarRating( { totalStars } ) {
// const [ selectedStars, setSelectedStars ] = useState(0);
// 	return 
// 		<>
// 			{createArray(totalStars).map((n, i) => (<Star key={i} 
// 			selected={selectedStars > i}  onSelect ={() => setSelectedStars(i + 1)}/>))	}
// 			<p>{selectedStars} of {totalStars}</p>
// 		</>
// }

// function Rating() {
// 	return <StarRating totalStars={ 5 }/>;
// }

// useEffect( () => {
//   fetch( `http://api.github.com.users`
//       .then( ( response ) => response.json() )
//       .then( setData ) );
// } );

const TopTeachersItem = ( { imgUrl, imgTitle } ) => {
  return (
    <>
      <div className='carousel-item'>
        <div className='carousel-image'>
          <img src={ imgUrl } alt={ imgTitle }/>
        </div>
        <div className='text'></div>
        <div className='info1'>
          {/* <Rating/> */}
          <div className='city'>Місто</div>
        </div>
        <div className='info2'>
          <div className='full-name'>ПІБ</div>
          <div className='subject'>Предмет</div>
        </div>
      </div>
    </>
  );
};

export default TopTeachersItem;
