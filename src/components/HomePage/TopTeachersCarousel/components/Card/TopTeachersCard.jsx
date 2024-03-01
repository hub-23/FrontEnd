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
  TypographyLocation,
  TypographyName,
  TypographySubject,
} from './TopTeachersCard.styled.js';
import Rating from '../Rating/Rating.jsx';
import { Button } from '../../../../common/button/Button.jsx';

const TopTeachersCard = ( { teacher } ) => {
  return (
    <>
      <StyledCard>
        <StyledPhoto>
          <Photo src={ teacher.imgPath } alt={ teacher.name } />
          <StyledHoverCard>
            <Button className="btn" variant="primary">
              Переглянути профіль
            </Button>
          </StyledHoverCard>
        </StyledPhoto>
        <StyledContent>
          <StyledRating>
            <Rating />
            <StyledLocation>
              <TypographyLocation>{teacher.location}</TypographyLocation>
            </StyledLocation>
          </StyledRating>
          <StyledInfo>
            <StyledNameBox>
              <TypographyName>{teacher.name}</TypographyName>
            </StyledNameBox>
            <StyledSubject>
              <TypographySubject>{teacher.subject}</TypographySubject>
            </StyledSubject>
          </StyledInfo>
        </StyledContent>
      </StyledCard>
    </>
  );
};

export default TopTeachersCard;
