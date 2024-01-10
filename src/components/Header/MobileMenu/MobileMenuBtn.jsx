import React, { useState } from 'react';
import * as S from './MobileMenu.styled';
import { IconSvg } from '../../common/IconSvg';
import { Modal } from '../../modal/Modal';
import { MobileMenu } from './MobileMenu';


export const MobileMenuBtn = () => {
  const [ isModalOpen, setIsModalOpen ] = useState( false );

  const toggleModal = ( e ) => {
    setIsModalOpen( !isModalOpen );
    document.body.style.overflow = 'visible';
  };

  return (
    <>
      <S.BurgerBtn
        type="button"
        aria-expanded="false"
        aria-controls="mobile-menu"
        aria-label='toggle mobile menu'
        onClick={ () => setIsModalOpen( !isModalOpen ) }
      >
        { isModalOpen
        ? (
          <IconSvg
            xlWidth='24px'
            xlHeight='24px'
            icon='icon-cross'
          />
        ) : (
          <IconSvg
            xlWidth='24px'
            xlHeight='24px'
            icon='icon-burger'
          />
        )}
      </S.BurgerBtn>

      { isModalOpen && (
        <Modal onActiveModal={ toggleModal }>
          <MobileMenu onActiveModal={ toggleModal } />
        </Modal>
      )}
    </>
  );
};
