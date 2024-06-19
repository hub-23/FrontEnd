import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import * as S from './Header.styled';
import { Language } from './Language/Language';
import { Navigation } from './Navigation/Navigation';
import { IconSvg } from '../common/IconSvg';
import { useHubContext } from '../../redux/Context';
import { Modal } from '../common/modalElements/Modal';
import { ModalLogin } from './modals/ModalLogin';
import { ModalLastStep } from '../HomePage/Hero/modals/ModalLastStep';
import { ModalConfirmEmail } from '../HomePage/Hero/modals/ModalConfirmEmail';
import { ModalThanksForJoining } from './modals/ModalThanksForJoining';
import { useAuth } from 'hooks/useAuth';
import { Abbreviation } from '../common/Abbreviation';
import { DropdownMenu } from './Dropdown/DropdownMenu';

export const Header = () => {
  const {
    showModalLogin,
    setShowModalLogin,
    isHeroFilterShown,
    setIsHeroFilterShown,
    showModalLastStep,
    setShowModalLastStep,
    showModalConfirmEmail,
    setShowModalConfirmEmail,
    showModalThanksForJoining,
    setShowModalThanksForJoining,
  } = useHubContext();

  const { isLoggedIn } = useAuth();
  const [ isHomePage, setIsHomePage ] = useState( false );

  const location = useLocation();

  useEffect( () => {
    if ( location.pathname === '/' ) {
      return setIsHomePage( true );
    } else setIsHomePage( false );
  }, [ location ] );

  const toggleModalLogin = () => {
    setShowModalLogin( !showModalLogin );
  };

  const toggleModalLastStep = () => {
    setShowModalLastStep( !showModalLastStep );
  };

  const toggleModalConfirmEmail = () => {
    setShowModalConfirmEmail( !showModalConfirmEmail );
  };

  const toggleModalThanksForJoining = () => {
    setShowModalThanksForJoining( !showModalThanksForJoining );
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.LogoLink to="/">
            <S.Logo alt="HUB23" />
          </S.LogoLink>

          {isHomePage ? (
            <S.SearchBtn
              type="button"
              aria-label="magnifying glass"
              onClick={ () => setIsHeroFilterShown( !isHeroFilterShown ) }
            >
              <IconSvg
                width="24px"
                height="24px"
                icon="icon-magnifying-glass"
              />
            </S.SearchBtn>
          ) : (
            <S.AvatarWrapperMobile>
              <Abbreviation
                $fontSize="14px"
                $fontWeight="500"
                $lineHeight="1.4"
              />
            </S.AvatarWrapperMobile>
          )}
          <S.NavWrapper>
            <Navigation />
          </S.NavWrapper>

          <S.Wrapper>
            <S.LanguageWrapper>
              <Language />
            </S.LanguageWrapper>

            {isLoggedIn ? (
              <S.PrivateField>
                <DropdownMenu />
              </S.PrivateField>
            ) : (
              <S.SignInBtn
                variant="blueGradientedBorder"
                onClick={ toggleModalLogin }
              >
                Вхід
              </S.SignInBtn>
            )}
          </S.Wrapper>
        </S.HeaderContent>
      </S.HeaderContainer>

      {showModalLogin && (
        <Modal onActiveModal={ toggleModalLogin }>
          <ModalLogin onActiveModal={ toggleModalLogin } />
        </Modal>
      )}

      {showModalLastStep && (
        <Modal onActiveModal={ toggleModalLastStep }>
          <ModalLastStep onActiveModal={ toggleModalLastStep } />
        </Modal>
      )}

      {showModalConfirmEmail && (
        <Modal onActiveModal={ toggleModalConfirmEmail }>
          <ModalConfirmEmail onActiveModal={ toggleModalConfirmEmail } />
        </Modal>
      )}

      {showModalThanksForJoining && (
        <Modal onActiveModal={ toggleModalThanksForJoining }>
          <ModalThanksForJoining onActiveModal={ toggleModalThanksForJoining } />
        </Modal>
      )}
    </S.Header>
  );
};
