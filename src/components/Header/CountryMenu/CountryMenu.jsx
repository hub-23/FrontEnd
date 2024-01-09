import React, { useState } from 'react';
import { IconSvg } from '../../common/IconSvg';
import * as S from './CountryMenu.styled';


export const CountryMenu = () => {
  const selectedCountry = 'Україна';
  const [ isDropdownOpen, setIsDropdownOpen ] = useState( false );

  return (
    <S.CountryMenu>
      <p>{selectedCountry}</p>
      <S.CountryMenuBtn
        type='button'
        aria-label='dropdown-menu'
        onClick={ () => setIsDropdownOpen( !isDropdownOpen ) }
        $rotate={ isDropdownOpen }
      >
        <IconSvg
          xlWidth='11px'
          xlHeight='7px'
          icon='icon-arrow-down'
        />
      </S.CountryMenuBtn>
    </S.CountryMenu>
  );
};
