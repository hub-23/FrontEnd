import React, { useState } from 'react';
import { Button } from '../common/button/Button';
import { HeroFilter } from '../HeroFilter/HeroFilter';
import {
  StyledSection,
  StyledGradient,
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledBtnContainer1,
} from './Hero.styled';
import { Modal } from '../modal/Modal';
import { ModalRegistration } from '../modal/ModalRegistration';
import { ModalRegistrationEmail } from '../modal/ModalRegistrationEmail';
import { ModalLogin } from '../modal/ModalLogin';
import { useHubContext } from '../../redux/Context';
import { ModalLastStep } from '../modal/ModalLastStep';
import { ModalConfirmEmail } from '../modal/ModalConfirmEmail';
import { ModalThanksForJoining } from '../modal/ModalThanksForJoining';

export const Hero = () => {
  const docVisible = ( document.body.style.overflow = 'visible' ); // re scroll
  const {
    showModalRegister,
    setShowModalRegister,
    showModalRegisterEmail,
    setShowModalRegisterEmail,
    showModalLogin,
    setShowModalLogin,
    showModalLastStep,
    setShowModalLastStep,
    showModalConfirmEmail,
    setShowModalConfirmEmail,
    showModalThanksForJoining,
    setShowModalThanksForJoining,
    isHeroFilterShown,
  } = useHubContext();

  const [ status, setStatus ] = useState( '' );

  const toggleModalRegister = ( evt ) => {
    setShowModalRegister( !showModalRegister );
    docVisible;
    setStatus( evt?.target.dataset.status );
  };

  const toggleModalEmail = () => {
    setShowModalRegisterEmail( !showModalRegisterEmail );
    docVisible;
  };

  const toggleModalLogin = () => {
    setShowModalLogin( !showModalLogin );
    docVisible;
  };

  const toggleModalLastStep = () => {
    setShowModalLastStep( !showModalLastStep );
    docVisible;
  };

  const toggleModalConfirmEmail = () => {
    setShowModalConfirmEmail( !showModalConfirmEmail );
    docVisible;
  };

  const toggleModalThanksForJoining = () => {
    setShowModalThanksForJoining( !showModalThanksForJoining );
    docVisible;
  };

  return (
    <>
      <StyledSection>
        <StyledGradient>
          <StyledContainer>
            <StyledTitle>
                            ПРОСТІР
              <br />
                            ТАЛАНОВИТИХ
              <br />
                            ЛЮДЕЙ
            </StyledTitle>
            <StyledText>
                            Обирай свого викладача і прямуй до результату разом з нами або доєднуйся до
                            команди вчителів та склади конкуренцію в своїй ніші
            </StyledText>
            <StyledBtnContainer1>
              <Button
                className="btn"
                variant="blue"
                dataStatus="teacher"
                onActiveModal={ toggleModalRegister }
              >
                                Стати викладачем
              </Button>
              <Button
                className="btn"
                variant="pink"
                dataStatus="student"
                onActiveModal={ toggleModalRegister }
              >
                                Стати учнем
              </Button>
            </StyledBtnContainer1>
            {isHeroFilterShown && (
              <HeroFilter />
            )}
          </StyledContainer>
        </StyledGradient>
      </StyledSection>

      {showModalRegister && (
        <Modal onActiveModal={ toggleModalRegister }>
          <ModalRegistration
            onActiveModal={ toggleModalRegister }
            onActiveModalEmail={ toggleModalEmail }
            status={ status }
          />
        </Modal>
      )}

      {showModalRegisterEmail && (
        <Modal onActiveModal={ toggleModalEmail }>
          <ModalRegistrationEmail onActiveModal={ toggleModalEmail } />
        </Modal>
      )}

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
    </>
  );
};
