import React from 'react';
import * as S from './Navigation.styled';
import { MobileMenuBtn } from '../MobileMenu/MobileMenuBtn';

export const Navigation = () => {
  return (
    <S.NavList>
      <S.NavItem to='/teacher'>Викладачі</S.NavItem>
      <S.NavItem to='/about'>Про нас</S.NavItem>
      <S.NavItem to='/feedback'>Відгуки</S.NavItem>
      {/* або */}
      <MobileMenuBtn />
    </S.NavList>
  );
};
