import React from 'react';


import * as S from './Checkbox.styled.js';
// eslint-disable-next-line react/display-name
export const UncontrolledCheckbox = ( { name, children, size='', ...props } ) => {
  return (
    <>
      <S.Flex size={ size }>
        <S.StyledLabel>
          <input
            name={ name }
            type="checkbox"
            { ...props }
          />
          {children}
        </S.StyledLabel>
      </S.Flex>

    </>
  );
};
