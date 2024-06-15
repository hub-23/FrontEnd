import React from 'react';
import { BtnNavbar } from 'components/common/privatePage/BtnNavbar';
import * as S from './Navigation.styled';

export const Navigation = ( { children } ) => {
  return (
    <S.List>
      {children}
      <BtnNavbar $padding="16px 160px 16px 20px" />
    </S.List>
  );
};
