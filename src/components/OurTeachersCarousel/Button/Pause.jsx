import React from 'react';
import pause from '../../../assets/home/our-teachers/Pause.svg';
import { ButtonToggle } from './ButtonToggle';

const Pause = ( { handlePause } ) => {
  return (
    <ButtonToggle onClick={ handlePause }>
      <img src={ pause } alt='pause' />
    </ButtonToggle>
  );
};

export default Pause;
