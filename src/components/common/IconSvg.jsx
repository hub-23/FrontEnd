import React from 'react';
import sprite from '../../assets/sprite.svg';

export const IconSvg = ( { width, height, icon } ) => {
  return (
    <svg width={ width } height={ height }>
      <use href={ `${sprite}#${icon}` }></use>
    </svg>
  );
};
