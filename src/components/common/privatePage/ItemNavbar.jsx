import React from 'react';
import { IconSvg } from '../IconSvg';
import * as S from './ItemNavbar.styled';

export const ItemNavbar = ( { linkTo, icon, text, ...props } ) => {
  return (
    <li>
      <S.Link to={ linkTo } { ...props }>
        <IconSvg
          xlWidth="24px"
          xlHeight="24px"
          $fill="none"
          $stroke="currentColor"
          icon={ icon }
        />
        <S.Text>{text}</S.Text>
      </S.Link>
    </li>
  );
};
