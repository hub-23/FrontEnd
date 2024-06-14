import React from 'react';
import * as S from './Navigation.styled';
import { BtnNavbar } from 'components/common/privatePage/BtnNavbar';

export const Navigation = ( { children } ) => {
  return (
    <S.List>
      {children}
      <BtnNavbar $padding="16px 160px 16px 20px" />
    </S.List>
  );
};
