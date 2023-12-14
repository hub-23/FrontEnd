import React from 'react';
import { Button } from './BtnRegistration.styled';

export const BtnRegistration = ( {
  children,
  marginBottom,
  color,
  bgColor,
  strokeColor,
  bgColorGradient,
  width,
  height,
  onRegister,
} ) => {
  return (
    <Button
      type="submit"
      $marginBottom={ marginBottom }
      $color={ color }
      $bgColor={ bgColor }
      $strokeColor={ strokeColor }
      $bgColorGradient={ bgColorGradient }
      $width={ width }
      $height={ height }
      onClick={ onRegister }
    >
      {children}
    </Button>
  );
};
