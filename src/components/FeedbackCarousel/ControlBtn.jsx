import React from 'react';
import * as S from './Feedback.styled';

export const ControlBtn = ( { handlePlay, pathD } ) => {
  return (
    <li>
      <S.ControlBtn type='button' onClick={ handlePlay }>
        <S.BtnIcon width="24" height="24">
          <circle cx="12" cy="12" r="11.25" strokeWidth="1.5" />
          <path d={ pathD } />
        </S.BtnIcon>
      </S.ControlBtn>
    </li>
  );
};
