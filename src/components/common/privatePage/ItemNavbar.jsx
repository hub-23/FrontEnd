import React from 'react';
import { IconSvg } from '../IconSvg';
import * as S from './ItemNavbar.styled';

export const ItemNavbar = ( { linkTo, icon, text, setState, ...props } ) => {
  return (
    <li onClick={ () => setState && setState( false ) }>
      <S.Link to={ linkTo } { ...props }>
        <IconSvg
          icon={ icon }
          xlWidth="24px"
          xlHeight="24px"
          $fill="none"
          $stroke="currentColor"
        />
        <S.Text>{text}</S.Text>
      </S.Link>
    </li>
  );
};
