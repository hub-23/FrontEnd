import React from 'react';
import pause from '../../../../assets/top-teachers/Pause.svg';

const Pause = ( { handlePause } ) => {
  return (
    <button onClick={ handlePause }>
      <img src={ pause } alt='pause' />
    </button>
  );
};

export default Pause;
