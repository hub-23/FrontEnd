// K-Basket
import { useEffect } from 'react';

export const useCloseDropdown = () => {
  const clickOutside = ( ref, callback ) => {
    const handleCliick = evt => {
      if ( ref.current && !ref.current.contains( evt.target ) ) callback();
    };

    useEffect( () => {
      document.addEventListener( 'mousedown', handleCliick );

      return () => {
        document.removeEventListener( 'mousedown', handleCliick );
      };
    } );
  };

  const keyDownEsc = callback => {
    useEffect( () => {
      const handleKeyDown = evt => {
        if ( evt.code === 'Escape' ) callback();
      };

      window.addEventListener( 'keydown', handleKeyDown );

      return () => {
        window.removeEventListener( 'keydown', handleKeyDown );
      };
    } );
  };

  return {
    clickOutside,
    keyDownEsc,
  };
};
