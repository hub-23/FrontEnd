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
} from './TopTeachersCarousel.styled.js';
import { teachers } from './topTeachersData.js';

export const TopTeachersCarousel = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    adaptiveHeight: true,
    className: 'slider',
  };
  return (
    <>
      <StyledSection className="teachers-block">
        <Flex direction="column" align="stretch">
          <StyledContainer>
            <Flex>
              <StyledTitle> Топові викладачі </StyledTitle>
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

