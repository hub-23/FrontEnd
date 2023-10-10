import React from 'react';
import { StyledRadioButton } from './RadioButton.style.js';

const RadioButton = ( { value, label, onChange, name, ...props } ) => {
  return (
    <StyledRadioButton>
      <label htmlFor={ name }>
        <input
          name={ name }
          type="radio"
          value={ value }
          aria-label={ label }
          onChange={ () => onChange( value ) }
          { ...props } />
        {label}
      </label>
    </StyledRadioButton>
  );
};
export default RadioButton;
