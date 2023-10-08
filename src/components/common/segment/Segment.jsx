import React from 'react';
import StyledSegment from './segment.style.js';

const Segment = ( { children, ...props } ) => {
  return (
    <StyledSegment { ...props }>
      {children}
    </StyledSegment>
  );
};


export default Segment;
