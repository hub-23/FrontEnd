import React from 'react';
import pause from '../../../../assets/home/top-teachers/Pause.svg';
import { ButtonToggle } from './TopTeachersButton';

const Pause = ( { handlePause } ) => {
  return (
    <ButtonToggle onClick={ handlePause }>
      <img src={ pause } alt='pause' />
    </ButtonToggle>
  );
};

export default Pause;
