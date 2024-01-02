import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { feedbackData } from './data';
import { FeedbackCard } from './FeedbackCard';
import { ControlBtn } from './ControlBtn';
import * as S from './Feedback.styled';
import './slider.css';


export const FeedbackCarousel = () => {
  const sliderRef = useRef();

  const handlePlayPrev = () => {
    sliderRef.current.slickPrev();
  };

  const handlePlayNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    className: 'custom-slider', // = <div class='slick-slider'>
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1040, // 1041 - вже 3
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: true,
          touchMove: true,
        },
      },
      {
        breakpoint: 710, // 711 - вже 2
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          touchMove: true,
        },
      },
    ],
  };

  return (
    <S.Section>
      <S.Container>
        <S.Content>
          <S.Title>Ваші відгуки</S.Title>
          <Slider ref={ sliderRef } { ...settings }>
            {feedbackData.map( ( feedback ) => (
              <FeedbackCard key={ feedback.id } feedback={ feedback } />
            ) )}
          </Slider>
          <S.ControlBtns>
            <ControlBtn
              handlePlay={ handlePlayPrev }
              pathD="M13.2754 17.2812L8.71011 12.5281C8.42996 12.2364 8.42996 11.7636 8.71011
              11.4719L13.2754 6.71876C13.5555 6.42708 14.0097 6.42708 14.2899 6.71876C14.57
              7.01043 14.57 7.48333 14.2899 7.77501L10.2319 12L14.2899 16.225C14.57 16.5167
              14.57 16.9896 14.2899 17.2812C14.0097 17.5729 13.5555 17.5729 13.2754 17.2812Z"
            />
            <ControlBtn
              handlePlay={ handlePlayNext }
              pathD="M10.7246 6.71876L15.2899 11.4719C15.57 11.7636 15.57 12.2364 15.2899
              12.5281L10.7246 17.2812C10.4445 17.5729 9.99026 17.5729 9.71011
              17.2812C9.42996 16.9896 9.42996 16.5167 9.71011 16.225L13.7681 12L9.71011
              7.77501C9.42996 7.48333 9.42996 7.01043 9.71011 6.71876C9.99026 6.42708
              10.4445 6.42708 10.7246 6.71876Z"
            />
          </S.ControlBtns>
        </S.Content>
      </S.Container>
    </S.Section>
  );
};
