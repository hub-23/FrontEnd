import React from 'react';
import play from '../../../../assets/top-teachers/Play.svg';

const Play = ( { handlePlay } ) => {
  return (
    <button onClick={ handlePlay }>
      <img src={ play } alt='play' />
    </button>
  );
};

export default Play;
