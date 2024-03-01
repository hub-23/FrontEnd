import React from 'react';
import { StyledStar, StarImage } from './Rating.styled';
import star from '../../../../../assets/home/top-teachers/star.png';

const Star = () => {
  return (
    <>
      <StyledStar>
        <StarImage src={ star } alt="star" />
      </StyledStar>
    </>
  );
};

export default Star;
