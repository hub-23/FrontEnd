import React from 'react';
import { Outlet } from 'react-router';
import { BtnNavbar } from './BtnNavbar';
import * as S from './PrivatePage.styled';

const PrivatePage = ( { children } ) => {
  return (
    <S.ContainerPage>
      <S.Navbar>
        {children}
        <BtnNavbar />
      </S.Navbar>

      <S.Content>
        <Outlet />
      </S.Content>
    </S.ContainerPage>
  );
};

export default PrivatePage;
