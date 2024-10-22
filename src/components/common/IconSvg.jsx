import React from 'react';
import sprite from '../../assets/sprite.svg';
import { Svg } from './IconSvg.styled';

export const IconSvg = ( {
  xlWidth,
  xlHeight,
  mdWidth,
  mdHeight,
  smWidth,
  smHeight,
  icon,
  ...props
} ) => {
  return (
    <Svg
      $xlWidth={ xlWidth }
      $xlHeight={ xlHeight }
      $mdWidth={ mdWidth }
      $mdHeight={ mdHeight }
      $smWidth={ smWidth }
      $smHeight={ smHeight }
      { ...props }
    >
      <use href={ `${sprite}#${icon}` }></use>
    </Svg>
  );
};
