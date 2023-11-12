import React from 'react';
import { StyledTopTeachersButton } from './StyledTopTeachersButton';

export const TopTeachersButton = ( { children, size, color } ) => {
  return (
    <>
      <StyledTopTeachersButton size={ size } color={ color }>
        { children }
        {/* <StyledButton> Обрати викладача </StyledButton>
            <StyledButtonPause> Стоп / Продовжити </StyledButtonPause> */}
      </StyledTopTeachersButton>
    </>
  );
};
