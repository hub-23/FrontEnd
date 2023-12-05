import React, { useState } from 'react';
import { AuthModal } from '../../components/auth/AuthModal';
import Header from '../../components/Header/Header';
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
      <Header />
      <button onClick={ handleOpenRegistrationForm }>Sing in</button>
      {isOpen && <AuthModal onClose={ handleCloseRegistrationForm } />}
      <Hero />
      <TopTeachersCarousel />
      <div>Footer</div>
    </>
  );
};
