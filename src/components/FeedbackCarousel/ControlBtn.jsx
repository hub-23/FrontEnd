import React from 'react';
import { StyledControlBtn, StyledBtnIcon } from './Feedback.styled';

export const ControlBtn = ( { handlePlay, pathD } ) => {
  return (
    <li>
      <StyledControlBtn onClick={ handlePlay }>
        <StyledBtnIcon width="24" height="24">
          <circle cx="12" cy="12" r="11.25" strokeWidth="1.5" />
          <path d={ pathD } />
        </StyledBtnIcon>
      </StyledControlBtn>
    </li>
  );
};
