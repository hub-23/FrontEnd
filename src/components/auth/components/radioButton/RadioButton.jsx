import React from 'react';
import { StyledRadioButton } from './RadioButton.styled.js';

// eslint-disable-next-line react/display-name
export const RadioButton = React.forwardRef( ( {
  value,
  label,
  name,
  selected,
  ...props
}, forwardedRef ) => {
  return (
    <StyledRadioButton>
      <label htmlFor={ label }>
        <input
          name={ name }
          type="radio"
          aria-label={ label }
          id={ label }
          { ...props }
        />
        {label}
      </label>
    </StyledRadioButton>
  );
} );


