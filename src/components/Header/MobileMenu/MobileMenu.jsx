import React from 'react';
import * as S from './MobileMenu.styled';
import { IconSvg } from '../../common/IconSvg';
import { CountryMenu } from '../CountryMenu/CountryMenu';
import { Navigation } from '../Navigation/Navigation';
import { useHubContext } from '../../../redux/Context';
import { Language } from '../Language/Language';


export const MobileMenu = ( { onActiveModal } ) => {
  const { showModalLogin, setShowModalLogin } = useHubContext();

  const goToLogin = () => {
    setShowModalLogin( !showModalLogin );
  };

  return (
    <S.MobileMenuContainer>
      <S.HeaderWrapper>
        <S.LogoLink to='/'>
          <S.Logo alt='HUB23' />
        </S.LogoLink>
        <S.CrossBtn
          type="button"
          aria-expanded="true"
          aria-controls="mobile-menu"
          aria-label='toggle mobile menu'
          onClick={ () => onActiveModal() }
        >
          <IconSvg
            xlWidth='24px'
            xlHeight='24px'
            icon='icon-cross'
          />
        </S.CrossBtn>
      </S.HeaderWrapper>

      <S.CountryMenuWrapper>
        <CountryMenu />
      </S.CountryMenuWrapper>

      <S.NavWrapper>
        <Navigation />
      </S.NavWrapper>

      <S.SignInBtn onClick={ goToLogin }>
        {/* to='/signIn' */}
        Вхід
      </S.SignInBtn>

      {/* <Link to='/language'> */}
      <S.LanguageWrapper>
        <Language />
      </S.LanguageWrapper>
      {/* </Link> */}

    </S.MobileMenuContainer>
  );
};
