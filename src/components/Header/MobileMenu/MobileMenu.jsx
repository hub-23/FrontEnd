import React from 'react';
import * as S from './MobileMenu.styled';
import { IconSvg } from '../../common/IconSvg';


export const MobileMenu = () => {
  return (
    <S.BurgerBtn
      type="button"
      aria-expanded="false"
      aria-controls="mobile-menu"
      aria-label='toggle mobile menu'
    >
      <IconSvg
        xlWidth='24px'
        xlHeight='24px'
        icon='icon-burger'
      />
    </S.BurgerBtn>
  );
};
