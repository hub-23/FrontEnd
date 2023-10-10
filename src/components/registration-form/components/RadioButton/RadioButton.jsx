import React from 'react';
import { StyledRadioButton } from './RadioButton.style.js';

// eslint-disable-next-line react/display-name
const RadioButton = React.forwardRef( ( {
  value,
  label,
  onChange,
  name,
  selected,
  ...props
}, forwardedRef ) => {
  return (
    <StyledRadioButton>
      <label htmlFor={ name }>
        <input
          name={ name }
          type="radio"
          value={ value }
          aria-label={ label }
          onChange={ () => onChange( value ) }
          selected={ selected }
          { ...props }
        />
        {label}
      </label>
    </StyledRadioButton>
  );
} );

export default RadioButton;

