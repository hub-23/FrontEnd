import React from 'react';
import * as S from './Navigation.styled';
import { MobileMenuBtn } from '../MobileMenu/MobileMenuBtn';
// import { useAuth } from 'hooks/useAuth';

export const Navigation = ( { onMobileMenuClose } ) => {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <S.NavItem to="/teacher" onClick={ onMobileMenuClose }>
        Викладачі
      </S.NavItem>
      <S.NavItem to="/about" onClick={ onMobileMenuClose }>
        Про нас
      </S.NavItem>
      <S.NavItem to="/feedback" onClick={ onMobileMenuClose }>
        Відгуки
      </S.NavItem>

      {/* {isLoggedIn && (
        <S.NavItem to="/student" onClick={ onMobileMenuClose }>
          Student
        </S.NavItem>
      )} */}

      {/* або */}
      <MobileMenuBtn />
    </nav>
  );
};
