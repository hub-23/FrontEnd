import React from 'react';
import { IconSvg } from '../common/IconSvg';
import * as S from './BtnClose.styled';

export const BtnClose = ( { onActiveModal, ...props } ) => {
  return (
    <S.BtnClose
      type='button'
      aria-label='close'
      onClick={ () => onActiveModal() }
      { ...props }
    >
      <IconSvg
        xlWidth="56px"
        xlHeight="56px"
        mdWidth="36px"
        mdHeight="36px"
        smWidth="24px"
        smHeight="24px"
        icon="icon-close-cross"
        { ...props }
      />
    </S.BtnClose>
  );
};
