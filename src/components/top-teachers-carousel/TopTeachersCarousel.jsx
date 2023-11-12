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

const TopTeachersCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
            <TopTeachersCard />
          </Slider>
        </Flex>
      </StyledSection>
    </>
  );
};

export default TopTeachersCarousel;
