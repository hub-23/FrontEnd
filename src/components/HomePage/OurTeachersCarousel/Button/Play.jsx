import React from 'react';
import play from '../../../../assets/home/our-teachers/Play.svg';
import { ButtonToggle } from './ButtonToggle';

const Play = ( { handlePlay } ) => {
  return (
    <ButtonToggle onClick={ handlePlay }>
      <img src={ play } alt="play" />
    </ButtonToggle>
  );
};

export default Play;
