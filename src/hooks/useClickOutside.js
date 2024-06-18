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

/*

import { useEffect, useRef, useState } from 'react';

export const useClickOutside = initIsVisible => {
  const [ isShow, setIsShow ] = useState( initIsVisible );

  const ref = useRef( null );

  useEffect( () => {
    const handleClick = evt => {
      // if ( ref.current && !ref.current.contains( evt.target ) )
      //   setTimeout( () => setIsShow( false ), 50 );

      if ( !ref.current ) return;
      if ( !ref.current.contains( evt.target ) )
        if ( isShow )
          setTimeout( () => {
            setIsShow( false );
          }, 50 );

      // setTimeout( () => {
      //   setIsShow( false );
      // }, 50 );

      // setIsShow( false );
    };

    document.addEventListener( 'mousedown', handleClick, true );

    return () => {
      document.removeEventListener( 'mousedown', handleClick, true );
    };
  }, [ isShow ] );

  console.log( 'isShow :>> ', isShow );
  return { ref, isShow, setIsShow };
};

*/
