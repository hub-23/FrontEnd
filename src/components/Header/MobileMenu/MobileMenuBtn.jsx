import React, { useState } from 'react';
import * as S from './MobileMenu.styled';
import { IconSvg } from '../../common/IconSvg';
import { Modal } from '../../common/modalElements/Modal';
import { MobileMenu } from './MobileMenu';

export const MobileMenuBtn = () => {
  const [ isModalOpen, setIsModalOpen ] = useState( false );

  return (
    <>
      <S.BurgerBtn
        type="button"
        aria-expanded="false"
        aria-controls="mobile-menu"
        aria-label="toggle mobile menu"
        onClick={ () => setIsModalOpen( !isModalOpen ) }
      >
        {isModalOpen ? (
          <IconSvg width="24px" height="24px" icon="icon-cross" />
        ) : (
          <IconSvg width="24px" height="24px" icon="icon-burger" />
        )}
      </S.BurgerBtn>

      {isModalOpen && (
        <Modal onActiveModal={ () => setIsModalOpen( !isModalOpen ) }>
          <MobileMenu onActiveModal={ () => setIsModalOpen( !isModalOpen ) } />
        </Modal>
      )}
    </>
  );
};
