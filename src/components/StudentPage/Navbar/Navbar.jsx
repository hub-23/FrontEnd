import React from 'react';

import { ReactComponent as ProfileIcon } from '../../../assets/student/profile.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/student/calendar.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/student/logout.svg';
import { useSignout } from 'hooks/useSignout';

import {
  Wrapper,
  StyledList,
  StyledNavLink,
  StyledTitle,
  StyledButton,
  StyledDivider,
} from './Navbar.styled';

export const Navbar = () => {
  const signout = useSignout();

  return (
    <Wrapper>
      <StyledList>
        <StyledNavLink to="/student/info">
          <ProfileIcon />
          <StyledTitle>Особиста інформація</StyledTitle>
        </StyledNavLink>

        <StyledNavLink to="/student/reservation">
          <CalendarIcon />
          <StyledTitle> Мої бронювання</StyledTitle>
        </StyledNavLink>

        <StyledNavLink to="/">
          <LogoutIcon />
          <StyledButton type="button" onClick={ signout }>
            Вийти
          </StyledButton>
        </StyledNavLink>
      </StyledList>
      <StyledDivider />
    </Wrapper>
  );
};
