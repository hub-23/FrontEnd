import React from 'react';
import {
  StyledCard,
  StyledPhoto,
  StyledContent,
  StyledRating,
  StyledLocation,
  StyledInfo,
  StyledName,
  StyledSubject,
  Photo,
  Typography,
} from './TopTeachersCard.styled.js';
import Rating from '../Rating/Rating.jsx';


const TopTeachersCard = ( { teacher } ) => {
  return (
    <>
      <StyledCard>
        <StyledPhoto>
          <Photo src={ teacher.src } alt="photo" />
        </StyledPhoto>
        <StyledContent>
          <StyledRating>
            <Rating />
            <StyledLocation>
              <Typography weight='300'>{teacher.location}</Typography>
            </StyledLocation>
          </StyledRating>
          <StyledInfo>
            <StyledName>
              <Typography size='20px' line='28px'>{teacher.name}</Typography>
            </StyledName>
            <StyledSubject>
              <Typography>{teacher.subject}</Typography>
            </StyledSubject>
          </StyledInfo>
        </StyledContent>
      </StyledCard>
    </>
  );
};

export default TopTeachersCard;
