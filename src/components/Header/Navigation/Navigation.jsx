import React from 'react';
import * as S from './Navigation.styled';
import { MobileMenuBtn } from '../MobileMenu/MobileMenuBtn';

export const Navigation = ( { onMobileMenuClose } ) => {
  return (
    <nav>
      <S.NavItem to='/teacher' onClick={ onMobileMenuClose }>Викладачі</S.NavItem>
      <S.NavItem to='/about' onClick={ onMobileMenuClose }>Про нас</S.NavItem>
      <S.NavItem to='/feedback' onClick={ onMobileMenuClose }>Відгуки</S.NavItem>
      {/* або */}
      <MobileMenuBtn />
    </nav>
  );
};
