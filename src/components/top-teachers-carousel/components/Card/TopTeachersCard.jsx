import React from 'react';
import {
  StyledContainer,
  StyledPhoto,
  StyledInfo,
  StyledRatingContainer,
  StyledLocation,
  StyledInfoContainer,
  StyledName,
  StyledSubject,
  Flex,
} from './TopTeachersCard.styled.js';
import { teachers } from '../../topTeachersData.js';
import Rating from '../Rating/Rating.jsx';
import Photo from './Photo.jsx';

const TopTeachersCard = ( { teacher } ) => {
  return (
    <>
      <StyledContainer>
        <Flex>
          {teachers.map( ( teacher ) => (
            <div key={ teacher.id }>
              {/* <Photo> */}
                <img
                  src={ teacher.src }
                  alt={ teacher.alt }
                  className="photo"
                />
              {/* </Photo> */}
              <StyledInfo>
                <StyledRatingContainer>
                  <Rating />
                  <StyledLocation>
                    {teacher.location}
                  </StyledLocation>
                </StyledRatingContainer>

                <StyledInfoContainer>
                  <StyledName>{teacher.name}</StyledName>
                  <StyledSubject>
                    {teacher.subject}
                  </StyledSubject>
                </StyledInfoContainer>
              </StyledInfo>
            </div>
          ) )}
        </Flex>
      </StyledContainer>
    </>
  );
};

export default TopTeachersCard;
