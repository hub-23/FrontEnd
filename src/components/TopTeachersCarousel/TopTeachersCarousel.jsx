import React, { useState, useRef } from 'react';
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
import Play from './Play.jsx';
import Pause from './components/Button/Pause.jsx';

export const TopTeachersCarousel = () => {
  const [ autoPlay, setAutoPlay ] = useState( true );
  const sliderRef = useRef();
  const handlePlay = () => {
    sliderRef.current.slickPlay();
    setAutoPlay( autoPlay );
  };
  const handlePause = () => {
    sliderRef.current.slickPause();
    setAutoPlay( !autoPlay );
  };

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    adaptiveHeight: true,
    pauseOnHover: false,
    cssEase: 'linear',
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
                <Play handlePlay={ handlePlay } />
                <Pause handlePause={ handlePause }/>
              </StyledBtnContainer>
            </Flex>
          </StyledContainer>
          <Slider ref={ sliderRef } { ...settings }>
            {teachers.map( ( teacher ) => (
              <TopTeachersCard key={ teacher.id } teacher= { teacher }/>
            ) )}
          </Slider>
        </Flex>
      </StyledSection>
    </>
  );
};
