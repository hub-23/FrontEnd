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
  StyledHoverCard,
  Photo,
  Typography,
} from './TopTeachersCard.styled.js';
import Rating from '../Rating/Rating.jsx';
import { Button } from '../Button/Button.jsx';


const TopTeachersCard = ( { teacher } ) => {
  return (
    <>
      <StyledCard>
        <StyledPhoto>
          <Photo src={ teacher.imgPath } alt={ teacher.name } />
          <div>
            <StyledHoverCard>
              <Button />
            </StyledHoverCard>
          </div>
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
