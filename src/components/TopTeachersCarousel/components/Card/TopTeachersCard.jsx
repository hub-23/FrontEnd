import React from 'react';
import {
  StyledCard,
  StyledPhoto,
  StyledContent,
  StyledRating,
  StyledLocation,
  StyledInfo,
  StyledNameBox,
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
              <Typography fontWeight='300'>{teacher.location}</Typography>
            </StyledLocation>
          </StyledRating>
          <StyledInfo>
            <StyledNameBox>
              <Typography size='20px'>{teacher.name}</Typography>
            </StyledNameBox>
            <br></br>
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
