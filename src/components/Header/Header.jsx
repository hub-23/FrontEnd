import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Language } from './Select/Language/Language';
import { MobileMenu } from './MobileMenu/MobileMenu';
import * as S from './Header.styled';
import { IconSvg } from '../common/IconSvg';


export const Header = () => {
  const [ isDropdownOpen, setIsDropdownOpen ] = useState( false );
  const selectedCountry = 'Україна';

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.Content>
          <S.LogoLink to='/'>
            <S.Logo alt='HUB23' />
          </S.LogoLink>

          <S.NavList>
            <S.NavItem to='/teacher'>Викладачі</S.NavItem>
            <S.NavItem to='/about'>Про нас</S.NavItem>
            <S.NavItem to='/feedback'>Відгуки</S.NavItem>
            <MobileMenu />
          </S.NavList>

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
                xlHeight='6px'
                icon='icon-arrow-down'
              />
            </S.CountryMenuBtn>
          </S.CountryMenu>

          {/* <Link to='/language'> */}
          <Language />
          {/* </Link> */}

          <S.SignInBtn
            to='/signIn'
            onClick={ () => console.log( 'sign in' ) }
          >
            Вхід
          </S.SignInBtn>
        </S.Content>
      </S.HeaderContainer>
    </S.Header>
  );
};
