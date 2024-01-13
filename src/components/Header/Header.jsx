import React, { useState } from 'react';
import * as S from './Header.styled';
import { CountryFilterBtn } from './CountryFilter/CountryFilterBtn';
import { Language } from './Language/Language';
import { Navigation } from './Navigation/Navigation';
import { IconSvg } from '../common/IconSvg';
import { useHubContext } from '../../redux/Context';


export const Header = () => {
  const { showModalLogin, setShowModalLogin, isHeroFilterShown, setIsHeroFilterShown } = useHubContext();
  const [ overflow, setOverflow ] = useState( 0 );

  const goToLogin = () => {
    setShowModalLogin( !showModalLogin );
  };

  const handleCountryOverflow = ( overflowSize ) => {
    setOverflow( overflowSize );
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LogoLink to='/'
          $overflow={ overflow > 0 && Math.ceil( overflow / 2 ) } >
          <S.Logo alt='HUB23' />
        </S.LogoLink>

        <S.SearchBtn
          type='button'
          aria-label='magnifying glass'
          onClick={ () => setIsHeroFilterShown( !isHeroFilterShown ) }
        >
          <IconSvg
            xlWidth='24px'
            xlHeight='24px'
            icon='icon-magnifying-glass'
          />
        </S.SearchBtn>

        <S.NavWrapper $overflow={ overflow > 0 && Math.ceil( overflow / 2 ) } >
          <Navigation />
        </S.NavWrapper>

        <S.CountryMenuWrapper >
          <CountryFilterBtn onCountryOverflow={ handleCountryOverflow } />
        </S.CountryMenuWrapper>

        <S.LanguageWrapper $overflow={ overflow > 0 && overflow }>
          <Language />
        </S.LanguageWrapper>

        <S.SignInBtn onClick={ goToLogin }>
          Вхід
        </S.SignInBtn>

      </S.HeaderContainer>
    </S.Header>
  );
};
