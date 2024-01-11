import React from 'react';
import { StyledCard, StyledPhoto, Photo } from './OurTeachersCard.styled';

const OurTeachersCard = ( { teacher } ) => {
  return (
    <>
      <StyledCard>
        <StyledPhoto>
          <Photo src={ teacher.imgPath }/>
        </StyledPhoto>
      </StyledCard>
    </>
  );
};

export default OurTeachersCard;
