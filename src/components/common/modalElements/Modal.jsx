import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled';
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

  useEffect( () => {
    const header = document.querySelector( 'header' );
    const scrollWidth
      = window.innerWidth - document.documentElement.clientWidth;

    header.style.paddingRight = `${scrollWidth}px`;
    document.body.style.paddingRight = `${scrollWidth}px`;
    document.body.style.overflow = 'hidden';

    return () => {
      header.style.paddingRight = '0';
      document.body.style.paddingRight = '0';
      document.body.style.overflow = 'visible';
    };
  }, [] );

  return createPortal(
    <Backdrop onClick={ handleBackdropClick }>{children}</Backdrop>,
    modalRoot
  );
};
