import React, { useState } from 'react';
import {
  BtnWrapp,
  Container,
  CountainerHero,
  Text,
  Title,
} from './Hero.styled';
import { Modal } from '../modalElements/Modal';
import { ModalRegistration } from './modals/ModalRegistration';
import { ModalRegistrationEmail } from './modals/ModalRegistrationEmail';
import { useHubContext } from '../../redux/Context';
import { HeroField } from './HeroField';

export const Hero = () => {
  const {
    showModalRegister,
    setShowModalRegister,
    showModalRegisterEmail,
    setShowModalRegisterEmail,
  } = useHubContext();

  const [ status, setStatus ] = useState( '' );

  const toggleModalRegister = evt => {
    setShowModalRegister( !showModalRegister );
    setStatus( evt?.target.dataset.status );
  };

  const toggleModalEmail = () => {
    setShowModalRegisterEmail( !showModalRegisterEmail );
  };

  return (
    <>
      <CountainerHero>
        <Container>
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
        </Container>
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
    </>
  );
};
