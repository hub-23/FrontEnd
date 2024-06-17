import { useEffect, useRef, useState } from 'react';

export const useClickOutside = initIsVisible => {
  const [ isShow, setIsShow ] = useState( initIsVisible );

  const ref = useRef( null );

  const handleClick = evt => {
    // if ( ref.current && !ref.current.contains( evt.target ) )
    //   setTimeout( () => setIsShow( false ), 50 );

    if ( !ref.current ) return;
    if ( !ref.current.contains( evt.target ) )
      setTimeout( () => setIsShow( false ), 550 );
    //   setIsShow( false );
  };

  useEffect( () => {
    document.addEventListener( 'click', handleClick, true );

    console.log( 'isShow :>> ', isShow );
    return () => {
      document.removeEventListener( 'click', handleClick, true );
    };
  } );

  return { ref, isShow, setIsShow };
};
