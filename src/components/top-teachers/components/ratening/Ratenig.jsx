// import React, { useState } from 'react';

// import { FaStar } from 'react-icons';
// const createArray = (length) => [...Array(length)];

// const Star = ({ selected = false, onSelect }) => {
//     return <FaStar color={selected ? 'yellow' : 'grey'} onSelect={onSelect} />;
// };

// const StarRating = ({ totalStars }) => {
//     const [selectedStars, setSelectedStars] = useState(0);
//     return;
//     <>
//         {createArray(totalStars).map((n, i) => (
//             <Star
//                 key={i}
//                 selected={selectedStars > i}
//                 onSelect={() => setSelectedStars(i + 1)}
//             />
//         ))}
//     </>;
// };

// const Rating = () => {
//     return <StarRating totalStars={5} />;
// };

// export default Rating;
