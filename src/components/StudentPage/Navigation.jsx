import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ProfileIcon } from '../../assets/student/profile.svg';
import { ReactComponent as CalendarIcon } from '../../assets/student/calendar.svg';
import { ReactComponent as LogoutIcon } from '../../assets/student/logout.svg';
// eslint-disable-next-line max-len
import {
  StyledList,
  StyledTitle,
} from './Navigation.styled';


export const Navigation = () => {
  return (
      <StyledList>
        <NavLink to="/student/info">
           <ProfileIcon />
           <StyledTitle>Особиста інформація</StyledTitle>
        </NavLink>
        <NavLink to="/student/reservation">
            <CalendarIcon/>
            <StyledTitle> Мої бронювання</StyledTitle>
        </NavLink>
        <NavLink to="/student/out">
            <LogoutIcon />
            <StyledTitle>Вийти</StyledTitle>
        </NavLink>
      </StyledList>
  );
};
