import React from 'react';
// import { AvatarWrapper } from 'components/Header/Header.styled';
import { Abbreviation } from '../Abbreviation';
import * as S from './AvatarLeters.styled';

export const AvatarLeters = () => {
  return (
    <S.Wrapp>
      <Abbreviation $fontSize="20px" $fontWeight="500" $lineHeight="1.4" />
    </S.Wrapp>
  );
};
