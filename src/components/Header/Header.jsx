import React from 'react';
import * as S from './Header.styled';
import { Language } from './Language/Language';
import { Navigation } from './Navigation/Navigation';
import { IconSvg } from '../common/IconSvg';
import { useHubContext } from '../../redux/Context';
import { Modal } from '../modalElements/Modal';
import { ModalLogin } from './modals/ModalLogin';
import { ModalLastStep } from './modals/ModalLastStep';
import { ModalConfirmEmail } from './modals/ModalConfirmEmail';
import { ModalThanksForJoining } from './modals/ModalThanksForJoining';
import { scrollOnOff } from '../../helpers/scrollOnOff';

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

  //     const goToLogin = () => {
  //       setShowModalLogin( !showModalLogin );
  //     };

  const toggleModalLogin = () => {
    setShowModalLogin( !showModalLogin );
    scrollOnOff(); // re scroll
  };

  const toggleModalLastStep = () => {
    setShowModalLastStep( !showModalLastStep );
    scrollOnOff(); // re scroll
  };

  const toggleModalConfirmEmail = () => {
    setShowModalConfirmEmail( !showModalConfirmEmail );
    scrollOnOff(); // re scroll
  };

  const toggleModalThanksForJoining = () => {
    setShowModalThanksForJoining( !showModalThanksForJoining );
    scrollOnOff(); // re scroll
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.LogoLink to="/">
            <S.Logo alt="HUB23" />
          </S.LogoLink>

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

          <S.NavWrapper>
            <Navigation />
          </S.NavWrapper>

          <S.Wrapper>
            <S.LanguageWrapper>
              <Language />
            </S.LanguageWrapper>

            <S.SignInBtn onClick={ toggleModalLogin }>Вхід</S.SignInBtn>
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
