import React from 'react';
import { ReactComponent as ProfileIcon } from '../../../assets/student/profile.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/student/calendar.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/student/logout.svg';
// eslint-disable-next-line max-len
import {
  StyledList,
  StyledTitle,
  StyledNavLinkDrop,
} from './Navbar.styled';


export const Navigation = () => {
  return (
      <StyledList>
        <StyledNavLinkDrop to="/student/info">
           <ProfileIcon />
           <StyledTitle>Особиста інформація</StyledTitle>
        </StyledNavLinkDrop>
        < StyledNavLinkDrop to="/student/reservation">
            <CalendarIcon/>
            <StyledTitle> Мої бронювання</StyledTitle>
        </ StyledNavLinkDrop>
        < StyledNavLinkDrop to="/student/out">
            <LogoutIcon />
            <StyledTitle>Вийти</StyledTitle>
        </ StyledNavLinkDrop>
      </StyledList>
  );
};
