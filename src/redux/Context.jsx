import React, { createContext, useContext, useState } from 'react';

const HubContext = createContext();
export const useHubContext = () => useContext( HubContext );

export const Context = ( { children } ) => {
  const [ showModalRegister, setShowModalRegister ] = useState( false );
  const [ showModalRegisterEmail, setShowModalRegisterEmail ] = useState( false );
  const [ showModalLogin, setShowModalLogin ] = useState( false );
  const [ showModalLastStep, setShowModalLastStep ] = useState( false );
  const [ showModalConfirmEmail, setShowModalConfirmEmail ] = useState( false );

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
      } }
    >
      {children}
    </HubContext.Provider>
  );
};
