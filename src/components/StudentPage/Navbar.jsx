import React from 'react';
import profile from '../../assets/student/profile.png';
// import profile2 from '../../assets/student/profile2.png';
import calendar from '../../assets/student/calendar.png';
// import calendar2 from '../../assets/student/calendar2.png';
import logout from '../../assets/student/logout.png';
// eslint-disable-next-line max-len
import {
  Wrapper,
  StyledList,
  StyledNavLink,
  StyledImage,
  StyledTitle,
  StyledDivider,
} from './Navbar.styled';

export const Navbar = () => {
  return (
    <Wrapper>
      <StyledList>
        <StyledNavLink to="/student/info">
          <StyledImage src={ profile } alt="" />
          <StyledTitle>Особиста інформація</StyledTitle>
        </StyledNavLink>
        <StyledNavLink to="/student/reservation">
          <StyledImage src={ calendar } alt="" />
          <StyledTitle> Мої бронювання</StyledTitle>
        </StyledNavLink>
        <StyledNavLink to="/student/out">
          <StyledImage src={ logout } alt="" />
          <StyledTitle>Вийти</StyledTitle>
        </StyledNavLink>
      </StyledList>
      <StyledDivider />
    </Wrapper>
  );
};
