import React, { createContext, useContext, useState } from 'react';

const HubContext = createContext();
export const useHubContext = () => useContext( HubContext );

export const Context = ( { children } ) => {
  const [ showModalRegister, setShowModalRegister ] = useState( false );
  const [ showModalRegisterEmail, setShowModalRegisterEmail ] = useState( false );
  const [ showModalLogin, setShowModalLogin ] = useState( false );
  const [ showModalLastStep, setShowModalLastStep ] = useState( false );
  const [ showModalConfirmEmail, setShowModalConfirmEmail ] = useState( false );
  const [ showModalThanksForJoining, setShowModalThanksForJoining ] = useState( false );
  const [ isHeroFilterShown, setIsHeroFilterShown ] = useState( false );
  let storedCountry = 'Україна';
  try {
    storedCountry = JSON.parse( localStorage.getItem( 'selectedCountry' ) ) || 'Україна';
  } catch ( error ) {
    console.log( error.message );
  }
  
  const [ selectedCountry, setSelectedCountry ] = useState( storedCountry );

  return (
    <HubContext.Provider
      value={ {
        showModalRegister,
        setShowModalRegister,
        showModalRegisterEmail,
        setShowModalRegisterEmail,
        showModalLogin,
        setShowModalLogin,
        showModalLastStep,
        setShowModalLastStep,
        showModalConfirmEmail,
        setShowModalConfirmEmail,
        showModalThanksForJoining,
        setShowModalThanksForJoining,
        isHeroFilterShown,
        setIsHeroFilterShown,
        selectedCountry,
        setSelectedCountry,
      } }
    >
      {children}
    </HubContext.Provider>
  );
};
