import React from 'react';
import { ReactComponent as ProfileIcon } from '../../../assets/student/profile.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/student/calendar.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/student/logout.svg';
// eslint-disable-next-line max-len
import {
  Wrapper,
  StyledList,
  StyledNavLink,
  StyledTitle,
  StyledDivider,
} from './Navbar.styled';

export const Navbar = () => {
  return (
    <Wrapper>
      <StyledList>
        < StyledNavLink to="/student/info">
           <ProfileIcon />
           <StyledTitle>Особиста інформація</StyledTitle>
        </ StyledNavLink>
        < StyledNavLink to="/student/reservation">
            <CalendarIcon/>
            <StyledTitle> Мої бронювання</StyledTitle>
        </ StyledNavLink>
        <  StyledNavLink to="/student/out">
            <LogoutIcon />
            <StyledTitle>Вийти</StyledTitle>
        </  StyledNavLink>
      </StyledList>
      <StyledDivider />
    </Wrapper>
  );
};
