import React from 'react';
import StyledButton from './button.style.js';

const Button = ( { children, type = 'button', bg, ...props } ) => {
  return (
    <StyledButton
      type={ type }
      color={ bg }
      { ...props }>
      {children}
    </StyledButton> );
};

export default Button;
