import React from 'react';
import sprite from '../../../assets/sprite.svg';
import * as S from './Feedback.styled';

export const Rating = ( { rating } ) => {
  const stars = [];

  for ( let i = 0; i < 5; i++ ) {
    stars.push(
      <svg
        width="17px"
        height="16px"
        style={ {
          fill: i < rating ? '#FECC01' : 'transparent',
          stroke: '#FECC01',
        } }
      >
        <use href={ `${sprite}#icon-star` }></use>
      </svg>
    );
  }

  return (
    <S.StarList>
      {stars.length > 0
        && stars.map( ( star, index ) => <S.StarItem key={ index }>{star}</S.StarItem> )}
    </S.StarList>
  );
};
