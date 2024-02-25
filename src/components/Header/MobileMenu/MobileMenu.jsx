import React from 'react';
import * as S from './MobileMenu.styled';
import { IconSvg } from '../../common/IconSvg';
import { Navigation } from '../Navigation/Navigation';
import { useHubContext } from '../../../redux/Context';
import { Language } from '../Language/Language';


export const MobileMenu = ( { onActiveModal } ) => {
  const { showModalLogin, setShowModalLogin } = useHubContext();

  return (
    <S.MobileMenuContainer>

      <S.MobileMenuHeder>
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
      </S.MobileMenuHeder>

      <div>
        <S.NavWrapper>
          <Navigation onMobileMenuClose={ onActiveModal } />
        </S.NavWrapper>

        <S.SignInBtn onClick={ () => setShowModalLogin( !showModalLogin ) }>
          Вхід
        </S.SignInBtn>
      </div>
      
      <S.LanguageWrapper>
        <Language />
      </S.LanguageWrapper>

    </S.MobileMenuContainer>
  );
};
