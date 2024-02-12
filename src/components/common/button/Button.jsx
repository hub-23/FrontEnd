import React from 'react';
import StyledButton from './Button.styled.js';

export const Button = ( {
  children,
  type = 'button',
  color,
  size,
  dataStatus,
  onActiveModal,
  // ...props
} ) => {
  return (
    <StyledButton
      type={ type }
      color={ color }
      size={ size }
      onClick={ onActiveModal }
      data-status={ dataStatus }
      // { ...props }
    >
      {children}
    </StyledButton>
  );

  //   export const Button = ( {
  //   children,
  //   type = 'button',
  //   color,
  //   size,
  //   dataStatus,
  //   onActiveModal,
  //   // ...props
  // } ) => {
  //   return (
  //     <StyledButton
  //       type={ type }
  //       color={ color }
  //       size={ size }
  //       onClick={ onActiveModal }
  //       data-status={ dataStatus }
  //       // { ...props }
  //     >
  //       {children}
  //     </StyledButton>
  //   );
};
