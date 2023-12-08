import React, { useState } from 'react';
import { AuthModal } from '../../components/auth/AuthModal';
import { Hero } from '../../components/Hero/Hero';
import TopTeachersCarousel from '../../components/TopTeachersCarousel';


export const HomePage = () => {
  const [ isOpen, setIsOpen ] = useState( false );
  const handleOpenRegistrationForm = () => {
    setIsOpen( true );
  };

  const handleCloseRegistrationForm = () => {
    setIsOpen( false );
  };
  return (
    <>
      <button onClick={ handleOpenRegistrationForm }>Sing in</button>
      {isOpen && <AuthModal onClose={ handleCloseRegistrationForm } />}
      <Hero />
      <TopTeachersCarousel />
    </>
  );
};
