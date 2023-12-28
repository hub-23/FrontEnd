import React, { createContext, useContext, useState } from 'react';

const HubContext = createContext();
export const useHubContext = () => useContext( HubContext );

export const Context = ( { children } ) => {
  const [ showModalRegister, setShowModalRegister ] = useState( false );
  const [ showModalRegisterEmail, setShowModalRegisterEmail ] = useState( false );
  const [ showModalLogin, setShowModalLogin ] = useState( false );

  return (
    <HubContext.Provider
      value={ {
        showModalRegister,
        setShowModalRegister,
        showModalRegisterEmail,
        setShowModalRegisterEmail,
        showModalLogin,
        setShowModalLogin,
      } }
    >
      {children}
    </HubContext.Provider>
  );
};
