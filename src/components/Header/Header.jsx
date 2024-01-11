import React from 'react';
import * as S from './Header.styled';
import { CountryFilterBtn } from './CountryFilter/CountryFilterBtn';
import { Language } from './Language/Language';
import { Navigation } from './Navigation/Navigation';
import { IconSvg } from '../common/IconSvg';
import { useHubContext } from '../../redux/Context';


export const Header = () => {
  const { showModalLogin, setShowModalLogin, isHeroFilterShown, setIsHeroFilterShown } = useHubContext();

  const goToLogin = () => {
    setShowModalLogin( !showModalLogin );
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LogoLink to='/'>
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

        <S.NavWrapper>
          <Navigation />
        </S.NavWrapper>

        <S.CountryMenuWrapper>
          <CountryFilterBtn />
        </S.CountryMenuWrapper>

        <S.LanguageWrapper>
          <Language />
        </S.LanguageWrapper>

        <S.SignInBtn onClick={ goToLogin }>
          Вхід
        </S.SignInBtn>

      </S.HeaderContainer>
    </S.Header>
  );
};
