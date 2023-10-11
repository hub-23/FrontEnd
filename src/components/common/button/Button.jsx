import React from 'react';
import StyledButton from './button.style.js';

const Button = ( { children, type = 'button', color, size, ...props } ) => {
  return (
    <StyledButton
      type={ type }
      color={ color }
      size={ size }
      { ...props }>
      {children}
    </StyledButton> );
};

export default Button;
