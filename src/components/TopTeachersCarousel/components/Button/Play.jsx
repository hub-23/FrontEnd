import React from 'react';
import play from '../../assets/top-teachers/play.png';

const Play = ( { handlePlay } ) => {
  return (
    <button onClick={ handlePlay }>
      <img src={ play } alt='play' />
    </button>
  );
};

export default Play;
