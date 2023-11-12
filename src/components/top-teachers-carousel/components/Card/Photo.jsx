import React from 'react';
import { StyledPhoto } from './TopTeachersCard.styled';

const Photo = ( { children } ) => {
  return (
    <StyledPhoto>
      { children }
    </StyledPhoto>
  );
};

export default Photo;
