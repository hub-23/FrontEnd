import { useEffect } from 'react';

export const useKeyDownEsc = ( isShow, setIsShow ) => {
  useEffect( () => {
    const handleKeyDown = evt => {
      if ( evt.code === 'Escape' ) {
        setIsShow( false );
      }
    };
    window.addEventListener( 'keydown', handleKeyDown );
    return () => {
      window.removeEventListener( 'keydown', handleKeyDown );
    };
  }, [ isShow ] );
};
