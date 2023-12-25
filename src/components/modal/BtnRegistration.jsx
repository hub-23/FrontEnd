import React from 'react';
import { Button } from './BtnRegistration.styled';

export const BtnRegistration = ( {
  children,
  xlMarginBottom,
  mdMarginBottom,
  smMarginBottom,
  color,
  bgColor,
  strokeColor,
  bgColorGradient,
  xlHeight,
  mdHeight,
  smHeight,
  onRegister,
} ) => {
  return (
    <Button
      type="submit"
      $xlMarginBottom={ xlMarginBottom }
      $mdMarginBottom={ mdMarginBottom }
      $smMarginBottom={ smMarginBottom }
      $color={ color }
      $bgColor={ bgColor }
      $strokeColor={ strokeColor }
      $bgColorGradient={ bgColorGradient }
      $xlHeight={ xlHeight }
      $mdHeight={ mdHeight }
      $smHeight={ smHeight }
      onClick={ onRegister }
    >
      {children}
    </Button>
  );
};
