import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopTeachersCard from './components/Card/TopTeachersCard.jsx';
import { TopTeachersButton } from './components/Button/TopTeachersButton.jsx';
import {
  StyledSection,
  StyledContainer,
  StyledTitle,
  StyledBtnContainer,
  Flex,
  StyledTitleTypography,
} from './TopTeachersCarousel.styled.js';
import { teachers } from './topTeachersData.js';

export const TopTeachersCarousel = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    // className: 'slider',
  };

  return (
    <>
      <StyledSection>
        <Flex direction='column' align='stretch'>
          <StyledContainer>
            <Flex>
              <StyledTitle>
                <StyledTitleTypography>Топові викладачі</StyledTitleTypography>
              </StyledTitle>
              <StyledBtnContainer>
                <TopTeachersButton />
                <button>Pause</button>
              </StyledBtnContainer>
            </Flex>
          </StyledContainer>
          <Slider { ...settings }>
            {teachers.map( ( teacher ) => (
              <TopTeachersCard key={ teacher.id } teacher= { teacher }/>
            ) )}
          </Slider>
        </Flex>
      </StyledSection>
    </>
  );
};
