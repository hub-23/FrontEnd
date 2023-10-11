import React from 'react';
import StyledSegment from './Segment.styled.js';

export const Segment = ( { children, ...props } ) => {
  return (
    <StyledSegment { ...props }>
      {children}
    </StyledSegment>
  );
};

