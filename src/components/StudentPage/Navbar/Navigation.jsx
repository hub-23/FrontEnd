import React from 'react';
import { useDispatch } from 'react-redux';
import {
  initialState,
  setReset,
  setRefreshToken,
  setToken,
} from '../../../redux/auth/slice';
import { clearAuthHeader } from '../../../redux/auth/operations';

import { ReactComponent as ProfileIcon } from '../../../assets/student/profile.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/student/calendar.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/student/logout.svg';

import {
  StyledList,
  StyledTitle,
  StyledButton,
  StyledNavLinkDrop,
} from './Navbar.styled';


export const Navigation = () => {
  const dispatch = useDispatch();

  const signout = () => {
    dispatch( setToken( null ) );
    dispatch( setRefreshToken( null ) );
    dispatch( setReset( initialState ) );
    clearAuthHeader();
  };

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
        < StyledNavLinkDrop to="/">
            <LogoutIcon />
            <StyledButton type="button" onClick={ signout }>Вийти</StyledButton>
        </ StyledNavLinkDrop>
      </StyledList>
  );
};
