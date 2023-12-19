import React from 'react';
import sprite from '../../assets/sprite.svg';

export const IconSvg = ( { width, height, icon, ...props } ) => {
  return (
    <svg width={ width } height={ height } { ...props }>
      <use href={ `${sprite}#${icon}` }></use>
    </svg>
  );
};
