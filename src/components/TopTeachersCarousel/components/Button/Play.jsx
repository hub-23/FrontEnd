import React from 'react';
import play from '../../../../assets/top-teachers/Play.svg';
import { ButtonToggle } from './TopTeachersButton';

const Play = ( { handlePlay } ) => {
  return (
    <ButtonToggle onClick={ handlePlay }>
      <img src={ play } alt='play' />
    </ButtonToggle>
  );
};

export default Play;
