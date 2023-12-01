import React, { useState } from 'react';
import { AuthModal } from '../../components/auth/AuthModal';
import Header from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import TopTeachersCarousel from '../../components/TopTeachersCarousel';
import { Feedback } from '../../components/Feedbacks/Feedbacks';

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
        <Feedback/>
      <div>Footer</div>
    </>
  );
};

