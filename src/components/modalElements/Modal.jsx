import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled';
import { scrollOnOff } from '../../helpers/scrollOnOff';

const modalRoot = document.querySelector( '#root' );

export const Modal = ( { children, onActiveModal } ) => {
  useEffect( () => {
    const handleKeyDown = evt => {
      if ( evt.code === 'Escape' ) onActiveModal();
    };

    window.addEventListener( 'keydown', handleKeyDown );

    return () => window.removeEventListener( 'keydown', handleKeyDown );
  }, [ onActiveModal ] );

  const handleBackdropClick = evt => {
    if ( evt.currentTarget === evt.target ) onActiveModal();
  };

  scrollOnOff( onActiveModal );
  // document.body.style.overflow = 'hidden';

  return createPortal(
    <Backdrop onClick={ handleBackdropClick }>{children}</Backdrop>,
    modalRoot
  );
};
