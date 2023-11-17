import React from 'react';
import { StyledRadioButton } from './RadioButton.styled.js';

// eslint-disable-next-line react/display-name
export const RadioButton = React.forwardRef( ( {
  value,
  label,
  onChange,
  name,
  ...props
}, forwardedRef ) => {
  return (
    <StyledRadioButton>
      <label htmlFor={ label }>
        <input
          name={ name }
          type="radio"
          value={ value }
          aria-label={ label }
          onChange={ () => onChange( value ) }
          id={ label }
          { ...props }
        />
        {label}
      </label>
    </StyledRadioButton>
  );
} );


