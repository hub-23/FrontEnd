import React from 'react';
import { Container, StyledTitle, StyledText } from './Reservation.styled';

export const Reservation = () => {
  return (
    <Container>
      <StyledTitle>У Вас ще немає бронювань</StyledTitle>
      <StyledText>
        Коли з’явиться нове бронювання, тут буде відображено інформацію про
        нього.
      </StyledText>
    </Container>
  );
};
