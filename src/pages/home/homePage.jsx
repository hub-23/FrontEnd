import React, { useState } from 'react';
import { AuthModal } from '../../components/auth/AuthModal';

const HomePage = () => {
  const [ isOpen, setIsOpen ] = useState( false );
  const handleOpenRegistrationForm = () => {
    setIsOpen( true );
  };

  const handleCloseRegistrationForm = () => {
    setIsOpen( false );
  };
  return (
    <>
      <div>Home page!</div>
      <button onClick={ handleOpenRegistrationForm }>Sing in</button>
      {isOpen && <AuthModal onClose={ handleCloseRegistrationForm } />}
    </>
  );
};

export default HomePage;
