import React from 'react';
import { StyledPhoto, Photo } from './OurTeachersCard.styled';

const OurTeachersCard = ( { teacher } ) => {
  return (
    <>
      <StyledPhoto>
        <Photo src={ teacher.imgPath }/>
      </StyledPhoto>
    </>
  );
};

export default OurTeachersCard;
