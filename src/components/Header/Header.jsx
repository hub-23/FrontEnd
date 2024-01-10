import React from 'react';
// import { Link } from 'react-router-dom';
import { CountryFilterBtn } from './CountryFilter/CountryFilterBtn';
import { Language } from './Language/Language';
import { Navigation } from './Navigation/Navigation';
import * as S from './Header.styled';
import { IconSvg } from '../common/IconSvg';
import { useHubContext } from '../../redux/Context';


export const Header = () => {
  const { showModalLogin, setShowModalLogin } = useHubContext();

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
          onClick={ () => console.log( 'Click on magnifying glass' ) }
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

        {/* <Link to='/language'> */}
        <S.LanguageWrapper>
          <Language />
        </S.LanguageWrapper>
        {/* </Link> */}

        <S.SignInBtn onClick={ goToLogin }>
          {/* to='/signIn' */}
          Вхід
        </S.SignInBtn>

      </S.HeaderContainer>
    </S.Header>
  );
};
