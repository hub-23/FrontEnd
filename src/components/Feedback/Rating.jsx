import React from 'react';
import sprite from '../../assets/sprite.svg';
import { StyledStarList } from './Feedback.styled';

export const Rating = ( { rating } ) => {
  const stars = [];

  for ( let i = 0; i < 5; i++ ) {
    stars.push(
        <svg
          width="17px"
          height="16px"
          style={ {
            fill: ( i < rating ) ? '#FECC01' : 'transparent',
            stroke: ( i < rating ) ? 'transparent' : '#FECC01',
          } }
        >
          <use href={ `${sprite}#icon-star` }></use>
        </svg>,
    );
  }

  return (
    <StyledStarList>
      { stars.length > 0
          && stars.map( ( star, index ) => (
            <li key={ index }>{star}</li>
          ) )
      }
    </StyledStarList>
  );
};
