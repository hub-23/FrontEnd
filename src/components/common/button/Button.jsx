import React from 'react';
import StyledButton from './Button.styled.js';

export const Button = ( { children, type = 'button', color, size, ...props } ) => {
  return (
    <StyledButton
      type={ type }
      color={ color }
      size={ size }
      { ...props }>
      {children}
    </StyledButton> );
};

