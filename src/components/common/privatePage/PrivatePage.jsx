import React from 'react';
import { Outlet } from 'react-router';
import { BtnNavbar } from './BtnNavbar';
import * as S from './PrivatePage.styled';

const PrivatePage = ( { children } ) => {
  return (
    <S.ContainerPage>
      <S.Wrap>
        <ul>
          {children}
          <BtnNavbar />
        </ul>

        <S.Content>
          <Outlet />
        </S.Content>
      </S.Wrap>
    </S.ContainerPage>
  );
};

export default PrivatePage;
