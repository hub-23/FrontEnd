import { useEffect } from 'react';

export const useClickOutside = ( ref, callback ) => {
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
