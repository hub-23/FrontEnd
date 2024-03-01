import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OurTeachersCard from './OurTeachersCard.jsx';
import {
  StyledSection,
  StyledWrapper,
  StyledContent,
  StyledTitle,
  StyledTitleTypography,
  ContainerButtons,
} from './OurTeachersCarousel.styled.js';
import { teachers } from './ourTeachersData.js';
import Play from './Button/Play.jsx';
import Pause from './Button/Pause.jsx';

export const OurTeachersCarousel = () => {
  const [ autoPlay, setAutoPlay ] = useState( true );

  const sliderRef = useRef();
  const handlePlay = () => {
    sliderRef.current.slickPlay();
    setAutoPlay( !autoPlay );
  };
  const handlePause = () => {
    sliderRef.current.slickPause();
    setAutoPlay( !autoPlay );
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 14,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    rows: 3,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 12,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <StyledContent>
            <StyledTitle>
              <StyledTitleTypography>Наші викладачі</StyledTitleTypography>
            </StyledTitle>
            <ContainerButtons>
              {autoPlay ? (
                <Pause handlePause={ handlePause } />
              ) : (
                <Play handlePlay={ handlePlay } />
              )}
            </ContainerButtons>
          </StyledContent>
          <Slider ref={ sliderRef } { ...settings }>
            {teachers.map( teacher => (
              <OurTeachersCard key={ teacher.id } teacher={ teacher } />
            ) )}
          </Slider>
        </StyledWrapper>
      </StyledSection>
    </>
  );
};
