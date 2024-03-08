import React from 'react';
import { IconSvg } from 'components/common/IconSvg';
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
        <StyledNavLink to="/student/info">
          <IconSvg 
            xlWidth="24px"
            xlHeight="24px"
            icon="profile"
            className="logo" />
          <StyledTitle>Особиста інформація</StyledTitle>
        </StyledNavLink>
        <StyledNavLink to="/student/reservation">
          <IconSvg 
             xlWidth="24px"
             xlHeight="24px"
             icon="calendar"/>
          <StyledTitle> Мої бронювання</StyledTitle>
        </StyledNavLink>
        <StyledNavLink to="/student/out">
          <IconSvg 
             xlWidth="24px"
             xlHeight="24px"
             icon="logout"/>
          <StyledTitle>Вийти</StyledTitle>
        </StyledNavLink>
      </StyledList>
      <StyledDivider />
    </Wrapper>
  );
};
