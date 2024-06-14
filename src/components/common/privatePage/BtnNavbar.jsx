import React from 'react';
import { useSignout } from 'hooks/useSignout';
import { IconSvg } from '../IconSvg';
import * as S from './BtnNavbar.styled';
import * as I from './ItemNavbar.styled';

export const BtnNavbar = () => {
  const signout = useSignout();

  return (
    <li>
      <S.Btn type="button" onClick={ signout }>
        <IconSvg
          xlWidth="24px"
          xlHeight="24px"
          $fill="none"
          $stroke="currentColor"
          icon="icon-logout"
        />
        <I.Text>Вийти</I.Text>
      </S.Btn>
    </li>
  );
};
