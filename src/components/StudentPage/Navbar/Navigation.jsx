import React from 'react';

import { ReactComponent as ProfileIcon } from '../../../assets/student/profile.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/student/calendar.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/student/logout.svg';
import { useSignout } from 'hooks/useSignout';

import {
  StyledList,
  StyledTitle,
  StyledButton,
  StyledNavLinkDrop,
} from './Navbar.styled';

export const Navigation = () => {
  const signout = useSignout();

  return (
    <StyledList>
      <StyledNavLinkDrop to="/student/info">
        <ProfileIcon />
        <StyledTitle>Особиста інформація</StyledTitle>
      </StyledNavLinkDrop>
      <StyledNavLinkDrop to="/student/reservation">
        <CalendarIcon />
        <StyledTitle> Мої бронювання</StyledTitle>
      </StyledNavLinkDrop>
      <StyledNavLinkDrop to="/">
        <LogoutIcon />
        <StyledButton type="button" onClick={ signout }>
          Вийти (випадаючий)
        </StyledButton>
      </StyledNavLinkDrop>
    </StyledList>
  );
};
