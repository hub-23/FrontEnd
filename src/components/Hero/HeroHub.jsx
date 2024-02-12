import React, { useState } from 'react';
import { BtnWrapp, CountainerHero, Text, Title } from './HeroHub.styled';
import { Modal } from '../../components/modalElements/Modal';
import { ModalRegistration } from './modals/ModalRegistration';
import { ModalRegistrationEmail } from './modals/ModalRegistrationEmail';
import { ModalLastStep } from './modals/ModalLastStep';
import { ModalConfirmEmail } from './modals/ModalConfirmEmail';
import { ModalThanksForJoining } from './modals/ModalThanksForJoining';
import { useHubContext } from '../../redux/Context';
import { HeroField } from '../HeroField/HeroField';
import { scrollOnOff } from '../../helpers/scrollOnOff';

export const HeroHub = () => {
  const {
    showModalRegister,
    setShowModalRegister,
    showModalRegisterEmail,
    setShowModalRegisterEmail,
    showModalLastStep,
    setShowModalLastStep,
    showModalConfirmEmail,
    setShowModalConfirmEmail,
    showModalThanksForJoining,
    setShowModalThanksForJoining,
    showModalLogin,
  } = useHubContext();

  const [ status, setStatus ] = useState( '' );

  scrollOnOff( showModalLogin );

  const toggleModalRegister = evt => {
    setShowModalRegister( !showModalRegister );
    setStatus( evt?.target.dataset.status );
  };

  const toggleModalEmail = () => {
    setShowModalRegisterEmail( !showModalRegisterEmail );
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
    <>
      <CountainerHero>
        <Title>ПРОСТІР ТАЛАНОВИТИХ ЛЮДЕЙ</Title>

        <Text>
          Обирай свого викладача і прямуй до результату разом з нами або
          доєднуйся до команди вчителів та склади конкуренцію в своїй ніші
        </Text>

        <BtnWrapp>
          <button
            type="button"
            data-status="teacher"
            onClick={ toggleModalRegister }
          >
            Стати викладачем
          </button>

          <button
            type="button"
            data-status="student"
            onClick={ toggleModalRegister }
          >
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
