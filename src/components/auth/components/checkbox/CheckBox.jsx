import React from 'react';
import { useController } from 'react-hook-form';

import * as S from './Checkbox.styled.js';
// eslint-disable-next-line react/display-name
export const Checkbox = ( { name, control, errors, children, size='' } ) => {
  const { field } = useController( { name, control } );
  const error = errors[ name ]?.message;

  return (
    <>
      <S.Flex size={ size }>
        <S.StyledLabel status={ error ? 'invalid' : 'valid' }>
          <input
            { ...field }
            name={ name }
            type="checkbox"
          />
          {children}
        </S.StyledLabel>
      </S.Flex>

    </>
  );
};
