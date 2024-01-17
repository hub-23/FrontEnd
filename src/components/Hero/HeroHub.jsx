import React, { useState } from 'react';
import { BtnWrapp, CountainerHero, Text, Title } from './HeroHub.styled';
import { Modal } from '../modal/Modal';
import { ModalRegistration } from '../modal/ModalRegistration';
import { ModalRegistrationEmail } from '../modal/ModalRegistrationEmail';
import { ModalLogin } from '../modal/ModalLogin';
import { ModalLastStep } from '../modal/ModalLastStep';
import { ModalConfirmEmail } from '../modal/ModalConfirmEmail';
import { ModalThanksForJoining } from '../modal/ModalThanksForJoining';
import { useHubContext } from '../../redux/Context';
import { HeroField } from '../HeroField/HeroField';

export const HeroHub = () => {
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
      <CountainerHero>
        <Title>ПРОСТІР ТАЛАНОВИТИХ ЛЮДЕЙ</Title>

        <Text>
                    Обирай свого викладача і прямуй до результату разом з нами або доєднуйся до команди
                    вчителів та склади конкуренцію в своїй ніші
        </Text>

        <BtnWrapp>
          <button type="button" data-status="teacher" onClick={ toggleModalRegister }>
                        Стати викладачем
          </button>

          <button type="button" data-status="student" onClick={ toggleModalRegister }>
                        Стати учнем
          </button>
        </BtnWrapp>

        <HeroField />
      </CountainerHero>

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
