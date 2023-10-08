import styled from 'styled-components';
import image from '../../hero-bg.png';

export const StyledSection = styled.section`
  background-color: blue; /* Прозрачный белый цвет */
  background-image: url(${image}); /* Путь к изображению */
  width: 100%;
  height: 900px;
  background-size: cover;
`;

export const StyledContainer = styled.div`
  padding: 180px 160px 145px 160px;
`;

export const StyledGardient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.13) 100%);
`;

export const StyledTitle = styled.h1`
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 52px; /* 52px */
  text-transform: uppercase;
`;
