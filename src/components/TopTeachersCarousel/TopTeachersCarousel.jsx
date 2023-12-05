import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopTeachersCard from './components/Card/TopTeachersCard.jsx';
import {
  StyledSection,
  StyledWrapper,
  StyledContent,
  StyledTitle,
  StyledTitleTypography,
  ContainerButtons,
  StyledBtnContainer1,
  StyledBtnContainer2,
  ButtonTypography,
} from './TopTeachersCarousel.styled.js';
import { teachers } from './topTeachersData.js';
import Play from './components/Button/Play.jsx';
import Pause from './components/Button/Pause.jsx';
import { Button } from '../../components/common/button/Button.jsx';


export const TopTeachersCarousel = () => {
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
    infinite: true,
    speed: 1000,
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <StyledSection>
        <StyledWrapper >
          <StyledContent>
            <StyledTitle>
              <StyledTitleTypography>Топові викладачі</StyledTitleTypography>
            </StyledTitle>
            <ContainerButtons>
              <StyledBtnContainer1>
                <Button variant='secondary' background='white'>
                  <ButtonTypography>Обрати викладача</ButtonTypography>
                </Button>
              </StyledBtnContainer1>
              {autoPlay ? <Pause handlePause={ handlePause } /> : <Play handlePlay={ handlePlay } /> }
            </ContainerButtons>
          </StyledContent>
          <Slider ref={ sliderRef } { ...settings }>
            {teachers.map( ( teacher ) => (
              <TopTeachersCard key={ teacher.id } teacher={ teacher } />
            ) )}
          </Slider>
        </StyledWrapper>
        <StyledBtnContainer2>
          <Button variant='secondary' background='white'>
            <ButtonTypography>Обрати викладача</ButtonTypography>
          </Button>
        </StyledBtnContainer2>
      </StyledSection>
    </>
  );
};
