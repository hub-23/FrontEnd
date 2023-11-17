import React from 'react';
import { StyledRating } from './Rating.styled';
import Star from './Star';

const Rating = () => {
  return (
    <>
      <StyledRating>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </StyledRating>
    </>
  );
};

export default Rating;
