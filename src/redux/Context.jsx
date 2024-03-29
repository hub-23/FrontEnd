import React, { createContext, useContext, useState } from 'react';

const HubContext = createContext();
export const useHubContext = () => useContext( HubContext );

export const Context = ( { children } ) => {
  const [ showModalRegister, setShowModalRegister ] = useState( false );
  const [ showModalRegisterEmail, setShowModalRegisterEmail ] = useState( false );
  const [ showModalLogin, setShowModalLogin ] = useState( false );
  const [ showModalLastStep, setShowModalLastStep ] = useState( false );
  const [ showModalConfirmEmail, setShowModalConfirmEmail ] = useState( false );
  const [ showModalThanksForJoining, setShowModalThanksForJoining ]
    = useState( false );
  const [ isHeroFilterShown, setIsHeroFilterShown ] = useState( false );
  const [ role, setRole ] = useState( '' );

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
        role,
        setRole,
      } }
    >
      {children}
    </HubContext.Provider>
  );
};
