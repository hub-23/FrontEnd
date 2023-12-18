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
  ButtonTypography,
} from './Hero.styled';
import { Modal } from '../modal/Modal';
import { ModalRegistration } from '../modal/ModalRegistration';
import { ModalRegistrationEmail } from '../modal/ModalRegistrationEmail';

export const Hero = () => {
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
                Обирай свого викладача і прямуй до результату разом з нами або доєднуйся до команди
                вчителів та склади
                конкуренцію в своїй ніші
            </StyledText>
            <StyledBtnContainer1>
              <Button
                className='btn'
                variant='blue'
                dataStatus="teacher"
                onActiveModal={ toggleModal }>
                <ButtonTypography>
                  Стати викладачем
                </ButtonTypography>
              </Button>
              <Button
                className='btn'
                variant='pink'
                dataStatus="student"
                onActiveModal={ toggleModal }>
                <ButtonTypography>
                  Стати учнем
                </ButtonTypography>
              </Button>
            </StyledBtnContainer1>
            <HeroFilter />
          </StyledContainer>
        </StyledGradient>
      </StyledSection>

      {showModalRegister && (
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
