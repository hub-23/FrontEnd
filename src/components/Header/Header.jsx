import React, { useState } from 'react';
import * as S from './Header.styled';
import { CountryFilterBtn } from './CountryFilter/CountryFilterBtn';
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
  const [ overflow, setOverflow ] = useState( 0 );

  //     const goToLogin = () => {
  //       setShowModalLogin( !showModalLogin );
  //     };

  const handleCountryOverflow = overflowSize => {
    setOverflow( overflowSize );
  };

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
        <S.LogoLink to="/" $overflow={ overflow > 0 && Math.ceil( overflow / 2 ) }>
          <S.Logo alt="HUB23" />
        </S.LogoLink>

        <S.SearchBtn
          type="button"
          aria-label="magnifying glass"
          onClick={ () => setIsHeroFilterShown( !isHeroFilterShown ) }
        >
          <IconSvg
            xlWidth="24px"
            xlHeight="24px"
            icon="icon-magnifying-glass"
          />
        </S.SearchBtn>

        <S.NavWrapper $overflow={ overflow > 0 && Math.ceil( overflow / 2 ) }>
          <Navigation />
        </S.NavWrapper>

        <S.CountryMenuWrapper>
          <CountryFilterBtn onCountryOverflow={ handleCountryOverflow } />
        </S.CountryMenuWrapper>

        <S.LanguageWrapper $overflow={ overflow > 0 && overflow }>
          <Language />
        </S.LanguageWrapper>

        <S.SignInBtn onClick={ toggleModalLogin }>Вхід</S.SignInBtn>
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
