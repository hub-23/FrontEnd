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

export const Hero = () => {
  const docVisible = ( document.body.style.overflow = 'visible' ); // re scroll
  const {
    showModalRegister,
    setShowModalRegister,
    showModalRegisterEmail,
    setShowModalRegisterEmail,
    showModalLogin,
    setShowModalLogin,
  } = useHubContext();

  const [ status, setStatus ] = useState( '' );

  const toggleModal = ( evt ) => {
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
                onActiveModal={ toggleModal }
              >
                                Стати викладачем
              </Button>
              <Button
                className="btn"
                variant="pink"
                dataStatus="student"
                onActiveModal={ toggleModal }
              >
                                Стати учнем
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

      {showModalLogin && (
        <Modal onActiveModal={ toggleModalLogin }>
          <ModalLogin onActiveModal={ toggleModalLogin } />
        </Modal>
      )}
    </>
  );
};
