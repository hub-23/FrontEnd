import React, { useState } from 'react';
import { HeroButton } from '../HeroButton/HeroButton';
import { HeroFilter } from '../HeroFilter/HeroFilter';
import {
  StyledButtContainer,
  StyledContainer,
  StyledGradient,
  StyledSection,
  StyledText,
  StyledTitle,
} from './Hero.styled';
import { Modal } from '../modal/Modal';
import { ModalRegistration } from '../modal/ModalRegistration';
import { ModalRegistrationEmail } from '../modal/ModalRegistrationEmail';

export const Hero = () => {
  // 💙💛 Kostiantyn ==============================================================
  const [ showModalRegister, setShowModalRegister ] = useState( false );
  const [ showModalRegisterEmail, setShowModalRegisterEmail ] = useState( false );
  const [ status, setStatus ] = useState( '' );

  const toggleModal = ( evt ) => {
    setShowModalRegister( !showModalRegister );
    document.body.style.overflow = 'visible'; // re scroll
    setStatus( evt?.target.dataset.status );
  };

  const toggleModalEmail = () => {
    setShowModalRegisterEmail( !showModalRegisterEmail );
    document.body.style.overflow = 'visible'; // re scroll
  };

  return (
    <>
      <StyledSection className="section-hero">
        <StyledGradient>
          <StyledContainer>
            <div className="hero-content">
              <StyledTitle>
                                ПРОСТІР
                <br />
                {' '}
ТАЛАНОВИТИХ
                <br />
                {' '}
ЛЮДЕЙ
              </StyledTitle>
              <StyledText>
                                Обирай свого викладача і прямуй до результату разом з нами або доєднуйся до
                                команди вчителів та склади конкуренцію в своїй ніші
              </StyledText>
              <StyledButtContainer>
                <HeroButton
                  size="big"
                  color="blue"
                  dataStatus="teacher"
                  onActiveModal={ toggleModal }
                >
                                    Стати викладачем
                </HeroButton>
                <HeroButton
                  size="big"
                  color="crimson"
                  dataStatus="student"
                  onActiveModal={ toggleModal }
                >
                                    Стати учнем
                </HeroButton>
              </StyledButtContainer>
            </div>
            <HeroFilter />
          </StyledContainer>
        </StyledGradient>
      </StyledSection>

      {showModalRegister && (
      // 💙💛 Kostiantyn ==============================================================
        <Modal onActiveModal={ toggleModal }>
          <ModalRegistration
            onActiveModal={ toggleModal }
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
