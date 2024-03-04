import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
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

  const { isLoggedIn, user } = useAuth();
  const [ isDropdownShown, setIsDropdownShown ] = useState( false );

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

  const abbreviation = user?.username
    .split( ' ' )
    .map( ( word ) => word[ 0 ].toUpperCase() )
    .join( '' );

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
            <IconSvg width="24px" height="24px" icon="icon-magnifying-glass" />
          </S.SearchBtn>

          <S.NavWrapper>
            <Navigation />
          </S.NavWrapper>

          <S.Wrapper>
            <S.LanguageWrapper>
              <Language />
            </S.LanguageWrapper>

            {isLoggedIn ? (
              // <h2 style={ { fontSize: '20px', fontWeight: '700' } }>
              //   {`Avatar ${user.avatar ? user.avatar : user.username}`}
              // </h2>
              <>
              <S.AvatarWrapper><p>{ abbreviation }</p></S.AvatarWrapper>
              <S.DropdownBtn
                type="button"
                aria-label="dropdown-menu"
                onClick={ () => setIsDropdownShown( !isDropdownShown ) }
                $rotate={ isDropdownShown }
              >
                <div>
                  <IconSvg width="11px" height="11px" icon="icon-arrow-down" />
                </div>
              </S.DropdownBtn>
              {isDropdownShown && (
                <S.Dropdown></S.Dropdown>
              )}
              </>
            ) : (
              <S.SignInBtn
                variant="blueGradientedBorder"
                onClick={ toggleModalLogin }
              >
                Вхід
              </S.SignInBtn>
            )}
          </S.Wrapper>

          {/* <Link to="/student" style={ { position: 'absolute', top: '0' } }>
            Student&apos;s page
          </Link> */}
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
