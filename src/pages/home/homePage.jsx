import React, { useState } from 'react';
import RegistrationForm from '../../components/registration-form/RegistrationForm';

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
      {isOpen && <RegistrationForm onClose={ handleCloseRegistrationForm } />}
    </>
  );
};

export default HomePage;
